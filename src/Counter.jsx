// src/Counter.jsx

import React from 'react';
import {screenStyle, buttonPanelStyle, buttonStyle} from './style.js'

export default class Counter extends React.Component {
	constructor() {
		super()
		this.state = {
			nb: 0,
			color: "red",
			nextColor: "blue",
			backgroundColor: "blue",
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
	
	changeColor(textColor, newBackgroundColor){
			this.setState({
			nextColor: this.state.color,
			color: textColor,
		})
	}
	
	render(){
		return(
			<div style = {screenStyle}>
				<NumberDisplay numberToDisplay={this.state.nb} textColor={this.state.color}/>
				<div className = "buttonPanel" style = {buttonPanelStyle}>
					<button onClick={ () => this.increment() } style = {buttonStyle}>
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
		display: 'flex',
		color : props.textColor,
		fontSize: '60px',
		marginLeft: '30px',
		justifyContent: 'center'
	}
	return (
		<h1 style={style}>{ props.numberToDisplay }</h1>
	)
} 