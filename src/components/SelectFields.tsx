import React from 'react';
import { FormControl, TextField, MenuItem } from "@mui/material";
import { Controller } from "react-hook-form";
import { addErrorIntoField } from '../utils';
import ErrorMessage from './ErrorMessage';

interface TSelectFieldDataTypes {
    label: string;
    control: any;
    name: string;
    errors: any;
}

const SelectFields: React.FC<TSelectFieldDataTypes> = ({ label, control, name, errors }) => {
    return (
        <FormControl fullWidth sx={{ mb: "1rem" }}>
            <Controller name={name} control={control} render={({ field }) => (
                <TextField {...field} {...addErrorIntoField(errors[name])} label={label} variant="filled" select required>
                    <MenuItem value="none">None</MenuItem>
                    <MenuItem value="us">US</MenuItem>
                    <MenuItem value="india">India</MenuItem>
                </TextField>
            )} />
            {errors[name] ? <ErrorMessage message={errors[name].message} /> : null}
        </FormControl>
    )
}

export default SelectFields