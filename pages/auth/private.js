import { getSession } from 'next-auth/react';
import { Container, Button, Box } from '@mui/material';
import { signOut, useSession } from 'next-auth/react';

const PrivatePage = () => {
    const session = useSession();
    console.log(session);

    const handleSignOut = () => {
        signOut();
    };

    return (
        <Container>
            <p>This is private, should only be visible to logged in users</p>
            <Box sx={{ mb: 2 }} />
            <Button variant="contained" color="primary" onClick={handleSignOut}>
                Sign out
            </Button>
        </Container>
    );
};

export async function getServerSideProps({ req }) {
    const session = await getSession({ req });
    console.log(session);

    if (!session) {
        return {
            redirect: {
                destination: '/auth/login',
                permanent: false,
            },
        };
    }

    return {
        props: {
            session,
        },
    };
}
export default PrivatePage;
