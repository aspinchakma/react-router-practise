import { Button, Grid, Input, LinearProgress, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Meal from './Meal/Meal';
import './Resturent.css'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Resturent = () => {
    const [getText, setGetText] = useState('');
    const [result, getResult] = useState([]);
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${getText}
        `;
        fetch(url)
            .then(res => res.json())
            .then(data => getResult(data.meals))
    }, [getText])

    const getTextValue = (event) => {
        const textValue = event.target.value;
        setGetText(textValue)
    };
    return (
        <div className="container">

            <TextField onChange={getTextValue} id="outlined-search" size="small" label="Search Meal" type="search" />

            <Button size="medium" variant="contained">Search</Button>
            <div className="meal-container">
                <Grid container spacing={2}>
                    {
                        result.length === 0 ?
                            <Box className="loading" sx={{ width: '100%' }}>
                                <CircularProgress color="secondary" />

                            </Box>
                            :
                            result.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
                    }
                </Grid>
            </div>



        </div>
    );
};

export default Resturent;