'use client';

import React, { useState } from 'react';
import { 
  ArrowLeft, Package, CheckCircle2, Clock, 
  AlertCircle, Search, Filter, ChevronRight,
  User, ClipboardList, Box, Truck
} from 'lucide-react';
import Link from 'next/link';

export default function SolicitacoesEstoque() {
  const [filtroStatus, setFiltroStatus] = useState('Pendentes');

  // Dados simulados de pedidos feitos pelos mecânicos
  const [pedidos] = useState([
    { 
      id: 'RQ-5021', 
      os: '1024', 
      placa: 'BRA2E19', 
      solicitante: 'Matheus Oliveira', 
      data: '21/02/2026', 
      hora: '09:30',
      status: 'Pendente',
      itens: [
        { nome: 'Filtro de Óleo Hilux', qtd: 1 },
        { nome: 'Óleo 5W30 Sintético', qtd: 7 }
      ]
    },
    { 
      id: 'RQ-5022', 
      os: '1025', 
      placa: 'ABC-1234', 
      solicitante: 'João Silva', 
      data: '21/02/2026', 
      hora: '10:15',
      status: 'Em Separação',
      itens: [
        { nome: 'Pastilha de Freio Dianteira', qtd: 1 },
        { nome: 'Disco de Freio', qtd: 2 }
      ]
    }
  ]);

  const filtrados = pedidos.filter(p => filtroStatus === 'Todos' || p.status === filtroStatus);

  return (
    <div className="min-h-screen bg-[#09090b] text-white p-4 md:p-8 lg:p-12 font-sans pb-24 selection:bg-orange-500/30">
      <div className="w-full max-w-[1400px] mx-auto">
        
        {/* Header - Identidade do Almoxarifado (Laranja/Âmbar) */}
        <header className="flex flex-col md:flex-row md:items-end justify-between mb-10 border-b border-zinc-800/80 pb-6 gap-6">
          <div className="flex items-center gap-5">
            <Link href="/" className="p-3.5 bg-zinc-900/80 hover:bg-zinc-800 rounded-2xl transition-all text-zinc-400 border border-zinc-800/50">
              <ArrowLeft size={20} />
            </Link>
            <div>
              <h1 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-orange-500 flex items-center gap-3">
                <Box size={32} className="md:w-10 md:h-10" /> Almoxarifado
              </h1>
              <p className="text-zinc-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mt-2">
                Central de Atendimento de Peças
              </p>
            </div>
          </div>

          <div className="flex bg-zinc-900/50 p-1.5 rounded-2xl border border-zinc-800">
            {['Pendentes', 'Em Separação', 'Todos'].map(s => (
              <button 
                key={s}
                onClick={() => setFiltroStatus(s)}
                className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${filtroStatus === s ? 'bg-orange-500 text-black' : 'text-zinc-500 hover:text-white'}`}
              >
                {s}
              </button>
            ))}
          </div>
        </header>

        {/* --- GRID DE SOLICITAÇÕES --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filtrados.length > 0 ? filtrados.map((pedido) => (
            <div key={pedido.id} className="bg-zinc-900/30 border border-zinc-800/80 rounded-[2.5rem] p-6 md:p-8 hover:border-orange-500/30 transition-all group shadow-2xl relative overflow-hidden">
              
              {/* Badge de Status Superior */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-zinc-950 rounded-2xl flex items-center justify-center text-orange-500 border border-zinc-800">
                    <ClipboardList size={24} />
                  </div>
                  <div>
                    <h2 className="text-xl font-black uppercase italic tracking-tighter leading-none">{pedido.id}</h2>
                    <p className="text-[10px] text-zinc-500 font-bold uppercase mt-1">OS #{pedido.os} • {pedido.placa}</p>
                  </div>
                </div>
                <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-[9px] font-black uppercase tracking-widest ${
                  pedido.status === 'Pendente' ? 'bg-red-500/10 border-red-500/20 text-red-500' : 'bg-orange-500/10 border-orange-500/20 text-orange-500'
                }`}>
                  {pedido.status === 'Pendente' ? <Clock size={12} /> : <Truck size={12} />}
                  {pedido.status}
                </div>
              </div>

              {/* Lista de Peças Pedidas */}
              <div className="space-y-3 mb-8">
                <p className="text-[9px] font-black text-zinc-600 uppercase tracking-widest ml-1 mb-2">Itens Solicitados</p>
                {pedido.itens.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between bg-zinc-950/50 p-4 rounded-2xl border border-zinc-800/50 group-hover:border-zinc-700 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-zinc-500 text-[10px] font-bold">
                        {item.qtd}x
                      </div>
                      <span className="text-xs font-bold uppercase text-zinc-200">{item.nome}</span>
                    </div>
                    <button className="text-zinc-700 hover:text-emerald-500 transition-colors">
                      <CheckCircle2 size={18} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Rodapé do Card: Info e Ações */}
              <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-zinc-800/50 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500">
                    <User size={14} />
                  </div>
                  <div>
                    <p className="text-[8px] text-zinc-600 font-black uppercase leading-none mb-1">Solicitado por</p>
                    <p className="text-[10px] font-bold text-zinc-300 uppercase">{pedido.solicitante}</p>
                  </div>
                </div>

                <div className="flex gap-2 w-full sm:w-auto">
                   <button className="flex-1 sm:flex-none bg-orange-500 hover:bg-orange-400 text-black font-black text-[10px] uppercase px-6 py-3.5 rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2">
                     <Package size={16} /> Liberar Peças
                   </button>
                </div>
              </div>
            </div>
          )) : (
            <div className="col-span-full py-24 text-center border-2 border-dashed border-zinc-800 rounded-[3rem]">
              <Package size={48} className="mx-auto text-zinc-800 mb-4" />
              <p className="text-zinc-600 font-black uppercase text-xs tracking-widest">Tudo em dia! Nenhuma solicitação pendente.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}