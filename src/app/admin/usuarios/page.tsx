'use client';

import React from 'react';
import { 
  UserPlus, 
  Users, 
  ArrowLeft, 
  ChevronRight,
  ShieldCheck,
  UserCog,
  Settings2
} from 'lucide-react';
import Link from 'next/link';

export default function UsuariosHub() {
  const options = [
    {
      title: "Cadastrar Novo Usuário",
      description: "Adicione mecânicos, ajudantes ou administradores ao sistema.",
      icon: UserPlus,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      link: "/admin/usuarios/novo"
    },
    {
      title: "Ver Lista de Equipe",
      description: "Visualize, edite dados ou remova usuários cadastrados.",
      icon: Users,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      link: "/admin/usuarios/lista"
    },
    {
      title: "Categorias de Conta",
      description: "Gerencie os níveis de acesso (Admin, Mecânico, Ajudante).",
      icon: Settings2,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      link: "/admin/categorias" // Rota da página que acabamos de criar
    }
  ];

  return (
    <div className="min-h-screen bg-[#09090b] text-white p-4 md:p-10 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Navegação superior */}
        <div className="flex items-center justify-between mb-10">
          <Link href="/admin" className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors group">
            <div className="p-2 bg-zinc-900 rounded-xl group-hover:bg-zinc-800">
              <ArrowLeft size={20} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest">Painel Admin</span>
          </Link>
          <UserCog className="text-zinc-800" size={24} />
        </div>

        <header className="mb-12">
          <h1 className="text-4xl font-black italic uppercase tracking-tighter">
            Gestão de <span className="text-blue-500">Usuários</span>
          </h1>
          <p className="text-zinc-500 mt-2 font-medium">Controle de equipe e permissões de acesso.</p>
        </header>

        {/* Grid de Opções - Agora com 3 colunas no desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {options.map((item, i) => (
            <Link 
              key={i} 
              href={item.link}
              className="group bg-zinc-900/40 border border-zinc-800 p-8 rounded-[2.5rem] flex flex-col justify-between hover:border-zinc-700 transition-all shadow-2xl relative overflow-hidden h-[320px]"
            >
              {/* Conteúdo */}
              <div className="relative z-10">
                <div className={`w-14 h-14 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <item.icon size={28} />
                </div>
                <h2 className="text-xl font-black uppercase italic tracking-tight mb-2">
                  {item.title}
                </h2>
                <p className="text-zinc-500 text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Link Inferior */}
              <div className="relative z-10 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500 group-hover:text-white transition-colors">
                Gerenciar <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </div>

              {/* Marca d'água de fundo */}
              <item.icon size={100} className="absolute -right-6 -bottom-6 text-white/[0.02] group-hover:text-white/[0.04] transition-colors" />
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 flex items-center gap-4 p-6 bg-zinc-900/20 border border-zinc-800/50 rounded-3xl">
          <ShieldCheck className="text-zinc-700" size={24} />
          <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-tight">
            Configure as categorias antes de criar novos usuários para garantir as permissões corretas.
          </p>
        </div>

      </div>
    </div>
  );
}