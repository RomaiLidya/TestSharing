 import { TableBody, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { HeaderRow, TableCustom } from 'components';
import React, { FC, useState } from 'react';
 import BodyRow from './components/BodyRow';

 interface Props{
  categories?: CategoryModel[];
     isLoading: boolean;
     handleConfirmationDelete: (id: number) => React.MouseEventHandler;
     handleOnUpdate:(id:number) =>React.MouseEventHandler;
 }

 const dummyCategory: CategoryModel={
 id:0,
 name:'',
 code:'',
 description:''
 }

 const CategoryTable : FC<Props> = props =>{
   const {categories, isLoading, handleOnUpdate, handleConfirmationDelete}= props;
   const [showSkeleton, setShowSkaleton]= useState<boolean> (false);


  return (
<TableContainer>
    <TableCustom>
    <TableHead>
          <HeaderRow
        
            headers={[
              { id: 'name', label: 'Kategori Induk', sort: true },
              { id: 'code', label: 'Kode', sort: true },
              { id: 'description', label: 'Deskripsi', sort: true },
              { label: '' }
            ]}
          />
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
            
              </TableRow>
            )}
     
            </TableBody>
    </TableCustom>
</TableContainer>
  );
 };

 export default CategoryTable;