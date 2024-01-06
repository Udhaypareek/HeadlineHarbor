import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class News extends Component {
  render() {
    return (
        <>
        <div className='container my-3'>
            <div className="row">
            <div className="col-md-4">
            <Newsitem title = "my title" description = "my description"/>
            </div>
            <div className="col-md-4">
            <Newsitem/>
            </div>
            <div className="col-md-4">
            <Newsitem/>
            </div>
            </div>
        </div>
      </>
    )
  }
}
