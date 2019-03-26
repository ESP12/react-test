import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// function Clock(props){
// 	return(
// 		<div>
// 			<h1>Hello World!</h1>
// 			<h2>It is {props.date.toLocaleTimeString()}.</h2>
// 		</div>
// 	);
// }




// class Clock extends React.Component{
// 	constructor(props){
// 		super(props);
// 		this.state = {
// 			date: new Date(),
// 			comment: "Welcome"
// 		};
// 	}

// 	componentDidMount(){
// 		this.timerID = setInterval(
// 			() => this.tick(),
// 			1000
// 		);
// 	}

// 	componentWillUnmount(){
// 		clearInterval(this.timerID);
// 	}

// 	tick(){
// 		if (this.state.comment == "Welcome") {
// 			this.setState({
// 				comment: "have a great day!",
// 				date: new Date()
// 			})
// 		}else{
// 			this.setState({
// 				comment: "Welcome",
// 				date: new Date()
// 			})			
// 		}

		
// 	}

// 	render(){
// 		return(
// 			<div>
// 	 			<h1>Hello {this.state.comment}</h1>
// 	 			<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
// 	 		</div>
// 		);
// 	}
// }

// 	class Toogle extends React.Component{
// 		constructor(props){
// 			super(props);
// 			this.state = {isToggleOn : true};

// 			this.handleClick = this.handleClick.bind(this);
// 		}

// 		handleClick(){
// 			this.setState(
// 				state => ({
// 					isToggleOn : !state.isToggleOn	
// 				})
// 			);
// 		}

// 		render(){
// 			return (
// 				<button onClick={this.handleClick}>
// 					{this.state.isToggleOn ? 'ON' : 'OFF'}
// 				</button>
// 			)
// 		}
// 	}

	class LoginControl extends React.Component{
		constructor(props){
			super(props);
			this.handleLoginClick = this.handleLoginClick.bind(this);
			this.handleLogoutClick = this.handleLogoutClick.bind(this);
			this.state = {isLoggedIn: false};
		}

		handleLoginClick(){
			this.setState({
				isLoggedIn: true
			})
		}

		handleLogoutClick(){
			this.setState({
				isLoggedIn: false
			})
		}

		render(){
			const isLoggedIn = this.state.isLoggedIn;

			let button;

			if (isLoggedIn) {
				button = <LogoutButton onClick={this.handleLogoutClick}/>;
			}else{
				button = <LoginButton onClick={this.handleLoginClick}/>;
			}

			return (
				<div>
					<Greeting isLoggedIn={isLoggedIn}/>
					{button}
				</div>
			)
		}
	}

	function UserGreeting(props){
		return <h1>Welcome Back User!</h1>;
	}

	function GuestGreeting(props){
		return <h1>Hello Guest	</h1>;
	}

	function Greeting(props){
		const isLoggedIn = props.isLoggedIn;

		if (isLoggedIn) {
			return <UserGreeting/>
		}else{
			return <GuestGreeting/>
		}
	}

	function LoginButton(props){
		return (
			<button onClick={props.onClick}>
				Login
			</button>
		);
	}

	function LogoutButton(props){
		return (
			<button onClick={props.onClick}>
				Logout	
			</button>
		);
	}



ReactDOM.render(
  <LoginControl/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
