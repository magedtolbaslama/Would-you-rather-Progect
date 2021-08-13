import React, { Component } from 'react'

//import User from './User'
// this declaration to import users who are allowed or aunthiniticated or not authenticated to enter the web site
import { AllowedUser, NotAllowedUser } from '../actions/authedUser';
// to redirect the user to other pages
import { Redirect, withRouter } from 'react-router-dom'


import {connect} from 'react-redux'


class AutheniticatedUserLogin extends Component {
	state = {
		Autheniticated_user_id: null,

		DashBoard: false,
	
	}

	LoginX = function(event) {
		const { Autheniticated_user_id } = this.state;

		const { dispatch } = this.props;
	
		dispatch(AllowedUser(Autheniticated_user_id));
	
		this.setState(function(XState) {

		  return {

			...XState,

			DashBoard: true,

		  };
		  
		});
	}
	
	SelectX = function(event) {

		const Autheniticated_user_id = event.target.value;
	
		this.setState(function(XState) {


		  return {
			...XState,

			Autheniticated_user_id,


		  };


		});
	}
	
	
	
	componentDidMount() {
		this.props.dispatch(NotAllowedUser())
	}

    render() {
		
		const { users } = this.props;
		const { Autheniticated_user_id, DashBoard } = this.state;
		
		const selected = Autheniticated_user_id ?
		 Autheniticated_user_id : -1
		 
		const { from } = this.props.location.state || { from: { pathname: '/dashboard'}}

		// redirect the user to other pages 
		if(DashBoard) {
			return <Redirect to={from} />
		}
        
        return (
		                 <div 
						 
						 
						 className='tile-item login'>

		                 <div 
				            className="tile-header">


					      <div>
						  Welcome To Would You Rather App
						  </div></div>
		                 <div
						  className='user-select'>

					        <div>
							Please sign in to continue
							
							</div>
					           <select
							    id="login-select"
								 value={selected}
								  onChange={(event) => this.SelectX(event)}>

                              
						      <option
						       value="-1"

						       disabled>
								   
							  Select user...


							  </option>




						{Object.keys(users).map(function(key) {

							return (

								<option


								 value={users[key].id}


								  key={key}>

									{users[key].name}

								</option>
							);
						})}


					</select>

				</div>

				<button
				onClick={(event) => this.LoginX(event)}
					
					disabled={Autheniticated_user_id === null}
					className='btn'
					>
					Login
				</button>
				
          </div>
		);  
    }
}

function mapS ({users}) {  
    return {
      users,
    };
  }

export default withRouter(connect(mapS)(AutheniticatedUserLogin));