import './App.css';
import React, {useState} from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

export default function App () {
  const [progress,setProgress] = useState(0);
    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar
          height={3}
          color='#1abc9c' // Teal shade color
          progress={progress}
          />
          <Routes>
            <Route exact path='/' element={<News setProgress={setProgress} key="general" pageSize={9} country="in" category="general" />} />
            <Route exact path='/business' element={<News setProgress={setProgress} key="business" pageSize={9} country="in" category="business" />} />
            <Route exact path='/entertainment' element={<News setProgress={setProgress} key="entertainment" pageSize={9} country="in" category="entertainment" />} />
            <Route exact path='/general' element={<News setProgress={setProgress} key="general" pageSize={9} country="in" category="general" />} />
            <Route exact path='/health' element={<News setProgress={setProgress} key="health" pageSize={9} country="in" category="health" />} />
            <Route exact path='/science' element={<News setProgress={setProgress} key="science" pageSize={9} country="in" category="science" />} />
            <Route exact path='/sports' element={<News setProgress={setProgress} key="sports" pageSize={9} country="in" category="sports" />} />
            <Route exact path='/technology' element={<News setProgress={setProgress} key="technology" pageSize={9} country="in" category="technology" />} />
          </Routes>
        </Router>
      </>
    );
}
