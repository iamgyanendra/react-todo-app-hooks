import React, { useState } from 'react'
import '../App.css'

const Todo = () => {

    const [inputData, setInputData] = useState('')
    const [items, setItems] = useState([])
    const [toggleSubmit, setToggleSubmit]=useState(true)
    const [isEditItem, setIsEditItem]= useState('')
    const addItem = () => {
        if (!inputData) {
            alert("please fill the data")
        }else if(inputData && !toggleSubmit){
            setItems(
                items.map((elem)=>{
                    if(elem.id===isEditItem){
                        return{...elem, name:inputData}
                    }
                    return elem
                    
                })
               
            )
            setToggleSubmit(true)
            setInputData('')
            setIsEditItem(null)
        }else {
            const allInputData = {id: new Date().getTime().toString(), name:inputData}
            setItems([ ...items, allInputData ])
            setInputData('')
        }
    }

    // delete item
    const deleteItem = (index)=>{
        const updateItems=items.filter((elem)=>{
            return index !== elem.id
        })

        setItems(updateItems)
    }

    // remove all
    const removeAll=()=>{
        setItems([])
    }

    // Edit
    const editItem = (id)=>{
        let newEditItem = items.find((elem) => {
            return elem.id === id
        })

        setToggleSubmit(false)
        setInputData(newEditItem.name)
        setIsEditItem(id)
    }

    return (
        <>
            <dive className="main-div" >
                <div className="child-div">
                    <figure>

                        <figcaption>Add Your List Here</figcaption>
                    </figure>
                    <div className="addItems">
                        <input type="text" placeholder="Add Items..." value={inputData} onChange={(e) => setInputData(e.target.value)} />

                        {
                            toggleSubmit? <i className="fa fa-plus add-btn" title="Add Item" onClick={addItem}></i>:
                            <i className="fa fa-edit add-btn" title="Update Item" onClick={addItem} ></i>

                        }

                    </div>
                    <div className="showItems">

                        {items.map((elem) => {
                            return (

                                <div className="eachItem" key={elem.id}>
                                    <h3>{elem.name}</h3>
                                    <div className="todo-btn">

                                    <i className="fa fa-edit add-btn" title="Edit Item" onClick={()=> editItem(elem.id)} ></i>
                                    <i className="fa fa-trash add-btn" title="Delete Item" onClick={()=> deleteItem(elem.id)} ></i>
                                    </div>
                                </div>

                            )
                        })}

                    </div>

                    {/* Clear all Button */}

                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll} ><span>CHECK LIST</span></button>
                    </div>
                </div>
            </dive>
        </>
    )
}
export default Todo