import React from 'react'
import ImgUploader from '../components/img-uploader'
import backend from '../services/backend'
import Async from 'react-promise'
import Select from 'react-select'
import {observer} from 'mobx-react'
import {observable} from 'mobx'
import 'react-select/dist/react-select.css!'

const state = observable({
  hosts: [],
  name: '',
  outdoors: true,
  geo: [],
  photos: [],
  link: '',
  phone: null,
  streetAddress: null,
  mail: null,
  forUpload: []
})

const getSports = () => {
  return backend('sportsEnum')().then((sports) => {
    return sports.map((sport) => {
      return {label: sport.title, value: sport.id}
    })
  })
}

const sportsPromise = getSports()

const newLocation = (props) => {
  const hosts = JSON.parse(JSON.stringify(state.hosts))
  return <div className='content'>
    <h2>Nové sportovište</h2>
  <div className="box">
    <Async promise={sportsPromise} then={(sports) => {
      return <Select
        name="sports-select"
        placeholder='vyber sporty'
        value={hosts}
        multi
        options={sports}
        onChange={(sports) => {
          state.hosts = sports
        }}
      />
    }} />
    <ImgUploader
      onGPSRead={(GPS) => {
        console.log(GPS)
      }}
      onImageRead={(img) => {
        forUpload.push(img)
      }}/>
  </div>


  </div>
}

export default observer(newLocation)
