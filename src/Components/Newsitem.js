import React, { Component } from 'react'

export default class Newsitem extends Component {
  render() {
    let {title , description , imageUrl , newsUrl} = this.props;
    return (
      <>
      <div className="card" style={{width: "18rem"}}>
        <img src={!imageUrl?"https://static.feber.se/article_images/57/90/87/579087.jpeg":imageUrl} alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary">Read more</a>
        </div>
        </div>
      </>
    )
  }
}
