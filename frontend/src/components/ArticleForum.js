import React from 'react'
import './styles/articleForum.css';
import CSRFToken from './CSRFToken';

export default function ArticleForum() {
  return (
    <div className='forum-container'>
        <form className='submission-form' action='/api/submission/' method='POST'> <CSRFToken />
          <div className="form-group">
            <label>Title</label>
            <input type="text" className="form-control" id="exampleInputTitle1" name='forum_title' />
          </div>
          <div className="form-group">
            <label>Abstract</label>
            <textarea type="text" className="form-control" id="exampletextareaAnstract1" name='forum_abstract' rows="10" />
          </div>
          <div className="form-group">
            <label>Keywords</label>
            <input type="text" className="form-control" id="exampleInputKeywords1" name='forum_keywords' />
          </div>
          <div className="form-group">
            <label>PDF</label>
            <input type="file" className="form-control" id="exampleInputPdf1" name='forum_pdf' />
          </div>
          <div className="form-group">
            <label>Community</label>
            <input type="text" className="form-control" id="exampleInputInvitation1" name='forum_community' />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
  )
}
