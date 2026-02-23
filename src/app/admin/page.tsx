'use client';

import React from 'react';
import { 
  UserPlus, 
  Building2, 
  Settings, 
  ChevronRight, 
  ShieldCheck, 
  MapPin,
  ArrowLeft
} from 'lucide-react';
import Link from 'next/link';

export default function AdminPanel() {
  const adminActions = [
    {
      title: "Gestão de Usuários",
      description: "Cadastrar mecânicos, ajudantes e definir níveis de acesso (Admin/Mecânico).",
      icon: UserPlus,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      link: "/admin/usuarios"
    },
    {
      title: "Clientes & Secretarias",
      description: "Cadastrar cidades e secretarias (Saúde, Obras, Educação) para as OS.",
      icon: Building2,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      link: "/admin/clientes"
    },
    {
      title: "Configurações do Sistema",
      description: "Ajustar categorias de serviços, prazos e logs de auditoria.",
      icon: Settings,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      link: "/admin/config"
    }
  ];

  return (
    <div className="min-h-screen bg-[#09090b] text-white p-4 md:p-10 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* Topo com Voltar */}
        <div className="flex items-center justify-between mb-10">
          <Link href="/" className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors group">
            <div className="p-2 bg-zinc-900 rounded-xl group-hover:bg-zinc-800">
              <ArrowLeft size={20} />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest">Voltar ao Início</span>
          </Link>
          <div className="flex items-center gap-2 text-zinc-700 font-black italic uppercase text-xl">
            GR <span className="text-zinc-800">ADMIN</span>
          </div>
        </div>

        <header className="mb-12">
          <h1 className="text-4xl font-black italic uppercase tracking-tighter">
            Painel de <span className="text-blue-500">Controle</span>
          </h1>
          <p className="text-zinc-500 mt-2 font-medium">Gerencie o núcleo da Wolf Finance e as permissões da GR Auto Peças.</p>
        </header>

        {/* Grid de Ações Administrativas */}
        <div className="grid grid-cols-1 gap-6">
          {adminActions.map((action, i) => (
            <Link 
              key={i} 
              href={action.link}
              className="group bg-zinc-900/50 border border-zinc-800 p-8 rounded-[2.5rem] flex flex-col md:flex-row items-start md:items-center justify-between hover:border-zinc-700 transition-all shadow-2xl hover:shadow-blue-900/5"
            >
              <div className="flex items-start md:items-center gap-8">
                <div className={`p-6 ${action.bg} ${action.color} rounded-3xl group-hover:scale-110 transition-transform duration-500`}>
                  <action.icon size={32} />
                </div>
                <div>
                  <h2 className="text-2xl font-black uppercase italic tracking-tight mb-2 group-hover:text-white transition-colors">
                    {action.title}
                  </h2>
                  <p className="text-zinc-500 text-sm max-w-md leading-relaxed">
                    {action.description}
                  </p>
                </div>
              </div>
              <div className="mt-6 md:mt-0 p-4 bg-zinc-950 rounded-2xl text-zinc-700 group-hover:text-blue-500 group-hover:translate-x-2 transition-all">
                <ChevronRight size={24} />
              </div>
            </Link>
          ))}
        </div>

        {/* Resumo de Segurança */}
        <div className="mt-12 bg-blue-600/5 border border-blue-500/10 p-6 rounded-[2rem] flex items-center gap-4">
          <div className="p-3 bg-blue-500/20 text-blue-500 rounded-xl">
            <ShieldCheck size={24} />
          </div>
          <div>
            <h3 className="text-sm font-black uppercase tracking-tight text-blue-400">Modo de Segurança Ativo</h3>
            <p className="text-blue-500/60 text-xs font-medium">Somente usuários com nível 'Admin' podem acessar estas ferramentas.</p>
          </div>
        </div>

      </div>
    </div>
  );
}