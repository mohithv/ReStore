import { Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material'
import axios from 'axios';
import { error } from 'console';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Product } from '../../app/models/product';

function ProductDetails() {

  const {id} = useParams<{id: string}>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    axios.get(`http://localhost:5128/api/Products/${id}`)
        .then(response => setProduct(response.data))
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
  },[id])

  if (loading) return <h4>Loading...</h4> 

  if (!product) {
    return <h3>Product not found</h3>
  }
  
  return (
    // <Typography variant='h2' >
    //     {product.name}
    //     ${(product.price/100).toFixed(2)}
    // </Typography>
    <Grid container spacing={6} alignItems='center'  >
        <Grid item xs={6} >
              <img src={product.pictureUrl} alt={product.name} style={{width: '' }} />              
        </Grid>

        <Grid item xs={6} >
          <Typography variant='h3' >{product.name}</Typography>
          <Divider sx={{mb:2}} />

          <Typography variant='h4' color='secondary' >${(product.price/100).toFixed(2)}</Typography>

          <TableContainer>
            <Table>
              <TableBody>
                <TableRow>
                      <TableCell>Name</TableCell> 
                      <TableCell>{product.name}</TableCell> 
                </TableRow>
                <TableRow>
                      <TableCell>Description</TableCell> 
                      <TableCell>{product.description}</TableCell> 
                </TableRow>
                <TableRow>
                      <TableCell>Type</TableCell> 
                      <TableCell>{product.type}</TableCell> 
                </TableRow>
                <TableRow>
                      <TableCell>Brand</TableCell> 
                      <TableCell>{product.brand}</TableCell> 
                </TableRow>
                <TableRow>
                      <TableCell>Quantity in stock</TableCell> 
                      <TableCell>{product.quantityInStock}</TableCell> 
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

        </Grid>
    </Grid>
  )
}

export default ProductDetails