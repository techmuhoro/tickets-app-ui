import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',

            async authorize(credentials, req) {
                const user = { username: 'jmuhoro', password: '12345678' };

                const url = 'http://localhost:5500/auth/login';
                const payload = {
                    username: credentials.username,
                    password: credentials.password,
                };

                const res = await fetch('http://localhost:5500/auth/login', {
                    body: JSON.stringify(payload),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    method: 'POST',
                });

                const data = await res.json();

                // save the jwt in the database

                if (res.status == 200 || res.status == 201) {
                    return data.user;
                }
                return null;
            },
        }),
    ],
    secret: 'g0Wnt5mL868OqF99MG/iapL1NFDw8Fw0gprKE5tTFIvKSQ62VIMt4eaYNjMdkfsEjK8NAAAVS3/jodm3gkzgmQ==',
});
