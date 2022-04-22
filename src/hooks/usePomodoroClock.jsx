import { useState, useEffect } from 'react'

const usePomodoroClock = () => {
	const [status, setStatus] = useState('paused')
	const [time, setTime] = useState(1000)
	const [intervalId, setIntervalId] = useState(null)

	useEffect(() => {
		if(status === 'running') {
			const newInterval = setInterval(() => {
				setTime(x => x - 1)
			}, 1000)
			setIntervalId(newInterval)
		}
		if(status === 'paused' && intervalId) {
			clearInterval(intervalId)
		}
	}, [status])

	useEffect(() => {
		if(time === 0) setStatus('paused')
	}, [time])

	const start = () => {
		setStatus('running')
	}
	const pause = () => {
		setStatus('paused')
	}
	const restart = () => {
		setTime(1000)
		setStatus('paused')
	}

	return { start, pause, restart, status, time }
}

export default usePomodoroClock
