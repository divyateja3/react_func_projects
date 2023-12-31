import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () => {
  let list = localStorage.getItem('storedlist')
  if (list) {
    return JSON.parse(localStorage.getItem('storedlist'))
  }
  else {
    return[]
  }
}
function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState(getLocalStorage())
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' })
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true,'danger','please enter value')
  } else if (name && isEditing) {
      setList(list.map((item)=> {
        if (item.id === editID) {
          return{...item,title:name}

      }
      return item
      }))
      setName('');
      setEditID(null);
      setIsEditing(false)
      showAlert(true,'success','Item edited')
    }
    else {
      showAlert(true,'success','item added✌🏻')
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName('');
    }
  };
  
  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({show,type,msg})
  }
  const clearList = () => {
    showAlert(true, 'danger', 'No Items anymore❌');
    setList([])
  }
  const removeItem = (id) => {
    showAlert(true, 'danger', 'Item Removed➖')
    setList(list.filter((item) => item.id !==id))
  }
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);

  }
  useEffect(() => {
    localStorage.setItem('storedlist',JSON.stringify(list))
  },[list])
  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list}/>}
      <h3>Grocery Bud</h3>
      <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='e.g. eggs'
            value={name}
            onChange={(e) => setName(e.target.value)}>
            
            </input>
          <button type='submit'className='submit-btn'>
            {isEditing  ? 'edit':'submit'}
          </button>
        </div>
      </form>
      <div className='grocery-container'>
        <List items={list} removeItem={removeItem} editItem = {editItem} />
        <button className='clear-btn' onClick={clearList}>clear items</button>
      </div>
    </section>
  )
}

export default App
