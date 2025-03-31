"use client";

import { UserCard } from "~/src/components/UserCard";
import { User } from "~/src/types";
import { useQuery } from "@tanstack/react-query";
import Divider from "~/src/components/Divider";

export default function UsersPage() {
  const { data, isLoading, error } = useQuery<{ users: User[] }>({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("/api/users");
      if (!res.ok) {
        throw new Error("Failed to fetch users");
      }
      return res.json();
    },
  });

  if (isLoading) {
    return (
      <div className="container py-8">
        <h1 className="text-4xl font-bold mb-8">Users</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="w-full h-[300px] animate-pulse bg-gray-200 rounded-lg"
            />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-8">
        <h1 className="text-4xl font-bold mb-8">Users</h1>
        <div className="text-red-500">Failed to load users</div>
      </div>
    );
  }

  return (
    <div className="p-2 md:p-4 flex flex-col gap-4">
      <h1 className="text-4xl font-serif font-bold">Professionals</h1>
      <Divider />
      <div className="grid gap-6 grid-cols-1">
        {data?.users.map((user) => <UserCard key={user.id} user={user} />)}
      </div>
    </div>
  );
}
