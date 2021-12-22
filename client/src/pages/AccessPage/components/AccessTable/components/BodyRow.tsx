import React, { FC } from 'react';
import { makeStyles, createStyles, Theme, Button, Typography, Tooltip, IconButton } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { RED } from 'constants/colors';
import { TableCellEnd, TableCellMiddle, TableCellStart, TableRowCustom, StatusOrder } from 'components';
import EditOutlined from '@material-ui/icons/EditOutlined';

interface Props {
  access: AccessModel;
  isLoading: boolean;
  onUpdate: React.MouseEventHandler;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    deleteButton: {
      color: RED,
      width: 30
    },
    tableCell: {
      width: 150
    },
    tableCellAction: {
      width: 30
    },
    customerName: {
      fontSize: '15px',
      fontWeight: 500,
      fontFamily: 'Rubik',
      fontStyle: 'normal',
      lineHeight: '22px'
    }
  })
);

const BodyRow: FC<Props> = props => {
  const { access, isLoading, onUpdate } = props;
  const classes = useStyles();

  return (
    <TableRowCustom>
      <TableCellStart>{isLoading ? <Skeleton variant='text' width={60} height={25} /> : '#' + access.id}</TableCellStart>

      <TableCellMiddle align='center'>{isLoading ? <Skeleton variant='text' width={100} height={25} /> : access.level}</TableCellMiddle>

      <TableCellMiddle align='center'>{isLoading ? <Skeleton variant='text' width={100} height={25} /> : access.access}</TableCellMiddle>

      <TableCellEnd align='center' className={classes.tableCellAction}>
        {isLoading ? (
          <Skeleton variant='text' width={'100%'} height={25} />
        ) : (
          <>
            <Tooltip title='Perbaharui akses'>
              <IconButton size='small' onClick={onUpdate}>
                <EditOutlined fontSize='small' />
              </IconButton>
            </Tooltip>
          </>
        )}
      </TableCellEnd>
    </TableRowCustom>
  );
};

export default BodyRow;
