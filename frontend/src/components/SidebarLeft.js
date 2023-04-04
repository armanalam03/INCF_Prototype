import React, { useEffect } from 'react'
import axios from "axios";
import "./styles/sidebarLeft.css"

export default function SidebarLeft({onCommunitySelect}) {

  const communities = document.querySelectorAll('.community')
  communities.forEach(community => {
    community.addEventListener('click', ()=>{
      communities.forEach(check => {
        if(check!=community){
          check.classList.remove('selected')
        }
      })
      community.classList.add('selected')
      onCommunitySelect(community.innerText)
    })

    if(community.classList.contains('selected')){
      // console.log(community.innerText)
      // selectedCommunity = community.innerText
    }
    
  })

  return (
    <div className='sidebar-left sidebar'>
        <span>COMMUNITIES</span>
            <ul className="community-list">
                <li className="community selected">Public</li>
                <li className="community">ICLR</li>
                <li className="community">ALife</li>
            </ul>
    </div>
  )
}
