import React, { FC } from 'react';
import { Tooltip, IconButton } from '@material-ui/core';
import { EditOutlined, DeleteOutline } from '@material-ui/icons';
import Skeleton from '@material-ui/lab/Skeleton';
import { TableCellMiddle, TableCellEnd, TableCellStart } from 'components/Table/TableCellCustom';
import TableRowCustom from 'components/Table/TableRowCustom';

interface Props {
  category: CategoryModel;
  isLoading: boolean;
  onDelete: React.MouseEventHandler;
  onUpdate: React.MouseEventHandler;
}

const BodyRow: FC<Props> = props => {
  const { category, isLoading, onDelete, onUpdate } = props;

  return (
    <TableRowCustom>
      <TableCellStart>{isLoading ? <Skeleton variant='text' width={'100%'} height={25} /> : category.name}</TableCellStart>
      <TableCellMiddle>{isLoading ? <Skeleton variant='text' width={'100%'} height={25} /> : category.code}</TableCellMiddle>
      <TableCellMiddle>{isLoading ? <Skeleton variant='text' width={'100%'} height={25} /> : category.description}</TableCellMiddle>
      <TableCellEnd align='right'>
        {isLoading ? (
          <Skeleton variant='text' width={'100%'} height={25} />
        ) : (
          <>
            <Tooltip title='Hapus Kategori'>
              <IconButton size='small' onClick={onDelete}>
                <DeleteOutline fontSize='small' />
              </IconButton>
            </Tooltip>
            <Tooltip title='Perbaharui Kategori'>
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
