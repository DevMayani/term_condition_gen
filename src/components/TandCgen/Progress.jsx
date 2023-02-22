import React from 'react'
import './style.css'

const Progress = ({done}) => {
	const [style, setStyle] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		
		setStyle(newStyle);
	}, 200);
	
	return (
		<div className='w-[300px] h-[30px] md:w-[500px]' id="progressb">
			<div className="progress-done" style={style}>
				{done}%
			</div>
		</div>
	)
}


export default Progress
