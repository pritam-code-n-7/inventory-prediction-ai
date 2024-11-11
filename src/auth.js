import { User } from "./model/userModel";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
    
      async authorize(credentials) {
        if (credentials === null) return null;
        try {
          const user = await User.findOne({
            email: credentials?.email,
          });
          //console.log(user);

          if (user) {
            const isMatch = await bcrypt.compare(
              //plain text password should keep first then hashed password
              credentials.password,
              user?.password
            )
            if (isMatch) {
              //console.log(user);
              
              return user;
            } else {
              throw new Error("email or password is incorrect");
            }
          } else {
            throw new Error("user not found");
          }
        } catch (error) {
          throw new Error(error);
        }
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret:process.env.GOOGLE_CLIENT_SECRET,

      authorization:{
        params:{
          prompt:"consent",
          access_type:"offline",
          response_type:"code",
        }
      }
    })
  ],
});
