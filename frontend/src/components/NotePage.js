import React from 'react'
// import Comments from './Comments.tsx'
import "./styles/notePage.css"
import CSRFToken from './CSRFToken'

export default function NotePage({title, authors, abstract, keywords, pdf}) {
  return (
    <div className='note-page-container'>
      <div className="note-detail-container">
      <div className="title">
        <span className="note-page-title">{title}</span>
          <a href={'http://openreview.net' + pdf} target='_blank'>
            <i className="fas fa-file-pdf pdf-icon"></i>
          </a>
      </div>
        <span className="authors"><em>
              {authors.map(author => {
                  return(
                      author + "   "
                  )
              })}</em>
          </span>
          <span className="keywords">
              {keywords.map(keyword => {
                  return(
                      <span className="keyword"><em>{keyword}</em></span>
                  )
              })}
          </span>
        <span className='note-abstract'>{abstract}</span>
        <div className="comment-form-div">
          <form className='comment-form' action='/api/note_comments/' method='POST'><CSRFToken />
            <div className="form-group">
              <label></label>
              <textarea /* type="text" width="500px" height="100px" */ className="form-control" id="exampleInputComment1" name='comment' placeholder="Add your comment here..." />
            </div>
            <button type="submit" className='comment-btn'>Comment</button>
          </form>
        </div>
      </div>
      
      {/* <p>{pdf}</p> */}
    </div>
  )
}
