import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import LoadingBar from 'react-top-loading-bar'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

const App = () => {
  const apiKey= process.env.REACT_APP_NEWS_API;
  
  const [progress, setProgress] = useState(0)

    return (
      <div>
      <Router>
        <Navbar />
        <LoadingBar
        color='#129f3d'
        progress={progress}
      />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey}  key="general" pageSize={8} category="general"/>} />
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey}  key="business" pageSize={8} category="business"/>} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={8} category="entertainment"/>} />
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey}  key="health" pageSize={8} category="health"/>} />
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey}  key="science" pageSize={8} category="science"/>} />
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey}  key="sports" pageSize={8} category="sports"/>} />
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey}  key="technology" pageSize={8} category="technology"/>} />
        </Routes>
      </Router>
      </div>
    )
}

export default App;

