import React, { Component } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export default class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 9, 
    category: 'general',
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number, 
    category: PropTypes.string,
  }
  capitalizeFirstLetter = (string)=> {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

  constructor (props){
    super(props);
    this.state = {
      articles : [],
      loading : false,
      page : 1 
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`
  }
  async componentDidMount(){
    this.updateNews();
}
handlePrevClick = async () => {
  this.setState({ page: this.state.page - 1 });
  this.updateNews();
}
handleNextClick = async () => {
  this.setState({ page: this.state.page + 1 });
  this.updateNews();
}
async updateNews(){
  const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=5687a4fce24941f58504185b70dd7113&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  this.setState({ loading: true });
  let data = await fetch(url);
  let parsedData = await data.json()
  this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
  })
}
  render() {
    return (
        <>
        <div className='container my-3'>
        <h1 className="text-center" style={{ margin: '35px 0px' }}>NewsMonkey - top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
          {this.state.loading && <Spinner/>}
            <div className="row">
            {!this.state.loading && this.state.articles.map((element)=>{
              return <div className="col-md-4 my-2" key={element.url}>
                     <Newsitem author = {element.author} source={element.source.name} date = {element.publishedAt} title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/> 
                     </div>
            })}
            </div>
              <div className="container d-flex justify-content-between">
              <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr;Previous</button>
              <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
              </div>
        </div>
      </>
    )
  }
}
