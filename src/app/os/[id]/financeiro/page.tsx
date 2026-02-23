'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { 
  ArrowLeft, Save, Calculator, FileUp, Paperclip, 
  Car, Building2, Wallet, Trash2, CheckCircle2 
} from 'lucide-react';
import Link from 'next/link';

export default function PrecificacaoOS() {
  const params = useParams();
  const osId = params.id;

  // Estado para os arquivos anexados
  const [anexos, setAnexos] = useState<{ [key: string]: File | null }>({
    shop9: null, reajustado: null, cilia: null, servico: null
  });

  const handleFileChange = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAnexos({ ...anexos, [id]: e.target.files[0] });
    }
  };

  const removerAnexo = (id: string) => {
    setAnexos({ ...anexos, [id]: null });
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-white p-4 md:p-10 font-sans pb-24">
      <div className="max-w-5xl mx-auto">
        
        {/* Header de Faturamento */}
        <header className="flex flex-col md:flex-row md:items-center justify-between mb-10 border-b border-zinc-800 pb-8 gap-6">
          <div className="flex items-center gap-4">
            <Link href="/os" className="p-3 bg-zinc-900 hover:bg-zinc-800 rounded-2xl transition-all text-zinc-400">
              <ArrowLeft size={20} />
            </Link>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-3xl font-black italic uppercase tracking-tighter text-yellow-500">Financeiro / OS #{osId}</h1>
              </div>
              <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mt-1 italic">Precificação e Auditoria de Valores</p>
            </div>
          </div>

          {/* Resumo rápido do Veículo */}
          <div className="flex gap-4 p-4 bg-zinc-900/50 rounded-[1.5rem] border border-zinc-800/50">
            <div className="flex flex-col">
              <span className="text-[8px] font-black text-zinc-600 uppercase">Veículo</span>
              <span className="text-xs font-black text-blue-500">BRA2E19</span>
            </div>
            <div className="w-[1px] bg-zinc-800"></div>
            <div className="flex flex-col">
              <span className="text-[8px] font-black text-zinc-600 uppercase">Cliente</span>
              <span className="text-xs font-black text-emerald-500">FEIRA GRANDE</span>
            </div>
          </div>
        </header>

        <form className="grid grid-cols-1 lg:grid-cols-12 gap-8" onSubmit={(e) => e.preventDefault()}>
          
          {/* Lançamento de Valores */}
          <div className="lg:col-span-8 space-y-6">
            <section className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-[2.5rem] shadow-2xl border-l-4 border-l-yellow-500 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 text-white/[0.02] rotate-12">
                <Calculator size={200} />
              </div>

              <div className="flex items-center gap-2 text-yellow-500 font-bold text-sm uppercase mb-10 relative z-10">
                <Wallet size={20} /> Composição de Preços
              </div>

              <div className="space-y-6 relative z-10">
                {[
                  { id: 'shop9', label: 'Valor Shop9', icon: '🛒' },
                  { id: 'reajustado', label: 'Valor Reajustado', icon: '📈' },
                  { id: 'cilia', label: 'Valor Cilia (Peças)', icon: '📦' },
                  { id: 'servico', label: 'Valor Serviço Cilia', icon: '🛠️' },
                ].map((campo) => (
                  <div key={campo.id} className="bg-zinc-950/50 border border-zinc-800 p-6 rounded-[2rem] flex flex-col md:flex-row md:items-center gap-6 group hover:border-yellow-500/30 transition-all">
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm">{campo.icon}</span>
                        <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">{campo.label}</label>
                      </div>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 font-black">R$</span>
                        <input 
                          type="number" 
                          placeholder="0,00" 
                          className="w-full bg-zinc-900 border border-zinc-800 p-4 pl-12 rounded-2xl outline-none focus:border-yellow-500 transition-all font-black text-xl text-yellow-500"
                        />
                      </div>
                    </div>

                    {/* Botão de Anexo Lateral */}
                    <div className="md:w-56 flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-zinc-800 pt-4 md:pt-0 md:pl-6">
                      <input 
                        type="file" 
                        id={`f-${campo.id}`} 
                        className="hidden" 
                        onChange={(e) => handleFileChange(campo.id, e)}
                      />
                      
                      {!anexos[campo.id] ? (
                        <button 
                          type="button"
                          onClick={() => document.getElementById(`f-${campo.id}`)?.click()}
                          className="flex flex-col items-center gap-2 text-zinc-600 hover:text-white transition-all group"
                        >
                          <div className="p-3 bg-zinc-900 rounded-xl group-hover:bg-yellow-500/10 group-hover:text-yellow-500 transition-all">
                            <FileUp size={22} />
                          </div>
                          <span className="text-[8px] font-black uppercase tracking-tighter">Anexar Documento</span>
                        </button>
                      ) : (
                        <div className="flex items-center gap-3 bg-emerald-500/5 p-3 rounded-xl border border-emerald-500/20 w-full animate-in fade-in slide-in-from-right-2">
                          <Paperclip size={18} className="text-emerald-500 shrink-0" />
                          <div className="overflow-hidden flex-1">
                            <p className="text-[9px] font-black uppercase truncate text-emerald-500/80">{anexos[campo.id]?.name}</p>
                            <button 
                              onClick={() => removerAnexo(campo.id)}
                              className="text-[8px] text-red-500 font-black uppercase hover:underline mt-1 flex items-center gap-1"
                            >
                              <Trash2 size={10} /> Remover
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

          {/* Coluna de Ações Finalização */}
          <div className="lg:col-span-4 space-y-6">
            <section className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-[2.5rem] shadow-2xl">
              <h3 className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-6">Informações da Operação</h3>
              <p className="text-[11px] text-zinc-400 leading-relaxed font-medium italic">
                Ao salvar, esses valores serão vinculados à OS #{osId} e ficarão disponíveis para consulta no faturamento.
              </p>
              
              <div className="mt-8 space-y-3">
                 <div className="p-4 bg-zinc-950 rounded-2xl border border-zinc-800">
                    <p className="text-[8px] font-black text-zinc-600 uppercase mb-1">Responsável pela Precificação</p>
                    <p className="text-xs font-bold uppercase tracking-tight text-zinc-300">Jhon (Admin)</p>
                 </div>
              </div>

              <div className="mt-10 pt-6 border-t border-zinc-800">
                <button className="w-full bg-yellow-500 hover:bg-yellow-600 active:scale-95 text-[#09090b] font-black py-6 rounded-[2rem] flex items-center justify-center gap-3 transition-all shadow-xl shadow-yellow-900/20 uppercase tracking-[0.2em] text-xs">
                  <Save size={20} strokeWidth={3} />
                  Salvar Financeiro
                </button>
              </div>
            </section>

            {/* Alerta de Segurança */}
            <div className="flex items-center gap-3 p-5 bg-blue-500/5 border border-blue-500/10 rounded-3xl">
              <CheckCircle2 className="text-blue-500" size={20} />
              <p className="text-[9px] text-blue-500/70 font-bold uppercase leading-tight">
                Os anexos são armazenados de forma segura e criptografada no GR Finance Core.
              </p>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
}