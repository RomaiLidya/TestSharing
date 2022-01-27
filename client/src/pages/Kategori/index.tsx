import { Container, Grid } from '@material-ui/core';
import axios, { CancelTokenSource } from 'axios';
import { CATEGORY_BASE_URL } from 'constants/url';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { dummyCategory } from 'utils/dummy';
import CateroryTable from './Component/CategoryTable';

interface Props{

}

const Kategori : FC<Props>= props =>{
    const [confirmationDelete, setConfirmationDelete]= useState <boolean> (false); 
    const [selectedId, setSelectedId]= useState <number>(0);
    const [open, setOpen]= useState<boolean>(false);
    const [category, setCategory]= useState< CategoryModel | null> (null);
    const [categories, setCategories]= useState<CategoryModel[]>([dummyCategory]);
    const [isLoading, setIsLoading]= useState<boolean>(false);
    const [queryString, setQueryString] = useState<string>();


const fetchData = useCallback(async()=>{
    const cancelTokenSource : CancelTokenSource = axios.CancelToken.source();
    setIsLoading(true);

    const getQueryParams =()=>{
        const params= new URLSearchParams();

        if(queryString){
            params.append('keyword', queryString);
        }
        return params.toString();
    };
   try{
       const {data}= await axios.get(`${CATEGORY_BASE_URL}? ${getQueryParams()}`,{cancelToken: cancelTokenSource.token});
       setCategories(data.data);
   }catch(error){}
       setIsLoading(false);
       return()=>{
           cancelTokenSource.cancel();
       };
   
}, [queryString]);


useEffect(() => {
    fetchData();
  }, [fetchData]);
  
    const handleConfirmationDelete = (id: number) : React.MouseEventHandler => ()=>{
    setSelectedId(id);
    setConfirmationDelete(true)
}

const handleOnUpdate=(id: number): React.MouseEventHandler => ()=>{
    setOpen(true);
    setCategory(categories[id]);
}


    return (
<Container>
    <Grid>
        <CateroryTable handleConfirmationDelete={handleConfirmationDelete} handleOnUpdate={handleOnUpdate} isLoading={isLoading} categories={categories}></CateroryTable>
    </Grid>
</Container>
    );
};

export default Kategori;