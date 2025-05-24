import { Todo } from "@/app/api/page";
import Tarefa from "@/components/Tarefa";

interface TarefasProps {
    dados: Todo[];
}

const Tarefas = ({ dados }: TarefasProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dados.map((tarefa) => (
                <Tarefa
                    key={tarefa.id}
                    titulo={tarefa.todo}
                    concluido={tarefa.completed}
                />
            ))}
        </div>
    );
};

export default Tarefas;