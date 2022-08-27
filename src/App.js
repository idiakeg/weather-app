import "./App.css";

function App() {
	const dummy = process.env.REACT_APP_DUMMY_TEXT;
	const handleClick = () => {
		console.log("button was clicked");
		console.log(dummy);
	};
	return (
		<div className="container">
			<button onClick={handleClick}>click</button>
		</div>
	);
}

export default App;
