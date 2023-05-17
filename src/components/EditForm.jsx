import { useEffect, useState } from 'react'

// library imports
import { CheckIcon } from '@heroicons/react/24/solid'

const EditForm = ({ editedTask, changeTask, closeEditMode }) => {
  const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name)

  useEffect(() => {
    const closeModalIfEscape = (e) => {
      e.key === 'Escape' && closeEditMode()
    }

    window.addEventListener('keydown', closeModalIfEscape)

    return () => {
      window.removeEventListener('keydown', closeModalIfEscape)
    }
  }, [closeEditMode])

  const handleFormSubmit = (e) => {
    e.preventDefault()
    changeTask({ ...editedTask, name: updatedTaskName })
  }

  return (
    <div
      role="dialog"
      aria-labelledby="editTask"
      onClick={(e) => {
        e.target === e.currentTarget && closeEditMode()
      }}
    >
      <form className="todo" onSubmit={handleFormSubmit}>
        <div className="wrapper">
          <input
            className="input"
            type="text"
            id="editTask"
            value={updatedTaskName}
            onInput={(e) => setUpdatedTaskName(e.target.value)}
            required
            autoFocus
            maxLength={60}
            placeholder="Update Task"
          />
          <label className="label" htmlFor="editTask">
            Update Task
          </label>
        </div>
        <button
          className="btn"
          type="submit"
          aria-label={`Confirm edited task to now read ${updatedTaskName}`}
        >
          <CheckIcon strokeWidth={2} height={24} width={24} />
        </button>
      </form>
    </div>
  )
}

export default EditForm
