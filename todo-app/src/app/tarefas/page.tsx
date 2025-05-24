"use client";

import type React from "react";

import { useState } from "react";
import dados, { TarefaInterface } from "@/data";
import Cabecalho from "@/components/Cabecalho";
import Tarefas from "@/components/Tarefas";
import ModalTarefa from "@/components/ModalTarefa";

const Home = () => {
    const [tarefas, setTarefas] = useState<TarefaInterface[]>(dados);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const adicionarTarefa = (titulo: string) => {
        if (titulo.trim() === '') {
            alert("Título da tarefa não pode ser vazio.");
            return;
        }
        setTarefas([
            { id: tarefas.length + 1, title: titulo, completed: false },
            ...tarefas
        ]);
        setIsModalOpen(false);
    };

    return (
        <div className="flex flex-col gap-8 container mx-auto p-4">
            <Cabecalho />
            <div>
                <button className="bg-gray-800 text-white text-2xl font-medium py-4 px-6 rounded-[5px] cursor-pointer" onClick={() => setIsModalOpen(true)}>
                    Nova tarefa
                </button>
            </div>
            {isModalOpen && <ModalTarefa addTarefa={adicionarTarefa} onClose={() => setIsModalOpen(false)} />}
            <Tarefas dados={tarefas} />
        </div>
    );
};

export default Home;