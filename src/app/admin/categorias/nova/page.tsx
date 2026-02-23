'use client';

import React from 'react';
import { 
  ArrowLeft, 
  Plus, 
  Save, 
  Settings2, 
  LayoutGrid,
  Info,
  ShieldAlert
} from 'lucide-react';
import Link from 'next/link';

export default function NovaCategoria() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white p-4 md:p-10 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Cabeçalho */}
        <header className="flex items-center justify-between mb-10 border-b border-zinc-800/50 pb-8">
          <div className="flex items-center gap-4">
            <Link href="/admin/categorias" className="p-3 bg-zinc-900 hover:bg-zinc-800 rounded-2xl transition-all text-zinc-400 group">
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            </Link>
            <div>
              <h1 className="text-3xl font-black italic uppercase tracking-tighter text-purple-500">Nova Categoria</h1>
              <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mt-1">Criação de Nível de Acesso</p>
            </div>
          </div>
        </header>

        <form className="grid grid-cols-1 md:grid-cols-12 gap-8" onSubmit={(e) => e.preventDefault()}>
          
          {/* Card Principal: Definição */}
          <div className="md:col-span-7 space-y-6">
            <section className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-[2.5rem] shadow-2xl">
              <div className="flex items-center gap-3 mb-8 text-purple-400 font-bold uppercase text-[10px] tracking-[0.2em]">
                <Settings2 size={18} /> Detalhes da Categoria
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-zinc-500 uppercase ml-2 tracking-widest">Nome da Categoria</label>
                  <input 
                    type="text" 
                    placeholder="Ex: Consultor Técnico" 
                    className="w-full bg-zinc-950 border border-zinc-800 p-4 rounded-2xl outline-none focus:border-purple-500 transition-all font-bold uppercase text-sm placeholder:text-zinc-800"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-zinc-500 uppercase ml-2 tracking-widest">Descrição das Permissões</label>
                  <textarea 
                    rows={4}
                    placeholder="Descreva o que este nível de acesso pode fazer no sistema..." 
                    className="w-full bg-zinc-950 border border-zinc-800 p-4 rounded-2xl outline-none focus:border-purple-500 transition-all text-sm text-zinc-300 resize-none placeholder:text-zinc-800"
                  />
                </div>
              </div>
            </section>
          </div>

          {/* Card Lateral: Info e Ação */}
          <div className="md:col-span-5 space-y-6">
            <section className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-[2.5rem] shadow-2xl border-l-4 border-l-purple-500">
              <div className="flex items-center gap-3 mb-8 text-purple-500 font-bold uppercase text-[10px] tracking-[0.2em]">
                <Info size={18} /> Importante
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-zinc-950 rounded-2xl border border-zinc-800">
                  <ShieldAlert className="text-purple-500 shrink-0" size={18} />
                  <p className="text-[10px] text-zinc-500 font-medium leading-relaxed uppercase">
                    Novas categorias não possuem permissões automáticas. Você precisará configurá-las após o salvamento.
                  </p>
                </div>

                <div className="flex items-start gap-3 p-4 bg-zinc-950 rounded-2xl border border-zinc-800">
                  <LayoutGrid className="text-zinc-600 shrink-0" size={18} />
                  <p className="text-[10px] text-zinc-500 font-medium leading-relaxed uppercase">
                    Esta categoria ficará disponível na tela de "Criar Usuário" imediatamente.
                  </p>
                </div>
              </div>

              <div className="pt-8">
                <button className="w-full bg-purple-600 hover:bg-purple-700 active:scale-95 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-purple-900/30 uppercase tracking-[0.2em] text-[10px]">
                  <Save size={18} /> Criar Categoria
                </button>
              </div>
            </section>
          </div>
        </form>

      </div>
    </div>
  );
}