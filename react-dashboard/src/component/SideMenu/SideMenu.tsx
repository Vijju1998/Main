import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import { signOut } from "next-auth/react";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DrawerHeaderscss from "./SideMenu.module.scss"
import { useState } from 'react';
import { useMediaQuery } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import NextLink from "next/link"
const drawerWidth = 240;

type mobileCheckProps = boolean;

const menuRouteList = ["analyticss", "profile", "settings", ""];
const menuListTransition = ["Data", "Profile", "Setting", "Sign Out"];
const menuListIcons = [
    <EqualizerIcon />,
    <AccountCircleIcon />,
    <SettingsIcon />,
    <LogoutIcon />
];
const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    ...DrawerHeaderscss,
    padding: theme.spacing(0, 1)
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' && prop !== 'mobileCheck' }
)<{ mobileCheck: mobileCheckProps }>(({ theme, open, mobileCheck }) => ({
    width: drawerWidth,

    ['& .MuiDrawer-paper']: {
        top: mobileCheck ? 64 : 60,
        left: 0,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    },

}),
);

const SideMenu: React.FunctionComponent = function () {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const mobileCheck = useMediaQuery('(min-width:600px)')
    const handleDrawerOpenClose = () => {
        setOpen(props => !props);
    };
    const handleSignout = (text: string) => {
        text === "Sign Out" ? signOut() : "";
        setOpen(!open);

    }
    return (
        <>

            <Drawer variant="permanent" open={open} mobileCheck={mobileCheck}>
                <DrawerHeader >
                    <IconButton onClick={handleDrawerOpenClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {menuListTransition.map((text, index) => (
                        <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                            <NextLink className={DrawerHeaderscss.link}
                                href={`/dashboard/${menuRouteList[index]}`}>
                                <ListItemButton
                                
                                    onClick={() => { handleSignout(text) }}
                                    title={text}
                                    aria-label={text}
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {menuListIcons[index]}
                                    </ListItemIcon>
                                    <ListItemText primary={text} sx={{ color: theme.palette.text.primary, opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </NextLink>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    )
}

export default SideMenu;