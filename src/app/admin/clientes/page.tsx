'use client';

import React from 'react';
import { 
  Building2, 
  ArrowLeft, 
  ChevronRight,
  PlusCircle,
  LayoutList,
  MapPinned
} from 'lucide-react';
import Link from 'next/link';

export default function ClientesHub() {
  const options = [
    {
      title: "Cadastrar Novo Cliente",
      description: "Adicione uma nova cidade/prefeitura e suas secretarias vinculadas.",
      icon: PlusCircle,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      link: "/admin/clientes/novo" 
    },
    {
      title: "Lista de Clientes",
      description: "Visualize e edite as secretarias e nomes das cidades cadastradas.",
      icon: LayoutList,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      link: "/admin/clientes/lista"
    }
  ];

  return (
    <div className="min-h-screen bg-[#09090b] text-white p-4 md:p-10 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Topo */}
        <div className="flex items-center justify-between mb-10">
          <Link href="/admin" className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors group">
            <div className="p-2 bg-zinc-900 rounded-xl group-hover:bg-zinc-800 transition-all">
              <ArrowLeft size={20} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest">Painel Admin</span>
          </Link>
          <MapPinned className="text-zinc-800" size={24} />
        </div>

        <header className="mb-12">
          <h1 className="text-4xl font-black italic uppercase tracking-tighter">
            Gestão de <span className="text-emerald-500">Clientes</span>
          </h1>
          <p className="text-zinc-500 mt-2 font-medium italic">Administre as prefeituras e órgãos atendidos pela GR.</p>
        </header>

        {/* Grid de Escolha */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {options.map((item, i) => (
            <Link 
              key={i} 
              href={item.link}
              className="group bg-zinc-900/40 border border-zinc-800 p-8 rounded-[2.5rem] flex flex-col justify-between hover:border-emerald-500/30 transition-all shadow-2xl relative overflow-hidden h-[320px]"
            >
              <div className="relative z-10">
                <div className={`w-16 h-16 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <item.icon size={32} />
                </div>
                <h2 className="text-2xl font-black uppercase italic tracking-tight mb-2 group-hover:text-white transition-colors">
                  {item.title}
                </h2>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="relative z-10 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 group-hover:text-emerald-500 transition-colors">
                Acessar Área <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>

              {/* Ícone de fundo (estético) */}
              <item.icon size={120} className="absolute -right-8 -bottom-8 text-white/[0.02] group-hover:text-emerald-500/[0.05] transition-colors" />
            </Link>
          ))}
        </div>

        {/* Rodapé informativo */}
        <div className="mt-12 flex items-center gap-4 p-6 bg-emerald-500/5 border border-emerald-500/10 rounded-3xl">
          <Building2 className="text-emerald-900" size={24} />
          <p className="text-[10px] text-emerald-700/70 font-bold uppercase tracking-tight leading-relaxed">
            Organize os clientes por cidade para facilitar a filtragem no dashboard principal.
          </p>
        </div>

      </div>
    </div>
  );
}