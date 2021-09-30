import { Avatar, Button, Card, CardContent, CardHeader, CardMedia, Grid, Rating, Typography } from '@mui/material';
import React from 'react';
import './Meal.css'
import { Link } from 'react-router-dom';

const Meal = (props) => {
    // console.log(props.meal)
    const { strMealThumb, strMeal, strInstructions, idMeal } = props.meal;
    const style = {
        backgroundColor: 'red',
    }
    return (

        <Grid item xs={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={style} aria-label="recipe">
                            {strMeal.slice(0, 1)}
                        </Avatar>
                    }

                    title={strMeal}
                    subheader="September 14, 2016"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={strMealThumb}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {strInstructions.slice(0, 315)}
                    </Typography>
                    <Typography component="legend">User Rating</Typography>
                    <Rating name="read-only" value={3} readOnly /><br />
                    <Link className="details-button" to={`/meal/${idMeal}`}>
                        <Button variant="contained" color="success">
                            See Details
                        </Button>
                    </Link>
                </CardContent>

            </Card>

        </Grid>
    );
};

export default Meal;