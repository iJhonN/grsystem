'use client';

import React, { useState } from 'react';
import { 
  ArrowLeft, BarChart3, DollarSign, MapPin, Building2, 
  CalendarDays, TrendingUp, Activity, Wallet, Download
} from 'lucide-react';
import Link from 'next/link';

export default function DashboardFinanceiro() {
  const [filtroMes, setFiltroMes] = useState('Fevereiro');
  const [filtroSemana, setFiltroSemana] = useState('Todas');
  const [filtroCidade, setFiltroCidade] = useState('Todas');
  const [filtroSecretaria, setFiltroSecretaria] = useState('Todas');

  const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril'];
  const semanas = ['Todas', '1', '2', '3', '4'];
  const cidades = ['Todas', 'FEIRA GRANDE', 'LIMOEIRO', 'LAGOA DA CANOA'];
  const secretarias = ['Todas', 'SAÚDE', 'EDUCAÇÃO', 'OBRAS'];

  const dados = [
    { id: 1, cidade: 'FEIRA GRANDE', secretaria: 'SAÚDE', mes: 'Fevereiro', semana: '1', valor: 15400 },
    { id: 2, cidade: 'FEIRA GRANDE', secretaria: 'OBRAS', mes: 'Fevereiro', semana: '2', valor: 8200 },
    { id: 3, cidade: 'LIMOEIRO', secretaria: 'EDUCAÇÃO', mes: 'Fevereiro', semana: '1', valor: 12500 },
    { id: 4, cidade: 'LIMOEIRO', secretaria: 'SAÚDE', mes: 'Fevereiro', semana: '3', valor: 5400 },
    { id: 5, cidade: 'LAGOA DA CANOA', secretaria: 'OBRAS', mes: 'Fevereiro', semana: '4', valor: 21000 },
    { id: 6, cidade: 'FEIRA GRANDE', secretaria: 'SAÚDE', mes: 'Fevereiro', semana: '4', valor: 9300 },
  ];

  const dadosFiltrados = dados.filter(d => {
    return (d.mes === filtroMes) &&
           (filtroSemana === 'Todas' || d.semana === filtroSemana) &&
           (filtroCidade === 'Todas' || d.cidade === filtroCidade) &&
           (filtroSecretaria === 'Todas' || d.secretaria === filtroSecretaria);
  });

  const totalFiltrado = dadosFiltrados.reduce((acc, curr) => acc + curr.valor, 0);
  
  const chartData = [1, 2, 3, 4].map(sem => {
    const totalSemana = dadosFiltrados
      .filter(d => d.semana === sem.toString())
      .reduce((acc, curr) => acc + curr.valor, 0);
    return { semana: sem, valor: totalSemana };
  });

  const maxChartValue = Math.max(...chartData.map(d => d.valor), 1);

  return (
    <div className="min-h-screen bg-[#09090b] text-white p-4 md:p-8 font-sans pb-24 md:pb-12 selection:bg-emerald-500/30">
      
      {/* Max-w-1400px garante que ocupe bem a tela sem ficar esticado */}
      <div className="w-full max-w-[1400px] mx-auto">
        
        {/* --- HEADER --- */}
        <header className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b border-zinc-800/80 pb-6 gap-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="p-3 bg-zinc-900/80 hover:bg-zinc-800 rounded-2xl transition-all text-zinc-400 border border-zinc-800/50 hover:border-zinc-700">
              <ArrowLeft size={20} />
            </Link>
            <div>
              <h1 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500 leading-none">
                Inteligência Financeira
              </h1>
              <p className="text-zinc-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mt-1.5">
                Faturamento Global GR Gestão
              </p>
            </div>
          </div>
          
          <button className="flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-emerald-500 border border-zinc-800 hover:border-emerald-500/30 px-5 py-3.5 rounded-2xl transition-all font-black text-[10px] uppercase tracking-widest active:scale-95">
            <Download size={16} /> Exportar Relatório
          </button>
        </header>

        {/* --- FILTROS --- */}
        <div className="bg-zinc-900/30 backdrop-blur-md border border-zinc-800/80 p-5 md:p-6 rounded-[2rem] mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 shadow-xl">
          {[
            { label: 'Mês', icon: CalendarDays, state: filtroMes, setter: setFiltroMes, opts: meses },
            { label: 'Semana', icon: Activity, state: filtroSemana, setter: setFiltroSemana, opts: semanas, format: (s:string) => s === 'Todas' ? 'Todas as Semanas' : `Semana ${s}` },
            { label: 'Cidade', icon: MapPin, state: filtroCidade, setter: setFiltroCidade, opts: cidades },
            { label: 'Secretaria', icon: Building2, state: filtroSecretaria, setter: setFiltroSecretaria, opts: secretarias }
          ].map((f, i) => (
            <div key={i} className="space-y-1.5">
              <label className="text-[9px] md:text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-1">{f.label}</label>
              <div className="relative group">
                <f.icon className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 group-hover:text-emerald-500 transition-colors pointer-events-none" size={16} />
                <select 
                  value={f.state} 
                  onChange={(e) => f.setter(e.target.value)} 
                  className="w-full bg-zinc-950/50 border border-zinc-800/80 hover:border-zinc-700 p-3.5 pl-[2.75rem] rounded-xl outline-none focus:border-emerald-500 focus:bg-zinc-900 transition-all text-[11px] font-bold uppercase cursor-pointer appearance-none"
                >
                  {f.opts.map(opt => <option key={opt} value={opt}>{f.format ? f.format(opt) : opt}</option>)}
                </select>
              </div>
            </div>
          ))}
        </div>

        {/* --- CARDS DE KPIs --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-6 lg:mb-8">
          
          <div className="bg-gradient-to-br from-emerald-900/40 to-zinc-900/40 border border-emerald-500/30 p-6 md:p-8 rounded-[2rem] relative overflow-hidden shadow-[0_0_40px_rgba(52,211,153,0.05)]">
            <div className="absolute -right-4 -bottom-4 text-emerald-500/10 rotate-12 pointer-events-none">
              <DollarSign size={120} />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-emerald-400 mb-3 md:mb-4">
                <Wallet size={18} />
                <span className="text-[10px] font-black uppercase tracking-widest">Receita Filtrada</span>
              </div>
              <p className="text-3xl md:text-5xl font-black italic tracking-tighter text-white drop-shadow-lg leading-none">
                {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalFiltrado)}
              </p>
            </div>
          </div>

          <div className="bg-zinc-900/40 border border-zinc-800/80 p-6 md:p-8 rounded-[2rem] hover:border-zinc-700 transition-colors">
            <div className="flex items-center gap-2 text-zinc-400 mb-3 md:mb-4">
              <BarChart3 size={18} />
              <span className="text-[10px] font-black uppercase tracking-widest">Volume de OS</span>
            </div>
            <p className="text-3xl md:text-5xl font-black italic tracking-tighter text-zinc-100 drop-shadow-lg leading-none">
              {dadosFiltrados.length} <span className="text-lg md:text-2xl text-zinc-600 not-italic">ordens</span>
            </p>
          </div>

          <div className="bg-zinc-900/40 border border-zinc-800/80 p-6 md:p-8 rounded-[2rem] hover:border-zinc-700 transition-colors">
            <div className="flex items-center gap-2 text-blue-400 mb-3 md:mb-4">
              <TrendingUp size={18} />
              <span className="text-[10px] font-black uppercase tracking-widest">Ticket Médio</span>
            </div>
            <p className="text-3xl md:text-5xl font-black italic tracking-tighter text-blue-400 drop-shadow-lg leading-none">
              {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(dadosFiltrados.length > 0 ? totalFiltrado / dadosFiltrados.length : 0)}
            </p>
          </div>

        </div>

        {/* --- GRÁFICOS E TABELA --- */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-8">
          
          {/* GRÁFICO DE BARRAS */}
          <div className="xl:col-span-8 bg-zinc-900/30 border border-zinc-800/80 p-6 md:p-8 rounded-[2rem] shadow-2xl relative flex flex-col">
            <h3 className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-6 flex items-center gap-2">
              <Activity size={16} className="text-emerald-500" />
              Projeção Semanal ({filtroMes})
            </h3>
            
            <div className="absolute inset-0 top-20 bottom-12 left-8 right-8 flex flex-col justify-between pointer-events-none opacity-20 z-0">
               <div className="border-b border-dashed border-zinc-600 w-full h-0"></div>
               <div className="border-b border-dashed border-zinc-600 w-full h-0"></div>
               <div className="border-b border-dashed border-zinc-600 w-full h-0"></div>
            </div>

            <div className="flex-1 min-h-[220px] flex items-end justify-between gap-4 md:gap-8 lg:gap-12 mt-4 relative z-10">
              {chartData.map((d) => {
                const heightPercentage = maxChartValue > 0 ? (d.valor / maxChartValue) * 100 : 0;
                
                return (
                  <div key={d.semana} className="flex-1 flex flex-col items-center gap-2 group h-full justify-end">
                    <div className="opacity-0 group-hover:opacity-100 transition-all -translate-y-1 text-[10px] font-black text-white bg-emerald-600 px-3 py-1.5 rounded-lg shadow-lg shadow-emerald-900/50 whitespace-nowrap z-20">
                      {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(d.valor)}
                    </div>
                    
                    <div className="w-full max-w-[60px] md:max-w-[80px] bg-zinc-950/50 rounded-t-xl relative overflow-hidden flex justify-end flex-col border-b border-zinc-800" style={{ height: '100%' }}>
                      <div 
                        className="w-full bg-gradient-to-t from-emerald-700 to-emerald-400 rounded-t-xl transition-all duration-700 ease-out border-t border-emerald-300 shadow-[0_0_20px_rgba(52,211,153,0.4)]"
                        style={{ height: `${heightPercentage}%` }}
                      ></div>
                    </div>
                    
                    <span className="text-[10px] font-black uppercase text-zinc-500 tracking-widest mt-1">
                      Sem {d.semana}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* TABELA DE DETALHAMENTO */}
          <div className="xl:col-span-4 bg-zinc-900/30 border border-zinc-800/80 p-6 md:p-8 rounded-[2rem] shadow-2xl flex flex-col">
            <h3 className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-6">Detalhamento de OS</h3>
            
            <div className="space-y-3 flex-1 overflow-y-auto pr-2 custom-scrollbar" style={{ maxHeight: '280px' }}>
              {dadosFiltrados.length > 0 ? dadosFiltrados.map((d) => (
                <div key={d.id} className="bg-zinc-950/80 border border-zinc-800/50 hover:border-emerald-500/30 transition-colors p-4 rounded-2xl group">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-zinc-600 group-hover:text-emerald-500 transition-colors" />
                      <p className="text-[11px] font-black uppercase text-zinc-200 tracking-tight">{d.cidade}</p>
                    </div>
                    <p className="text-sm font-black text-emerald-400 tracking-tighter">
                      {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(d.valor)}
                    </p>
                  </div>
                  <div className="flex justify-between items-center bg-zinc-900/50 p-2.5 rounded-xl border border-zinc-800/50">
                    <span className="flex items-center gap-1.5 text-[9px] font-bold uppercase text-zinc-500"><Building2 size={12}/> {d.secretaria}</span>
                    <span className="flex items-center gap-1.5 text-[9px] font-bold uppercase text-zinc-500"><CalendarDays size={12}/> SEM {d.semana}</span>
                  </div>
                </div>
              )) : (
                <div className="text-center p-8 bg-zinc-950/50 rounded-2xl border border-dashed border-zinc-800 h-full flex flex-col items-center justify-center min-h-[150px]">
                  <Activity className="mx-auto text-zinc-700 mb-3" size={32} />
                  <p className="text-zinc-500 font-bold uppercase text-[9px] tracking-widest leading-relaxed">Nenhuma movimentação para o filtro.</p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}