'use client';

import React, { useState } from 'react';
import { 
  Building2, 
  ArrowLeft, 
  Search, 
  Edit2, 
  Trash2, 
  MapPin, 
  PlusCircle,
  ChevronRight,
  LayoutList
} from 'lucide-react';
import Link from 'next/link';

export default function ListaClientes() {
  // Dados simulados (No futuro, virão do seu banco de dados)
  const [clientes, setClientes] = useState([
    { id: '1', nome: 'Prefeitura de São Paulo', secretarias: 4 },
    { id: '2', nome: 'Prefeitura de Guarulhos', secretarias: 2 },
    { id: '3', nome: 'Câmara Municipal', secretarias: 1 },
  ]);

  const [busca, setBusca] = useState('');

  const excluirCliente = (id: string) => {
    if (confirm('Tem certeza que deseja remover este cliente? Todas as secretarias vinculadas serão removidas.')) {
      setClientes(clientes.filter(c => c.id !== id));
    }
  };

  const clientesFiltrados = clientes.filter(c => 
    c.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#09090b] text-white p-4 md:p-10 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 border-b border-zinc-800/50 pb-8">
          <div className="flex items-center gap-4">
            <Link href="/admin/clientes" className="p-3 bg-zinc-900 hover:bg-zinc-800 rounded-2xl transition-all text-zinc-400">
              <ArrowLeft size={20} />
            </Link>
            <div>
              <h1 className="text-3xl font-black italic uppercase tracking-tighter text-emerald-500">Clientes Atendidos</h1>
              <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mt-1">Prefeituras e Órgãos Públicos</p>
            </div>
          </div>

          <Link href="/admin/clientes/novo" className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 transition-all shadow-lg shadow-emerald-900/20">
            <PlusCircle size={18} /> Novo Cliente
          </Link>
        </header>

        {/* Barra de Busca */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={20} />
          <input 
            type="text" 
            placeholder="Buscar por nome da cidade ou órgão..." 
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="w-full bg-zinc-900/50 border border-zinc-800 p-5 pl-12 rounded-[2rem] outline-none focus:border-emerald-500/50 transition-all font-medium"
          />
        </div>

        {/* Tabela/Lista de Clientes */}
        <div className="bg-zinc-900/30 border border-zinc-800 rounded-[2.5rem] overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-800 bg-zinc-900/50">
                  <th className="p-6 text-[10px] font-black uppercase text-zinc-500 tracking-[0.2em]">Cliente / Cidade</th>
                  <th className="p-6 text-[10px] font-black uppercase text-zinc-500 tracking-[0.2em]">Departamentos</th>
                  <th className="p-6 text-[10px] font-black uppercase text-zinc-500 tracking-[0.2em] text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/50">
                {clientesFiltrados.map((cliente) => (
                  <tr key={cliente.id} className="hover:bg-zinc-800/20 transition-colors group">
                    <td className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500">
                          <MapPin size={24} />
                        </div>
                        <div>
                          <p className="font-bold text-zinc-200 uppercase text-sm tracking-tight">{cliente.nome}</p>
                          <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-tighter">ID: {cliente.id.padStart(3, '0')}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-6">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-400">
                        <LayoutList size={14} className="text-emerald-500" />
                        <span className="text-[10px] font-black uppercase tracking-widest">
                          {cliente.secretarias} {cliente.secretarias === 1 ? 'Secretaria' : 'Secretarias'}
                        </span>
                      </div>
                    </td>
                    <td className="p-6 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {/* Redirecionar para página de edição dinâmica */}
                        <Link href={`/admin/clientes/${cliente.id}`}>
                          <button className="p-3 bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-xl transition-all" title="Editar">
                            <Edit2 size={16} />
                          </button>
                        </Link>
                        
                        <button 
                          onClick={() => excluirCliente(cliente.id)}
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

        {/* Info adicional */}
        <div className="mt-8 px-4 flex justify-between items-center">
          <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">
            {clientesFiltrados.length} Registros encontrados
          </p>
          <div className="flex gap-2 text-zinc-500 italic text-[10px] uppercase font-bold tracking-widest">
            GR AUTO PEÇAS <ChevronRight size={12} className="inline" /> GESTÃO DE CLIENTES
          </div>
        </div>

      </div>
    </div>
  );
}