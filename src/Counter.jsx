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
	
	renderNumber(){
		<NumberDisplay
			numberToDisplay={this.state.nb}
			textColor={this.state.color}
		/>
	}
	
	renderButtons(){
		<div>
			<button onClick={ ( ) => this.increment() }>
				+1
			</button>
			<button onClick={ () => this.reset() }>
				Reset
			</button>
			<button onClick={ () => this.changeColor(this.state.nextColor)}>
				Switch to {this.state.nextColor}
			</button>
		</div>
	}
	
	render(){
		const number = (
			<div className = "number" key = {0} height = "400px">
				{this.renderNumber()}
			</div>
		)
		
		const buttons = (
		<div className = "buttons" key = {1}>
				{this.renderButtons()}
			</div>
		)
		return(
			<div className = "panel">
				{[number, buttons]}
			</div>
		)
	}
}

function NumberDisplay(props)
{
	const style = {
		color : props.textColor,
		fontSize: '60px'
	}
	return (
		<h1 style={style}>{ props.numberToDisplay }</h1>
	)
} 