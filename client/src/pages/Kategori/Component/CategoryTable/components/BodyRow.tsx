import { IconButton, Tooltip } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { TableCellEnd, TableCellMiddle, TableCellStart, TableRowCustom } from 'components';
import React, { FC } from 'react';

interface Props{
    category: CategoryModel;
    isLoading: boolean;
    onDelete: React.MouseEventHandler;
    onUpdate: React.MouseEventHandler;
}

const BodyRow : FC<Props> = props =>{
    
  
    const { category, isLoading, onDelete, onUpdate} = props;

    return(
        <TableRowCustom>
            <TableCellStart> {isLoading ? <Skeleton variant='text'/> : category.name} </TableCellStart>
            <TableCellMiddle> {isLoading? <Skeleton variant='text'/>: category.code}</TableCellMiddle>
            <TableCellEnd>{isLoading? <Skeleton variant='text'/>: 
            <Tooltip title='hapus'>
                <IconButton></IconButton>
                </Tooltip>
                }
                <Tooltip title='edit'>
                    <IconButton></IconButton>
                </Tooltip>
                </TableCellEnd>
        </TableRowCustom>
    )
};

export default BodyRow;