import { useState } from 'react'
import toast from 'react-hot-toast'
import { addTask } from '../features/task/taskSlice'
import { useAppDispatch } from '../hooks'

function TaskForm() {
	const [task, setTask] = useState('')
	const dispatch = useAppDispatch()

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (!task.trim()) {
			toast.error('Please enter a task')
			return
		}
		dispatch(
			addTask({
				id: new Date().getTime().toString(),
				name: task,
				isCompleted: false,
			})
		)
		setTask('')
	}

	return (
		<form onSubmit={handleSubmit} className='form task-form'>
			<div className='form-row'>
				<label htmlFor='task' className='form-label'>
					Please enter your task
				</label>
				<input
					type='text'
					id='task'
					className='form-input'
					value={task}
					onChange={e => setTask(e.target.value)}
					aria-label='Enter your task here'
				/>
			</div>

			<button
				type='submit'
				className='btn btn-primary submit-btn'
				aria-label='Add task'
			>
				Add Task
			</button>
		</form>
	)
}
export default TaskForm
