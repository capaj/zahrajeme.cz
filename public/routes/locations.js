import React from 'react'
import Async from 'react-promise'
import backend from '../services/backend'
import {Link} from 'react-router'
export default (props) => {
  return <div>
    <Async promise={backend('location.find')()} then={(locations) => {
      return <ul>
        {locations.map((location) => {
          return <li>location.name</li>
        })}
      </ul>
    }} />

  <Link to='locations/new'>Přidat sportoviště</Link>
  </div>
}
