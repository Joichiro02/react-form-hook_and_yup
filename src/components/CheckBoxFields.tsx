import React from 'react';
import { Checkbox, FormControlLabel } from "@mui/material";
import { Controller } from "react-hook-form";

interface TSelectFieldDataTypes {
    control: any;
    name: string;
}

const CheckBoxFields: React.FC<TSelectFieldDataTypes> = ({ control, name }) => {
    return (
        <Controller name={name} control={control} render={({ field }) => (
            <FormControlLabel control={<Checkbox {...field} required />} label="I Agree to MyApp Terms and Privary Policy" />
        )} />

    )
}

export default CheckBoxFields