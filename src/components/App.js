
import { connect } from 'react-redux'
import React, { Component, Fragment } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Dashboard from './Dashboard';
import Login from './UserLogin'

import Leaderboard from './Leaderboard'
import { handleInitialData } from '../actions/shared'
//import LoadingBar from 'react-redux-loading'
import Nav from './NavBar'
import QuestionItem from './QuestionItem'


import NewQuest from './NewQuest';
import ProtectedRoute from './ProtectedRoute'
import page404 from './page404'

class App extends Component {
  	componentDidMount() {

    	this.props.dispatch(handleInitialData())
	}

	render() {

		return (

			<Router>

				<Fragment>
					<div className='container'>


						<Nav />

							<div className="main-content"> 

								<Switch>

									<Route path="/" exact component={Login}/>

									<ProtectedRoute
									 path='/dashboard'
									 exact component={Dashboard} 
									/>

									<ProtectedRoute
									 path='/add'
									  exact component={NewQuest} 
									  />
									<ProtectedRoute
									 path='/question/:id' 
									 component={QuestionItem} 
									 />
									<ProtectedRoute
									 path='/leaderboard' 
									 component={Leaderboard} 
									 />
									<Route
									 path="/not-found" 
									 component={page404}
									  />


								</Switch>
							</div>
					</div>
				</Fragment>
			</Router>
		)
	}
}



export default connect()(App);
