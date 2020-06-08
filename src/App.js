import React from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import CustomButton from './elements/CustomButton';
import CustomInput from './elements/CustomInput';
import H1 from './elements/H1';

const theme = {
	primary: 'red',
	secondary: 'green',
	alert: 'orange',
	font: 'sans-serif',
	customInputTheme: {
		inputPadding: '10px 10px',
		inputMargin: '15px',
		inputBorder: 'none'
	},
	buttonTextColor: 'purple'
};

const SecondSet = () => {
	return (
		<div style={
			{
				padding: '10px',
				border: '2px solid',
				margin: "25px 150px 0px 150px"
			}}>
				<input type="text" />
				<button>I did it!</button>
		</div>
	);
};

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<H1>Styled Components</H1>
				<form action="">
					<CustomInput type="text" padding="inputPaddding" margin="inputMargin" border="inputBorder" />
					<CustomButton color="alert">Create</CustomButton>
					<SecondSet/>
				</form>
			</div>
		</ThemeProvider>
	);
}

export default App;
