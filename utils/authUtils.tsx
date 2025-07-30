import { Session } from '@/interfaces/auth';
import { useRouter } from 'expo-router';
import * as SessionUtils from '../utils/sessionUtils';


export async function ValidateToken(): Promise<boolean> {
  // TODO: implement true token validation
  const session = await SessionUtils.getSession<Session>('session');
  if (session?.token) {
    console.log("Token found, user is logged in")
    return true
  } else {
    console.log("Token not found, user unauthorized")
    return false
  }
}

export async function Logout(router: ReturnType<typeof useRouter>): Promise<void> {
  await SessionUtils.clearSession('session');
  router.replace('/'); // or just '/' if that's your home route
}