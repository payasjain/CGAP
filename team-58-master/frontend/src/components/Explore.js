import React,{useEffect,useState} from 'react'
import Container from '@mui/material/Container'
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import indhira from '../images/indhira.jpg'
import {styled} from '@mui/system'
import Navbar from './Navbar'
import axios from 'axios'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import {Link} from 'react-router-dom'
import { BsWhatsapp } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';

const MyComponent = styled('div')({
    backgroundColor : 'aliceblue',
})

const Explore = () => {
  const [articles, setArticles] = useState([])
  const getArticles = async() => {
    const res = await axios.get('http://localhost:7000/explore')
    //console.log(res.data.data)
    setArticles(res.data.data)
  }
  const theme = useTheme();
  useEffect(()=> {
    getArticles()
  },[])
  return (
    <>
    <Navbar/>
      <MyComponent>
  
    <Container style={{marginTop : '30px', display:'flex'}} >
   <Grid container spacing = {3}>
       <Grid item xs={3}>
       {console.log("Articles",articles)}

       {articles.map(a => 
      
       <Card sx={{ display: 'flex' }} className="leader-card">
        <CardMedia
        className="leader-card-img"
         component="img"
         image={a.Image}
         alt="Live from space album cover"
       />
       <Box sx={{ display: 'flex', flexDirection: 'column' }}>
         <CardContent className="card-title">
           <Typography component="div" variant="h5">
             {a.Name}
           </Typography>
           <Typography variant="subtitle1" color="text.secondary" component="div">
             {a.Title}
           </Typography>
           <span className="viewcount">10k views</span>
         </CardContent>
         <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
           {a.Summarized_Article}
         </Box>
         <Link to ={`/explore/${a.id}`}><span>Read More </span></Link>
       </Box>
       <a href="https://twitter.com/share?url=<URL>&text=<TEXT>via=<USERNAME>" target="_blank">
       <BsTwitter className="icons"/> </a>
       <a href="whatsapp://send?text=This is WhatsApp sharing example using link" data-action="share/whatsapp/share"  
        target="_blank">
       <BsWhatsapp className="icons" /> </a>
       <a href="https://www.facebook.com/sharer/sharer.php?u=<URL>" target="_blank">
       <BsFacebook className="icons"/> </a>
       
     </Card>
     
    //     <Card sx={{ maxWidth: 345 }}>
    //   <CardMedia
    //     component="img"
    //     alt="green iguana"
    //     height="140"
    //    image={a.Image}
    //   />
    //   <CardContent>
    //     <Typography gutterBottom variant="h4" component="div">
    //       {a.Name}
    //     </Typography>
    //     <Typography gutterBottom variant="h5" component="div">
    //       {a.Title}
    //     </Typography>
    //     <Typography variant="body2" color="text.secondary">
    //       {a.Summarized_Article}
    //     </Typography>
    //   </CardContent>
      
    // </Card> 
       )}
       {/* <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
       image={indhira}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      
    </Card> 
       </Grid>
       <Grid item xs={3}>
       <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={indhira}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      
    </Card> 
       </Grid>
       <Grid item xs={3}>
       <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={indhira}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      
    </Card> 
       </Grid>
       <Grid item xs={3}>
       <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={indhira}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      
    </Card> 
       </Grid>
       <Grid item xs={3}>
       <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={indhira}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      
    </Card>  */}
       </Grid>
   </Grid>
    </Container>

    </MyComponent>
    </>
  )
}

export default Explore