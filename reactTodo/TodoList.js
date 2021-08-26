import React, {useState} from 'react'

const TodoList = () => {

  const[task, settask] = useState('');
  const[taskList, settaskList] = useState([]);

  const addTask = () => {
    settaskList([...taskList, task]); /
  }

  const deleteTask = (idx) => {
    let copyArr = [...taskList];
    copyArr.splice(idx, 1);
    settaskList(copyArr);
 }

 const taskListContent = taskList.map((todo, idx) => {
    return (
      <div>
        <h4>{todo}</h4>
        <i class="far fa-trash-alt" onClick={() => deleteTask(idx)}></i>
      </div>
    )
  })

  return (
    <div>
      <div className="row justify-content-center align-items-center">
        <div className="col-md-5 shadow-lg p-3 mb-5 bg-white rounded">
          <h1>React Todo List </h1>
          <input type="text" placeholder="Enter todo" className="form-control" value={task} onFocus={(e) => e.target.value = null}
          onChange={(e) => {settask(e.target.value)}}/>
          <button className="btn btn-success" onClick={addTask}>ADD</button>
          <br />
          {taskListContent}
        </div>
      </div>
    </div>
  )
}
export default TodoList
