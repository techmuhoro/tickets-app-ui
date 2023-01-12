import React, { useEffect, useState } from 'react';
import {
    Box,
    Modal,
    Typography,
    Autocomplete,
    TextField,
    Button,
    Avatar,
    CircularProgress,
    Snackbar,
    Alert,
} from '@mui/material';
import { countries } from '../../__mock__/countries';
import { deepOrange, deepPurple } from '@mui/material/colors';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
};

export const CreateAgentModal = ({ open, handleClose, unmappedUsers }) => {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [alertOpen, setAlertOpen] = useState(true);
    const [alertSuccessOpen, setAlertSuccessOpen] = useState(false);

    const handleChange = (_, value) => {
        if (!value) {
            setUser(null);
            return;
        }
        setUser(value);
    };

    const mapAgent = async () => {
        if (!user) {
            alert('Select a user to map');
            return;
        }

        setLoading(true);
        const endPoint = process.env.NEXT_PUBLIC_BASE_URL + '/agent';

        const payload = {
            userId: Number(user.id),
        };

        try {
            const res = await fetch(endPoint, {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const newAgent = await res.json();
            if (newAgent.success) {
                console.log('success', newAgent);
                setAlertSuccessOpen(true);
                setUser(null);
                // alert for success
            } else {
                console.log('error', newAgent);
                // alert for error
            }
            setLoading(false);
        } catch (e) {
            setLoading(false);
            console.log(e);
        }
    };
    return (
        <Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        id="modal-modal-title"
                        variant="h5"
                        component="h2"
                        sx={{ mb: 2 }}
                    >
                        Map user as an agent
                    </Typography>
                    {/* <Box sx={{ mb: 3 }}>
                        <Autocomplete
                            id="country-select-demo"
                            fullWidth
                            options={countries}
                            autoHighlight
                            getOptionLabel={(option) => option.label}
                            renderOption={(props, option) => (
                                <Box
                                    component="li"
                                    sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                                    {...props}
                                >
                                    <img
                                        loading="lazy"
                                        width="20"
                                        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                        srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                        alt=""
                                    />
                                    {option.label} ({option.code}) +
                                    {option.phone}
                                </Box>
                            )}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Choose a country"
                                    inputProps={{
                                        ...params.inputProps,
                                        autoComplete: 'new-password',
                                    }}
                                />
                            )}
                        />
                    </Box> */}
                    <Box sx={{ mb: 2 }}>
                        <Autocomplete
                            id="country-select-prac"
                            fullWidth
                            options={unmappedUsers}
                            getOptionLabel={(option) =>
                                `${option.first_name} ${option.last_name}`
                            }
                            autoHighlight
                            onChange={handleChange}
                            value={user}
                            renderOption={(props, option) => (
                                <Box component="li" sx={{ py: 5 }} {...props}>
                                    <Avatar
                                        sx={{ bgcolor: deepPurple[500], mr: 2 }}
                                    >
                                        {`${option.first_name.charAt(
                                            0
                                        )}${option.last_name.charAt(0)}`}
                                    </Avatar>
                                    {`${option.first_name} ${option.last_name}`}
                                </Box>
                            )}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Choose user"
                                    inputProps={{
                                        ...params.inputProps,
                                        autoComplete: 'new-password',
                                    }}
                                />
                            )}
                        />
                    </Box>
                    <Box>
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{ width: '30%' }}
                            onClick={mapAgent}
                            disabled={loading ? true : false}
                        >
                            {loading ? (
                                <CircularProgress
                                    size={25}
                                    sx={{
                                        color: 'white',
                                    }}
                                />
                            ) : (
                                'Map'
                            )}
                        </Button>
                    </Box>
                </Box>
            </Modal>
            <Snackbar
                open={alertSuccessOpen}
                autoHideDuration={6000}
                onClose={() => setAlertSuccessOpen(false)}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <Alert
                    onClose={() => setAlertSuccessOpen(false)}
                    severity="success"
                    sx={{ width: '100%', py: 2 }}
                >
                    User has been mapped as an agent
                </Alert>
            </Snackbar>
        </Box>
    );
};
