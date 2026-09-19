import React from 'react';

const UserDetailPage = async({ params }: { params: { userId: string } }) => {
     const {userId} = await params;

      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      const user = await res.json();
  return (
    <div>
      <h2>User Detail Page </h2>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.website}</p>
      <p>{user.company.name}</p>
      <p>{user.company.catchPhrase}</p>
    </div>
  );
};

export default UserDetailPage;