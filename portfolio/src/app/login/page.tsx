"use client"
import { signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';

export default function LoginPage() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        </div>
        <div>
          <button
            onClick={() => { signIn('google', { callbackUrl: '/' })}}
            className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
           <FcGoogle className='mr-4 w-5 h-5' />  Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}