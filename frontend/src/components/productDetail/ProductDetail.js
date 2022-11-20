import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Product } from '../../redux/features/productSlice';
import { Button, Grid } from '@mui/material';
import { Link, useNavigate, useParams } from "react-router-dom"
import { useState } from 'react'
export default function ProductDetail() {
    let { name } = useParams()
    name=name.substring(1)
    const { products } = useSelector((state) => ({ ...state.products }))
    console.log(products);
    const dispatch = useDispatch()
    useEffect(() => {
        const product = localStorage.getItem('profile');
        if(product){
            dispatch(Product());
        }
    }, [])
    
    return (

        <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto ', margin: '4%' }}>
            {products && products?.products?.map((singleProduct) => {
             if(singleProduct.name===name){
                  return <div style={{display:'flex'}}>
                    <div>

                    <img style={{height:'50%'}} src={singleProduct.imageURL}/>
                    </div>
                    <div>
                        <h3>{singleProduct.name}</h3>
                        <h6>{singleProduct.category}</h6>
                        <p>{singleProduct.description}</p>
                        <h3 style={{color:'red'}}>Rs: {singleProduct.price}</h3>
                        <br/>
                        <br/>
                        <button style={{backgroundColor:'blue',color:'white'}}>Place Order</button>
                        </div>
                    </div>
                }

                
             })
            }
        </div>
    );
}