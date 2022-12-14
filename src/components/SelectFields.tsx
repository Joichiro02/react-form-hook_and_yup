import React from 'react';
import { FormControl, TextField, MenuItem } from "@mui/material";
import { Controller } from "react-hook-form";

interface TSelectFieldDataTypes {
    label: string;
    control: any;
    name: string;
}

const SelectFields: React.FC<TSelectFieldDataTypes> = ({ label, control, name }) => {
    return (
        <FormControl fullWidth sx={{ mb: "1rem" }}>
            <Controller name={name} control={control} render={({ field }) => (
                <TextField {...field} label={label} variant="filled" select required>
                    <MenuItem value="none">None</MenuItem>
                    <MenuItem value="us">US</MenuItem>
                    <MenuItem value="india">India</MenuItem>
                </TextField>
            )} />
        </FormControl>
    )
}

export default SelectFields