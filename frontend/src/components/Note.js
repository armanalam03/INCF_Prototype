import React from 'react'
import {Link} from "react-router-dom"
import "./styles/note.css"

export default function Note({title, authors, abstract, keywords, pdf, onNoteSelect}) {
  return (
        <div className="note-container">
            {/* {console.log('note loaded')} */}
            <div className="title">
                <Link to="/notePage" onClick={onNoteSelect(title, authors, abstract, keywords, pdf)}> 
                    <span className="note-title">{title}</span>
                </Link>
                <a href={'http://openreview.net' + pdf} target='_blank'>
                    <i className="fas fa-file-pdf pdf-icon"></i>
                </a>
            </div>
            <div className="note-author"><em>{authors}</em></div>
            <span className="note-content">
                {abstract.slice(0, 300) + '...'}
            </span>
            <div className="note-footer">
                <div className="note-keywords">
                    {keywords.map(keyword => {
                        return <span className='keyword'>{keyword}</span>
                    })}
                </div>
                <span className="ratings-info"><em>0/5 Ratings • 0 Comments</em></span>
            </div>
        </div>
  )
}
