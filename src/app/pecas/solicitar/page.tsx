'use client';

import React, { useState } from 'react';
import { 
  ArrowLeft, 
  PackageSearch, 
  Plus, 
  Trash2, 
  Send, 
  Car, 
  Hash, 
  ClipboardList,
  CheckCircle2
} from 'lucide-react';
import Link from 'next/link';

export default function SolicitarPecas() {
  // Lista de itens da solicitação
  const [itens, setItens] = useState([{ descricao: '', quantidade: '1' }]);
  const [osSelecionada, setOsSelecionada] = useState('');

  // Funções para gerenciar a lista dinâmica
  const adicionarItem = () => setItens([...itens, { descricao: '', quantidade: '1' }]);
  
  const removerItem = (index: number) => {
    if (itens.length > 1) {
      setItens(itens.filter((_, i) => i !== index));
    }
  };

  const atualizarItem = (index: number, campo: 'descricao' | 'quantidade', valor: string) => {
    const novosItens = [...itens];
    novosItens[index][campo] = valor;
    setItens(novosItens);
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-white p-4 md:p-8 lg:p-12 font-sans pb-24 selection:bg-yellow-500/30">
      
      {/* Ajuste de largura total controlada (1400px) */}
      <div className="w-full max-w-[1400px] mx-auto">
        
        {/* Header */}
        <header className="flex items-center justify-between mb-10 border-b border-zinc-800/50 pb-8">
          <div className="flex items-center gap-4 md:gap-6">
            <Link href="/" className="p-3 md:p-4 bg-zinc-900 hover:bg-zinc-800 rounded-2xl transition-all text-zinc-400 border border-zinc-800 group">
              <ArrowLeft size={22} className="group-hover:-translate-x-1 transition-transform" />
            </Link>
            <div>
              <h1 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-yellow-500 leading-none">
                Solicitar Peças
              </h1>
              <p className="text-zinc-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mt-2 italic">
                Requisição Direta ao Almoxarifado GR
              </p>
            </div>
          </div>
        </header>

        <form className="grid grid-cols-1 lg:grid-cols-12 gap-8" onSubmit={(e) => e.preventDefault()}>
          
          {/* COLUNA ESQUERDA: VÍNCULO COM A OS */}
          <div className="lg:col-span-4 space-y-6">
            <section className="bg-zinc-900/50 border border-zinc-800 p-6 md:p-8 rounded-[2.5rem] shadow-2xl border-l-4 border-l-yellow-500 h-fit">
              <div className="flex items-center gap-3 mb-8 text-yellow-500 font-bold uppercase text-[10px] tracking-widest">
                <Hash size={18} /> Identificação
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-zinc-500 uppercase ml-1">Ordem de Serviço</label>
                  <div className="relative">
                    <select 
                      value={osSelecionada}
                      onChange={(e) => setOsSelecionada(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 p-4 rounded-2xl outline-none focus:border-yellow-500 transition-all font-bold uppercase text-xs appearance-none cursor-pointer"
                    >
                      <option value="">Selecione a OS</option>
                      <option value="1024">OS #1024 - BRA2E19 (HILUX)</option>
                      <option value="1025">OS #1025 - ABC-1234 (GOL)</option>
                    </select>
                    <ClipboardList className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-700 pointer-events-none" size={18} />
                  </div>
                </div>

                <div className={`p-5 rounded-2xl flex items-center gap-4 transition-all border ${osSelecionada ? 'bg-yellow-500/10 border-yellow-500/20' : 'bg-zinc-950 border-zinc-900'}`}>
                  <Car className={osSelecionada ? 'text-yellow-500' : 'text-zinc-800'} size={32} />
                  <div>
                    <p className="text-[9px] font-black text-zinc-600 uppercase leading-none mb-1">Status do Vínculo</p>
                    <p className={`text-xs font-black uppercase ${osSelecionada ? 'text-yellow-500' : 'text-zinc-800'}`}>
                      {osSelecionada ? 'Pronto para pedir' : 'Aguardando OS'}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* COLUNA DIREITA: LISTA DE PEÇAS DINÂMICA */}
          <div className="lg:col-span-8 space-y-6">
            <section className="bg-zinc-900/50 border border-zinc-800 p-6 md:p-10 rounded-[2.5rem] shadow-2xl relative">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3 text-zinc-400 font-bold uppercase text-[10px] tracking-widest">
                  <PackageSearch size={18} /> Itens da Requisição
                </div>
                <button 
                  type="button" 
                  onClick={adicionarItem}
                  className="bg-yellow-500 text-black p-2.5 rounded-xl hover:bg-yellow-400 transition-all shadow-lg active:scale-90"
                >
                  <Plus size={22} strokeWidth={3} />
                </button>
              </div>

              <div className="space-y-4 max-h-[450px] overflow-y-auto pr-3 custom-scrollbar">
                {itens.map((item, index) => (
                  <div key={index} className="flex gap-3 animate-in fade-in slide-in-from-right-3 duration-300 group">
                    <div className="flex-[4] relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[10px] font-black text-zinc-800 group-hover:text-yellow-500 transition-colors">
                        {index + 1}
                      </span>
                      <input 
                        type="text" 
                        value={item.descricao}
                        onChange={(e) => atualizarItem(index, 'descricao', e.target.value)}
                        placeholder="NOME DA PEÇA (EX: FILTRO DE ÓLEO)" 
                        className="w-full bg-zinc-950 border border-zinc-800 p-4 pl-10 rounded-2xl outline-none focus:border-yellow-500 transition-all font-bold uppercase text-xs"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-[80px]">
                      <input 
                        type="number" 
                        value={item.quantidade}
                        onChange={(e) => atualizarItem(index, 'quantidade', e.target.value)}
                        placeholder="QTD" 
                        className="w-full bg-zinc-950 border border-zinc-800 p-4 rounded-2xl outline-none focus:border-yellow-500 transition-all font-bold text-xs text-center"
                      />
                    </div>

                    {itens.length > 1 && (
                      <button 
                        type="button" 
                        onClick={() => removerItem(index)}
                        className="p-4 text-zinc-700 hover:text-red-500 hover:bg-red-500/10 rounded-2xl transition-all"
                      >
                        <Trash2 size={20} />
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-6 border-t border-zinc-800/50">
                <button 
                  disabled={!osSelecionada}
                  className={`w-full font-black py-6 rounded-[2rem] flex items-center justify-center gap-4 transition-all shadow-xl uppercase tracking-widest text-xs md:text-sm ${
                    osSelecionada 
                    ? 'bg-yellow-500 text-black hover:bg-yellow-400 shadow-yellow-900/20 active:scale-95' 
                    : 'bg-zinc-800 text-zinc-600 cursor-not-allowed opacity-50'
                  }`}
                >
                  <Send size={20} /> Enviar Pedido ao Estoque
                </button>
              </div>
            </section>

            {/* Alerta Informativo Otimizado */}
            <div className="flex items-start md:items-center gap-4 p-6 bg-yellow-500/5 border border-yellow-500/10 rounded-[2rem]">
              <CheckCircle2 className="text-yellow-600 shrink-0" size={24} />
              <p className="text-[10px] md:text-xs text-yellow-700/80 font-bold uppercase tracking-tight leading-relaxed">
                Atenção: Após o envio, os itens entrarão na fila de separação do almoxarifado. Você poderá acompanhar o status na listagem de OS.
              </p>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
}