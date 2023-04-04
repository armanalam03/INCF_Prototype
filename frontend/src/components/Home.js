import React, {useEffect, useState} from 'react'
import axios from "axios";
import './styles/home.css';
import SidebarLeft from './SidebarLeft'
import SidebarRight from './SidebarRight'
import Notes from './Notes';
import Note from './Note';

export default function Home({onNoteSelect}) {

    const [notes, setNotes] = useState([])
    const [community, setCommunity] = useState('Public')

    const getdata = async() => {
  
      const config = {
        headers:{
          "Access-Control-Allow-Origin": "*"
        }
      };

      let url='';
      if(community=='Public'){
        url = "https://api.openreview.net/notes?invitation=OpenReview.net/Anonymous_Preprint/-/Blind_Submission";
      }
      if(community=='ICLR'){
        url = "https://api.openreview.net/notes?invitation=ICLR.cc/2019/Conference/-/Blind_Submission";
      }
      if(community=='ALife'){
        url = "https://devapi.openreview.net/notes?invitation=alife.org/ALife/2022/Conference/-/Blind_Submission";
      }
  
      await axios
      .get(url, config)
      .then( (res) => {
        // console.log(res.data.notes)
        setNotes(res.data.notes)
      })
      .catch((error) => console.log(error.message))
    }
  
    useEffect(() => {
      getdata();
    }, [community]);

    const onCommunitySelect = (selectedCommunity) => {
        setCommunity(selectedCommunity)
    }

  return (
    <div className="container">
        {/* <div className="navbar">
            <span className="logo">SciCommons</span>
            <div className="account">
                <span className="account-name">qwerty123</span>
            </div>
        </div> */}
        <div className="main-container">
            <SidebarLeft onCommunitySelect={onCommunitySelect}/>
            <Notes notes={notes} onNoteSelect={onNoteSelect}/>
            <SidebarRight />
        </div>
    </div>
  )
}
