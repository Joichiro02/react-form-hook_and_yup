import React from 'react';
import { FormControl, TextField } from "@mui/material";

interface TextFieldDataTypes {
    label: string;
    inputProps?: any;
}

const TextFields: React.FC<TextFieldDataTypes> = ({ label, inputProps }) => {
    return (
        <FormControl fullWidth sx={{ mb: "1rem" }}>
            <TextField label={label} variant="filled" InputProps={inputProps} required />
        </FormControl>
    )
}

export default TextFields