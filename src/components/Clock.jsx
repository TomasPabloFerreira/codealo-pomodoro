import { Duration } from 'luxon'

const Clock = ({ time }) => {
	const formattedTime = Duration.fromMillis(time * 1000).toFormat('hh:mm:ss')
	
	return (
		<div className="w-[400px] h-[400px] bg-blue-500 rounded-full flex justify-center items-center mx-auto mt-12">
			<h1 className="text-6xl font-bold text-white">{formattedTime}</h1>
		</div>
	)
}

export default Clock
