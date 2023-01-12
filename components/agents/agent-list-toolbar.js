import { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    Button,
    TextField,
    InputAdornment,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { Upload as UploadIcon } from '../../icons/upload';
import { Download as DownloadIcon } from '../../icons/download';
import { CreateAgentModal } from './create-agent-modal';

export const AgentListToolbar = ({ unmappedUsers, ...props }) => {
    const [open, setOpen] = useState(false);

    const handleOPen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        console.log(open ? 'Modal Open' : 'Modal closed');
    }, [open]);

    return (
        <>
            <Box {...props} sx={{ mb: 3 }}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        mb: 1,
                    }}
                >
                    <Typography variant="h4">Agents</Typography>
                    <Box>
                        <Button
                            variant="text"
                            startIcon={<UploadIcon fontSize="small" />}
                            size="medium"
                            sx={{ mr: 1 }}
                        >
                            Import
                        </Button>

                        <Button
                            variant="text"
                            startIcon={<DownloadIcon fontSize="small" />}
                            size="medium"
                            sx={{ mr: 1 }}
                        >
                            Export
                        </Button>
                        <Button
                            variant="contained"
                            size="medium"
                            startIcon={<AddIcon />}
                            onClick={handleOPen}
                        >
                            Agent
                        </Button>
                    </Box>
                </Box>
                <Box sx={{}}>
                    <TextField
                        placeholder="Search"
                        id="search-agents"
                        size="small"
                        variant="outlined"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>
            </Box>
            <CreateAgentModal
                open={open}
                handleClose={handleClose}
                unmappedUsers={unmappedUsers}
            />
        </>
    );
};
