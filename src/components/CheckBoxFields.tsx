import React from 'react';
import { Checkbox, FormControlLabel } from "@mui/material";

const CheckBoxFields = () => {
    return (
        <FormControlLabel control={<Checkbox defaultChecked />} label="I Agree to MyApp Terms and Privary Policy" />
    )
}

export default CheckBoxFields