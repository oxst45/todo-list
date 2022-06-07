import React from 'react';
import {TasksType, TaskType} from "../App";

export type TodoPropsType = {
    tlID: string
    title: string
    tasks: Array<TaskType>
    toggleTaskCheck: (tlID: string, taskID: string, isDone: boolean) => void
}

export function Todo(props: TodoPropsType) {



    const tasksComponents = props.tasks.map((t) => {

        let isChecked = t.isDone;

        const onCheckHandler = () => {
            isChecked = !isChecked;
            props.toggleTaskCheck(props.tlID, t.id, isChecked)
        }
        return (
            <li key={t.id}>
                <span>{t.taskName}</span>
                <input type="checkbox" checked={t.isDone} onChange={onCheckHandler}/>
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

