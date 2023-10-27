import React, { memo, FC } from "react";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useMediaQuery, IconButton, PaletteMode, Typography } from "@mui/material";
import { ToggleProps } from "@component/types/types";

const ThemeToggleButton: FC<ToggleProps> = ({ colorMode, theme }) => {
    const mobileCheck = useMediaQuery('(max-width: 500px)')
    return (
        <>
            {mobileCheck && (
                <Typography>{theme.palette.mode}</Typography>
            )}
            <IconButton sx={{ ml: 1 }} onClick={colorMode}>
                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}</IconButton>
        </>
    )
};


export default memo(ThemeToggleButton);