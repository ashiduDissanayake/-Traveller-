import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

import image1 from "./IMGA1.jpg"
import image2 from "./IMGA2.jpg"
import image3 from "./IMGA3.jpg"
import image4 from "./IMGA4.jpg"
import image5 from "./IMGA5.jpg"
import image6 from "./IMGA6.jpg"
import image7 from "./IMGA7.jpg"


export default function TitlebarImageList() {
  return (
    <ImageList sx={{ width: window.width-200}}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">Our Top Events through Out the Year</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: image1,
    title: 'Vibrant Beaches',
    author: '@sahanperera',
  },
  {
    img: image2,
    title: 'Camping in moon plains',
    author: '@luchithamendis',
  },
  {
    img: image3,
    title: 'Flying Ravana',
    author: '@kasundilushan',
    cols: 2,
  },
  {
    img: image4,
    title: 'Ruins at Polonnaruwa',
    author: '@ashirmubarak',
    cols: 2,
  },
  {
    img: image5,
    title: 'Roadtrips',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: image6,
    title: 'Sunset in Galle',
    author: '@tjmalan',
  },
  {
    img: image7,
    title: 'Water rafting in Kithulgala',
    author: '@KalanaRathnayake',
  },
];
