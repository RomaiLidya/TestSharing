import React, { FC, Fragment } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { FileWithPath, DropzoneInputProps, DropzoneRootProps } from 'react-dropzone';
import { BLUE_PRIMARY, BACKGROUND, GRAY_3 } from 'constants/colors';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

interface Props {
  getRootProps: (props?: DropzoneRootProps) => DropzoneRootProps;
  getInputProps: (props?: DropzoneInputProps) => DropzoneInputProps;
  acceptedFiles: FileWithPath[];
  imageUrl: string[];
}

const useStyles = makeStyles({
  dropZone: {
    margin: '0 auto',
    alignItems: 'center',
    padding: '48px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: BLUE_PRIMARY,
    borderStyle: 'dashed',
    backgroundColor: BACKGROUND,
    color: GRAY_3,
    outline: 'none',
    transition: 'border .24s ease-in-out',
    width: '501px',
    height: '314px',
    verticalAlign: 'middle',
    textAlign: 'center'
  },
  thumbsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
  },
  thumb: {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
  },
  thumbInner: {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
  },
  img: {
    display: 'block',
    width: 'auto',
    height: '100%'
  },
  iconUpload: {
    fontSize: 100,
    color: BLUE_PRIMARY
  }
});

const DropZone: FC<Props> = props => {
  const classes = useStyles();
  const { getRootProps, getInputProps, imageUrl, acceptedFiles } = props;

  return (
    <div {...getRootProps({ className: classes.dropZone })}>
      <input {...getInputProps()} />
      {acceptedFiles.length > 0 ? (
        <aside className={classes.thumbsContainer}>
          {imageUrl.map((value, index) => (
            <div className={classes.thumb} key={index + 1}>
              <div className={classes.thumbInner}>
                <img src={value} className={classes.img} />
              </div>
            </div>
          ))}
        </aside>
      ) : (
        <Fragment>
          <CloudUploadIcon className={classes.iconUpload} />
          <Typography align='center'> Geser dan lepaskan disini untuk mengupload gambar PNG, JPEG, JPG, Max 5 *</Typography>
        </Fragment>
      )}
    </div>
  );
};

export default DropZone;
