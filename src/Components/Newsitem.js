import React, { Component } from 'react'

export default class Newsitem extends Component {
  render() {
    let {title , description} = this.props;
    return (
      <>
      <div className="card" style={{width: "18rem"}}>
        <img src="https://cdn.lesnumeriques.com/optim/news/21/217129/ccc335ab-les-voitures-hyundai-et-kia-s-integrent-a-l-ecosysteme-smartthings-de-samsung__1200_630__0-58-1800-1003.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>
      </>
    )
  }
}
