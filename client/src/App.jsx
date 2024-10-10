import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import AutoPods from './components/AutoPods';
import Solutions from './components/Solutions';
import Recruit41 from './components/Recruit41';
import Insights from './components/Insights';
import Footer from './components/Footer';
import ReadMore from './components/Readmore';
import Aboutus from './components/Aboutus';
import './App.css';
import {
  headerData,
  heroData,
  featuresData,
  autoPODSData,
  solutionsData,
  recruit41Data,
  insightsData,
  footerData
} from './data/componentData';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define the landing page route */}
        <Route path="/" element={
          <div className="App">
            <Header data={headerData} />
            <Hero data={heroData} />
            <Features data={featuresData} />
            <AutoPods data={autoPODSData} />
            <Solutions data={solutionsData} />
            <Recruit41 data={recruit41Data} />
            <Insights data={insightsData} />
            <Footer data={footerData} />
          </div>
        } />
        
        {/* Define the route for the ReadMore page */}
        <Route path="/ReadmoreBlogs" element={<ReadMore />} />
        <Route path='/aboutus' element={<Aboutus/>}/>
      </Routes>
    </Router>
  );
}

export default App;
