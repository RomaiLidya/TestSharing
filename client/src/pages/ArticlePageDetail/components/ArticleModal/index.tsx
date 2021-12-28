import React, { FC } from 'react';
import { createStyles, makeStyles, Theme, DialogContent } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import { DialogTitle } from 'components/Dialog';
import ArticleWizard from './ArticleWizard';

interface Props {
  article: ArticleModel;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setArticle: React.Dispatch<React.SetStateAction<ArticleModel>>;
  handleSnackBar: (open: boolean, variant: 'success' | 'error', message: string) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3)
    }
  })
);

const ArticleModal: FC<Props> = props => {
  const classes = useStyles();
  const { article, open, setOpen, setArticle, handleSnackBar } = props;

  return (
    <Dialog maxWidth={'md'} fullWidth={true} disableBackdropClick={true} aria-labelledby='customized-dialog-title' open={open}>
      <DialogTitle id='customized-dialog-title'>Edit</DialogTitle>
      <DialogContent>
        <ArticleWizard article={article} setArticle={setArticle} setOpen={setOpen} handleSnackBar={handleSnackBar} />
      </DialogContent>
    </Dialog>
  );
};

export default ArticleModal;
