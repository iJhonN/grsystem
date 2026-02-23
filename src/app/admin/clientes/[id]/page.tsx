'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { 
  Building2, 
  ArrowLeft, 
  Plus, 
  Trash2, 
  Save, 
  MapPin, 
  LayoutList,
  AlertCircle,
  History
} from 'lucide-react';
import Link from 'next/link';

export default function EditarCliente() {
  const params = useParams();
  const router = useRouter();
  const clienteId = params.id;

  // Simulando as secretarias que já existem no banco para este cliente
  const [secretarias, setSecretarias] = useState([
    'Secretaria de Saúde',
    'Secretaria de Obras',
    'Gabinete do Prefeito'
  ]);

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
        
        {/* Header de Navegação */}
        <header className="flex items-center justify-between mb-10 border-b border-zinc-800/50 pb-8">
          <div className="flex items-center gap-4">
            <Link href="/admin/clientes/lista" className="p-3 bg-zinc-900 hover:bg-zinc-800 rounded-2xl transition-all text-zinc-400 group">
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            </Link>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-3xl font-black italic uppercase tracking-tighter text-emerald-500">Editar Cliente</h1>
                <span className="bg-emerald-500/10 text-emerald-500 text-[10px] font-black px-2 py-0.5 rounded-md uppercase border border-emerald-500/20">
                  ID: {clienteId}
                </span>
              </div>
              <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mt-1">Atualização de Órgãos e Departamentos</p>
            </div>
          </div>

          <button className="p-4 text-zinc-700 hover:text-red-500 hover:bg-red-500/10 rounded-2xl transition-all flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
            <History size={18} /> Ver Histórico
          </button>
        </header>

        <form className="grid grid-cols-1 md:grid-cols-12 gap-8" onSubmit={(e) => e.preventDefault()}>
          
          {/* Dados Gerais do Cliente */}
          <div className="md:col-span-5 space-y-6">
            <section className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-[2.5rem] shadow-2xl border-l-4 border-l-emerald-500">
              <div className="flex items-center gap-3 mb-8 text-emerald-500 font-bold uppercase text-[10px] tracking-[0.2em]">
                <MapPin size={18} /> Nome da Cidade / Empresa
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-zinc-500 uppercase ml-2">Identificação Principal</label>
                  <input 
                    type="text" 
                    defaultValue="Prefeitura de São Paulo"
                    className="w-full bg-zinc-950 border border-zinc-800 p-4 rounded-2xl outline-none focus:border-emerald-500 transition-all font-bold uppercase"
                  />
                </div>
              </div>

              <div className="mt-10 p-5 bg-emerald-500/5 border border-emerald-500/10 rounded-3xl flex items-start gap-3">
                <AlertCircle size={20} className="text-emerald-500 shrink-0" />
                <p className="text-[10px] text-emerald-700 font-medium leading-relaxed uppercase">
                  Alterar o nome do cliente afetará todas as Ordens de Serviço futuras vinculadas a este ID.
                </p>
              </div>
            </section>
          </div>

          {/* Gerenciamento de Secretarias */}
          <div className="md:col-span-7 space-y-6">
            <section className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-[2.5rem] shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3 text-zinc-400 font-bold uppercase text-[10px] tracking-[0.2em]">
                  <LayoutList size={18} /> Editar Secretarias
                </div>
                <button 
                  type="button" 
                  onClick={adicionarSecretaria}
                  className="bg-emerald-500/10 text-emerald-500 p-2 rounded-xl hover:bg-emerald-500 hover:text-white transition-all shadow-lg"
                >
                  <Plus size={20} />
                </button>
              </div>

              <div className="space-y-4 max-h-[450px] overflow-y-auto pr-2 custom-scrollbar">
                {secretarias.map((secretaria, index) => (
                  <div key={index} className="flex gap-3 group animate-in fade-in slide-in-from-right-2 duration-300">
                    <div className="flex-1 relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[10px] font-black text-zinc-800">
                        {index + 1}
                      </span>
                      <input 
                        type="text" 
                        value={secretaria}
                        onChange={(e) => atualizarSecretaria(index, e.target.value)}
                        placeholder="Nome do Departamento" 
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
                  <Save size={18} /> Atualizar Registro
                </button>
              </div>
            </section>
          </div>

        </form>
      </div>
    </div>
  );
}