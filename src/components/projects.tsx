'use client';

import { RiAddCircleFill } from 'react-icons/ri';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useGetProjects } from '@/features/projects/api/use-get-projects';
import { cn } from '@/lib/utils';
import { useCreateProjectModal } from '@/features/projects/hooks/use-create-project-modal';
import { useWorkspaceId } from '@/features/workspaces/hooks/use-workspace-id';
import { ProjectAvatar } from '@/features/projects/components/project-avatar';

export const Projects = () => {
  const projectId = null; // TODO add projectID

  const pathname = usePathname();
  const { open } = useCreateProjectModal();
  const workspaceId = useWorkspaceId();
  const { data } = useGetProjects({ workspaceId });

  return (
    <div className='flex flex-col gap-y-4'>
      <div className='flex items-center justify-between'>
        <p className='text-xs font-bold uppercase text-stone-500'>Projects</p>
        <RiAddCircleFill
          onClick={open}
          className='size-5 text-neutral-500 cursor-pointer hover:opacity-75 transition'
          title='Create a new workspace'
        />
      </div>
      {data?.documents.map((project) => {
        const href = `/workspaces/${workspaceId}/projects/${projectId}`;
        const isActive = pathname === href;

        return (
          <Link href={href} key={project.$id}>
            <div
              className={cn(
                'flex items-center gap-2.5 p-2.5 rounded-md hover:opacity-75 transition cursor-pointer text-neutral-500',
                isActive && 'bg-white shadow-sm hover:opacity-100 text-primary'
              )}
            >
              <ProjectAvatar image={project.imageUrl} name={project.name} />
              <span className='truncate'>{project.name}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
