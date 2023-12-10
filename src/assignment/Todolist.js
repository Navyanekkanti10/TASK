import React, { useState } from "react";


export default function TodoApp() {
    let [task, settask] = useState("")
    let [tasks, settasks] = useState([])
    let[msg,setmsg]=useState("")

    let changeTask = ({ target: { value } }) => {
        settask(value)

    }
    let addTask = () => {
        settasks([...tasks, task])
        settask("")
        setmsg("Task added successfully")
        setTimeout(()=>
            setmsg(""),3000
        )
        
    }
    let deleteTask = (index) => {
        let remainingTasks = tasks.filter((t, i) => {
            return index !== i
        })
        settasks(remainingTasks)
        setmsg("Task deleted successfully")
        setTimeout(()=>
            setmsg(""),3000
        )
        
    }

    return (
        <section style={{backgroundColor:"skyblue", padding:"10px"}}>
          
            <div>
               <p>{msg}</p>
                <input type="text" placeholder="task" onChange={changeTask} value={task}  />
                <button onClick={addTask}  >Add</button>
            </div>
            <div>
                {tasks.map((t, i) => {
                    return <div key={i}>
                        <span>{t}</span>
                        <button onClick={()=>{
                            deleteTask(i)
                        }}>Delete</button>
                    </div>
                })}
            </div>
        </section>
    )
}