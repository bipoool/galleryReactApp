import * as React from 'react';
import { Card, CardContent, CardMedia, Grid, Stack, Typography } from '@mui/material';
import { Avatar } from '@mui/material';
import ThumbUpTwoToneIcon from '@mui/icons-material/ThumbUpTwoTone';

export default function ImageCard(props) {

  const data = {
    id:props.id,
    imgUrl:props.imgUrl,
    usrImg:props.usrImg,
    name:props.name,
    usrName:props.usrName,
    likes:props.likes,
    downloadUrl:props.downloadUrl,
    ig:props.ig,
    twitter:props.twitter,
    protfolio:props.portfolio,
    desc:props.desc
  }

  return(
    <Grid item key={props.id} >
      <Card role="button" onClick={() => props.modalOpen(data)}>
        <CardMedia style={{height:"350px"}} image={props.imgUrl}
          title="Image1"
        />
        <CardContent>
          <Stack direction="row"  spacing={1}>
            <div>
              <Avatar alt="Remy Sharp" src={props.usrImg} />
            </div>
            <Stack direction="column"  spacing={0} sx={{m:0}}>
              <Typography variant='body1' textAlign="center">
              { props.name.split(" ").join("_")}
              </Typography>
              <Typography variant='caption' textAlign="left" color="seagreen">
              @{props.usrName}
              </Typography>
            </Stack>
            <div style={{width:"100%", display:"flex", justifyContent:"end"}}>
              <Stack direction="column"  spacing={0} sx={{m:0}} >
                <ThumbUpTwoToneIcon/>
                <Typography variant='caption' textAlign="left" color="red">
                  {props.likes}
                </Typography>
              </Stack>  
            </div>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  )

}