"use server";
import { signIn } from '../../../auth';
import { AuthError } from 'next-auth';

export async function authenticate(
  prevState,
  formData,
) {
  try {
    await signIn('credentials', {
      redirect: true,
      redirectTo: '/ui/dashboard',
      email: formData.get('email'),
      password: formData.get('password'),
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}