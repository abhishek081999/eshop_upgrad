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
import  {Link,useNavigate} from "react-router-dom"
import ProductDetail from '../productDetail/ProductDetail';

export default function Home() {
  const { user } = useSelector((state) => ({ ...state.auth }));
  const { products } = useSelector((state) => ({ ...state.products }))
  const [expanded, setExpanded] = React.useState(false);
  const dispatch = useDispatch()

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
 
  useEffect(() => {
    if (user !== null) {
      dispatch(Product());
    }
  }, [user])
  return (

    <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto ' ,margin:'4%'}}>
    {products && products?.products?.map((singleProduct) => {

        return <Card  sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {singleProduct.price}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">

              </IconButton>
            }
            title={singleProduct.name}
            subheader={singleProduct.createdAt}
          />
          <CardMedia
            component="img"
            height="194"
            image={singleProduct.imageURL}
            alt={singleProduct.name}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {singleProduct.description}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Price:  {singleProduct.price}
            </Typography>
            <Button >
            <Grid item>
                <Link to={`/productdetails/:${singleProduct.name}`} variant="h6">
                 Buy
                </Link>
              </Grid>
            </Button>
          </CardContent>


        </Card>
      
          
    })
    }
  
</div>
  );
}