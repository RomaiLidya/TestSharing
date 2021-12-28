import React, { FC, Fragment } from 'react';
import { Grid } from '@material-ui/core';
import { dummyArticle } from 'utils/dummy';
import BodyRow from './components/BodyRow';

interface Props {
  isLoadingData: boolean;
  articles: ArticleModel[];
  handleConfirmationDelete: (id: number) => React.MouseEventHandler;
}

const ArticleTable: FC<Props> = props => {
  const { isLoadingData, articles, handleConfirmationDelete } = props;

  return (
    <Fragment>
      {isLoadingData
        ? [0, 1, 2, 3].map(index => (
            <Grid key={index} item md={3} sm={6} xs={6}>
              <BodyRow key={index} article={dummyArticle} isLoading={isLoadingData} onDelete={handleConfirmationDelete(0)} />
            </Grid>
          ))
        : articles &&
          articles.length > 0 &&
          articles.map((value, index) => (
            <Grid key={index} item md={3} sm={6} xs={6}>
              <BodyRow key={index} article={value} isLoading={isLoadingData} onDelete={handleConfirmationDelete(value.id)} />
            </Grid>
          ))}
    </Fragment>
  );
};

export default ArticleTable;
