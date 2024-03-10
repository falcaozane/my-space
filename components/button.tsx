'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import DefaultIcon from '@/public/mememan.webp'

export function SignInButton() {
  const { data: session, status } = useSession();
  console.log(session, status);

  if (status === 'loading') {
    return <>...</>;
  }

  if (status === 'authenticated') {
    return (
      <Link href={`/dashboard`}>
        <Image
          src={session.user?.image ?? DefaultIcon}
          width={32}
          height={32}
          alt={session.user?.name}
          className='rounded-full h-8 w-8'
        />
      </Link>
    );
  }

  return <button className='bg-white text-blue-600 rounded-2xl px-2 py-1' onClick={() => signIn()}>Sign in</button>;
}

export function SignOutButton() {
  return <button className='bg-white text-blue-600 rounded-2xl px-2 py-1' onClick={() => signOut()}>Sign out</button>;
}