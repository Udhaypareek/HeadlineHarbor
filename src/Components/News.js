import React,{useState,useEffect} from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function News(props) {
  
const capitalizeFirstLetter = (string)=> {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
const [articles,setarticles] = useState([]);
const [loading, setloading] = useState(true);
const [page, setPage] = useState(1);
const [totalResults, setTotalResults] = useState(0);

useEffect(()=>{
  document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`
  updateNews();
  // eslint-disable-next-line
},[])

const updateNews= async ()=>{
  props.setProgress(10);
  // console.log(props.apiKey);
  // console.log(process.env.REACT_APP_NEWS_API);
  // console.log(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${this.state.page}&pageSize=${props.pageSize}`);
  const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=5687a4fce24941f58504185b70dd7113&page=${page}&pageSize=${props.pageSize}`;
  setloading(true);
  let data = await fetch(url);
  props.setProgress(30);
  let parsedData = await data.json();
  props.setProgress(70);
  setarticles(parsedData.articles);
  setTotalResults(parsedData.totalResults);
  setloading(false);
  props.setProgress(100);
}
const fetchMoreData = async () => {
  const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=5687a4fce24941f58504185b70dd7113&page=${page}&pageSize=${props.pageSize}`;
  setPage(page + 1);
  let data = await fetch(url);
  let parsedData = await data.json();
  setarticles(articles.concat(parsedData.articles));
  setTotalResults(parsedData.totalResults);
};
    return (
        <>
        <h1 className="text-center" style={{ margin: '35px 0px' }}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
          {loading && <Spinner/>}
          <InfiniteScroll
            dataLength={articles.length} //This is important field to render the next data
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner/>}
            >
          <div className="container">
          <div className="row">
            {!loading && articles.map((element)=>{
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
News.defaultProps = {
  country: 'in',
  pageSize: 9, 
  category: 'general',
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number, 
  apiKey: PropTypes.string, 
  category: PropTypes.string,
}