import { useState } from 'react'

// Custom hooks
import useLocalStorage from './hooks/useLocalStorage'

// Custom components
import CustomForm from './components/CustomForm'
import TaskList from './components/TaskList'
import EditForm from './components/EditForm'
import ThemeSwitcher from './components/ThemeSwitcher'

function App() {
  const [tasks, setTasks] = useLocalStorage('react-todo.tasks', [])
  const [editedTask, setEditedTask] = useState(null)
  const [isEditing, setIsEditing] = useState(false)
  const [previousFocusEl, setPreviousFocusEl] = useState(false)

  const addTask = (task) => {
    setTasks((prevState) => [...prevState, task])
  }

  const deleteTask = (id) => {
    setTasks((prevState) => prevState.filter((t) => t.id !== id))
  }

  const updateTask = (id) => {
    setTasks((prevState) =>
      prevState.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t))
    )
  }

  const changeTask = (task) => {
    setTasks((prevState) =>
      prevState.map((t) => (t.id === task.id ? { ...t, name: task.name } : t))
    )
    closeEditMode()
  }

  const closeEditMode = () => {
    setIsEditing(false)
    previousFocusEl.focus()
  }

  const enterEditMode = (task) => {
    setEditedTask(task)
    setIsEditing(true)
    setPreviousFocusEl(document.activeElement)
  }

  return (
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>
      {isEditing && (
        <EditForm
          editedTask={editedTask}
          changeTask={changeTask}
          closeEditMode={closeEditMode}
        />
      )}
      <CustomForm addTask={addTask} />
      {tasks && (
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          updateTask={updateTask}
          enterEditMode={enterEditMode}
        />
      )}
      <ThemeSwitcher />
    </div>
  )
}

export default App
