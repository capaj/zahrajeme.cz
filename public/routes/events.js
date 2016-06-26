import React from 'react'
import {Link} from 'react-router'

export default class Events extends React.Component {
  render () {
    return <div>
      <Link to='/events/new' className="button is-success">Přidat událost</Link>
      <h2 className='title'>Mapa událostí</h2>
      <span className='icon'>
        <i className='fa fa-home'></i>
      </span>
    </div>
  }
}
