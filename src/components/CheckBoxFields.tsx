import React from 'react';
import { Checkbox, FormControlLabel } from "@mui/material";

interface TSelectFieldDataTypes {
    control: any;
    name: string;
}

const CheckBoxFields: React.FC<TSelectFieldDataTypes> = ({ control, name }) => {
    return (
        <FormControlLabel control={<Checkbox defaultChecked />} label="I Agree to MyApp Terms and Privary Policy" />
    )
}

export default CheckBoxFields