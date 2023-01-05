import { useRef, useState } from 'react';
import {
    AppBar,
    IconButton,
    Toolbar,
    Tooltip,
    Typography,
    Box,
    Badge,
    Avatar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import styled from '@emotion/styled';
import { Bell as BellIcon } from '../icons/bell';
import { UserCircle as UserCircleIcon } from '../icons/user-circle';
import { Users as UsersIcon } from '../icons/users';

const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
}));
export const DashbaordNavbar = (props) => {
    const {...others}  = props;

    return (
        <>
            <DashboardNavbarRoot
                sx={{
                    left: {
                        lg: 280
                    },
                    width: {
                        lg: 'calc(100% - 280px)'
                    }
                }}
            >
                <Toolbar>
                    <>
                        <IconButton
                            size="large"
                            edge="start"
                            aria-label="menu"
                            sx={{
                                display: {
                                    xs: 'inline-flex',
                                    lg: 'none',
                                },
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Tooltip title="Search">
                            <IconButton>
                                <SearchIcon fontSize="small" />
                            </IconButton>
                        </Tooltip>
                        <Typography
                            variant="h6"
                            component={'div'}
                            sx={{
                                color: 'black',
                            }}
                        >
                            Tickets
                        </Typography>
                    </>
                    <Box sx={{ flexGrow: 1 }} />
                    <>
                        <Tooltip title="Contants">
                            <IconButton>
                                <UsersIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Notification">
                            <IconButton>
                                <Badge
                                    badgeContent={4}
                                    color="primary"
                                    variant='standard'
                                >
                                <BellIcon />
                                </Badge>
                            </IconButton>
                        </Tooltip>
                        <Avatar
                            src='/static/images/avatars/avatar_1.png'
                            sx={{
                                cursor: 'pointer',
                                height: 40,
                                width: 40,
                                ml: 1
                            }}
                        >
                            <UserCircleIcon fontSize="small" />
                        </Avatar>
                    </>
                </Toolbar>
            </DashboardNavbarRoot>
        </>
    );
};
