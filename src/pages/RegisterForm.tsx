import HowToRegIcon from '@mui/icons-material/HowToReg';
import { Avatar, Button, Box, InputAdornment, Typography, } from '@mui/material';
import React from 'react';
import TextFields from '../components/TextFields';
import SelectFields from '../components/SelectFields';
import CheckBoxFields from '../components/CheckBoxFields';

const RegisterForm = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", mt: "4rem", alignItems: "center" }}>
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <HowToRegIcon />
            </Avatar>
            <Typography component={"h1"}>
                Sign Up
            </Typography>
            <Box component={"form"} sx={{ width: "100%", mt: "2rem" }}>
                <TextFields label="Full Name" />
                <TextFields label="Email" />
                <TextFields label="Mobile Phone" inputProps={{ startAdornment: <InputAdornment position="start">+91</InputAdornment>, type: "number" }} />
                <SelectFields label="Country" />
                <TextFields label="Password" />
                <TextFields label="Confirm Password" />
                <CheckBoxFields />
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Sign Up</Button>
            </Box>
        </Box>
    )
}

export default RegisterForm