import React from "react";
import { Todo } from "../models/Todo";

const TodoList = () => {
    const todo: Todo[] = [
        {
            id: 1,
            title: "Ir ao supermercado",
            done: false
        },
        {
            id: 2,
            title: "Ir a academia",
            done: false
        },
        {
            id: 3,
            title: "Ir ao Taekwondo",
            done: false
        },
    ];
    return (
        <table className="uk-table">
            <caption>Lista de Tarefas</caption>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tarefas</th>
                        <th></th>
                    </tr>
                </thead>
        </table>
    )
}

export default TodoList;