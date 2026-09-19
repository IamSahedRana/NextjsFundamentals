import Link from 'next/link';
import React from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await res.json();

  return (
    <>
      <div>
        <h2>Users Page: {users.length}</h2>
      </div>

      <div className = "grid grid-cols-3 gap-4">
        {users.map((user) => (
          <div key={user.id} className="card bg-base-100 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">{user.name}</h2>
              <p>{user.email}</p>
              <div className="card-actions justify-end">
               <Link href={`/users/${user.id}`}>
                <button className="btn btn-primary">View Details</button></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default UsersPage;