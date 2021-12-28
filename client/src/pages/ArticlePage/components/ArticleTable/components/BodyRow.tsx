import React, { FC } from 'react';
import { makeStyles, createStyles, Theme, Card, CardContent, Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import useRouter from 'hooks/useRouter';
import { GRAY_3, BLACK } from 'constants/colors';

interface Props {
  article: ArticleModel;
  isLoading: boolean;
  onDelete: React.MouseEventHandler;
  
}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      boxShadow: '0px 5px 12px rgba(0, 0, 0, 0.08)'
    },
    addCart: {
      boxShadow: '0px 5px 12px rgba(0, 136, 186, 0.4)'
    },
    title: {
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: 500,
      letterSpacing: '0.0075em',
      textAlign: 'left',
      marginBottom: 5,
      color: BLACK
    },
    code: {
      fontSize: '12px',
      lineHeight: '16px',
      fontStyle: 'normal',
      fontWeight: 400,
      letterSpacing: '0.4000000059604645px',
      textAlign: 'left',
      color: GRAY_3,
      marginBottom: '11px'
    }
  })
);

const BodyRow: FC<Props> = props => {
  const { article, isLoading } = props;
  const { new: isNew } = article;
  console.log(article, 'article--------');
  

  const { history } = useRouter();
  const classes = useStyles();

  const handleLink = () => {
    if (article) {
      history.push('/article/detail', { id: article.id });
    }
  };



  return (
    <Card elevation={0} className={classes.addCart}>
      <CardContent>
        <Typography onClick={handleLink} component='p' className={classes.title}>
          {isLoading ? <Skeleton variant='text' width={'100%'} /> : article.title}
          
        </Typography>
        
        <Typography component='p' className={classes.code}>
          {isLoading ? <Skeleton variant='text' width={'100%'} height={20} /> : article.content}
        </Typography>
        <Typography onClick={handleLink} component='p' className={classes.title}>
          {isLoading ? <Skeleton variant='text' width={'100%'} /> : article.category}
        </Typography>
        <Typography component='p' className={classes.code}>
          {isLoading ? <Skeleton variant='text' width={'100%'} height={20} /> : article.status}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BodyRow;
