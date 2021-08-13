import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
    
class Nav extends Component {
    render() {
        const { user, authedUser } = this.props
        const avatar = user ? user.avatarURL : 'placeholder.png'
        const name = user ? user.name : ''
        return (
    
        //activeClassName is not working...some issue in react-router-dom
        <nav className='nav'>
            <ul>
                <li>
                    <NavLink to='/dashboard' exact activeClassName='active'>
                    &nbsp; &nbsp; &nbsp; &nbsp;  Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/add' exact activeClassName='active'>
                        New Question
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/leaderboard' exact activeClassName='active'>
                        Leader Board &nbsp; &nbsp; &nbsp; &nbsp;
                    </NavLink>
                </li>
                {
                    authedUser
                    && <li className="user-info">
                            <NavLink to='/' exact activeClassName='active'>
                                <div className="nav-user">
                                    <span>Hello {name}</span>
                                    <img
                                    src={avatar}
                                    alt={`Avatar of ${authedUser}`}
                                    className='nav-avatar'
                                    />
                                    <span>Logout &nbsp; &nbsp; &nbsp;</span>
                                </div>
                            </NavLink>
                        </li>
                }
            </ul>
        </nav>
    )
    }
}

function mapStateToProps( { authedUser, users}, props) {
    return {
        authedUser,
        users,
        user: users[authedUser]
    }

}
export default connect(mapStateToProps)(Nav)