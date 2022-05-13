import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Card, CardContent, CardMedia, Container, CssBaseline, Grid, LinearProgress, Stack, Typography } from '@mui/material';
import ImageCard from './imageCard';
import ImageModal from './imageModal';

// This will hold the search queries
var searchQuery = [];

// Fetching search queries from data.json file
var xhr = new XMLHttpRequest();
xhr.open('GET', './data.json', false);
xhr.onload = () =>{
  searchQuery = JSON.parse(xhr.response)
}
xhr.send();

// URLs to get and search photos
const getPhotoUrl = "https://api.unsplash.com/photos?client_id="+process.env.REACT_APP_UNSPLASH_KEY+"&per_page=50&page=2"
const searchPhotoUrl = "https://api.unsplash.com/search/photos?client_id="+process.env.REACT_APP_UNSPLASH_KEY+"&per_page=30&query="

// this will hold all the image cards
var a = []

export default function Main() {

  // state for all the image cards
  const [pictures, setPictures] = React.useState([]);

  // state for LinearProgress bar
  const [determinate, setDeterminate] = React.useState('indeterminate');

  // Modal states
  const [open, setOpen] = React.useState(false);

  // State for the data inside the modal
  const [modalData, setModalData] = React.useState([]);

  // To open the modal onclick and also giving the data to populate it
  const handleOpen = (data) => {
    setOpen(true);
    const setData = {
      id:data.id,
      imgUrl:data.imgUrl,
      usrImg:data.usrImg,
      name:data.name,
      usrName:data.usrName,
      likes:data.likes,
      downloadUrl:data.downloadUrl,
      ig:data.ig,
      twitter:data.twitter,
      portfolio:data.portfolio,
      desc:data.desc
    }
    // populating the data
    setModalData(setData);
  }
  const handleClose = () => setOpen(false);

  // function to populate all the cards inside the grid
  const populateCards = (url)=>{
    fetch(url)
    .then(res => res.json())
    .then(
      (result) => {
        if(result.results)result = result.results;
        a=[]
        result.map((element) => {
          // result is pushed into the array as the ImageCard component in './imageCard.js'
          // With all the props to populate it as well as its modal
          a.push(    
            <ImageCard key={element.id} imgUrl={element.urls.regular} usrImg = {element.user.profile_image.small} name = {element.user.name} usrName = {element.user.username} likes = {element.user.total_likes} downloadUrl={element.links.download} ig={element.user.instagram_username} twitter={element.user.twitter_username} portfolio={element.user.portfolio_url} desc={element.description} modalOpen = {handleOpen}/>
          )
        });
        setPictures(a);

        // Stopping the linear progess bar
        setDeterminate('determinate');
      },
      (error) => {
        window.alert(error)
      }
    )
  }

  // To fetch photos initially after render
  React.useEffect(() => {
    // starting the linear progess bar
    setDeterminate('indeterminate');
    populateCards(getPhotoUrl);
  }, [])

  return (
    <>
      <CssBaseline />
      <LinearProgress color="warning" variant={determinate} value={100}/>
      <Container maxWidth="lg" sx={{mb:8}}>
        <Typography variant='h3' align='center' gutterBottom sx={{m:3, mb:7}}>
          Welcome To Vipul's Gallery
        </Typography>

        <Grid container spacing={2} justifyContent="center">
          <Grid item>

            {/* The search bar */}
            <Autocomplete
              onChange={(event, newInputValue) => {
                setDeterminate('indeterminate');
                if(newInputValue != null){
                  populateCards(searchPhotoUrl + newInputValue.label);
                }else{
                  populateCards(getPhotoUrl );
                }
              }}
              disablePortal
              id="combo-box-demo"
              options={searchQuery}
              sx={{ width: 300}}
              renderInput={(params) => <TextField sx={{ width: 300}} {...params} label="Search" color='warning'/>}
            />
          </Grid>
        </Grid>
      </Container>
      <ImageModal closeHandle={handleClose} open={open} data={modalData}/>
      <Container maxWidth="lg">
        <Grid container spacing={2} justifyContent="center">
          {/* All the pictures */}
          {pictures}
        </Grid>
      </Container>
    </>

  );
}