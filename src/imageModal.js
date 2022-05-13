import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Card, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import { Avatar } from '@mui/material';
import ThumbUpTwoToneIcon from '@mui/icons-material/ThumbUpTwoTone';
import OpenWithIcon from '@mui/icons-material/OpenWith';
import { Container } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import CancelIcon from '@mui/icons-material/Cancel';
import TwitterIcon from '@mui/icons-material/Twitter';
import { grey } from '@mui/material/colors';
import CustomCss from './customCss';

const textDecNone ={textDecoration:"none"}

const downloadImage = (url, id)=>{
    window.open(url)
}

export default function BasicModal(props) {

    // Checking if name is available or not in the fetch API result
    if(props.data.name)
        props.data.name=props.data.name.split(" ").join("_")
    else 
        props.data.name = "User_Name"

    // Social handles and description of the artist. if not available set them to empty 
    //string
    var insta="";
    var twitter = ""
    var desc = "..."

    // Checking for instagram
    if(props.data.ig != null){
        insta =                      

            <>
                <div>
                    <InstagramIcon color="secondary" fontSize='small'/>
                </div>
                <div style={CustomCss.marginRight}>
                    <a href={"https://instagram.com/"+props.data.ig} style={textDecNone} target="_blank">
                        <Typography variant='body1' color="gray">
                        {"/"+props.data.ig}
                        </Typography>
                    </a>
                </div>        
            </>
    }
    // checking for twitter
    if(props.data.twitter != null){
        twitter = 
        <>
            <div>
                <TwitterIcon color="primary" fontSize='small'/>
            </div>
            <div>
                <a href={"https://twitter.com/"+props.data.twitter} style={textDecNone} target="_blank">
                    <Typography variant='body1' color="gray">
                    {"/"+props.data.twitter}
                    </Typography>
                </a>
            </div>
        </>          
    }

    // checking for description
    if(props.data.desc){
        desc = props.data.desc
    }

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.closeHandle}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableAutoFocus


        sx={{border:"none"}}
      >
        <Container sx={CustomCss.style} maxWidth="sm">
            <Card sx={CustomCss.modalCss}>
                <CancelIcon sx={CustomCss.posTopRight} role="button" onClick={props.closeHandle}/>
                <CardMedia style={{height:"500px", backgroundSize: "contain", position:"relative"}} image={props.data.imgUrl}
                title="Image1"
                >
                    <OpenWithIcon sx={CustomCss.posBottomRight} color="primary" fontSize="medium" role="button" onClick={()=>downloadImage(props.data.downloadUrl, props.data.id)}/>
                </CardMedia>
                <CardContent sx={CustomCss.borderTops} style={{paddingBottom:"10px"}}>
                    <Stack direction="row"  spacing={1} sx={{mb:2}}>
                        <div>
                            <Avatar alt="Remy Sharp" src={props.data.usrImg} />
                        </div>
                            <Stack direction="column"  spacing={0} sx={{m:0}}>
                            <Typography variant='body1' textAlign="center">
                            {   
                                props.data.name
                            }
                            </Typography>
                            <Typography variant='caption' textAlign="left" color="seagreen">
                            @{props.data.usrName}
                            </Typography>
                            </Stack>
                        <div style={{width:"100%", display:"flex", justifyContent:"end"}}>
                            <Stack direction="column"  spacing={0} sx={{m:0}} >
                                <ThumbUpTwoToneIcon/>
                                <Typography variant='caption' textAlign="left" color="red">
                                {props.data.likes}
                                </Typography>
                            </Stack>  
                        </div>
                    </Stack>
                    <Stack direction="row"  spacing={0.5} sx={{mb:1}}>
                        {insta}
                        {twitter}
                    </Stack>
                    <Stack direction="column"  spacing={0.5}>
                        <Typography variant='h6' textAlign="left" sx={{color:grey[700]}}>
                            Discription
                        </Typography>
                        <Typography variant='caption' textAlign="left" color="gray">
                            {desc}
                        </Typography>
                    </Stack>

                </CardContent>
            </Card>
        </Container>
      </Modal>
    </div>
  );
}