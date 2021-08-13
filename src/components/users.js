import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

class users extends Component{
  
  }

 
function map_State_sent_To_Props({users},{id}){
  const user = users[id];
  return {
    user
  }
}

export default connect(map_State_sent_To_Props)(users)
