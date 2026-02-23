'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { 
  Save, 
  ArrowLeft, 
  Shield, 
  Wrench, 
  UserCircle, 
  Lock,
  BadgeCheck,
  UserPlus,
  Trash2,
  AlertCircle
} from 'lucide-react';
import Link from 'next/link';

export default function EditarUsuario() {
  const params = useParams();
  const router = useRouter();
  const userId = params.id;

  // Estado para controlar a função selecionada
  const [role, setRole] = useState('MECANICO');

  return (
    <div className="min-h-screen bg-[#09090b] text-white p-4 md:p-10 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Header de Edição */}
        <header className="flex items-center justify-between mb-10 border-b border-zinc-800/50 pb-8">
          <div className="flex items-center gap-4">
            <Link href="/admin/usuarios" className="p-3 bg-zinc-900 hover:bg-zinc-800 rounded-2xl transition-all text-zinc-400 group">
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            </Link>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-3xl font-black italic uppercase tracking-tighter text-blue-500">Editar Perfil</h1>
                <span className="bg-blue-500/10 text-blue-500 text-[10px] font-black px-2 py-0.5 rounded-md uppercase tracking-tighter border border-blue-500/20">
                  ID: {userId}
                </span>
              </div>
              <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mt-1">Modificando credenciais de acesso</p>
            </div>
          </div>

          <button className="p-4 text-zinc-600 hover:text-red-500 hover:bg-red-500/10 rounded-2xl transition-all flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
            <Trash2 size={18} /> Excluir Conta
          </button>
        </header>

        <form className="grid grid-cols-1 md:grid-cols-12 gap-8" onSubmit={(e) => e.preventDefault()}>
          
          {/* Informações de Login */}
          <div className="md:col-span-7 space-y-6">
            <section className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-[2.5rem] shadow-2xl">
              <div className="flex items-center gap-3 mb-8 text-blue-400 font-bold uppercase text-[10px] tracking-[0.2em]">
                <UserCircle size={18} /> Dados Identificadores
              </div>

              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-zinc-500 uppercase ml-2 tracking-tighter">Nome Atual</label>
                    <input 
                      type="text" 
                      defaultValue="Matheus"
                      className="w-full bg-zinc-950 border border-zinc-800 p-4 rounded-2xl outline-none focus:border-blue-500 transition-all font-semibold uppercase"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-zinc-500 uppercase ml-2 tracking-tighter">Sobrenome Atual</label>
                    <input 
                      type="text" 
                      defaultValue="Oliveira"
                      className="w-full bg-zinc-950 border border-zinc-800 p-4 rounded-2xl outline-none focus:border-blue-500 transition-all font-semibold uppercase"
                    />
                  </div>
                </div>

                <div className="space-y-2 pt-4 border-t border-zinc-800/30">
                  <div className="flex items-center justify-between">
                    <label className="text-[10px] font-black text-zinc-500 uppercase ml-2 tracking-tighter">Nova Senha (Opcional)</label>
                    <span className="text-[9px] text-zinc-700 font-bold uppercase italic italic">Deixe em branco para manter</span>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-4 top-4 text-zinc-700" size={20} />
                    <input 
                      type="password" 
                      placeholder="••••••••" 
                      className="w-full bg-zinc-950 border border-zinc-800 p-4 pl-12 rounded-2xl outline-none focus:border-blue-500/50 transition-all"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Alerta Informativo */}
            <div className="bg-blue-600/5 border border-blue-500/10 p-5 rounded-3xl flex items-center gap-4">
               <AlertCircle size={20} className="text-blue-500 shrink-0" />
               <p className="text-[10px] text-blue-500/70 font-medium uppercase leading-relaxed">
                  Ao alterar o nome ou a senha, o usuário precisará utilizar as novas credenciais no próximo login.
               </p>
            </div>
          </div>

          {/* Alterar Permissão */}
          <div className="md:col-span-5 space-y-6">
            <section className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-[2.5rem] shadow-2xl border-l-4 border-l-blue-500">
              <div className="flex items-center gap-3 mb-8 text-blue-500 font-bold uppercase text-[10px] tracking-[0.2em]">
                <Shield size={18} /> Nível de Acesso
              </div>

              <div className="space-y-3">
                {/* ADMIN */}
                <label onClick={() => setRole('ADMIN')} className={`relative flex items-center p-4 rounded-2xl cursor-pointer border transition-all group ${role === 'ADMIN' ? 'bg-blue-600/10 border-blue-500' : 'bg-zinc-950 border-zinc-800 hover:border-zinc-700'}`}>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${role === 'ADMIN' ? 'bg-blue-600 text-white' : 'bg-zinc-900 text-zinc-600 group-hover:bg-zinc-800'}`}>
                    <BadgeCheck size={20} />
                  </div>
                  <div className="ml-4">
                    <p className={`text-xs font-black uppercase italic tracking-tight ${role === 'ADMIN' ? 'text-blue-400' : 'text-zinc-500'}`}>Administrador</p>
                  </div>
                </label>

                {/* MECANICO */}
                <label onClick={() => setRole('MECANICO')} className={`relative flex items-center p-4 rounded-2xl cursor-pointer border transition-all group ${role === 'MECANICO' ? 'bg-blue-600/10 border-blue-500' : 'bg-zinc-950 border-zinc-800 hover:border-zinc-700'}`}>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${role === 'MECANICO' ? 'bg-blue-600 text-white' : 'bg-zinc-900 text-zinc-600 group-hover:bg-zinc-800'}`}>
                    <Wrench size={20} />
                  </div>
                  <div className="ml-4">
                    <p className={`text-xs font-black uppercase italic tracking-tight ${role === 'MECANICO' ? 'text-blue-400' : 'text-zinc-500'}`}>Mecânico</p>
                  </div>
                </label>

                {/* AJUDANTE */}
                <label onClick={() => setRole('AJUDANTE')} className={`relative flex items-center p-4 rounded-2xl cursor-pointer border transition-all group ${role === 'AJUDANTE' ? 'bg-blue-600/10 border-blue-500' : 'bg-zinc-950 border-zinc-800 hover:border-zinc-700'}`}>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${role === 'AJUDANTE' ? 'bg-blue-600 text-white' : 'bg-zinc-900 text-zinc-600 group-hover:bg-zinc-800'}`}>
                    <UserPlus size={20} />
                  </div>
                  <div className="ml-4">
                    <p className={`text-xs font-black uppercase italic tracking-tight ${role === 'AJUDANTE' ? 'text-blue-400' : 'text-zinc-500'}`}>Ajudante</p>
                  </div>
                </label>
              </div>

              <div className="pt-8">
                <button className="w-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-blue-900/30 uppercase tracking-[0.2em] text-[10px]">
                  <Save size={18} /> Salvar Alterações
                </button>
              </div>
            </section>
          </div>
        </form>

      </div>
    </div>
  );
}