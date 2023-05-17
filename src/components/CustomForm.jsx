import { useState } from 'react'

// library imports
import { PlusIcon } from '@heroicons/react/24/solid'

const CustomForm = ({ addTask }) => {
  const [task, setTask] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault()
    addTask({
      name: task,
      checked: false,
      id: Date.now()
    })
    setTask('')
  }

  return (
    <form className="todo" onSubmit={handleFormSubmit}>
      <div className="wrapper">
        <input
          className="input"
          type="text"
          id="task"
          value={task}
          onInput={(e) => setTask(e.target.value)}
          required
          autoFocus
          maxLength={60}
          placeholder="Enter Task"
        />
        <label className="label" htmlFor="task">
          Enter Task
        </label>
      </div>
      <button className="btn" type="submit" aria-label="Add Task">
        <PlusIcon />
      </button>
    </form>
  )
}

export default CustomForm
