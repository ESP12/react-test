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



	function Mailbox(props){
		const unreadMessages = props.unreadMessages;
		return (
			<div>
				<h1>Hello!</h1>
				{unreadMessages.length > 0 && 
					<h2>
						You have {unreadMessages.length} unread messages.
					</h2>
				}
			</div>
		);
	}

	const messages = ['React','Re: React', 'Re:Re: React'];

	function WarningBanner(props){
		if (!props.warn) {
			return null;
		}

		return (
			<div className="warning">
			 Warning!
			</div>
		);
	}

	class Page extends React.Component{
		constructor(props){
			super(props);
			this.state = {showWarning: true};
			this.handleToggleClick = this.handleToggleClick.bind(this);
		}

		handleToggleClick(){
			this.setState(state => ({
				showWarning: !state.showWarning
			}))
		}

		render(){
			return(
				<div>
					<WarningBanner warn={this.state.showWarning}/>
					<button onClick={this.handleToggleClick}>
						{this.state.showWarning ? 'Hide' : 'Show'}
					</button>
				</div>
			);
		}
	}


	// function NumberList(props){
	// 	const numbers = props.numbers;
	// 	const listItems = numbers.map((number,index) => 
	// 		<li key={index}>
	// 			{number}
	// 		</li>
	// 	);


	// 	return (
	// 		<ul>{listItems}</ul>
	// 	)
	// }

	function ListItem(props){
		return <li>{props.value}</li>
	}

	function NumberList(props){
		const numbers = props.numbers;
		const listItems = numbers.map((number) => 
			<ListItem key={number.toString()} value={number}/>
		)

		return (
			<ul>
				{listItems}
			</ul>
		)
	}

	const numbers = [1,2,3,4,5];
	const listItems = numbers.map((number) =>
		<li>{number}</li>
	);

	function Blog(props){
		const sidebar = (
			<ul>
				{props.posts.map((post) => 
					<li key={post.id}>
						{post.title}
					</li>	
				)}
			</ul>
		);

		const content = props.posts.map((post) => 
			<ul key={post.id}>
				<h3>{post.title}</h3>
				<p>{post.content}</p>
			</ul>
		)

		return(
			<div>
				{sidebar}
				<hr/>
				{content}
			</div>
		);
	}

	const posts = [
		{id:1, title: 'Hello World', content: 'Welcome to learning React!'},
		{id:2, title: 'Installation', content: 'You can install React from npm.'}
	]

	class NameForm extends React.Component{
		constructor(props){
			super(props);
			this.state = {value:''};
			this.handleChange = this.handleChange.bind(this)
			this.handleSubmit = this.handleSubmit.bind(this)
		}

		handleChange(event){
			this.setState({value:event.target.value});
		}

		handleSubmit(event){
			alert('A name was submitted: ' + this.state.value);
			event.preventDefault();
		}

		render(){
			return(
				<form onSubmit={this.handleSubmit}>
					<label>
						Name:
						<input type="text" value={this.state.value} onChange={this.handleChange}/>
					</label>
					<input type="submit" value="Submit"/>
				</form>
			);
		}
	}

	class EssayForm extends React.Component{
		constructor(props){
			super(props);
			this.state = {
				value: 'Please write an essay'
			}
			this.handleChange = this.handleChange.bind(this)
			this.handleSubmit = this.handleSubmit.bind(this)
		}

		handleChange(event){
			this.setState({value:event.target.value});
		}

		handleSubmit(event){
			alert('An essay was submitted: ' + this.state.value);
			event.preventDefault();
		}

		render(){
			return(
				<form onSubmit={this.handleSubmit}>
					<label>
						Essay:
						<textarea value={this.state.value} onChange={this.handleChange}/>
					</label>
					<input type="submit" value="Submit"/>
				</form>
			);
		}
	}

	class FlavorForm extends React.Component{
		constructor(props){
			super(props);
			this.state = {value: 'coconut'}
			this.handleChange = this.handleChange.bind(this)
			this.handleSubmit = this.handleSubmit.bind(this)
		}

		handleChange(event){
			this.setState({
				value: event.target.value
			})
		}

		handleSubmit(event){
			alert('Your favorite flavor is: ' + this.state.value);
			event.preventDefault();
		}

		render(){
			return(
				<form onSubmit={this.handleSubmit}>
					<label>
						Pick your fruit
						<select value={this.state.value} onChange={this.handleChange}>
							<option value="grapefruit">Grapefruit</option>
							<option value="lime">Lime</option>
							<option value="coconut">Coconut</option>
							<option value="mango">Mango</option>
						</select>
					</label>
				</form>
			);
		}
	}

	class Reservation extends React.Component{
		constructor(props){
			super(props);
			this.state = {
				isGoing:true,
				numberOfGuests: 2
			};
			this.handleInputChange = this.handleInputChange.bind(this)
		}

		handleInputChange(event){
			const target = event.target;
			const value = target.type === 'checkbox' ? target.checked : target.value;
			const name = target.name;

			this.setState({
				[name] : value
			})
		}

		render(){
			return(
				<form>
					<label>
						Is going: 
						<input	
							name="isGoing"
							type="checkbox"
							checked={this.state.isGoing}
							onChange={this.handleInputChange}
						/>
					</label>
					<br/>
					<label>
						Number of guests:
						<input
							name="numberOfGuests"
							type="number"
							value={this.state.numberOfGuests}
							onChnage={this.handleInputChange}
						/>
					</label>
				</form>
			);
		}
	}

ReactDOM.render(
 	<Reservation/>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
