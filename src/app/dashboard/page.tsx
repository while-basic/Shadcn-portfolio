import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default function DashboardPage() {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="bg-card p-6 rounded-lg shadow-md">
        <p className="text-lg">Welcome to your personal dashboard!</p>
        <p className="mt-4">Your user ID is: {userId}</p>
      </div>
    </div>
  );
}
