import React, { Component } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

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
      page : 1 ,
      totalResults:0
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`
  }
  async componentDidMount(){
    this.updateNews();
}
async updateNews(){
  this.props.setProgress(10);
  const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=5687a4fce24941f58504185b70dd7113&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  this.setState({ loading: true });
  let data = await fetch(url);
  this.props.setProgress(30);
  let parsedData = await data.json();
  this.props.setProgress(70);
  this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
  })
  this.props.setProgress(100);
}
fetchMoreData = async () => {
  this.setState({ page: this.state.page + 1 })
  const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=5687a4fce24941f58504185b70dd7113&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  let data = await fetch(url);
  let parsedData = await data.json();
  this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults
  })
};
  render() {
    return (
        <>
        <h1 className="text-center" style={{ margin: '35px 0px' }}>NewsMonkey -   Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
          {this.state.loading && <Spinner/>}
          <InfiniteScroll
            dataLength={this.state.articles.length} //This is important field to render the next data
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner/>}
            >
          <div className="container">
          <div className="row">
            {!this.state.loading && this.state.articles.map((element)=>{
              return <div className="col-md-4 my-2" key={element.url}>
                     <Newsitem author = {element.author} source={element.source.name} date = {element.publishedAt} title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/> 
                     </div>
            })}
            </div>
            </div>
            </InfiniteScroll>
      </>
    )
  }
}
