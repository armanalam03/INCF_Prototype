import React, { useEffect, useState } from 'react';
import axios from 'axios'


export default function CSRFToken() {

    const [csrfToken, setCsrfToken] = useState('')

    const getCookie = (name) => {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            let cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                // let cookie = jQuery.trim(cookies[i]);
                let cookie = cookies[i].trim()
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        console.log('cookie: ' + cookieValue)
        return cookieValue;
    }

    useEffect(() => {
        const fetchData = async () => {
            try{
                await axios.get('http://127.0.0.1:8000/csrf_cookie')
            } catch(err){

            }

        }

        fetchData()
        setCsrfToken(getCookie('csrftoken'))
    }, [])
    

    return (
        <input type="hidden" name="csrfmiddlewaretoken" value={csrfToken} />
    );
};
