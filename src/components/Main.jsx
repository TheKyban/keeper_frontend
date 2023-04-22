import React, { useState } from 'react'

function Main() {
    const [items, setItems] = useState([])

    const addItem = (task) => {
        setItems(previousValue => (
            [...previousValue, task]
        ))
    }

    const deleteItem = (id) => {
        setItems(previousValue => (
            previousValue.filter((item, index) => {
                return id != index
            })
        ))
    }
    return (
        <div className='main'>
            <Input onAdd={addItem} />
            <div className="lists">
                {
                    items.map((item, index) => {
                        return (
                            <List title={item.title} description={item.description} key={index} id={index} deleteHandler={deleteItem} />
                        )
                    })
                }

            </div>
        </div>
    )
}

const Input = ({ onAdd }) => {
    /**
     * Single Task
     */

    const [task, setTask] = useState({
        title: "",
        description: ""
    })


    /**
     * sending task to main component through a function
     */

    const SubmitHandler = (e) => {
        e.preventDefault()
        onAdd(task)
        setTask({ title: "", description: "" })
    }


    /**
     * Setting value of task
     */

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setTask(previousValue => {
            return (
                { ...previousValue, [name]: value }
            )
        })
    }

    /**
     * Input Form
     */
    return (
        <form onSubmit={SubmitHandler} className="input">
            <input type="text" name="title" placeholder='Title'
                onChange={changeHandler} value={task.title} />
            <textarea name="description" cols="10" rows="2" placeholder='Take a note' onChange={changeHandler} value={task.description}></textarea>
            <button type='submit'>Add</button>
        </form>
    )
}

/**
 * List Component
 */

const List = ({ title, description, id, deleteHandler }) => {

    const handler = () => {
        deleteHandler(id)
    }

    return (
        <div className="list">
            <h3>{title}</h3>
            <p>{description}</p>
            <button onClick={handler}>Delete</button>
        </div>
    )
}
export default Main