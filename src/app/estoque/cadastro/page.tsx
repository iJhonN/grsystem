'use client';

import React, { useState } from 'react';
import { 
  ArrowLeft, Trash2, Plus, Search, 
  CheckCircle2, Box, Tag, Settings, FileText,
  AlertCircle, RotateCcw
} from 'lucide-react';
import Link from 'next/link';

export default function CadastroProduto() {
  const [dados, setDados] = useState({
    codigo: '',
    nome: '',
    tipo: 'Peça / Reposição',
    classe: '',
    subclasse: '',
    fabricante: '',
    textoSaida: '',
    homePage: '',
    observacoes: ''
  });

  const [regras, setRegras] = useState<{ [key: string]: boolean }>({
    controlarEstoque: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setDados(prev => ({ ...prev, [name]: value }));
  };

  const toggleRegra = (key: string) => {
    setRegras(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const listaRegras = [
    { id: 'peso', label: 'Vendido por Peso' },
    { id: 'bloqueioVenda', label: 'Bloqueado para Venda' },
    { id: 'bloqueioMov', label: 'Bloqueado para qualquer Movimento' },
    { id: 'bloqueioLanc', label: 'Bloqueado apenas para Lançamento' },
    { id: 'controlarEstoque', label: 'Controlar Estoque Desse Produto' },
    { id: 'precosCom', label: 'Preços com' },
    { id: 'altLarg', label: 'Calcular por Altura x Largura' },
    { id: 'fracionado', label: 'Quantidade Fracionada Com' },
  ];

  return (
    <div className="min-h-screen bg-[#09090b] text-white p-4 font-sans pb-10 selection:bg-orange-500/30">
      
      {/* --- TOOLBAR FIXA NO TOPO --- */}
      <div className="sticky top-4 z-50 max-w-[1400px] mx-auto mb-6">
        <header className="flex flex-wrap items-center justify-between gap-4 bg-zinc-900 border border-zinc-700 p-3 px-6 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-md">
          <div className="flex items-center gap-4">
            <Link href="/estoque/solicitacoes" className="p-2 hover:bg-zinc-800 rounded-xl text-zinc-500 border border-zinc-800 transition-all">
              <ArrowLeft size={18} />
            </Link>
            <div className="h-8 w-[1px] bg-zinc-800 mx-1" />
            <div>
              <h1 className="text-sm font-black uppercase italic tracking-tighter text-[#f97316] leading-none">Novo Item</h1>
              <p className="text-[8px] text-zinc-400 font-bold uppercase tracking-widest mt-1">Almoxarifado GR</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 px-4 py-2.5 rounded-xl font-bold text-[9px] uppercase border border-zinc-700 transition-all">
              <RotateCcw size={14} /> Limpar
            </button>
            <button className="flex items-center gap-2 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white px-4 py-2.5 rounded-xl font-bold text-[9px] uppercase border border-red-500/20 transition-all">
              <Trash2 size={14} /> Apagar
            </button>
            
            {/* O BOTÃO SALVAR QUE DEU TRABALHO KKKK */}
            <button 
              style={{ backgroundColor: '#f97316', color: '#000000' }} 
              className="px-8 py-2.5 rounded-xl font-black text-[11px] uppercase shadow-lg hover:opacity-80 transition-all active:scale-95"
            >
              SALVAR
            </button>
          </div>
        </header>
      </div>

      <div className="max-w-[1400px] mx-auto space-y-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          
          {/* COLUNA ESQUERDA: DADOS CADASTRAIS */}
          <div className="lg:col-span-7 space-y-4">
            <section className="bg-zinc-900/30 border border-zinc-800 p-5 rounded-2xl space-y-4 shadow-xl">
              <div className="flex items-center gap-2 text-[#f97316] font-black text-[10px] uppercase tracking-widest border-b border-zinc-800/50 pb-3">
                <Box size={14} /> Identificação e Localização
              </div>

              {/* Código e Nome */}
              <div className="flex gap-4">
                <div className="w-32 space-y-1">
                  <label className="text-[9px] font-black text-zinc-400 uppercase ml-1 italic">Código da Peça</label>
                  <div className="flex gap-1">
                    <input 
                      name="codigo" 
                      value={dados.codigo} 
                      onChange={handleChange} 
                      type="text" 
                      placeholder="EX: 1234"
                      className="w-full bg-zinc-950 border border-zinc-800 p-2 rounded-lg outline-none focus:border-[#f97316] text-xs font-bold text-center text-white placeholder:text-zinc-600 placeholder:font-medium" 
                    />
                    <button className="bg-zinc-800 p-2 rounded-lg border border-zinc-700 text-zinc-400 hover:text-white"><Search size={14}/></button>
                  </div>
                </div>
                <div className="flex-1 space-y-1">
                  <label className="text-[9px] font-black text-zinc-400 uppercase ml-1">Descrição Comercial do Produto</label>
                  <input 
                    name="nome" 
                    value={dados.nome} 
                    onChange={handleChange} 
                    type="text" 
                    placeholder="DIGITE O NOME COMPLETO DO ITEM..."
                    className="w-full bg-zinc-950 border border-zinc-800 p-2 rounded-lg outline-none focus:border-[#f97316] text-xs font-bold uppercase text-white placeholder:text-zinc-600 placeholder:font-medium" 
                  />
                </div>
              </div>

              {/* Tipo e Unidade */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[9px] font-black text-zinc-400 uppercase ml-1">Tipo de Mercadoria</label>
                  <select 
                    name="tipo" 
                    value={dados.tipo} 
                    onChange={handleChange} 
                    className="w-full bg-zinc-950 border border-zinc-800 p-2 rounded-lg outline-none focus:border-[#f97316] text-xs font-bold uppercase cursor-pointer text-white"
                  >
                    <option>Peça / Reposição</option>
                    <option>Serviço</option>
                    <option>Consumível</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] font-black text-zinc-400 uppercase ml-1">Unid. Venda</label>
                  <div className="flex gap-1">
                    <input type="text" className="w-12 bg-zinc-950 border border-zinc-800 p-2 rounded-lg outline-none text-xs font-bold text-center text-white" value="PC" readOnly />
                    <button className="bg-zinc-800 p-2 rounded-lg border border-zinc-700 text-zinc-400 hover:text-white"><Search size={14}/></button>
                    <input type="text" className="flex-1 bg-zinc-900/50 border border-zinc-800 p-2 rounded-lg text-[10px] font-bold text-zinc-400 uppercase" value="Peça" readOnly />
                    <button className="bg-[#f97316]/10 p-2 rounded-lg border border-[#f97316]/20 text-[#f97316] hover:bg-[#f97316]/20"><Plus size={14}/></button>
                  </div>
                </div>
              </div>

              {/* Classe e Subclasse */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[9px] font-black text-zinc-400 uppercase ml-1 italic">Classe (5 Números)</label>
                  <div className="flex gap-1">
                    <input 
                      name="classe" 
                      value={dados.classe} 
                      onChange={handleChange} 
                      type="text" 
                      maxLength={5} 
                      placeholder="00000"
                      className="w-16 bg-zinc-950 border border-zinc-800 p-2 rounded-lg outline-none focus:border-[#f97316] text-xs font-bold text-center tracking-widest text-white placeholder:text-zinc-600" 
                    />
                    <button className="bg-zinc-800 p-2 rounded-lg border border-zinc-700 text-zinc-400 hover:text-white"><Search size={14}/></button>
                    <input type="text" className="flex-1 bg-zinc-900/50 border border-zinc-800 p-2 rounded-lg text-[10px] font-bold text-zinc-400 uppercase" placeholder="NOME DO GRUPO" readOnly />
                    <button className="bg-[#f97316]/10 p-2 rounded-lg border border-[#f97316]/20 text-[#f97316] hover:bg-[#f97316]/20"><Plus size={14}/></button>
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] font-black text-zinc-400 uppercase ml-1 italic">Subclasse</label>
                  <div className="flex gap-1">
                    <input 
                      name="subclasse" 
                      value={dados.subclasse} 
                      onChange={handleChange} 
                      type="text" 
                      maxLength={5} 
                      placeholder="00000"
                      className="w-16 bg-zinc-950 border border-zinc-800 p-2 rounded-lg outline-none focus:border-[#f97316] text-xs font-bold text-center tracking-widest text-white placeholder:text-zinc-600" 
                    />
                    <button className="bg-zinc-800 p-2 rounded-lg border border-zinc-700 text-zinc-400 hover:text-white"><Search size={14}/></button>
                    <input type="text" className="flex-1 bg-zinc-900/50 border border-zinc-800 p-2 rounded-lg text-[10px] font-bold text-zinc-400 uppercase" placeholder="NOME DO SUBGRUPO" readOnly />
                    <button className="bg-[#f97316]/10 p-2 rounded-lg border border-[#f97316]/20 text-[#f97316] hover:bg-[#f97316]/20"><Plus size={14}/></button>
                  </div>
                </div>
              </div>

              {/* Fabricante e Links */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[9px] font-black text-zinc-400 uppercase ml-1">Fabricante</label>
                  <div className="flex gap-1">
                    <input 
                      name="fabricante" 
                      value={dados.fabricante} 
                      onChange={handleChange} 
                      type="text" 
                      placeholder="EX: BOSCH, WEG..."
                      className="flex-1 bg-zinc-950 border border-zinc-800 p-2 rounded-lg outline-none focus:border-[#f97316] text-white text-xs font-bold uppercase placeholder:text-zinc-600 placeholder:font-medium" 
                    />
                    <button className="bg-zinc-800 p-2 rounded-lg border border-zinc-700 text-zinc-400 hover:text-white"><Search size={14}/></button>
                    <button className="bg-[#f97316]/10 p-2 rounded-lg border border-[#f97316]/20 text-[#f97316] hover:bg-[#f97316]/20"><Plus size={14}/></button>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <label className="text-[9px] font-black text-zinc-400 uppercase ml-1">Texto Saída</label>
                    <input 
                      name="textoSaida" 
                      value={dados.textoSaida} 
                      onChange={handleChange} 
                      type="text" 
                      placeholder="Detalhe na OS..."
                      className="w-full bg-zinc-950 border border-zinc-800 p-2 rounded-lg outline-none focus:border-[#f97316] text-white text-xs placeholder:text-zinc-600" 
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] font-black text-zinc-400 uppercase ml-1">Home Page</label>
                    <input 
                      name="homePage" 
                      value={dados.homePage} 
                      onChange={handleChange} 
                      type="text" 
                      placeholder="https://..."
                      className="w-full bg-zinc-950 border border-zinc-800 p-2 rounded-lg outline-none focus:border-[#f97316] text-white text-xs placeholder:text-zinc-600" 
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-zinc-900/30 border border-zinc-800 p-5 rounded-2xl space-y-3">
              <label className="text-[9px] font-black text-zinc-400 uppercase ml-1 italic">Observações Internas e Técnicas</label>
              <textarea 
                name="observacoes" 
                value={dados.observacoes} 
                onChange={handleChange} 
                rows={3} 
                placeholder="Adicione detalhes, referências ou avisos internos sobre esta peça..."
                className="w-full bg-zinc-950 border border-zinc-800 p-4 rounded-xl outline-none focus:border-[#f97316] text-white text-xs resize-none placeholder:text-zinc-600" 
              />
              <div 
                onClick={() => toggleRegra('nfe')}
                className={`flex items-center justify-between p-3 rounded-xl border transition-all cursor-pointer ${regras.nfe ? 'bg-[#f97316]/10 border-[#f97316]/40 text-[#f97316]' : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700'}`}
              >
                <div className="flex items-center gap-2">
                  <FileText size={16} />
                  <span className="text-[9px] font-black uppercase">Enviar observações na NF-e?</span>
                </div>
                {regras.nfe ? <CheckCircle2 size={16} /> : <div className="w-4 h-4 rounded border border-zinc-700" />}
              </div>
            </section>
          </div>

          {/* COLUNA DIREITA: REGRAS (SITUAÇÕES) */}
          <div className="lg:col-span-5 h-full">
            <section className="bg-zinc-900/30 border border-zinc-800 p-5 rounded-2xl h-full space-y-3 shadow-xl">
              <div className="flex items-center gap-2 text-zinc-400 font-black text-[10px] uppercase tracking-widest border-b border-zinc-800 pb-3 mb-2">
                <Settings size={14} /> Regras de Operação
              </div>
              <div className="grid grid-cols-1 gap-2">
                {listaRegras.map((regra) => (
                  <div
                    key={regra.id}
                    onClick={() => toggleRegra(regra.id)}
                    className={`flex items-center justify-between p-2.5 px-4 rounded-xl border transition-all cursor-pointer group ${
                      regras[regra.id] ? 'bg-[#f97316]/10 border-[#f97316]/40 text-[#f97316]' : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                    }`}
                  >
                    <span className="text-[9px] font-black uppercase tracking-tight">{regra.label}</span>
                    <div className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${regras[regra.id] ? 'bg-[#f97316] border-[#f97316] text-black' : 'border-zinc-700 bg-zinc-900 group-hover:border-zinc-500'}`}>
                      {regras[regra.id] && <CheckCircle2 size={10} strokeWidth={4} />}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

        </div>
      </div>
    </div>
  );
}