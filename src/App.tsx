import React, {useState} from 'react';

import './App.css';
import {v1} from 'uuid';
import {Todo} from "./components/todo";

export type TodoListType = {
    id: string
    title: string
}

export type TaskType = {
    id: string
    taskName: string
    isDone: boolean
}

export type TasksType = {
    [tlID: string]: Array<TaskType>
}
let tlID_1 = v1();
let tlID_2 = v1();


function App() {

    const [todoLists, setTodoLists] = useState<Array<TodoListType>>([
        {id: tlID_1, title: "First Todo List"},
        {id: tlID_2, title: "Second Todo List"}
    ])

    const [tasks, setTasks] = useState<TasksType>({
        [tlID_1]: [
            {id: v1(), taskName: "one task", isDone: true},
            {id: v1(), taskName: "another task", isDone: false}
        ],
        [tlID_2]: [
            {id: v1(), taskName: "one task", isDone: true},
            {id: v1(), taskName: "another task", isDone: false}
        ]
    })

    const toggleTaskCheck = (tlID: string, taskID: string, isDone: boolean) => {
        const changedTlID = tasks[tlID].map((t) => {
            return taskID === t.id ? {...t, isDone} : t;
        });
        setTasks({...tasks,
            [tlID]: changedTlID
        })
    }
    const todoListsComponents = todoLists.map((tl) => {
        return <Todo
            key={tl.id}

            tlID={tl.id}
            tasks={tasks[tl.id]}
            title={tl.title}
            toggleTaskCheck={toggleTaskCheck}
        />
    })

    return (
        <div className="App">
            {todoListsComponents}
        </div>
    );
}

export default App;
