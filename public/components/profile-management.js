import React from 'react'
import {Link} from 'react-router'
import profile, {login} from '../stores/fb-user'
import {observer} from 'mobx-react'
import backend from '../services/backend'

const Profile = (props) => {
  if (profile.picture) {
    return <Link to='/profile'>
      <div className='avatar-pic-text'>
        {profile.name} <img src={profile.picture.data.url}></img>
      </div>
    </Link>
  }
  return <a className='button is-info is-medium' onClick={() => {
    login().then((resp) => {
      console.log(resp)
      backend('auth')(resp.accessToken).then((user) => {
        console.log(user)
      })
    })
  }}>
  <span className='icon'>
   <i className='fa fa-facebook-official '></i>
 </span>  Přihlásit</a>
}

export default observer(Profile)
