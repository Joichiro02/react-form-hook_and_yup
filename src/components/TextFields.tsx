import React from 'react';
import { FormControl, TextField } from "@mui/material";
import { Controller } from "react-hook-form";

interface TextFieldDataTypes {
    label: string;
    inputProps?: any;
    control: any;
    name: string;
}

const TextFields: React.FC<TextFieldDataTypes> = ({ label, inputProps, control, name }) => {
    return (
        <FormControl fullWidth sx={{ mb: "1rem" }}>
            <Controller name={name} control={control} render={({ field }) => (
                <TextField {...field} label={label} variant="filled" InputProps={inputProps} required />
            )} />
        </FormControl>
    )
}

export default TextFields