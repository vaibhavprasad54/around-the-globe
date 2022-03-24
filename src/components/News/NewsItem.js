import React from 'react'
import './NewsItem.css'

const NewsItem = (props) => {

    let {title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
      <div className='my-3'>
      <div className="card" style={{height: '27rem'}}>
        <div className="sourceDiv">
          <span className="badge bg-primary source"> 
            {source}
          </span>
      </div>
        <img src={!imageUrl?"https://techcrunch.com/wp-content/uploads/2021/08/fisker-ocean-front-blue-close_ryg1ki.jpeg?w=533": imageUrl} className="card-img-top" alt="..." style={{height:"160px"}}/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}...</p>
        <p className="card-text"><small className="text-muted">By {author? author: "Unknown"} on {new Date(date).toGMTString()}</small></p>
        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm readMoreBtn">Read More</a>
      </div>
     </div>
      </div>
    )
  }

export default NewsItem