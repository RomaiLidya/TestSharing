import React, { FC, useState, useEffect } from 'react';
import { TableContainer, TableBody, TableHead, TableRow, TableCell, TextField, makeStyles } from '@material-ui/core';
import { HeaderRow, TableCellHead, TableCustom } from 'components/Table';
import BodyRow from './components/BodyRow';

interface Props {
  isLoadingData: boolean;
  categories?: CategoryModel[];
  queryString?: string;
  order: 'asc' | 'desc';
  orderBy: string;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  setOrder: React.Dispatch<React.SetStateAction<'asc' | 'desc'>>;
  setOrderBy: React.Dispatch<React.SetStateAction<string>>;
  handleConfirmationDelete: (id: number) => React.MouseEventHandler;
  handleOnUpdate: (id: number) => React.MouseEventHandler;
}

const useStyles = makeStyles({
  cellStart: {
    width: '20%'
  }
});

const dummyCategory: CategoryModel = {
  id: 0,
  name: '',
  code: '',
  description: ''
};

const CategoryTable: FC<Props> = props => {
  const classes = useStyles();

  const {
    isLoadingData,
    categories,
    order,
    orderBy,
    name,
    setName,
    code,
    setCode,
    setOrder,
    setOrderBy,
    queryString,
    handleConfirmationDelete,
    handleOnUpdate
  } = props;

  const [showSkeleton, setShowSkeleton] = useState<boolean>(false);
  const handleRequestSort = (event: React.MouseEvent<unknown>, property: string) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  useEffect(() => {
    if (isLoadingData) {
      setShowSkeleton(true);
    }
    return () => {
      setShowSkeleton(false);
    };
  }, [isLoadingData]);

  return (
    <TableContainer>
      <TableCustom>
        <TableHead>
          <HeaderRow
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            headers={[
              { id: 'name', label: 'Kategori Induk', sort: true },
              { id: 'code', label: 'Kode', sort: true },
              { id: 'description', label: 'Deskripsi', sort: true },
              { label: '' }
            ]}
          />
          <TableRow>
            <TableCellHead variant='head' className={classes.cellStart}>
              <TextField placeholder='Nama Kategori' id='name' value={name} onChange={event => setName(event.target.value)} />
            </TableCellHead>
            <TableCellHead variant='head' colSpan={2}>
              <TextField id='code' placeholder='Kode' value={code} onChange={event => setCode(event.target.value)} />
            </TableCellHead>
          </TableRow>
        </TableHead>
        <TableBody>
          {showSkeleton ? (
            [0, 1, 2, 3].map(index => (
              <BodyRow
                key={index + 1}
                isLoading={showSkeleton}
                category={dummyCategory}
                onDelete={handleConfirmationDelete(0)}
                onUpdate={handleOnUpdate(0)}
              />
            ))
          ) : categories && categories.length > 0 ? (
            categories.map((value, index) => (
              <BodyRow
                key={index + 1}
                isLoading={showSkeleton}
                category={value}
                onDelete={handleConfirmationDelete(value.id)}
                onUpdate={handleOnUpdate(index)}
              />
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} align='center'>
                {queryString ? 'No matching result' : 'Data Tidak Tersedia.'}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </TableCustom>
    </TableContainer>
  );
};

export default CategoryTable;
