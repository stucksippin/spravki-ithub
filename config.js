import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import prisma from "./libs/prisma";




export const NextAuthOptions = {
    pages: {
        signIn: '/login'
    },
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                // Validate credentials exist
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }

                try {
                    // Find user
                    const user = await prisma.user.findUnique({
                        where: {
                            email: credentials.email
                        }
                    });

                    // Check if user exists
                    if (!user || !user.password) {
                        return null;
                    }

                    // Compare hashed password
                    const passwordValid = await compare(credentials.password, user.password);

                    if (passwordValid) {
                        return {
                            id: user.id.toString(), // Ensure id is string
                            email: user.email,
                            role: user.role
                        };
                    }

                    return null;
                } catch (error) {
                    console.error("Authentication error:", error);
                    return null;
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.role = user.role;
                token.id = user.id;
            }
            return token;
        },
        async session({ token, session }) {
            if (token) {
                session.user = {
                    id: token.id,
                    email: token.email,
                    role: token.role
                };
            }
            return session;
        }
    }
};