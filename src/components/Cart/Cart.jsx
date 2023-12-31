import React from 'react';
import {Container, Typography, Button, Grid} from '@material-ui/core';
import useStyles from '../Products/styles'

const Cart = (cart) => {
    const classes = useStyles()
    const isEmpty = cart.line_items.length;
    //  const isEmpty = true;
    const EmptyCard = () => (
      


        <Typography variant='subtitle1'>You have no items in your card, start adding some</Typography>
    )

    const FilledCard = () => (
        
        <>
          <Grid container spacing={3}>
             {cart.line_items.map((item) => {
               <Grid item xs={12} sm={4} key={item.id}>
                  <div>{item.name}</div>
               </Grid>
             })}
          </Grid>
            <div className={classes.cardDetails}>
                 <Typography variant='h4'>Subtotal: {cart.subtotal.formatted_with_symbols}</Typography>
                 <div>
                    <Button className={classes.emptyButton} size='large' type='button' variant='contained'color='secondary'>Empty  Cart</Button>
                    <Button className={classes.checkout} size='large' type='button' variant='contained'color='secondary'>Empty  Cart</Button>
                 </div>
            </div>
        </>
    )

  return (
    <Container>
        <div className={classes.toolbar} />
        <Typography className={classes.title} variant='h3'>Your Shopping cart</Typography>
        {isEmpty ? <EmptyCard/> : <FilledCard/>}
    </Container>
  )
}

export default Cart