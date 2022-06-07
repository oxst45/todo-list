import React from 'react';
import {TasksType, TaskType} from "../App";

export type TodoPropsType = {
    title: string
    tasks: Array<TaskType>
}

export function Todo(props: TodoPropsType) {

    const tasksComponents = props.tasks.map((t) => {
        return (
            <li>
                <span>{t.taskName}</span>
                <input type="checkbox" checked={t.isDone}/>
            </li>
        )
    })
    return (
        <div>
            <h3>{props.title}</h3>
            <ul>
                {tasksComponents}
            </ul>
        </div>
    );
}

