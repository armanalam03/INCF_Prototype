import React, {useEffect, useState} from 'react'
import { Link } from "react-router-dom";
import "./styles/notes.css"
import Note from "./Note"
import data from "./data/data3.json"

export default function Notes({notes, onNoteSelect}) {


  return (
    <div className="notes-container">
      <div className='notes'>
          {notes.map( e => {
            return(<Note title = {e.content.title} authors = {e.content.authors} abstract = {e.content.abstract} keywords = {e.content.keywords} pdf = {e.content.pdf} onNoteSelect={onNoteSelect}/>)
          })}
        {/* <Note title = {notes.title} authors = {notes.authors} abstract = {notes.abstract} keywords = {notes.keywords} pdf = {notes.pdf} /> */}
      </div>
        
        
    </div>
  )
}
