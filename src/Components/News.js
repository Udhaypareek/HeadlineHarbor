import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class News extends Component {
  article = [
    
{
    "source": {
        "id": null,
        "name": "Tech Xplore"
    },
    "author": "Science X",
    "title": "Tesla to recall 1.6 mn cars in China to fix steering software: regulator",
    "description": "Tesla is recalling more than 1.6 million electric vehicles in China, the country's market regulator said Friday, owing to software issues that could pose safety risks while driving.",
    "url": "https://techxplore.com/news/2024-01-tesla-recall-mn-cars-china.html",
    "urlToImage": "https://scx2.b-cdn.net/gfx/news/hires/2016/teslamodel3.jpg",
    "publishedAt": "2024-01-05T13:07:50Z",
    "content": "Tesla is recalling more than 1.6 million electric vehicles in China, the country's market regulator said Friday, owing to software issues that could pose safety risks while driving.\r\nThe recallsparke… [+1518 chars]"
},
{
    "source": {
        "id": null,
        "name": "Forbes"
    },
    "author": "Siladitya Ray, Forbes Staff, \n Siladitya Ray, Forbes Staff\n https://www.forbes.com/sites/siladityaray/",
    "title": "Tesla Recalls 1.6 Million Cars In China To Fix Driving Assist And Faulty Door Locks",
    "description": "This follows the recall of more than 2 million Tesla cars in the U.S. after a federal investigation found flaws in its driving assist feature and door latches.",
    "url": "https://www.forbes.com/sites/siladityaray/2024/01/05/tesla-recalls-16-million-cars-in-china-to-fix-driving-assist-and-faulty-door-locks/",
    "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/6597fc76a22e618bcf0569b4/0x0.jpg?format=jpg&crop=1940,1090,x0,y100,safe&height=900&width=1600&fit=bounds",
    "publishedAt": "2024-01-05T13:06:48Z",
    "content": "Tesla has recalled more than 1.6 million electric vehicles in China to fix its driving assist feature to prevent misuse by drivers and remedy an issue with door latches on some models, Chinese author… [+2484 chars]"
},
{
  "source": {
      "id": null,
      "name": "Biztoc.com"
  },
  "author": "wsj.com",
  "title": "Tesla to Recall Over 1.6 Million EVs in China Over Autosteering, Door Latch Concerns",
  "description": "HONG KONG— Tesla is conducting its largest ever recall in China that regulators said was to fix issues with its driver-assistance features that could increase the risk of crashes, a move that follows similar fixes in the U.S. The software fix, which will be d…",
  "url": "https://biztoc.com/x/b1643fd6c9c7aa26",
  "urlToImage": "https://c.biztoc.com/p/b1643fd6c9c7aa26/s.webp",
  "publishedAt": "2024-01-05T13:06:10Z",
  "content": "HONG KONG Tesla is conducting its largest ever recall in China that regulators said was to fix issues with its driver-assistance features that could increase the risk of crashes, a move that follows … [+227 chars]"
},
{
  "source": {
      "id": "rt",
      "name": "RT"
  },
  "author": "RT",
  "title": "Musk warns against invading Russia",
  "description": "Sending forces into Russia is “never a good idea,” SpaceX and Tesla CEO Elon Musk has said Read Full Article at RT.com",
  "url": "https://www.rt.com/news/590157-musk-invade-russia-napoleon/",
  "urlToImage": "https://mf.b37mrtl.ru/files/2024.01/article/6597f57685f540191d72b458.jpg",
  "publishedAt": "2024-01-05T13:04:11Z",
  "content": "Opposing forces should never invade Russia, tech billionaire Elon Musk has insisted during a discussion of military strategies over the past few centuries on his platform, X (formerly Twitter).\r\nIn h… [+2012 chars]"
},
{
  "source": {
      "id": null,
      "name": "Tom's Guide"
  },
  "author": "Aymeric Geoffre-Rouland",
  "title": "Tesla rappelle 1,6 million de voitures pour un nouveau problème de sécurité",
  "description": "Tesla doit mettre à jour le logiciel de 1,6 million de voitures en Chine, qui souffrent de défaillances pouvant causer des collisions ou des accidents. Ce rappel intervient après un autre rappel de deux millions de voitures aux États-Unis, pour la même raison…",
  "url": "https://www.tomsguide.fr/tesla-rappelle-16-million-de-voitures-pour-un-nouveau-probleme-de-securite/",
  "urlToImage": "https://www.tomsguide.fr/content/uploads/sites/2/2023/08/tesla-en-feu.jpg",
  "publishedAt": "2024-01-05T13:03:21Z",
  "content": "Tesla doit mettre à jour le logiciel de 1,6 million de voitures en Chine, qui souffrent de défaillances pouvant causer des collisions ou des accidents. Ce rappel intervient après un autre rappel de d… [+2106 chars]"
},
{
  "source": {
      "id": null,
      "name": "Marketscreener.com"
  },
  "author": null,
  "title": "Twist Bioscience Appoints Adam Laponis as Chief Financial Officer",
  "description": "(marketscreener.com) \nTwist Bioscience Corporation , a company enabling customers to succeed through its offering of high-quality synthetic DNA using its silicon platform, today announced the appointment of Adam Laponis as chief financial officer. Mr. Laponis…",
  "url": "https://www.marketscreener.com/quote/stock/TWIST-BIOSCIENCE-CORPORAT-46874562/news/Twist-Bioscience-Appoints-Adam-Laponis-as-Chief-Financial-Officer-45681243/",
  "urlToImage": "https://www.marketscreener.com/images/twitter_MS_fdnoir.png",
  "publishedAt": "2024-01-05T13:03:01Z",
  "content": "Twist Bioscience Corporation (NASDAQ: TWST), a company enabling customers to succeed through its offering of high-quality synthetic DNA using its silicon platform, today announced the appointment of … [+6439 chars]"
},
{
  "source": {
      "id": null,
      "name": "The Denver Post"
  },
  "author": "Seth Klamann",
  "title": "What’s driving Colorado’s obsession with the new retro black license plates?",
  "description": "Colorado's retro black license plate is seemingly everywhere, catching on at a pace that surprised state officials and left records in its dust. Why? \"Probably because it's cool,\" one driver says.",
  "url": "https://www.denverpost.com/2024/01/05/colorado-black-license-plates-red-blue-disability-fund/",
  "urlToImage": "https://www.denverpost.com/wp-content/uploads/2023/12/TDP-L-blackplate121523-cha-074.jpg?w=1024&h=683",
  "publishedAt": "2024-01-05T13:00:51Z",
  "content": "Joe Duran first saw the strange new license plate on his Arvada neighbor’s car and thought it was fake.\r\nThough Colorado has a sizable collection of specialty license plates — as alternatives to its … [+6502 chars]"
},
{
  "source": {
      "id": null,
      "name": "The Denver Post"
  },
  "author": "The Denver Post Editorial Board",
  "title": "Editorial: How to get an electric vehicle for less than $6,000 in Colorado",
  "description": "Navigating these incentives for electric vehicles involves a complex ven-diagram of tax liabilities, annual adjusted gross incomes, family sizes, and of course, the actual value of your current vehicle that you would trade in.",
  "url": "https://www.denverpost.com/2024/01/05/electric-vehicle-rebates-colorado-opinion/",
  "urlToImage": "https://www.denverpost.com/wp-content/uploads/2024/01/TDP-Z-ev-credit-cars-16x9-1.jpg?w=1024&h=576",
  "publishedAt": "2024-01-05T13:00:15Z",
  "content": "Some Coloradans who play their financial cards just right in 2024 could land a new Chevy Bolt eletcric car for around $5,500, according to our calculations.\r\nThat price would be after using $21,000 i… [+5650 chars]"
}];
  constructor (){
    super();
    this.state = {
      articles : this.article,
      loading : false
    }
  }
  render() {
    return (
        <>
        <div className='container my-3'>
          <h2>Top Headlines</h2>
            <div className="row">
            {this.state.articles.map((element)=>{
              return <div className="col-md-4 my-2" key={element.url}>
                     <Newsitem title ={element.title.slice(0,50)} description = {element.description.slice(0,90)} imageUrl= {element.urlToImage} newsUrl = {element.url}/>
                     </div>
            })}
            </div>
        </div>
      </>
    )
  }
}
