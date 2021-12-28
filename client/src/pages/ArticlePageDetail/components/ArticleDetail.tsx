import React, { FC, Fragment } from 'react';
import { makeStyles, Table, TableBody, TableRow, withStyles, Typography } from '@material-ui/core';
import MuiTableCell from '@material-ui/core/TableCell';
import Skeleton from '@material-ui/lab/Skeleton';

interface Props {
  article: ArticleModel;
  isLoading: boolean;
}

const useStyles = makeStyles({
  cell: {
    width: '40%',
    paddingLeft: 0
  },
  label: {
    color: '#828282',
    fontWeight: 400,
    fontSize: 15,
    marginBottom: 4
  },
  text: {
    fontWeight: 700,
    color: '#000000',
    fontSize: 15
  }
});

const TableCell = withStyles({
  root: {
    borderBottom: 'none'
  }
})(MuiTableCell);

const ArticleDetail: FC<Props> = props => {
  const classes = useStyles();
  const { article, isLoading } = props;

  return (
    <Fragment>
      <Table size='small'>
        <TableBody>
          <TableRow>
            <TableCell size='small' className={classes.cell}>
              <Typography component='p' className={classes.label}>
                Title
              </Typography>
              <Typography component='p' className={classes.text}>
                {isLoading ? <Skeleton variant='text' width='100%' /> : article.title}
              </Typography>
            </TableCell>
            <TableCell size='small'>
              <Typography component='p' className={classes.label}>
                Kategori
              </Typography>
              <Typography component='p' className={classes.text}>
                {isLoading ? <Skeleton variant='text' width='100%' /> : article.category}
              </Typography>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell size='small' className={classes.cell}>
              <Typography component='p' className={classes.label}>
                Status
              </Typography>
              <Typography component='p' className={classes.text}>
                {isLoading ? <Skeleton variant='text' width='100%' /> : article.status}
              </Typography>
            </TableCell>
            <TableCell size='small'>
              <Typography component='p' className={classes.label}>
                Content
              </Typography>
              <Typography component='p' className={classes.text}>
                {isLoading ? <Skeleton variant='text' width='100%' /> : <div dangerouslySetInnerHTML={{ __html: article.content }}></div>}
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Fragment>
  );
};

export default ArticleDetail;
