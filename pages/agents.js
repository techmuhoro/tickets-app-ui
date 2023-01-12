import { Box, Typography, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import { AgentListToolbar } from '../components/agents/agent-list-toolbar';
import { AgentListTable } from '../components/agents/agent-list-table';

const PageWrapper = styled('div')(({ theme }) => ({
    margin: '20px 50px',
}));

export default function AgentsPage({ agents, unmappedUsers }) {
    return (
        <>
            <PageWrapper>
                <AgentListToolbar unmappedUsers={unmappedUsers} />
                <AgentListTable agents={agents} />
            </PageWrapper>
        </>
    );
}

export async function getServerSideProps(context) {
    const url1 = process.env.BASE_URL + '/agent';
    const url2 = process.env.BASE_URL + '/agent/users/unmapped';

    const res1 = await fetch(url1);
    const agents = await res1.json();

    const res2 = await fetch(url2);
    const unmappedUsers = await res2.json();

    return {
        props: {
            greet: 'Hello world',
            agents,
            unmappedUsers,
        },
    };
}
