import React, { Component } from 'react'

export default class Spinner extends Component {
  render() {
    return (
        <>
        <div className="text-centerjustify-content-center">
        <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>
        </div>
        </>
    )
  }
}
