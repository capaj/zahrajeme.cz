import React from 'react'
import Profile from '../components/profile-management'

export default class Home extends React.Component {
  render () {
    return <div>
      <Profile />
      <h2 className='title'>Mapa událostí</h2>
        <span className="icon">
        <i className="fa fa-home"></i>
      </span>
    </div>
  }
}
