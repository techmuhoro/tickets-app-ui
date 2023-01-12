import { Box, Typography, Button, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

const LoginWrapper = styled('div')(({ theme }) => ({
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const Page = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    // const handleSubmit = async (e) => {
    //     if (username.length < 1) {
    //         alert('Username is required');
    //         return;
    //     }
    //     if (password.length < 1) {
    //         alert('Password is required');
    //         return;
    //     }
    //     const url = 'http://localhost:5500/auth/login';

    //     const body = {
    //         username: username.trim(),
    //         password: password.trim(),
    //     };

    //     try {
    //         // send a request to get the jwt
    //         const res = await fetch(url, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(body),
    //         });

    //         const resData = await res.json();

    //         if (res.status === 200) {
    //             localStorage.setItem('jwt', resData.jwt);
    //         } else {
    //             console.log('Request not successful');
    //         }
    //     } catch (e) {
    //         console.log(e);
    //     }

    //     console.log('continues');
    // };

    const handleLogin = async () => {
        const status = await signIn('credentials', {
            username: username,
            password: password,
            callbackUrl: 'http://localhost:3000/auth/private',
            redirect: false,
        });

        if (status.ok) {
            router.push('/auth/private');
        } else {
            console.log('Error! Either email or password is incorrect');
            console.log(status);
        }
    };

    return (
        <LoginWrapper>
            <Box sx={{ width: '350px' }}>
                {/* <Typography variant="body1" sx={{marginBottom: '10px'}}>Hello from login</Typography>- */}
                <div>
                    <TextField
                        id="username"
                        label="Username"
                        variant="outlined"
                        size="small"
                        fullWidth
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <Box sx={{ mb: 2 }}>
                    <br />
                    <TextField
                        type="password"
                        id="password"
                        label="password"
                        variant="outlined"
                        size="small"
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Box>

                <Button onClick={handleLogin} fullWidth variant="contained">
                    Login
                </Button>
            </Box>
        </LoginWrapper>
    );
};

export default Page;
