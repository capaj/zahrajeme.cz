import React from 'react'
import { browserHistory } from 'react-router'
import backend from '../services/backend'
import fbUser, {logout} from '../stores/fb-user'

export default (props) => {
  return <div>
    Profil
    <a className="button is-danger" onClick={() => {
      backend('unauth')().then(() => {
        browserHistory.push('/')
        logout()
      })
    }}>Odhlásit se</a>
  </div>
}
