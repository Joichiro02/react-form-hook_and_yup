import { Box, Typography } from '@mui/material';
import { Error } from "@mui/icons-material"
import React from 'react';

interface ErrorMessageDataType {
    message: string;
}

const ErrorMessage: React.FC<ErrorMessageDataType> = ({ message }) => {
    return (
        <Box sx={{ display: "flex", alighItems: "center", gap: "5px", mt: "6px" }}>
            <Error color="error" />
            <Typography color="error.main" fontSize="14px">{message}</Typography>
        </Box >
    )
}

export default ErrorMessage