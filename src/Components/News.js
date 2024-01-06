import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class News extends Component {
  article = [];
  constructor (){
    super();
    this.state = {
      articles : this.article,
      loading : false,
      page : 1
    }
  }
  async componentDidMount(){
    // console.log("cdm");
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=5687a4fce24941f58504185b70dd7113";
    let data = await fetch(url);
    let parsedData = await data.json()
    // console.log(parsedData);
    this.setState({ articles: parsedData.articles })
}
  render() {
    return (
        <>
        <div className='container my-3'>
          <h2>Today's Top Headlines</h2>
            <div className="row">
            {this.state.articles.map((element)=>{
              return <div className="col-md-4 my-2" key={element.url}>
                     <Newsitem title ={element.title?element.title.slice(0,70):""} description = {element.description?element.description.slice(0,100):""} imageUrl= {!element.urlToImage?"https://static.feber.se/article_images/57/90/87/579087.jpeg":element.urlToImage} newsUrl = {element.url}/>
                     </div>
            })}
            </div>
        </div>
      </>
    )
  }
}
