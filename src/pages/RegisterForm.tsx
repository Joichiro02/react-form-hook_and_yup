import HowToRegIcon from '@mui/icons-material/HowToReg';
import { Avatar, Button, Box, InputAdornment, Typography, } from '@mui/material';
import React from 'react';
import TextFields from '../components/TextFields';
import SelectFields from '../components/SelectFields';
import CheckBoxFields from '../components/CheckBoxFields';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//create schema validation
const schema = yup.object({
    fullName: yup.string().required("Full Name is Required"),
    email: yup.string().required("Email is Required").email(),
    mobile: yup.string().required("Mobile Phone is Required"),
    country: yup.string().required("Country is Required"),
    password: yup.string().required("Password is Required"),
    comfirmPassword: yup.string(),
    privary: yup.bool().oneOf([true], "Field must be check"),

})

const RegisterForm = () => {
    const { handleSubmit, formState: { errors }, control } = useForm({
        defaultValues: {
            fullName: "",
            email: "",
            mobile: "",
            country: "",
            password: "",
            confirmPassword: "",
            privary: false
        },
        resolver: yupResolver(schema)
    });

    const onSubmit = (data: any) => {
        console.log(data);

    }
    return (
        <Box sx={{ display: "flex", flexDirection: "column", mt: "4rem", alignItems: "center" }}>
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <HowToRegIcon />
            </Avatar>
            <Typography component={"h1"}>
                Sign Up
            </Typography>
            <Box noValidate component={"form"} onSubmit={handleSubmit(onSubmit)} sx={{ width: "100%", mt: "2rem" }}>
                <TextFields errors={errors} control={control} name="fullName" label="Full Name" />
                <TextFields errors={errors} control={control} name="email" label="Email" />
                <TextFields errors={errors} control={control} name="mobile" label="Mobile Phone" inputProps={{ startAdornment: <InputAdornment position="start">+91</InputAdornment>, type: "number" }} />
                <SelectFields errors={errors} control={control} name="country" label="Country" />
                <TextFields errors={errors} control={control} name="password" label="Password" />
                <TextFields errors={errors} control={control} name="confirmPassword" label="Confirm Password" />
                <CheckBoxFields errors={errors} control={control} name="privary" />
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Sign Up</Button>
            </Box>
        </Box>
    )
}

export default RegisterForm