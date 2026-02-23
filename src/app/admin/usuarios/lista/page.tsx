'use client';

import React, { useState } from 'react';
import { 
  Users, 
  ArrowLeft, 
  Search, 
  Edit2, 
  Trash2, 
  ShieldCheck, 
  Wrench, 
  UserPlus,
} from 'lucide-react';
import Link from 'next/link';

export default function ListaUsuarios() {
  // Dados simulados
  const [usuarios, setUsuarios] = useState([
    { id: '1', nome: 'Jhon', sobrenome: 'Admin', role: 'ADMIN' },
    { id: '2', nome: 'Matheus', sobrenome: 'Oliveira', role: 'MECANICO' },
    { id: '3', nome: 'João', sobrenome: 'Silva', role: 'AJUDANTE' },
  ]);

  const [busca, setBusca] = useState('');

  // Função para deletar usuário da lista (apenas visual por enquanto)
  const excluirUsuario = (id: string) => {
    if (confirm('Tem certeza que deseja remover este usuário?')) {
      setUsuarios(usuarios.filter(user => user.id !== id));
    }
  };

  // Filtro de busca
  const usuariosFiltrados = usuarios.filter(user => 
    user.nome.toLowerCase().includes(busca.toLowerCase()) || 
    user.role.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#09090b] text-white p-4 md:p-10 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 border-b border-zinc-800/50 pb-8">
          <div className="flex items-center gap-4">
            <Link href="/admin/usuarios" className="p-3 bg-zinc-900 hover:bg-zinc-800 rounded-2xl transition-all text-zinc-400">
              <ArrowLeft size={20} />
            </Link>
            <div>
              <h1 className="text-3xl font-black italic uppercase tracking-tighter text-blue-500">Equipe GR</h1>
              <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mt-1">Gerenciamento de Acessos</p>
            </div>
          </div>

          <Link href="/admin/usuarios/novo" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 transition-all shadow-lg shadow-blue-900/20">
            <UserPlus size={18} /> Cadastrar Novo
          </Link>
        </header>

        {/* Barra de Busca */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={20} />
          <input 
            type="text" 
            placeholder="Buscar por nome ou função..." 
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="w-full bg-zinc-900/50 border border-zinc-800 p-5 pl-12 rounded-[2rem] outline-none focus:border-blue-500/50 transition-all font-medium"
          />
        </div>

        {/* Tabela de Usuários */}
        <div className="bg-zinc-900/30 border border-zinc-800 rounded-[2.5rem] overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-800 bg-zinc-900/50">
                  <th className="p-6 text-[10px] font-black uppercase text-zinc-500 tracking-[0.2em]">Usuário</th>
                  <th className="p-6 text-[10px] font-black uppercase text-zinc-500 tracking-[0.2em]">Cargo / Nível</th>
                  <th className="p-6 text-[10px] font-black uppercase text-zinc-500 tracking-[0.2em] text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/50">
                {usuariosFiltrados.map((user) => (
                  <tr key={user.id} className="hover:bg-zinc-800/20 transition-colors group">
                    <td className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-zinc-800 rounded-xl flex items-center justify-center text-blue-500 font-black italic">
                          {user.nome[0]}{user.sobrenome[0]}
                        </div>
                        <div>
                          <p className="font-bold text-zinc-200 uppercase text-sm tracking-tight">{user.nome} {user.sobrenome}</p>
                          <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-tighter">ID: {user.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-6">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800">
                        {user.role === 'ADMIN' && <ShieldCheck size={14} className="text-blue-500" />}
                        {user.role === 'MECANICO' && <Wrench size={14} className="text-orange-500" />}
                        {user.role === 'AJUDANTE' && <UserPlus size={14} className="text-zinc-500" />}
                        <span className={`text-[10px] font-black uppercase tracking-widest ${
                          user.role === 'ADMIN' ? 'text-blue-500' : 
                          user.role === 'MECANICO' ? 'text-orange-500' : 'text-zinc-500'
                        }`}>
                          {user.role}
                        </span>
                      </div>
                    </td>
                    <td className="p-6 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {/* BOTÃO DE EDITAR COM REDIRECIONAMENTO */}
                        <Link href={`/admin/usuarios/${user.id}`}>
                          <button className="p-3 bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-xl transition-all" title="Editar">
                            <Edit2 size={16} />
                          </button>
                        </Link>
                        
                        {/* BOTÃO DE EXCLUIR */}
                        <button 
                          onClick={() => excluirUsuario(user.id)}
                          className="p-3 bg-zinc-900 text-zinc-600 hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-all" 
                          title="Excluir"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Informativo */}
        <div className="mt-8 flex justify-between items-center px-4">
          <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">
            Total de {usuariosFiltrados.length} usuários
          </p>
        </div>

      </div>
    </div>
  );
}