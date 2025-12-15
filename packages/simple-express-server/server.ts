import express from 'express'
import _ from 'lodash'
const app = express()
const port = 3001
import { QueryPayload } from '@my-namespace/simple-shared-data'

app.use((_req, res, next) => {
	// Allow any website to connect
	res.setHeader('Access-Control-Allow-Origin', '*')

	// Continue to next middleware
	next()
})

app.get('/', (_req, res) => {
	const responseData: QueryPayload = {
		payload: _.snakeCase('Server data returned successfully'),
	}

	res.json(responseData)
})

app.get('/api/time', (_req, res) => {
	const now = new Date()
	const timeString = now.toLocaleString('en-US', {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit',
		timeZoneName: 'short',
	})

	const responseData = {
		payload: `The server's local time is: ${timeString}`,
	}

	res.send(responseData)
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})
