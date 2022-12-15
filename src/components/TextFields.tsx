import React from 'react';
import { FormControl, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { addErrorIntoField } from '../utils';
import ErrorMessage from './ErrorMessage';

interface TextFieldDataTypes {
    label: string;
    inputProps?: any;
    control: any;
    name: string;
    errors: any
}

const TextFields: React.FC<TextFieldDataTypes> = ({ label, inputProps, control, name, errors }) => {
    return (
        <FormControl fullWidth sx={{ mb: "1rem" }}>
            <Controller name={name} control={control} render={({ field }) => (
                <TextField {...field} {...addErrorIntoField(errors[name])} label={label} variant="filled" InputProps={inputProps} required />
            )} />
            {errors[name] ? <ErrorMessage message={errors[name].message} /> : null}
        </FormControl>
    )
}

export default TextFields