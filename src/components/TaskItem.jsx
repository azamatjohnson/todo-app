import { useState } from 'react'

// Library import
import {
  CheckIcon,
  PencilSquareIcon,
  TrashIcon
} from '@heroicons/react/24/outline'

// Styles module import
import styles from './TaskItem.module.css'

const TaskItem = ({ task, deleteTask, updateTask, enterEditMode }) => {
  const [isChecked, setIsChecked] = useState(task.checked)

  const handleCheckboxChange = (e) => {
    setIsChecked(!isChecked)
    updateTask(task.id)
  }

  return (
    <li className={styles.task}>
      <div className={styles['task-group']}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={isChecked}
          name={task.name}
          id={task.id}
          onChange={handleCheckboxChange}
        />
        <label className={styles.label} htmlFor={task.id}>
          {task.name}
          <p className={styles.checkmark}>
            <CheckIcon strokeWidth={2} width={24} height={24} />
          </p>
        </label>
      </div>

      <div className={styles['task-group']}>
        <button
          className="btn"
          onClick={() => enterEditMode(task)}
          aria-label={`Update ${task.name} task`}
        >
          <PencilSquareIcon width={24} height={24} />
        </button>

        <button
          className={`btn ${styles.delete}`}
          onClick={() => deleteTask(task.id)}
          aria-label={`Delete ${task.name} task`}
        >
          <TrashIcon width={24} height={24} />
        </button>
      </div>
    </li>
  )
}

export default TaskItem
