import React, { FC, useState, useEffect } from 'react';
import { TableBody, TableHead, TableRow, TableCell, TextField, TableContainer, makeStyles, Menu, MenuItem } from '@material-ui/core';
import BodyRow from './components/BodyRow';
import { HeaderRow, TableCellHead, TableCustom } from 'components/Table';
import { dummyAccess } from 'utils/dummy';

interface Props {
  isLoadingData: boolean;
  count: number;
  currentPage: number;
  rowsPerPage: number;
  access?: AccessModel[];
  handleOnUpdate: (id: number) => React.MouseEventHandler;
  queryString?: string;
}

const useStyles = makeStyles({
  cellStartId: {
    width: '10%'
  },
  cellTable: {
    width: '17%'
  },
  cellTable3: {
    width: '13%'
  }
});

const AccessTable: FC<Props> = props => {
  const classes = useStyles();
  const { isLoadingData, access, handleOnUpdate, queryString } = props;

  const [showSkeleton, setShowSkeleton] = useState<boolean>(false);

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
            headers={[
              { id: 'accesId', label: 'ID', sort: true },
              { id: 'level', label: 'LEVEL', sort: true },
              { id: 'access', label: 'HAK AKSES', sort: true },
              { label: '' }
            ]}
          />
        </TableHead>
        <TableBody>
          {showSkeleton ? (
            [0, 1, 2, 3].map(index => <BodyRow key={index} isLoading={showSkeleton} access={dummyAccess} onUpdate={handleOnUpdate(0)} />)
          ) : access && access.length > 0 ? (
            access.map((value, index) => <BodyRow key={index} isLoading={showSkeleton} access={value} onUpdate={handleOnUpdate(index)} />)
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

export default AccessTable;
