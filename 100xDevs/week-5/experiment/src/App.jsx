import { useState, memo, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [id, setId] = useState(1)
  return (
    <div>
        <button onClick={()=>{
            setId(1)
        }}>1</button>
        <button onClick={()=>{
            setId(2)
        }}>2</button>
        <button onClick={()=>{
            setId(3)
        }}>3</button>
        <button onClick={()=>{
            setId(4)
        }}>4</button>
        <TodoComponent id={id} />
    </div>
  )
}

function TodoComponent({id}){

    const [todo, setTodo] = useState({})
    useEffect(()=> {
        axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
            .then(res => setTodo(res.data.todo))
    }, [id]);
    

    return <div id={todo.id}>
        <h1>{todo.title}</h1>
        <p>{todo.description}</p>
    </div>
}

export default App
