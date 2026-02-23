'use client';

import React, { useState } from 'react';
import { 
  Save, Car, Wrench, Trash2, Gauge, ChevronDown, 
  ShieldCheck, MapPin, Plus, Hash, Truck, Construction, ArrowLeft 
} from 'lucide-react';
import Link from 'next/link';

export default function NovaOS() {
  // Estados para gerenciar múltiplos profissionais
  const [mecanicos, setMecanicos] = useState(['']);
  const [ajudantes, setAjudantes] = useState(['']);
  const [gestores, setGestores] = useState(['']);

  // Estados para identificação do veículo
  const [semPlaca, setSemPlaca] = useState(false);
  const [placa, setPlaca] = useState('');
  const [chassi, setChassi] = useState('');
  const [tipoVeiculo, setTipoVeiculo] = useState('leve');

  // Funções para adicionar/remover profissionais
  const adicionarMecanico = () => setMecanicos([...mecanicos, '']);
  const removerMecanico = (index: number) => setMecanicos(mecanicos.filter((_, i) => i !== index));

  const adicionarAjudante = () => setAjudantes([...ajudantes, '']);
  const removerAjudante = (index: number) => setAjudantes(ajudantes.filter((_, i) => i !== index));

  const adicionarGestor = () => setGestores([...gestores, '']);
  const removerGestor = (index: number) => setGestores(gestores.filter((_, i) => i !== index));

  // Máscara de Placa (AAA-0000 ou Padrão Mercosul)
  const handlePlacaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '');
    if (value.length > 3) {
      if (/[0-9]/.test(value[3]) && value.length <= 7) {
        value = value.slice(0, 3) + '-' + value.slice(3, 7);
      } else {
        value = value.slice(0, 7);
      }
    }
    setPlaca(value);
  };

  return (
    // CONTAINER PRINCIPAL: Adaptado para largura total com padding responsivo
    <div className="min-h-screen bg-[#09090b] text-white p-4 md:p-8 lg:p-10 font-sans pb-24 selection:bg-blue-500/30">
      
      {/* MÁXIMA LARGURA: Igual ao seu financeiro (1400px) */}
      <div className="w-full max-w-[1400px] mx-auto">
        
        {/* Header */}
        <header className="mb-8 pb-6 border-b border-zinc-800 flex justify-between items-end">
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-blue-500 italic uppercase tracking-tighter">GR GESTÃO</h1>
            <p className="text-zinc-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">Abertura de Nova Ordem de Serviço</p>
          </div>
          <Link href="/os" className="p-3 bg-zinc-900 hover:bg-zinc-800 rounded-2xl transition-all text-zinc-500 group border border-zinc-800">
            <ArrowLeft size={22} className="group-hover:-translate-x-1 transition-transform" />
          </Link>
        </header>

        <form className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8" onSubmit={(e) => e.preventDefault()}>
          
          {/* COLUNA ESQUERDA: Status e Equipe Técnica */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            
            {/* CARD 1: STATUS (ESMERALDA) */}
            <section className="bg-zinc-900/50 border border-zinc-800 p-5 md:p-8 rounded-[2rem] space-y-6 shadow-2xl border-l-4 border-l-emerald-500">
              <div className="flex items-center gap-2 text-emerald-500 font-bold text-sm uppercase">
                <Gauge size={20} /> Controle de Progresso
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-zinc-500 uppercase ml-1">Status Principal</label>
                  <div className="relative">
                    <select className="w-full bg-zinc-950 border border-zinc-800 p-4 rounded-2xl outline-none text-xs md:text-sm font-black uppercase italic appearance-none cursor-pointer focus:border-emerald-500 transition-all">
                      <option className="text-blue-400">🔵 ENTRADA</option>
                      <option className="text-yellow-500">🟡 APROVAÇÃO E PEÇAS</option>
                      <option className="text-orange-500">🟠 PRODUÇÃO</option>
                      <option className="text-emerald-500">🟢 FINALIZADO</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-600 pointer-events-none" size={18} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-zinc-500 uppercase ml-1">Status Detalhado</label>
                  <div className="relative">
                    <select className="w-full bg-zinc-950 border border-zinc-800 p-4 rounded-2xl outline-none text-xs md:text-sm font-bold appearance-none cursor-pointer focus:border-emerald-500 transition-all">
                      <option>⚪ Agendados/Espera</option>
                      <option>🔍 Em diagnóstico</option>
                      <option>📦 Aguardando Peças</option>
                      <option>⚙️ Em Execução</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-600 pointer-events-none" size={18} />
                  </div>
                </div>
              </div>
            </section>

            {/* CARD 2: EQUIPE TÉCNICA (AMARELO) */}
            <section className="bg-zinc-900/50 border border-zinc-800 p-5 md:p-8 rounded-[2rem] space-y-6 shadow-2xl border-l-4 border-l-yellow-500">
              <div className="flex items-center text-yellow-500 font-bold text-sm uppercase gap-2">
                <Wrench size={18} /> Equipe Técnica
              </div>
              
              {/* Mecânicos */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-[10px] font-black text-zinc-400 uppercase ml-1">Mecânicos</label>
                  <button type="button" onClick={adicionarMecanico} className="text-[9px] md:text-[10px] font-bold bg-yellow-500/10 text-yellow-500 px-3 py-2 rounded-xl hover:bg-yellow-500/20 transition-all flex items-center gap-1 uppercase tracking-tighter">
                    <Plus size={14} /> Adicionar
                  </button>
                </div>
                {mecanicos.map((m, i) => (
                  <div key={`mec-${i}`} className="flex gap-2 animate-in fade-in slide-in-from-left-2 duration-300">
                    <select className="flex-1 bg-zinc-950 border border-zinc-800 p-4 rounded-2xl outline-none text-xs md:text-sm uppercase font-semibold focus:border-yellow-500/50 transition-all">
                      <option value="">Selecionar Mecânico</option>
                      <option>Matheus Oliveira</option>
                    </select>
                    {mecanicos.length > 1 && (
                      <button type="button" onClick={() => removerMecanico(i)} className="p-4 text-zinc-600 hover:text-red-500 transition-all">
                        <Trash2 size={20} />
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {/* Ajudantes */}
              <div className="space-y-3 pt-6 border-t border-zinc-800/50">
                <div className="flex items-center justify-between">
                  <label className="text-[10px] font-black text-zinc-400 uppercase ml-1">Ajudantes</label>
                  <button type="button" onClick={adicionarAjudante} className="text-[9px] md:text-[10px] font-bold bg-blue-500/10 text-blue-400 px-3 py-2 rounded-xl hover:bg-blue-500/20 transition-all flex items-center gap-1 uppercase tracking-tighter">
                    <Plus size={14} /> Adicionar
                  </button>
                </div>
                {ajudantes.map((a, i) => (
                  <div key={`aju-${i}`} className="flex gap-2 animate-in fade-in slide-in-from-left-2 duration-300">
                    <select className="flex-1 bg-zinc-950 border border-zinc-800 p-4 rounded-2xl outline-none text-xs md:text-sm uppercase font-semibold focus:border-blue-500/50 transition-all">
                      <option value="">Selecionar Ajudante</option>
                      <option>João Silva</option>
                    </select>
                    {ajudantes.length > 1 && (
                      <button type="button" onClick={() => removerAjudante(i)} className="p-4 text-zinc-600 hover:text-red-500 transition-all">
                        <Trash2 size={20} />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* COLUNA DIREITA: Veículo, Localização e Gestores */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8">
            
            {/* CARD 3: VEÍCULO */}
            <section className="bg-zinc-900/50 border border-zinc-800 p-5 md:p-8 rounded-[2rem] shadow-2xl border-l-4 border-l-blue-500">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-sm uppercase"><Car size={18} /> Veículo</div>
                <button type="button" onClick={() => setSemPlaca(!semPlaca)} className={`text-[9px] font-black uppercase px-3 py-2 rounded-lg transition-all ${semPlaca ? 'bg-orange-500/20 text-orange-500 border border-orange-500/30' : 'bg-zinc-800 text-zinc-500'}`}>
                  {semPlaca ? 'Chassi Ativo' : 'Sem Placa?'}
                </button>
              </div>

              {/* Seletor de Linha do Veículo */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                {[
                  { id: 'leve', icon: Car, label: 'Leve' },
                  { id: 'pesada', icon: Truck, label: 'Pesada' },
                  { id: 'maquina', icon: Construction, label: 'Máquina' }
                ].map(t => (
                  <button key={t.id} type="button" onClick={() => setTipoVeiculo(t.id)} className={`flex flex-col items-center p-3 rounded-2xl border-2 transition-all ${tipoVeiculo === t.id ? 'border-blue-500 bg-blue-500/10 text-white shadow-lg' : 'border-zinc-800 text-zinc-600 bg-zinc-950 hover:border-zinc-700'}`}>
                    <t.icon size={20} className="mb-1" />
                    <span className="text-[8px] font-black uppercase tracking-tighter">{t.label}</span>
                  </button>
                ))}
              </div>

              <div className="space-y-4">
                {!semPlaca ? (
                   <input type="text" placeholder="PLACA (AAA-0000)" value={placa} onChange={handlePlacaChange} maxLength={8} className="w-full bg-zinc-950 border border-zinc-800 p-4 md:p-5 rounded-2xl outline-none uppercase font-black text-xl md:text-3xl text-blue-500 tracking-tighter focus:border-blue-500 transition-all text-center placeholder:text-zinc-800" />
                ) : (
                   <div className="relative">
                     <Hash size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500" />
                     <input type="text" placeholder="CHASSI COMPLETO" maxLength={17} onChange={(e) => setChassi(e.target.value.toUpperCase())} className="w-full bg-zinc-950 border border-orange-500/20 p-4 md:p-5 pl-12 rounded-2xl outline-none uppercase font-black text-xs md:text-sm text-orange-500 tracking-widest focus:border-orange-500 transition-all placeholder:text-zinc-800" />
                   </div>
                )}
                <div className="grid grid-cols-2 gap-3">
                  <input type="text" placeholder="MODELO" className="bg-zinc-950 border border-zinc-800 p-4 rounded-2xl outline-none text-xs md:text-sm font-bold uppercase focus:border-blue-500 transition-all placeholder:text-zinc-800" />
                  <input type="number" placeholder="ANO" className="bg-zinc-950 border border-zinc-800 p-4 rounded-2xl outline-none text-xs md:text-sm font-bold focus:border-blue-500 transition-all placeholder:text-zinc-800" />
                </div>
              </div>
            </section>

            {/* CARD 4: LOCALIZAÇÃO (CYAN) */}
            <section className="bg-zinc-900/50 border border-zinc-800 p-5 md:p-8 rounded-[2rem] shadow-2xl border-l-4 border-l-cyan-500">
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm uppercase mb-4">
                <MapPin size={18} /> Localização Administrativa
              </div>
              <div className="space-y-4">
                <div className="relative">
                  <select className="w-full bg-zinc-950 border border-zinc-800 p-4 rounded-2xl outline-none font-semibold text-xs md:text-sm uppercase focus:border-cyan-500 appearance-none cursor-pointer">
                    <option>Selecione a Cidade</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-600 pointer-events-none" size={16} />
                </div>
                <div className="relative">
                  <select className="w-full bg-zinc-950 border border-zinc-800 p-4 rounded-2xl outline-none font-semibold text-xs md:text-sm uppercase focus:border-cyan-500 appearance-none cursor-pointer">
                    <option>Selecione a Secretaria</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-600 pointer-events-none" size={16} />
                </div>
              </div>
            </section>

            {/* CARD 5: GESTÃO (ROXO) */}
            <section className="bg-zinc-900/50 border border-zinc-800 p-5 md:p-8 rounded-[2rem] shadow-2xl border-l-4 border-l-purple-500">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-purple-400 font-bold text-sm uppercase">
                  <ShieldCheck size={18} /> Gestão da OS
                </div>
                <button type="button" onClick={adicionarGestor} className="text-[9px] md:text-[10px] font-bold bg-purple-500/10 text-purple-400 px-3 py-2 rounded-xl hover:bg-purple-500/20 transition-all flex items-center gap-1 uppercase tracking-tighter">
                  <Plus size={14} /> Adicionar
                </button>
              </div>
              <div className="space-y-3">
                {gestores.map((g, i) => (
                  <div key={`gest-${i}`} className="flex gap-2 animate-in fade-in slide-in-from-right-2 duration-300">
                    <select className="flex-1 bg-zinc-950 border border-zinc-800 p-4 rounded-2xl outline-none font-semibold text-xs md:text-sm uppercase focus:border-purple-500 transition-all appearance-none cursor-pointer">
                      <option value="">Supervisor Responsável</option>
                      <option>JHON (ADMIN)</option>
                    </select>
                    {gestores.length > 1 && (
                      <button type="button" onClick={() => removerGestor(i)} className="p-4 text-zinc-600 hover:text-red-500 transition-all">
                        <Trash2 size={20} />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* BOTÃO FINALIZAR */}
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-black py-5 md:py-6 rounded-[2rem] flex items-center justify-center gap-4 transition-all shadow-2xl shadow-blue-900/40 uppercase tracking-[0.2em] text-sm md:text-lg group border-b-4 border-blue-800">
              <Save size={24} className="group-hover:scale-110 transition-transform" /> 
              Abrir Ordem de Serviço
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}