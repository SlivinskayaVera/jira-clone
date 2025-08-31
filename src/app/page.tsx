'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { useCurrent } from '@/features/auth/api/use-current';
import { useLogout } from '@/features/auth/api/use-logout';
import { Button } from '@/components/ui/button';

export default function Home() {
  const router = useRouter();
  const { data, isLoading } = useCurrent();
  const { mutate } = useLogout();

  useEffect(() => {
    if (!data && !isLoading) {
      router.push('/sign-in');
    }
  }, [data, isLoading, router]);

  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      Only visible to authorized users.
      <Button onClick={() => mutate()}>Logout</Button>
    </div>
  );
}
