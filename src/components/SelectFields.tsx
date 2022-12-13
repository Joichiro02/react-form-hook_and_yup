import React from 'react';
import { FormControl, TextField, MenuItem } from "@mui/material";

interface TSelectFieldDataTypes {
    label: string;
}

const SelectFields: React.FC<TSelectFieldDataTypes> = ({ label }) => {
    return (
        <FormControl fullWidth sx={{ mb: "1rem" }}>
            <TextField label={label} variant="filled" select required>
                <MenuItem value="none">None</MenuItem>
                <MenuItem value="us">US</MenuItem>
                <MenuItem value="india">India</MenuItem>
            </TextField>
        </FormControl>
    )
}

export default SelectFields