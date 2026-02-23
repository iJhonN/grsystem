'use client';

import React, { useState } from 'react';
import { 
  Car, ArrowLeft, Search, Edit2, Trash2, Plus, 
  Calculator, Filter, CalendarDays, MapPin, Building2,
  ChevronLeft, ChevronRight, Hash
} from 'lucide-react';
import Link from 'next/link';

export default function ListaOS() {
  const [filtroCidade, setFiltroCidade] = useState('Todas');
  const [filtroSecretaria, setFiltroSecretaria] = useState('Todas');
  const [mesAtivo, setMesAtivo] = useState('Fevereiro');
  const [semanaAtiva, setSemanaAtiva] = useState(1);

  // Simulação de dados com data para o filtro de semana
  const [ordens] = useState([
    { id: '1024', placa: 'BRA2E19', modelo: 'Toyota Hilux', cliente: 'FEIRA GRANDE', secretaria: 'SAÚDE', status: 'PRODUÇÃO', cor: 'text-orange-500', semana: 1 },
    { id: '1025', placa: 'ABC-1234', modelo: 'VW Gol', cliente: 'LIMOEIRO', secretaria: 'EDUCAÇÃO', status: 'FINALIZADO', cor: 'text-emerald-500', semana: 2 },
    { id: '1026', placa: 'GHT-9090', modelo: 'Trator CAT', cliente: 'FEIRA GRANDE', secretaria: 'OBRAS', status: 'ENTRADA', cor: 'text-blue-500', semana: 1 },
  ]);

  // Filtros de Cidades e Secretarias (isso viria do seu banco futuramente)
  const cidades = ['Todas', 'FEIRA GRANDE', 'LIMOEIRO', 'LAGOA DA CANOA', 'TAQUARANA'];
  const secretarias = ['Todas', 'SAÚDE', 'EDUCAÇÃO', 'OBRAS', 'ADMINISTRAÇÃO'];
  const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'];

  // Lógica de filtragem
  const ordensFiltradas = ordens.filter(os => {
    const matchCidade = filtroCidade === 'Todas' || os.cliente === filtroCidade;
    const matchSecretaria = filtroSecretaria === 'Todas' || os.secretaria === filtroSecretaria;
    const matchSemana = os.semana === semanaAtiva;
    return matchCidade && matchSecretaria && matchSemana;
  });

  return (
    <div className="min-h-screen bg-[#09090b] text-white p-4 md:p-10 font-sans pb-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 border-b border-zinc-800/50 pb-8">
          <div className="flex items-center gap-4">
            <Link href="/" className="p-3 bg-zinc-900 hover:bg-zinc-800 rounded-2xl transition-all text-zinc-400">
              <ArrowLeft size={20} />
            </Link>
            <div>
              <h1 className="text-3xl font-black italic uppercase tracking-tighter text-blue-500">Fluxo de Trabalho</h1>
              <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.3em] mt-1">Gestão Cronológica GR</p>
            </div>
          </div>
          <Link href="/os/nova" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-black uppercase text-[11px] tracking-widest flex items-center gap-3 transition-all active:scale-95 shadow-lg shadow-blue-900/20">
            <Plus size={18} strokeWidth={3} /> Nova OS
          </Link>
        </header>

        {/* --- FILTROS DE TEMPO (Mês e Semana) --- */}
        <div className="space-y-6 mb-8">
          {/* Seletor de Mês */}
          <div className="flex items-center gap-4 overflow-x-auto pb-2 custom-scrollbar">
            <CalendarDays className="text-zinc-700 shrink-0" size={20} />
            {meses.map(mes => (
              <button 
                key={mes}
                onClick={() => setMesAtivo(mes)}
                className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border ${mesAtivo === mes ? 'bg-blue-600 border-blue-500 text-white' : 'bg-zinc-900/50 border-zinc-800 text-zinc-500 hover:text-white'}`}
              >
                {mes}
              </button>
            ))}
          </div>

          {/* Seletor de Semana */}
          <div className="grid grid-cols-4 gap-2">
            {[1, 2, 3, 4].map(sem => (
              <button 
                key={sem}
                onClick={() => setSemanaAtiva(sem)}
                className={`py-4 rounded-2xl border-2 transition-all flex flex-col items-center justify-center gap-1 ${semanaAtiva === sem ? 'border-blue-500 bg-blue-500/10' : 'border-zinc-900 bg-zinc-950 text-zinc-600'}`}
              >
                <span className="text-[9px] font-black uppercase opacity-50">Semana</span>
                <span className="text-xl font-black italic">{sem}</span>
              </button>
            ))}
          </div>
        </div>

        {/* --- FILTROS DE CLIENTE (Cidade e Secretaria) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
            <select 
              value={filtroCidade}
              onChange={(e) => setFiltroCidade(e.target.value)}
              className="w-full bg-zinc-900/50 border border-zinc-800 p-4 pl-12 rounded-2xl outline-none focus:border-blue-500/50 appearance-none font-bold text-xs uppercase"
            >
              {cidades.map(c => <option key={c} value={c}>{c === 'Todas' ? 'Todas as Cidades' : c}</option>)}
            </select>
          </div>

          <div className="relative">
            <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
            <select 
              value={filtroSecretaria}
              onChange={(e) => setFiltroSecretaria(e.target.value)}
              className="w-full bg-zinc-900/50 border border-zinc-800 p-4 pl-12 rounded-2xl outline-none focus:border-blue-500/50 appearance-none font-bold text-xs uppercase"
            >
              {secretarias.map(s => <option key={s} value={s}>{s === 'Todas' ? 'Todas as Secretarias' : s}</option>)}
            </select>
          </div>

          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
            <input type="text" placeholder="PLACA OU MODELO..." className="w-full bg-zinc-900/50 border border-zinc-800 p-4 pl-12 rounded-2xl outline-none focus:border-blue-500/50 font-bold text-xs uppercase" />
          </div>
        </div>

        {/* Tabela de OS */}
        <div className="bg-zinc-900/20 border border-zinc-800 rounded-[2.5rem] overflow-hidden shadow-2xl backdrop-blur-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-800/50 bg-zinc-900/40 text-[10px] font-black uppercase text-zinc-600 tracking-widest">
                  <th className="p-6">Identificação</th>
                  <th className="p-6">Cliente / Órgão</th>
                  <th className="p-6">Status</th>
                  <th className="p-6 text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/30">
                {ordensFiltradas.length > 0 ? ordensFiltradas.map((os) => (
                  <tr key={os.id} className="hover:bg-zinc-800/20 transition-all group">
                    <td className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-zinc-950 rounded-xl flex items-center justify-center text-blue-500 border border-zinc-800 group-hover:border-blue-500/50 transition-all">
                          <Car size={20} />
                        </div>
                        <div>
                          <p className="font-black text-zinc-100 uppercase text-md tracking-tighter leading-none mb-1">{os.placa}</p>
                          <p className="text-[9px] text-zinc-600 font-bold uppercase">{os.modelo}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-6">
                      <p className="text-[11px] font-black text-zinc-300 uppercase tracking-tight">{os.cliente}</p>
                      <p className="text-[9px] text-zinc-600 font-bold uppercase">{os.secretaria}</p>
                    </td>
                    <td className="p-6">
                      <span className={`text-[8px] font-black uppercase px-2 py-1 rounded-md bg-zinc-950 border border-zinc-800 ${os.cor}`}>
                        {os.status}
                      </span>
                    </td>
                    <td className="p-6 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link href={`/os/${os.id}/financeiro`}>
                          <button className="p-3 bg-zinc-950 text-yellow-500 hover:bg-yellow-500 hover:text-black rounded-xl transition-all border border-zinc-800" title="Financeiro">
                            <Calculator size={16} />
                          </button>
                        </Link>
                        <Link href={`/os/${os.id}`}>
                          <button className="p-3 bg-zinc-950 text-zinc-500 hover:text-white rounded-xl transition-all border border-zinc-800">
                            <Edit2 size={16} />
                          </button>
                        </Link>
                      </div>
                    </td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan={4} className="p-20 text-center">
                      <Hash className="mx-auto text-zinc-800 mb-4" size={48} />
                      <p className="text-zinc-600 font-black uppercase text-xs tracking-widest">Nenhuma OS encontrada para este período</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}