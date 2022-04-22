import IconButton from './IconButton'
import PlayIcon from './icons/PlayIcon'
import PauseIcon from './icons/PauseIcon'
import RestartIcon from './icons/RestartIcon'

const Buttons = ({ start, pause, restart, status }) => {
	return (
		<div className="flex justify-between max-w-[250px] mx-auto mt-12">
			{status === 'running' ? (
				<IconButton
					icon={<PauseIcon className="w-8 h-8 text-white" />}
					onClick={pause}
					color="bg-red-500"
				/>
			) : (
				<IconButton
					icon={<PlayIcon className="w-8 h-8 text-white" />}
					onClick={start}
					color="bg-green-500"
				/>
			)}
			<IconButton
				icon={<RestartIcon className="w-8 h-8 text-white" />}
				onClick={restart}
				color="bg-blue-700"
			/>
		</div>
	)
}

export default Buttons
