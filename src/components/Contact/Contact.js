import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './Contact.css'
import img from '../../img/9226.jpg'

const Contact = () => {
    return (
        <div className="input-container">
            <div className="img-container">
                <img src={img} alt="" />
            </div>
            <div>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div className="submit-container">
                        <Typography>
                            <h2>Let's Start a Conversation</h2>
                        </Typography>
                        <TextField
                            fullWidth
                            required
                            id="outlined-required"
                            label="Write Your Full Name"
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Write Your Email"
                        /><br /><br />
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                        />
                        <TextField
                            id="outlined-number"
                            label="Phone Number"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        /><br /><br />
                        <Button size="large" variant="contained">Submit</Button>

                    </div>
                </Box>
            </div>
        </div>
    );
};

export default Contact;