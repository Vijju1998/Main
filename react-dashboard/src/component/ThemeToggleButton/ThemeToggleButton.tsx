import React, { memo, FC } from "react";
import Button from "@mui/material/Button";
import useToggle from "@component/hooks/useToggle";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useMediaQuery, IconButton, PaletteMode, Typography } from "@mui/material";

type ThemeToggleButtonProps = {
    colorMode: () => void;
    theme: {
        palette: {
            mode: string
        },
    }
}
const ThemeToggleButton: FC<ThemeToggleButtonProps> = ({ colorMode, theme }) => {
    console.log(theme);

    const mobileCheck = useMediaQuery('(max-width: 500px)')
    console.log('mobile check',mobileCheck)
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