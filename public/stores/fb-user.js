/* global FB */
import {observable} from 'mobx'
import _ from 'lodash'

const defaultValues = {
  authResponse: null,
  id: null,
  picture: null,
  name: null
}
export const profile = observable(_.clone(defaultValues))

export const login = function () {
  return new Promise((resolve, reject) => {
    FB.login(function (response) {
      if (response.status === 'connected') {
        // Logged in
        resolve(response.authResponse)

        FB.api('/me?fields=id,name,picture', function (response) {
          Object.assign(profile, response)
        })
      } else if (response.status === 'not_authorized') {
        // The person is logged into Facebook, but not this app
        reject(response.status)
      } else {
        // The person is not logged into Facebook, so we're not sure if
        // they are logged into this app or not.
        reject(response.status)
      }
    }, {scope: 'public_profile,email'})
  })
}

export const logout = () => {
  return new Promise((resolve, reject) => {
    FB.logout(function(response) {
      Object.assign(profile, defaultValues)
      resolve(response)
    })
  })
}

window.fbAsyncInit = function () {
  FB.init({
    appId: '311467912374535',
    xfbml: true,
    version: 'v2.6'
  })
};
(function (d, s, id) {
  var js
  var fjs = d.getElementsByTagName(s)[0]
  if (d.getElementById(id)) { return }
  js = d.createElement(s); js.id = id
  js.src = '//connect.facebook.net/en_US/sdk.js'
  fjs.parentNode.insertBefore(js, fjs)
}(document, 'script', 'facebook-jssdk'))

export default profile
