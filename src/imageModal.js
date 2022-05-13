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

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

const modalCss = {
    borderRadius:"10px",
    boxShadow: 24,
    background:"#eee"
}

const borderTops = {
    borderTop:"0.1px solid #aaa"
}

const posBottomRight = {
    position:"absolute",
    top: '92%',
    left: '92%',
}

const posTopRight = {
    position:"absolute",
    top: '-2%',
    left: '94%',
    zIndex:"100"
}

const marginRight = {
    marginRight:"5px",
}

const textDecNone ={textDecoration:"none"}

const downloadImage = (url, id)=>{
    window.open(url)
}

export default function BasicModal(props) {

    if(props.data.name)
        props.data.name=props.data.name.split(" ").join("_")
    else 
        props.data.name = "User_Name"

    var insta="";
    var twitter = ""
    var desc = "..."
    if(props.data.ig != null){
        insta =                      

            <>
                <div>
                    <InstagramIcon color="secondary" fontSize='small'/>
                </div>
                <div style={marginRight}>
                    <a href={"https://instagram.com/"+props.data.ig} style={textDecNone} target="_blank">
                        <Typography variant='body1' color="gray">
                        {"/"+props.data.ig}
                        </Typography>
                    </a>
                </div>        
            </>
    }
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
        <Container sx={style} maxWidth="sm">
            <Card sx={modalCss}>
                <CancelIcon sx={posTopRight} role="button" onClick={props.closeHandle}/>
                <CardMedia style={{height:"500px", backgroundSize: "contain", position:"relative"}} image={props.data.imgUrl}
                title="Image1"
                >
                    <OpenWithIcon sx={posBottomRight} color="primary" fontSize="medium" role="button" onClick={()=>downloadImage(props.data.downloadUrl, props.data.id)}/>
                </CardMedia>
                <CardContent sx={borderTops} style={{paddingBottom:"10px"}}>
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