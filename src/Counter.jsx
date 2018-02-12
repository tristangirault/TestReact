// src/Counter.jsx

import React from 'react';

export default class Counter extends React.Component {
	constructor() {
		super()
		this.state = {
			nb: 0,
			color: "red",
			nextColor: "blue",
			shouldChangeColor: false,
		}
	}
	
	componentDidUpdate(){
		this.changeColorCondition()
	}
	
	changeColorCondition(){
		if(this.state.shouldChangeColor){
			if(this.state.nb % 2 == 0){
				this.changeColor(this.state.nextColor)
				this.setState({shouldChangeColor: false})
			}
		}
	}
	
	increment() {
		this.setState({
			nb: this.state.nb +1,
			shouldChangeColor: true
		})
	}
	
	reset() {
		this.setState({
			nb: 0,
			color: "red",
			nextColor: "blue",
			shouldChangeColor: false
		})
	}
	
	changeColor(textColor){
			this.setState({
			nextColor: this.state.color,
			color: textColor
		})
	}
	
	render(){
			const buttonPanelStyle = {
				flex: 2,
				flexDirection: 'row',
				marginLeft: '30px',
				marginTop: '60px',
				justifyContent: 'space-between',
			}
			
			const buttonStyle = {
				flex:1,
				marginLeft: '10px',
				width: '100px',
			}
		return(
			<div>
				<NumberDisplay
					numberToDisplay={this.state.nb}
					textColor={this.state.color}
					/>
					<div className = "buttonPanel" style = {buttonPanelStyle}>
					<button onClick={ ( ) => this.increment() } style = {buttonStyle}>
						+1
					</button>
					<button onClick={ () => this.reset() } style = {buttonStyle}>
						Reset
					</button>
					<button onClick={ () => this.changeColor(this.state.nextColor)} style = {buttonStyle}>
						Switch to {this.state.nextColor}
					</button>
				</div>
			</div>
		)
	}
}

function NumberDisplay(props)
{
	const style = {
		color : props.textColor,
		fontSize: '60px',
		marginTop: '120px',
		marginLeft: '177px'
	}
	return (
		<h1 style={style}>{ props.numberToDisplay }</h1>
	)
} 