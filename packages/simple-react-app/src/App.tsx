import { useState } from 'react'
import './App.css'

const API_ROOT = process.env.REACT_APP_API_ROOT
if (!API_ROOT) {
	throw new Error('REACT_APP_API_ROOT environment variable is required')
}

function App() {
	const [serverTime, setServerTime] = useState<string | null>(null)

	const fetchServerTime = async () => {
		const result = await fetch(`${API_ROOT}/api/time`, {}).then((response) =>
			response.json(),
		)
		console.log({ result })
		setServerTime(result.payload)
	}

	return (
		<div className="app-wrapper">
			<button onClick={fetchServerTime}>Get the time</button>
			{serverTime ? <p>{serverTime}</p> : null}
		</div>
	)
}

export default App
