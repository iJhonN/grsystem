'use client';

import React from 'react';
import { Lock, User, ChevronRight, Shield } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#09090b] flex items-center justify-center p-4 font-sans selection:bg-blue-500/30">
      <div className="w-full max-w-md">
        
        {/* Identidade visual no topo */}
        <div className="text-center mb-10 group">
          <div className="inline-flex p-3 bg-blue-500/10 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-500">
            <Shield className="text-blue-500" size={32} />
          </div>
          <h1 className="text-5xl font-black text-white italic uppercase tracking-tighter">
            GR <span className="text-blue-500">GESTÃO</span>
          </h1>
          <p className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.4em] mt-2">
            Acesso Interno Autorizado
          </p>
        </div>

        {/* Card de Login */}
        <div className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-[2.5rem] shadow-2xl backdrop-blur-md relative overflow-hidden">
          {/* Brilho sutil de fundo */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 blur-[80px] rounded-full"></div>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            
            {/* Campo de Usuário (Nome) */}
            <div className="space-y-2">
              <label className="text-[10px] font-black text-zinc-500 uppercase ml-2 tracking-widest">
                Identificação do Usuário
              </label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-blue-500 transition-colors" size={20} />
                <input 
                  type="text" 
                  placeholder="Seu nome de acesso" 
                  className="w-full bg-zinc-950 border border-zinc-800 p-4 pl-12 rounded-2xl outline-none focus:border-blue-500/50 transition-all text-white font-semibold placeholder:text-zinc-700"
                />
              </div>
            </div>

            {/* Campo de Senha */}
            <div className="space-y-2">
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-blue-500 transition-colors" size={20} />
                <input 
                  type="password" 
                  placeholder="Sua senha secreta" 
                  className="w-full bg-zinc-950 border border-zinc-800 p-4 pl-12 rounded-2xl outline-none focus:border-blue-500/50 transition-all text-white font-semibold placeholder:text-zinc-700"
                />
              </div>
            </div>

            {/* Botão de Entrada */}
            <Link 
              href="/" 
              className="w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-blue-900/20 uppercase tracking-[0.2em] text-xs"
            >
              Entrar no Sistema <ChevronRight size={18} strokeWidth={3} />
            </Link>
          </form>

          {/* Footer do Card */}
          <div className="mt-8 pt-6 border-t border-zinc-800/50 text-center">
            <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-tighter">
              Problemas com o acesso? Procure o <span className="text-blue-500">Jhon (Admin)</span>
            </p>
          </div>
        </div>

        {/* Rodapé da página */}
        <p className="text-center mt-10 text-zinc-800 text-[10px] font-black uppercase tracking-[0.5em]">
          Wolf Finance Core © 2026
        </p>
      </div>
    </div>
  );
}