import { getAuth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { UserButton } from '@clerk/nextjs';

export default async function AdminPage() {
  const { userId } = await getAuth();
  
  if (!userId) {
    redirect('/sign-in');
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex items-center justify-between w-full max-w-4xl px-4 mb-8">
        <h1 className="text-4xl font-bold">Admin Dashboard</h1>
        <UserButton afterSignOutUrl="/" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl px-4">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-4">
            <Button className="w-full">Manage Content</Button>
            <Button className="w-full">View Analytics</Button>
            <Button className="w-full">Update Settings</Button>
          </div>
        </div>
        
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
          <p>No recent activity to display.</p>
        </div>
      </div>
    </div>
  );
}
