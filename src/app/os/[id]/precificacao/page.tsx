'use client';

import React, { useState, useRef } from 'react';
import { 
  ArrowLeft, Save, DollarSign, FileUp, CheckCircle2, 
  Paperclip, Trash2, Car, Building2, Calculator 
} from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function PrecificacaoOS() {
  const params = useParams();
  const [anexos, setAnexos] = useState<{ [key: string]: File | null }>({
    shop9: null,
    reajustado: null,
    cilia: null,
    servico: null
  });

  // Função para simular o clique no input de arquivo escondido
  const triggerFile = (id: string) => {
    document.getElementById(`file-${id}`)?.click();
  };

  const handleFileChange = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAnexos({ ...anexos, [id]: e.target.files[0] });
    }
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-white p-4 md:p-10 font-sans pb-24">
      <div className="max-w-5xl mx-auto">
        
        {/* Header de Contexto */}
        <header className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-zinc-800 pb-8">
          <div className="flex items-center gap-4">
            <Link href="/os" className="p-3 bg-zinc-900 hover:bg-zinc-800 rounded-2xl transition-all text-zinc-500">
              <ArrowLeft size={20} />
            </Link>
            <div>
              <h1 className="text-3xl font-black italic uppercase tracking-tighter text-yellow-500">Precificação</h1>
              <div className="flex gap-4 mt-1">
                <span className="text-[10px] font-bold text-zinc-500 uppercase flex items-center gap-1"><Car size={12}/> Placa: ABC-1234</span>
                <span className="text-[10px] font-bold text-zinc-500 uppercase flex items-center gap-1"><Building2 size={12}/> São Paulo</span>
              </div>
            </div>
          </div>
          <div className="bg-zinc-900/50 px-6 py-3 rounded-2xl border border-zinc-800">
             <p className="text-[9px] font-black text-zinc-600 uppercase tracking-widest">Protocolo OS</p>
             <p className="text-xl font-black italic text-blue-500">#{params.id}</p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Formulário de Valores */}
          <div className="lg:col-span-8 space-y-6">
            <section className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
              <div className="flex items-center gap-2 text-yellow-500 font-bold text-sm uppercase mb-8">
                <Calculator size={20} /> Composição de Valores
              </div>

              <div className="grid grid-cols-1 gap-6">
                
                {/* Campos de Valor Dinâmicos */}
                {[
                  { id: 'shop9', label: 'Valor Shop9', color: 'border-blue-500/30' },
                  { id: 'reajustado', label: 'Valor Reajustado', color: 'border-purple-500/30' },
                  { id: 'cilia', label: 'Valor Cilia (Peças)', color: 'border-emerald-500/30' },
                  { id: 'servico', label: 'Valor Serviço Cilia', color: 'border-cyan-500/30' },
                ].map((campo) => (
                  <div key={campo.id} className={`bg-zinc-950 p-6 rounded-[2rem] border ${campo.color} flex flex-col md:flex-row md:items-center gap-6 group transition-all`}>
                    
                    <div className="flex-1 space-y-2">
                      <label className="text-[10px] font-black text-zinc-500 uppercase ml-1">{campo.label}</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 font-bold">R$</span>
                        <input 
                          type="number" 
                          placeholder="0,00" 
                          className="w-full bg-zinc-900 border border-zinc-800 p-4 pl-12 rounded-2xl outline-none focus:border-yellow-500 transition-all font-black text-xl"
                        />
                      </div>
                    </div>

                    {/* Área de Anexo Lateral */}
                    <div className="md:w-48 flex flex-col items-center justify-center border-l border-zinc-800 md:pl-6">
                      <input 
                        type="file" 
                        id={`file-${campo.id}`} 
                        className="hidden" 
                        onChange={(e) => handleFileChange(campo.id, e)}
                      />
                      
                      {!anexos[campo.id] ? (
                        <button 
                          onClick={() => triggerFile(campo.id)}
                          className="flex flex-col items-center gap-1 text-zinc-600 hover:text-yellow-500 transition-all group"
                        >
                          <FileUp size={24} />
                          <span className="text-[9px] font-black uppercase">Anexar Comprovante</span>
                        </button>
                      ) : (
                        <div className="flex items-center gap-3 bg-zinc-900 p-3 rounded-xl border border-zinc-800 w-full animate-in fade-in zoom-in">
                          <Paperclip size={16} className="text-emerald-500" />
                          <div className="overflow-hidden">
                            <p className="text-[9px] font-bold uppercase truncate text-zinc-400">{anexos[campo.id]?.name}</p>
                            <button 
                              onClick={() => setAnexos({...anexos, [campo.id]: null})}
                              className="text-[8px] text-red-500 font-black uppercase hover:underline"
                            >
                              Remover
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}

              </div>
            </section>
          </div>

          {/* Resumo e Ação */}
          <div className="lg:col-span-4">
            <div className="sticky top-10 space-y-6">
              <section className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-[2.5rem] shadow-2xl">
                <h3 className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-6">Resumo da OS</h3>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-zinc-800 pb-2">
                    <span className="text-zinc-600 text-[10px] font-bold uppercase">Mecânico</span>
                    <span className="text-zinc-300 text-[10px] font-black uppercase tracking-tighter">Matheus Oliveira</span>
                  </div>
                  <div className="flex justify-between border-b border-zinc-800 pb-2">
                    <span className="text-zinc-600 text-[10px] font-bold uppercase">Secretaria</span>
                    <span className="text-zinc-300 text-[10px] font-black uppercase tracking-tighter">Obras / Almox.</span>
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-zinc-800">
                  <p className="text-[10px] text-zinc-500 font-bold uppercase mb-2">Total Estimado</p>
                  <p className="text-4xl font-black italic text-zinc-100 tracking-tighter">R$ 0,00</p>
                </div>
              </section>

              <button className="w-full bg-yellow-600 hover:bg-yellow-700 active:scale-95 text-[#09090b] font-black py-6 rounded-[2rem] flex items-center justify-center gap-3 transition-all shadow-xl shadow-yellow-900/20 uppercase tracking-[0.2em] text-xs">
                <Save size={20} strokeWidth={3} />
                Salvar Precificação
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}