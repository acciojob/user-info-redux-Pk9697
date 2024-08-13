import React from 'react'
import './../styles/App.css'
import { useDispatch, useSelector } from 'react-redux'
import { changeInput } from '../redux'

const App = () => {
	const { name, email } = useSelector((state) => state)
	const dispatch = useDispatch()

	const handleChange = (e) => {
		const { name, value } = e.target
		dispatch(changeInput({ name, value }))
	}

	return (
		<div>
			{/* Do not remove the main div */}
			<h1>User Information</h1>
			<label htmlFor='name'>
				Name:{' '}
				<input name='name' onChange={handleChange} value={name} id='name' type='text' />
			</label>
			<label htmlFor='email'>
				Email:{' '}
				<input name='email' onChange={handleChange} value={email} id='email' type='email' />
			</label>

			<p>Current values in store:</p>
			<p>Name - {name}</p>
			<p>Email - {email}</p>
		</div>
	)
}

export default App
