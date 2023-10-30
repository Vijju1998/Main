import React, { memo, FC, useMemo, createContext, useContext } from "react";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useMediaQuery, IconButton, PaletteMode, Typography } from "@mui/material";
import { ToggleProps } from "@component/types/types";
import { useTheme } from "@mui/system";


const ThemeToggleButton: FC<ToggleProps> = (props) => {
    console.log(props)
    const mobileCheck = useMediaQuery('(max-width: 500px)');

    const { ColorModeContext = createContext({ toggleColorMode: () => { } }) } = props;
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
    return (
        <>
            {mobileCheck && (
                <Typography>{theme.palette.mode}</Typography>
            )}
            <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon sx={{
                    color:'#ffffff'
                }}/>}</IconButton>
        </>
    )
};


export default memo(ThemeToggleButton);