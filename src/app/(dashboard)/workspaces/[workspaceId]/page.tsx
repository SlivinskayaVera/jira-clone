import { redirect } from 'next/navigation';
import { getCurrent } from '@/features/auth/server/queries';

const WorkspaceIdPage = async () => {
  const user = await getCurrent();

  if (!user) redirect('/sign-in');

  return <div>Something</div>;
};

export default WorkspaceIdPage;
