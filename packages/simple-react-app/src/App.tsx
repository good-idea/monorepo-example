import { useState } from 'react'
import './App.css'

function App() {
	const [serverTime, setServerTime] = useState<string | null>(null)

	const fetchServerTime = async () => {
		const result = await fetch('http://localhost:3001/api/time', {}).then(
			(response) => response.json(),
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
