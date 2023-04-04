import React, {useState} from 'react'
import "./styles/submitArticle.css"
export default function SubmitArticle() {
    
    const submission = async() => {
        const title = document.getElementById('submission-title').value
        const abstract = document.getElementById('submission-abstract').value

        const submissionData = {title: title, abstract: abstract}

        await axios({
            method: 'POST',
            url: '/api/submission',
            data: submissionData
        }).then((response)=>{
            console.log(response)
        })
    }


  return (
    <div className='submit-article-container'>
        <form className='signin-form' action="/api/submission">
            <div className="form-group">
                <label>Title</label>
                <input type="text" className="form-control" id="submission-title" name='submission-title' placeholder="Enter the title of article" />
            </div>
            <div className="form-group">
                <label>Abstract</label>
                <input type="textfield" className="form-control" id="submission-abstract" name='submission-abstract' placeholder="Write overview of your article" />
            </div>
            <button type="submit" className="btn btn-primary" onClick={submission}>Submit</button>
        </form>
    </div>
  )
}
