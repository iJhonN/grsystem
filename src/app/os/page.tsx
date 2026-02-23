'use client';

import React, { useState } from 'react';
import { 
  Car, ArrowLeft, Search, Edit2, Plus, 
  Calculator, CalendarDays, MapPin, Building2, Hash,
  Activity
} from 'lucide-react';
import Link from 'next/link';

export default function ListaOS() {
  const [filtroCidade, setFiltroCidade] = useState('Todas');
  const [filtroSecretaria, setFiltroSecretaria] = useState('Todas');
  const [mesAtivo, setMesAtivo] = useState('Fevereiro');
  const [semanaAtiva, setSemanaAtiva] = useState<number | 'Todas'>('Todas');

  // CORREÇÃO AQUI: Adicionado o campo "mes" em todas as simulações
  const [ordens] = useState([
    { id: '1024', placa: 'BRA2E19', modelo: 'Toyota Hilux', cliente: 'FEIRA GRANDE', secretaria: 'SAÚDE', status: 'PRODUÇÃO', cor: 'text-orange-500', bg: 'bg-orange-500/10', border: 'border-orange-500/20', semana: 1, mes: 'Fevereiro' },
    { id: '1025', placa: 'ABC-1234', modelo: 'VW Gol', cliente: 'LIMOEIRO', secretaria: 'EDUCAÇÃO', status: 'FINALIZADO', cor: 'text-emerald-500', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', semana: 2, mes: 'Fevereiro' },
    { id: '1026', placa: 'GHT-9090', modelo: 'Trator CAT', cliente: 'FEIRA GRANDE', secretaria: 'OBRAS', status: 'ENTRADA', cor: 'text-blue-500', bg: 'bg-blue-500/10', border: 'border-blue-500/20', semana: 1, mes: 'Janeiro' },
    { id: '1027', placa: 'XYZ-5678', modelo: 'Fiat Uno', cliente: 'TAQUARANA', secretaria: 'ADMINISTRAÇÃO', status: 'PRODUÇÃO', cor: 'text-orange-500', bg: 'bg-orange-500/10', border: 'border-orange-500/20', semana: 4, mes: 'Fevereiro' },
  ]);

  const cidades = ['Todas', 'FEIRA GRANDE', 'LIMOEIRO', 'LAGOA DA CANOA', 'TAQUARANA'];
  const secretarias = ['Todas', 'SAÚDE', 'EDUCAÇÃO', 'OBRAS', 'ADMINISTRAÇÃO'];
  const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'];

  // Lógica de filtragem limpa e sem erros do TypeScript
  const ordensFiltradas = ordens.filter(os => {
    const matchCidade = filtroCidade === 'Todas' || os.cliente === filtroCidade;
    const matchSecretaria = filtroSecretaria === 'Todas' || os.secretaria === filtroSecretaria;
    const matchSemana = semanaAtiva === 'Todas' || os.semana === semanaAtiva;
    const matchMes = os.mes === mesAtivo;
    
    return matchCidade && matchSecretaria && matchSemana && matchMes;
  });

  return (
    <div className="min-h-screen bg-[#09090b] text-white p-4 md:p-8 font-sans pb-24 md:pb-12 selection:bg-blue-500/30">
      
      <div className="w-full max-w-[1400px] mx-auto">
        
        {/* --- HEADER --- */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 mb-8 border-b border-zinc-800/80 pb-6">
          <div className="flex items-center gap-4">
            <Link href="/" className="p-3 md:p-4 bg-zinc-900/80 hover:bg-zinc-800 rounded-xl md:rounded-2xl transition-all text-zinc-400 border border-zinc-800/50 hover:border-zinc-700">
              <ArrowLeft size={20} className="md:w-6 md:h-6" />
            </Link>
            <div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-black italic uppercase tracking-tighter text-blue-500 leading-none">
                Fluxo de Trabalho
              </h1>
              <p className="text-zinc-500 text-[9px] md:text-xs font-bold uppercase tracking-[0.3em] mt-1.5">
                Gestão Cronológica GR
              </p>
            </div>
          </div>
          <Link href="/os/nova" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3.5 md:px-8 md:py-4 rounded-xl md:rounded-2xl font-black uppercase text-[10px] md:text-[11px] tracking-widest flex items-center justify-center gap-3 transition-all active:scale-95 shadow-lg shadow-blue-900/20">
            <Plus size={18} strokeWidth={3} /> Nova OS
          </Link>
        </header>

        {/* --- FILTROS DE TEMPO --- */}
        <div className="space-y-4 md:space-y-6 mb-8">
          
          <div className="flex items-center gap-3 md:gap-4 overflow-x-auto pb-2 custom-scrollbar">
            <CalendarDays className="text-zinc-700 shrink-0 hidden md:block" size={20} />
            {meses.map(mes => (
              <button 
                key={mes}
                onClick={() => setMesAtivo(mes)}
                className={`px-5 py-2.5 md:px-6 md:py-2 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all border shrink-0 ${mesAtivo === mes ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-900/20' : 'bg-zinc-900/50 border-zinc-800 text-zinc-500 hover:text-white'}`}
              >
                {mes}
              </button>
            ))}
          </div>

          <div className="space-y-2">
            <button 
              onClick={() => setSemanaAtiva('Todas')}
              className={`w-full py-3.5 md:py-4 rounded-xl md:rounded-2xl border-2 transition-all flex items-center justify-center gap-2 ${semanaAtiva === 'Todas' ? 'border-blue-500 bg-blue-500/10 text-blue-500 shadow-lg shadow-blue-900/10' : 'border-zinc-900 bg-zinc-950 text-zinc-500 hover:border-zinc-800 hover:text-white'}`}
            >
              <Activity size={16} />
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest">Ver Todas as Semanas</span>
            </button>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {[1, 2, 3, 4].map(sem => (
                <button 
                  key={sem}
                  onClick={() => setSemanaAtiva(sem)}
                  className={`py-3 md:py-4 rounded-xl md:rounded-2xl border-2 transition-all flex flex-col items-center justify-center gap-0.5 md:gap-1 ${semanaAtiva === sem ? 'border-blue-500 bg-blue-500/10 text-white shadow-lg shadow-blue-900/10' : 'border-zinc-900 bg-zinc-950 text-zinc-600 hover:border-zinc-800'}`}
                >
                  <span className="text-[8px] md:text-[9px] font-black uppercase opacity-50">Semana</span>
                  <span className="text-lg md:text-xl font-black italic">{sem}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* --- FILTROS DE CLIENTE --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-8">
          {[
            { icon: MapPin, val: filtroCidade, set: setFiltroCidade, opts: cidades, label: 'Todas as Cidades' },
            { icon: Building2, val: filtroSecretaria, set: setFiltroSecretaria, opts: secretarias, label: 'Todas as Secretarias' }
          ].map((f, i) => (
            <div key={i} className="relative">
              <f.icon className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 pointer-events-none" size={16} />
              <select 
                value={f.val}
                onChange={(e) => f.set(e.target.value)}
                className="w-full bg-zinc-900/50 border border-zinc-800/80 p-3.5 md:p-4 pl-10 md:pl-12 rounded-xl md:rounded-2xl outline-none focus:border-blue-500/50 appearance-none font-bold text-[10px] md:text-xs uppercase cursor-pointer"
              >
                {f.opts.map(opt => <option key={opt} value={opt}>{opt === 'Todas' ? f.label : opt}</option>)}
              </select>
            </div>
          ))}

          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={16} />
            <input type="text" placeholder="PLACA OU MODELO..." className="w-full bg-zinc-900/50 border border-zinc-800/80 p-3.5 md:p-4 pl-10 md:pl-12 rounded-xl md:rounded-2xl outline-none focus:border-blue-500/50 font-bold text-[10px] md:text-xs uppercase placeholder:text-zinc-700" />
          </div>
        </div>

        {/* --- ÁREA DE DADOS --- */}
        
        {/* 📱 VISÃO MOBILE: CARDS INDIVIDUAIS */}
        <div className="md:hidden space-y-4">
          {ordensFiltradas.length > 0 ? ordensFiltradas.map((os) => (
            <div key={os.id} className="bg-zinc-900/40 border border-zinc-800/80 p-4 rounded-2xl flex flex-col gap-4 relative overflow-hidden">
              <div className={`absolute left-0 top-0 bottom-0 w-1 ${os.bg}`}></div>
              
              <div className="flex justify-between items-start pl-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-zinc-950 rounded-xl flex items-center justify-center text-blue-500 border border-zinc-800">
                    <Car size={20} />
                  </div>
                  <div>
                    <p className="font-black text-zinc-100 uppercase text-lg tracking-tighter leading-none mb-1">{os.placa}</p>
                    <p className="text-[9px] text-zinc-500 font-bold uppercase">{os.modelo}</p>
                  </div>
                </div>
                <span className={`text-[8px] font-black uppercase px-2 py-1 rounded-md bg-zinc-950 border ${os.border} ${os.cor}`}>
                  {os.status}
                </span>
              </div>

              <div className="bg-zinc-950/50 p-3 rounded-xl border border-zinc-800/50 pl-4">
                <p className="text-[10px] font-black text-zinc-300 uppercase tracking-tight mb-1">{os.cliente}</p>
                <div className="flex justify-between items-center">
                   <p className="text-[8px] text-zinc-500 font-bold uppercase flex items-center gap-1"><Building2 size={10}/> {os.secretaria}</p>
                   <p className="text-[8px] text-zinc-600 font-bold uppercase">Semana {os.semana}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1 pl-2">
                <Link href={`/os/${os.id}/financeiro`} className="flex-1">
                  <button className="w-full py-3 bg-zinc-950 text-yellow-500 hover:bg-yellow-500/10 rounded-xl border border-zinc-800 flex items-center justify-center gap-2 transition-all">
                    <Calculator size={14} /> <span className="text-[9px] font-black uppercase">Precificar</span>
                  </button>
                </Link>
                <Link href={`/os/${os.id}`} className="flex-1">
                  <button className="w-full py-3 bg-zinc-950 text-zinc-400 hover:text-white rounded-xl border border-zinc-800 flex items-center justify-center gap-2 transition-all">
                    <Edit2 size={14} /> <span className="text-[9px] font-black uppercase">Editar</span>
                  </button>
                </Link>
              </div>
            </div>
          )) : (
            <div className="p-12 text-center bg-zinc-900/20 border border-zinc-800/50 rounded-2xl">
              <Hash className="mx-auto text-zinc-800 mb-3" size={32} />
              <p className="text-zinc-500 font-black uppercase text-[10px] tracking-widest">Nenhuma OS encontrada.</p>
            </div>
          )}
        </div>

        {/* 💻 VISÃO DESKTOP: TABELA TRADICIONAL */}
        <div className="hidden md:block bg-zinc-900/30 border border-zinc-800/80 rounded-[2rem] overflow-hidden shadow-2xl backdrop-blur-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-zinc-800/50 bg-zinc-900/40 text-[10px] font-black uppercase text-zinc-500 tracking-widest">
                <th className="p-6 pl-8">Identificação</th>
                <th className="p-6">Cliente / Órgão</th>
                <th className="p-6">Status</th>
                <th className="p-6 text-right pr-8">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/30">
              {ordensFiltradas.length > 0 ? ordensFiltradas.map((os) => (
                <tr key={os.id} className="hover:bg-zinc-800/20 transition-all group">
                  <td className="p-6 pl-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-zinc-950 rounded-2xl flex items-center justify-center text-blue-500 border border-zinc-800 group-hover:border-blue-500/50 transition-all shadow-lg">
                        <Car size={22} />
                      </div>
                      <div>
                        <p className="font-black text-zinc-100 uppercase text-lg tracking-tighter leading-none mb-1 group-hover:text-blue-400 transition-colors">{os.placa}</p>
                        <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-wider">{os.modelo}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-6">
                    <p className="text-xs font-black text-zinc-300 uppercase tracking-tight mb-1">{os.cliente}</p>
                    <p className="text-[10px] text-zinc-600 font-bold uppercase flex items-center gap-1.5"><Building2 size={12}/> {os.secretaria}</p>
                  </td>
                  <td className="p-6">
                    <span className={`text-[9px] font-black uppercase px-3 py-1.5 rounded-lg bg-zinc-950 border ${os.border} ${os.cor} tracking-widest`}>
                      {os.status}
                    </span>
                  </td>
                  <td className="p-6 text-right pr-8">
                    <div className="flex items-center justify-end gap-2">
                      <Link href={`/os/${os.id}/financeiro`}>
                        <button className="flex items-center gap-2 p-3 bg-zinc-950 text-yellow-500 hover:bg-yellow-500 hover:text-black rounded-xl transition-all border border-zinc-800 hover:border-yellow-500 shadow-lg" title="Financeiro">
                          <Calculator size={16} strokeWidth={2.5} />
                          <span className="text-[9px] font-black uppercase pr-1 hidden lg:block">Precificar</span>
                        </button>
                      </Link>
                      <Link href={`/os/${os.id}`}>
                        <button className="p-3 bg-zinc-950 text-zinc-500 hover:text-white hover:bg-zinc-800 rounded-xl transition-all border border-zinc-800" title="Editar">
                          <Edit2 size={16} />
                        </button>
                      </Link>
                    </div>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan={4} className="p-24 text-center">
                    <Hash className="mx-auto text-zinc-800 mb-4" size={40} />
                    <p className="text-zinc-500 font-black uppercase text-xs tracking-widest">Nenhuma OS encontrada para este período</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}