import dados, { TarefaInterface } from "@/data";
import Tarefa from "@/components/Tarefa";

interface TarefasProps {
    dados: TarefaInterface[];
}

const Tarefas = ({ dados }: TarefasProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dados.map((tarefa) => (
                <Tarefa
                    key={tarefa.id}
                    titulo={tarefa.title}
                    concluido={tarefa.completed}
                />
            ))}
        </div>
    );
};

export default Tarefas;