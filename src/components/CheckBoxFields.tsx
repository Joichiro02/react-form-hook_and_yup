import React from 'react';
import { Checkbox, FormControlLabel } from "@mui/material";
import { Controller } from "react-hook-form";
import { addErrorIntoField } from '../utils';
import ErrorMessage from './ErrorMessage';

interface TSelectFieldDataTypes {
    control: any;
    name: string;
    errors: any;
}

const CheckBoxFields: React.FC<TSelectFieldDataTypes> = ({ control, name, errors }) => {
    return (
        <>
            <Controller name={name} control={control} render={({ field }) => (
                <FormControlLabel control={<Checkbox {...field} {...addErrorIntoField(errors[name])} required />} label="I Agree to MyApp Terms and Privary Policy" />
            )} />
            {errors[name] ? <ErrorMessage message={errors[name].message} /> : null}
        </>

    )
}

export default CheckBoxFields