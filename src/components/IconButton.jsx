const IconButton = ({ icon, color, onClick }) => {
	return (
		<button
			className={`${color} rounded-full w-20 h-20 flex justify-center items-center`}
			onClick={onClick}
		>
			{icon}
		</button>
	)
}

export default IconButton
