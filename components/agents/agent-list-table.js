import React from 'react';
import {
    Box,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    TableHead,
} from '@mui/material';
import Paper from '@mui/material/Paper';

export const AgentListTable = ({ agents }) => {
    console.log(agents);
    const rows = [
        {
            name: 'James Muhoro',
            email: 'jmuhoro@innovexsolutions.co.ke',
            number: '0743301115',
            ext: '103',
            dateAdded: '01/01/2023',
        },
        {
            name: 'James Muhoro',
            email: 'jmuhoro@innovexsolutions.co.ke',
            number: '0743301115',
            ext: '103',
            dateAdded: '01/01/2023',
        },
        {
            name: 'James Muhoro',
            email: 'jmuhoro@innovexsolutions.co.ke',
            number: '0743301115',
            ext: '103',
            dateAdded: '01/01/2023',
        },
        {
            name: 'James Muhoro',
            email: 'jmuhoro@innovexsolutions.co.ke',
            number: '0743301115',
            ext: '103',
            dateAdded: '01/01/2023',
        },
        {
            name: 'Andrew Kibe',
            email: 'jmuhoro@innovexsolutions.co.ke',
            number: '0743301115',
            ext: '103',
            dateAdded: '01/01/2023',
        },
    ];

    const getInitials = (name) => {
        const nameArr = name.split(' ');

        let initials = '';
        if (nameArr[0]) initials += nameArr[0].charAt(0);
        if (nameArr[1]) initials += nameArr[1].charAt(0);

        return initials;
    };

    console.log(getInitials('James Muhoro'));
    return (
        <Box sx={{}}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 1050 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell>Extension</TableCell>
                            <TableCell>Date Added</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {React.Children.toArray(
                            agents.map((agent) => (
                                <TableRow>
                                    <TableCell
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            columnGap: 2,
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: 50,
                                                height: 50,
                                                bgcolor: 'gray',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: 'white',
                                            }}
                                        >
                                            Jk
                                        </Box>
                                        {`${agent.user_details.first_name} ${agent.user_details.last_name}`}
                                    </TableCell>
                                    <TableCell>
                                        {agent.user_details.email}
                                    </TableCell>
                                    <TableCell>number</TableCell>
                                    <TableCell>extension</TableCell>
                                    <TableCell>{agent.date_created}</TableCell>
                                    <TableCell>Actions</TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};
