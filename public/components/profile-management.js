import React from 'react'
import profile, {login} from '../stores/fb-user'
import {observer} from 'mobx-react'

const Profile = (props) => {
  if (profile.picture) {
    return <div><img src={profile.picture.data.url}></img>{profile.name}</div>
  }
  return <div onClick={login}>click to log in</div>
}

export default observer(Profile)
