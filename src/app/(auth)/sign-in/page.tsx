import { redirect } from 'next/navigation';

import { getCurrent } from '@/features/auth/server/queries';
import SignInCard from '@/features/auth/components/sign-in-card';

const SingInPage = async () => {
  const user = await getCurrent();

  if (user) redirect('/');

  return <SignInCard />;
};

export default SingInPage;
