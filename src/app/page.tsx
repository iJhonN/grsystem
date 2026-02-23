'use client';

import React from 'react';
import { 
  Car, Wrench, Clock, CheckCircle2, AlertTriangle, 
  Plus, ArrowUpRight, LayoutDashboard, PackageSearch, 
  Settings2, DollarSign
} from 'lucide-react';
import Link from 'next/link';

export default function Dashboard() {
  const stats = [
    { label: 'Produção', value: '12', icon: Wrench, color: 'text-orange-500', bg: 'bg-orange-500/10' },
    { label: 'Peças', value: '05', icon: AlertTriangle, color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
    { label: 'Concluído', value: '48', icon: CheckCircle2, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
    { label: 'Entradas', value: '03', icon: Clock, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  ];

  return (
    <div className="min-h-screen bg-[#09090b] text-white pb-24 md:pb-10 font-sans selection:bg-blue-500/30">
      <div className="max-w-6xl mx-auto p-4 md:p-10">
        
        <header className="flex items-center justify-between mb-8 md:mb-12 border-b border-zinc-800/50 pb-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-black italic text-zinc-100 uppercase tracking-tighter leading-none">
              GR <span className="text-blue-500">GESTÃO</span>
            </h1>
            <p className="text-zinc-500 text-[10px] md:text-sm font-bold uppercase tracking-widest mt-1">Wolf Finance Core</p>
          </div>
          
          <Link href="/os/nova" className="bg-blue-600 active:scale-90 text-white p-4 rounded-2xl transition-all shadow-xl shadow-blue-900/20 md:flex items-center gap-3">
            <Plus size={24} strokeWidth={3} />
          </Link>
        </header>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-8">
          {stats.map((item, i) => (
            <div key={i} className="bg-zinc-900/40 border border-zinc-800 p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem]">
              <div className={`w-10 h-10 md:w-12 md:h-12 ${item.bg} ${item.color} rounded-xl md:rounded-2xl flex items-center justify-center mb-3`}>
                <item.icon size={20} />
              </div>
              <p className="text-2xl md:text-4xl font-black italic tracking-tighter text-zinc-100 leading-none">{item.value}</p>
              <p className="text-zinc-500 text-[9px] md:text-[10px] font-black uppercase tracking-widest mt-1">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          
          <Link href="/os" className="group relative overflow-hidden bg-zinc-900/80 border border-zinc-800 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] flex items-center md:flex-col md:items-start justify-between md:justify-end h-24 md:h-64 active:bg-zinc-800 transition-all">
            <div className="p-4 bg-blue-500/10 rounded-2xl text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all z-10">
              <Car size={28} />
            </div>
            <div className="flex-1 px-4 md:px-0 md:mt-4 z-10">
              <h2 className="text-lg md:text-2xl font-black uppercase italic tracking-tight">Ver Ordens</h2>
              <p className="text-zinc-500 text-[10px] hidden md:block">Gestão de fluxo e histórico</p>
            </div>
            <ArrowUpRight className="text-zinc-700 md:absolute md:top-8 md:right-8" size={20} />
          </Link>

          <Link href="/pecas/solicitar" className="group relative overflow-hidden bg-zinc-900/80 border border-zinc-800 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] flex items-center md:flex-col md:items-start justify-between md:justify-end h-24 md:h-64 active:bg-zinc-800 transition-all">
            <div className="p-4 bg-yellow-500/10 rounded-2xl text-yellow-500 group-hover:bg-yellow-600 group-hover:text-white transition-all z-10">
              <PackageSearch size={28} />
            </div>
            <div className="flex-1 px-4 md:px-0 md:mt-4 z-10">
              <h2 className="text-lg md:text-2xl font-black uppercase italic tracking-tight">Pedir Peças</h2>
              <p className="text-zinc-500 text-[10px] hidden md:block">Requisição ao estoque</p>
            </div>
            <ArrowUpRight className="text-zinc-700 md:absolute md:top-8 md:right-8" size={20} />
          </Link>

          {/* O LINK DO FINANCEIRO ESTÁ AQUI */}
          <Link href="/financeiro" className="group relative overflow-hidden bg-zinc-900/80 border border-zinc-800 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] flex items-center md:flex-col md:items-start justify-between md:justify-end h-24 md:h-64 active:bg-zinc-800 transition-all">
            <div className="p-4 bg-emerald-500/10 rounded-2xl text-emerald-500 group-hover:bg-emerald-600 group-hover:text-white transition-all z-10">
              <DollarSign size={28} />
            </div>
            <div className="flex-1 px-4 md:px-0 md:mt-4 z-10">
              <h2 className="text-lg md:text-2xl font-black uppercase italic tracking-tight">Financeiro</h2>
              <p className="text-zinc-500 text-[10px] hidden md:block">Faturamento e Gráficos</p>
            </div>
            <ArrowUpRight className="text-zinc-700 md:absolute md:top-8 md:right-8" size={20} />
          </Link>

          <Link href="/admin" className="group relative overflow-hidden bg-zinc-900/80 border border-zinc-800 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] flex items-center md:flex-col md:items-start justify-between md:justify-end h-24 md:h-64 active:bg-zinc-800 transition-all">
            <div className="p-4 bg-purple-500/10 rounded-2xl text-purple-500 group-hover:bg-purple-600 group-hover:text-white transition-all z-10">
              <Settings2 size={28} />
            </div>
            <div className="flex-1 px-4 md:px-0 md:mt-4 z-10">
              <h2 className="text-lg md:text-2xl font-black uppercase italic tracking-tight">Painel Admin</h2>
              <p className="text-zinc-500 text-[10px] hidden md:block">Equipe e Configurações</p>
            </div>
            <ArrowUpRight className="text-zinc-700 md:absolute md:top-8 md:right-8" size={20} />
          </Link>

        </div>
      </div>

      <nav className="fixed bottom-0 left-0 right-0 bg-zinc-950/80 backdrop-blur-lg border-t border-zinc-800 px-6 py-4 flex items-center justify-between md:hidden z-50">
        <Link href="/" className="flex flex-col items-center gap-1 text-blue-500">
          <LayoutDashboard size={20} />
          <span className="text-[8px] font-black uppercase tracking-tighter">Início</span>
        </Link>
        <Link href="/os" className="flex flex-col items-center gap-1 text-zinc-500">
          <Car size={20} />
          <span className="text-[8px] font-black uppercase tracking-tighter">Ordens</span>
        </Link>
        <Link href="/os/nova" className="flex flex-col items-center justify-center -mt-12 bg-blue-600 w-14 h-14 rounded-full border-4 border-[#09090b] shadow-lg shadow-blue-900/40 text-white">
          <Plus size={28} strokeWidth={3} />
        </Link>
        <Link href="/pecas/solicitar" className="flex flex-col items-center gap-1 text-zinc-500">
          <PackageSearch size={20} />
          <span className="text-[8px] font-black uppercase tracking-tighter">Peças</span>
        </Link>
        <Link href="/financeiro" className="flex flex-col items-center gap-1 text-zinc-500">
          <DollarSign size={20} />
          <span className="text-[8px] font-black uppercase tracking-tighter">Finanças</span>
        </Link>
      </nav>
    </div>
  );
}