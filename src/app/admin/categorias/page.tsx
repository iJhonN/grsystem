'use client';

import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Settings2, 
  Plus, 
  Edit2, 
  Trash2, 
  ShieldCheck, 
  Wrench, 
  UserPlus,
} from 'lucide-react';
import Link from 'next/link';

export default function GestaoCategorias() {
  // Lista inicial de categorias (Roles) - Simulação de dados
  const [categorias, setCategorias] = useState([
    { id: '1', nome: 'Administrador', icon: ShieldCheck, color: 'text-blue-500', bg: 'bg-blue-500/10', descricao: 'Acesso total a todas as áreas e configurações do sistema.' },
    { id: '2', nome: 'Mecânico', icon: Wrench, color: 'text-orange-500', bg: 'bg-orange-500/10', descricao: 'Gerencia OS, fluxo de trabalho e requisição de peças.' },
    { id: '3', nome: 'Ajudante', icon: UserPlus, color: 'text-zinc-500', bg: 'bg-zinc-500/10', descricao: 'Visualiza o progresso das OS e auxilia no fluxo técnico.' },
  ]);

  const excluirCategoria = (id: string) => {
    if (confirm('Tem certeza que deseja excluir esta categoria? Isso pode afetar usuários vinculados.')) {
      setCategorias(categorias.filter(cat => cat.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-white p-4 md:p-10 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-zinc-800/50 pb-8">
          <div className="flex items-center gap-4">
            <Link href="/admin/usuarios" className="p-3 bg-zinc-900 hover:bg-zinc-800 rounded-2xl transition-all text-zinc-400 group">
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            </Link>
            <div>
              <h1 className="text-3xl font-black italic uppercase tracking-tighter text-purple-500">Categorias</h1>
              <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mt-1">Níveis de Acesso do Sistema</p>
            </div>
          </div>

          {/* REDIRECIONAMENTO PARA NOVA CATEGORIA */}
          <Link href="/admin/categorias/nova">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 transition-all shadow-lg shadow-purple-900/20 active:scale-95 w-full md:w-auto">
              <Plus size={18} /> Nova Categoria
            </button>
          </Link>
        </header>

        <div className="grid grid-cols-1 gap-6">
          {categorias.map((cat) => (
            <div 
              key={cat.id} 
              className="group bg-zinc-900/40 border border-zinc-800 p-8 rounded-[2.5rem] flex flex-col md:flex-row items-start md:items-center justify-between hover:border-purple-500/30 transition-all shadow-2xl relative overflow-hidden"
            >
              <div className="flex items-start md:items-center gap-8 relative z-10">
                {/* Ícone */}
                <div className={`p-6 ${cat.bg} ${cat.color} rounded-3xl group-hover:scale-110 transition-transform duration-500`}>
                  <cat.icon size={32} />
                </div>
                
                <div>
                  <h2 className="text-2xl font-black uppercase italic tracking-tight mb-2 group-hover:text-purple-400 transition-colors">
                    {cat.nome}
                  </h2>
                  <p className="text-zinc-500 text-sm max-w-md leading-relaxed font-medium">
                    {cat.descricao}
                  </p>
                </div>
              </div>

              {/* Botões de Ação */}
              <div className="flex items-center gap-3 mt-6 md:mt-0 relative z-10">
                {/* REDIRECIONAMENTO PARA EDIÇÃO (Dinâmico) */}
                <Link href={`/admin/categorias/${cat.id}`}>
                  <button className="p-4 bg-zinc-950 text-zinc-500 hover:text-white hover:bg-zinc-800 rounded-2xl transition-all border border-zinc-800 hover:border-zinc-700" title="Editar">
                    <Edit2 size={20} />
                  </button>
                </Link>

                <button 
                  onClick={() => excluirCategoria(cat.id)}
                  className="p-4 bg-zinc-950 text-zinc-800 hover:text-red-500 hover:bg-red-500/10 rounded-2xl transition-all border border-zinc-800 hover:border-red-500/20" 
                  title="Excluir"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Info Card */}
        <div className="mt-12 bg-purple-600/5 border border-purple-500/10 p-6 rounded-[2.5rem] flex items-center gap-6">
          <div className="p-4 bg-purple-500/20 text-purple-500 rounded-2xl">
            <Settings2 size={24} />
          </div>
          <div>
            <h3 className="text-sm font-black uppercase tracking-tight text-purple-400">Dica de Gestão</h3>
            <p className="text-purple-500/60 text-[10px] font-bold uppercase leading-relaxed mt-1">
              As categorias definem quais botões e telas cada colaborador poderá acessar na GR GESTÃO.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}