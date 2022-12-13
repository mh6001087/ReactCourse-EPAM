const Button = (props) => {
	const handleClick = () => {
		console.log(props.text);
	};

	return <button onClick={handleClick}>{props.text}</button>;
};

export default Button;
