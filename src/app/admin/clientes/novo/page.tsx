'use client';

import React, { useState } from 'react';
import { 
  Building2, 
  ArrowLeft, 
  Plus, 
  Trash2, 
  Save, 
  MapPin, 
  LayoutList,
  PlusCircle
} from 'lucide-react';
import Link from 'next/link';

export default function CadastrarCliente() {
  // Estado para gerenciar múltiplas secretarias dinamicamente
  const [secretarias, setSecretarias] = useState(['']);

  const adicionarSecretaria = () => setSecretarias([...secretarias, '']);
  
  const removerSecretaria = (index: number) => {
    if (secretarias.length > 1) {
      setSecretarias(secretarias.filter((_, i) => i !== index));
    }
  };

  const atualizarSecretaria = (index: number, valor: string) => {
    const novasSecretarias = [...secretarias];
    novasSecretarias[index] = valor;
    setSecretarias(novasSecretarias);
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-white p-4 md:p-10 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <header className="flex items-center justify-between mb-10 border-b border-zinc-800/50 pb-8">
          <div className="flex items-center gap-4">
            <Link href="/admin" className="p-3 bg-zinc-900 hover:bg-zinc-800 rounded-2xl transition-all text-zinc-400">
              <ArrowLeft size={20} />
            </Link>
            <div>
              <h1 className="text-3xl font-black italic uppercase tracking-tighter text-emerald-500">Novo Cliente</h1>
              <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mt-1">Cadastro de Cidades e Órgãos</p>
            </div>
          </div>
        </header>

        <form className="grid grid-cols-1 md:grid-cols-12 gap-8" onSubmit={(e) => e.preventDefault()}>
          
          {/* Coluna Esquerda: Dados do Cliente */}
          <div className="md:col-span-5 space-y-6">
            <section className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-[2.5rem] shadow-2xl border-l-4 border-l-emerald-500">
              <div className="flex items-center gap-3 mb-8 text-emerald-500 font-bold uppercase text-[10px] tracking-[0.2em]">
                <MapPin size={18} /> Identificação Principal
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-zinc-500 uppercase ml-2">Nome do Cliente / Cidade</label>
                <input 
                  type="text" 
                  placeholder="Ex: Prefeitura de São Paulo" 
                  className="w-full bg-zinc-950 border border-zinc-800 p-4 rounded-2xl outline-none focus:border-emerald-500 transition-all font-semibold uppercase placeholder:text-zinc-800"
                />
              </div>

              <div className="pt-6">
                <p className="text-[10px] text-zinc-600 font-medium leading-relaxed uppercase">
                  Este nome aparecerá nos relatórios e filtros de Ordens de Serviço.
                </p>
              </div>
            </section>
          </div>

          {/* Coluna Direita: Secretarias Vinculadas */}
          <div className="md:col-span-7 space-y-6">
            <section className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-[2.5rem] shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3 text-zinc-400 font-bold uppercase text-[10px] tracking-[0.2em]">
                  <LayoutList size={18} /> Secretarias / Departamentos
                </div>
                <button 
                  type="button" 
                  onClick={adicionarSecretaria}
                  className="bg-emerald-500/10 text-emerald-500 p-2 rounded-xl hover:bg-emerald-500 hover:text-white transition-all"
                >
                  <Plus size={20} />
                </button>
              </div>

              <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {secretarias.map((secretaria, index) => (
                  <div key={index} className="flex gap-3 group animate-in fade-in slide-in-from-right-4 duration-300">
                    <div className="flex-1 relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[10px] font-black text-zinc-800">
                        {index + 1}
                      </span>
                      <input 
                        type="text" 
                        value={secretaria}
                        onChange={(e) => atualizarSecretaria(index, e.target.value)}
                        placeholder="Nome da Secretaria" 
                        className="w-full bg-zinc-950 border border-zinc-800 p-4 pl-10 rounded-2xl outline-none focus:border-emerald-500 transition-all font-bold uppercase text-xs"
                      />
                    </div>
                    {secretarias.length > 1 && (
                      <button 
                        type="button" 
                        onClick={() => removerSecretaria(index)}
                        className="p-4 text-zinc-700 hover:text-red-500 hover:bg-red-500/10 rounded-2xl transition-all"
                      >
                        <Trash2 size={20} />
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <div className="pt-10">
                <button className="w-full bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-emerald-900/20 uppercase tracking-[0.2em] text-[10px]">
                  <Save size={18} /> Salvar Cliente e Secretarias
                </button>
              </div>
            </section>
          </div>

        </form>
      </div>
    </div>
  );
}