import {
    Box,
    Typography,
    AppBar,
    Toolbar,
    Button,
    IconButton,
    Tooltip,
    Badge,
    Avatar
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Bell as BellIcon } from '../../icons/bell';
import { Users as UsersIcon } from '../../icons/users';

export const MyAppBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar color="info" position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component={'div'}>
                        News
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />

                    <Tooltip title="contacts" sx={{ cursor: 'pointer', mr: 3 }}>
                        <UsersIcon />
                    </Tooltip>
                    <Tooltip title="notifications" sx={{ cursor: 'pointer', mr: 3 }}>
                        <Badge badgeContent={4} color="success">
                            <BellIcon />
                        </Badge>
                    </Tooltip>
                    <Avatar src='/static/images/avatars/avatar_6.png' sx={{width: 40, height: 40}}>
                        JM
                    </Avatar>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
