import {
    Box,
    Typography,
    AppBar,
    IconButton,
    Toolbar,
    InputBase,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&.hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.15),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + fontsize from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export const AppNavBar = () => {
    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <>
                        <IconButton
                            size="large"
                            color="inherit"
                            aria-label="Menu Opener"
                            edge="start"
                            sx={{ mr: 1 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            component={'div'}
                            variant="h6"
                            sx={{
                                display: {
                                    xs: 'none',
                                    sm: 'block',
                                },
                            }}
                        >
                            Tickets
                        </Typography>
                    </>

                    <Box sx={{ flexGrow: 1 }} />

                    <>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search..."
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
