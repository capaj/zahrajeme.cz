import React from 'react'

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
          <a className='nav-item is-tab is-active'>Události</a>
          <a className='nav-item is-tab'>Sportoviště</a>
        </div>
      </div>
    </nav>
    {props.children}
  </div>
}
