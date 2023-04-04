import React from 'react'
import "./styles/sidebarRight.css"
import { Link } from 'react-router-dom'

export default function SidebarRight() {
  return (
    <div className="sidebar-right sidebar">
      <div className="your-submissions">
        <span className="empty"><em>No publications yet</em></span>
      </div>
      <Link to="/forum" className="submit-btn"><div /* className="submit-btn" */>Create Article</div></Link>
    </div>
  )
}
