import { authOptions } from 'utils/authOptions';
import NextAuth from 'next-auth';

// ==============================|| NEXT AUTH - ROUTES  ||============================== //

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
