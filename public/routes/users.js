import React from 'react'
import backend from '../services/backend'
import {observer} from 'mobx-react'
import {observable} from 'mobx'
import Async from 'react-promise'

export default observer((props) => {
  return <Async promise={backend('user.find')()} then={(users) => {
    return <div className="columns is-multiline is-mobile">
      {users.map((u) => {
        return <div className="column is-half">
          {u.fb.name}
        </div>
      })}
    </div>
    }} />
})
