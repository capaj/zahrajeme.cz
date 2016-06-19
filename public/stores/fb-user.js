/* global FB */
import {observable} from 'mobx'
export const profile = observable({
  authResponse: null,
  id: null,
  picture: null,
  name: null
})

const loginCB = function (response) {
  if (response.status === 'connected') {
    // Logged in
    profile.authResponse = response.authResponse  // saving into the store

    FB.api('/me?fields=id,name,picture', function (response) {
      Object.assign(profile, response)
      console.log(response)
    })
  } else if (response.status === 'not_authorized') {
    // The person is logged into Facebook, but not this app

  } else {
    // The person is not logged into Facebook, so we're not sure if
    // they are logged into this app or not.

  }
}

export const login = function () {
  FB.login(loginCB, {scope: 'public_profile,email'})
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
