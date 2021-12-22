import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

interface Props {
  productImages: ProductImageModel[];
}

const useStyles = makeStyles({
  thumb: {
    width: '86,25px',
    height: '86,25px',
    borderRadius: 4
  }
});

const ImageSlider: FC<Props> = props => {
  const classes = useStyles();
  const { productImages } = props;
  return (
    <Carousel showArrows={true}>
      {productImages.map((value, index) => (
        <div>
          <img src={value.url} className={classes.thumb} />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageSlider;
