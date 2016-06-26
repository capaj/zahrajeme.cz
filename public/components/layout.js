import React from 'react'
import {Link} from 'react-router'
import Profile from '../components/profile-management'

export default (props) => {
  return <div>
    <nav className='nav has-shadow'>
      <div className='nav-left'>
        <a className='nav-item' href='/'>
          Zahrajeme
        </a>
      </div>
      <div className='container'>
        <div className='nav-left'>
          <Link to='/events' className='nav-item is-tab' activeClassName='is-active'>Události</Link>
          <Link to='/locations' className='nav-item is-tab' activeClassName='is-active'>Sportoviště</Link>
          <Link to='/users' className='nav-item is-tab' activeClassName='is-active'>Uživatelé</Link>
          <Link to='/about' className='nav-item is-tab' activeClassName='is-active'>O nás</Link>
        </div>
      </div>
      <div className='nav-right'>
        <Profile />
      </div>
    </nav>
    <section className="section">
      <div className="container">
        {props.children}
      </div>
    </section>

  </div>
}
