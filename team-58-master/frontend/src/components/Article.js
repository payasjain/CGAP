import React, { useEffect ,useState} from 'react'
import Container from '@mui/material/Container'
import indhira from '../images/indhira.jpg'
import axios from 'axios';
import countapi from 'countapi-js';
import Navbar from "./Navbar"
import Speech from "./Speech"
import {useParams} from 'react-router-dom'

const Article = () => {
  const [languagesList, setLanguagesList] = useState([])
  const [translatedText,setTranslatedText] = useState('')
  const data= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam pariatur eaque, exercitationem quo maxime dolore adipisci perspiciatis expedita porro illum dolorum, odio, sequi libero aspernatur autem minus quos atque reprehenderit?"
  const {id} = useParams();
  const [info,setInfo] = useState({})
  const [to,setTo] = useState('en')
   
 

  
  const translate = async() => {
  //console.log(info.Summarized_Article)
    let body = {
       q :info.Title,
       source : 'en',
       target : to
   }

   axios.post('https://libretranslate.de/translate',body)
   .then(res => setTranslatedText(res.data.translatedText))

  }

  useEffect(()=>{
    const libre = async() => {
        
        const res = await axios.get('https://libretranslate.com/languages')
        setLanguagesList(res.data)
    }
    countapi.visits().then((result) => {
        console.log(result.value);
      });

    libre();
    
   getArticle()
  
  },[])

  useEffect(()=> {
      translate()
  },[to])


  const getArticle = async() => {
      const res = await axios.get('http://localhost:7000/article',
      {
          params : {id}
      })
      
      setInfo(res.data.message)
      
  }

 

    return (
    <Container>
      <Navbar />

     { console.log(info)}
    
     <h1 style={{textAlign : 'center'}}>{info.Name}</h1>
     <img src={info.Image} style={{ display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '50%'}} />
    
     <h2>{info.Title}</h2>
     <h2>{translatedText!== info.Title && translatedText}</h2>
     <Speech detail={info.Content}/>
     <p>{info.Content}</p>
     <p>{info.Summarized_Article}</p>
    About {info.Name} : <p>{info.Wikipedia_Summary}</p>
     <a href={info.Link}>Click to read more</a> 

     <select onChange = {e => setTo(e.target.value)}>

{languagesList.map(l => <option key ={l.code} value = {l.code}>{l.name}</option>)}
</select>
    {console.log(to)}
    </Container>
  )
}

export default Article