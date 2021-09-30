import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import './DisplayMeal.css'

const DisplayMeal = () => {
    const { mealId } = useParams()
    console.log(mealId)
    const [meal, setMeal] = useState([]);

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMeal(data.meals))
    }, []);
    const mealDetails = meal[0]
    return (
        <div className="single-meal-details">
            {
                meal.length === 0 ?
                    <Box className="loading" sx={{ width: '100%' }}>
                        <CircularProgress color="secondary" />

                    </Box>
                    :
                    <Card style={{ display: 'flex' }}>
                        <div>
                            <CardHeader
                                title={mealDetails.strMeal}
                            />
                            <CardMedia sx={{ minWidth: 180 }}
                                component="img"
                                height="194"
                                image={mealDetails.strMealThumb}
                                alt="Paella dish"
                            />
                        </div>
                        <CardContent>
                            <CardHeader
                                title="How To Make"
                            />
                            <Typography variant="body2" color="text.secondary">
                                {mealDetails.strInstructions.slice(0, 675)}
                            </Typography>
                        </CardContent>

                    </Card>
            }
        </div>
    );
};

export default DisplayMeal;