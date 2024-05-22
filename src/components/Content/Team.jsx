import React from 'react';

const teamMembers = [
  {
    name: 'JOHNATHAN TYLER',
    role: 'Founder & Head Chef',
    imageUrl: 'https://mern-stack-restaurant-reservation.vercel.app/team_member_1.png',
  },
  {
    name: 'WADE WARREN',
    role: 'Sous Chef',
    imageUrl: 'https://mern-stack-restaurant-reservation.vercel.app/team_member_2.png',
  },
  {
    name: 'JHON DOE',
    role: 'Fast Food Chef',
    imageUrl: 'https://mern-stack-restaurant-reservation.vercel.app/team_member_3.png',
  },
  {
    name: 'ALEX COAL',
    role: 'Senior Chef',
    imageUrl: 'https://mern-stack-restaurant-reservation.vercel.app/team_member_4.png',
  },
];

const Team = () => {
  return (
    <div className="flex flex-col    items-center py-16 bg-gray-50">
      <h1 className="text-6xl font-semibold mb-4">OUR TEAM</h1>
      <p className="text-center  text-gray-700 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae fugit dicta, ipsum impedit quam laboriosam quas doloremque quia perferendis laborum.
      </p>
      <div className="flex flex-wrap justify-space-between gap-10">
        {teamMembers.map((member) => (
          <div key={member.name} className="flex flex-col items-center p-16">
            <img
              className="w-40 h-40 rounded-full object-cover mb-4"
              src={member.imageUrl}
              alt={member.name}
            />
            <h2 className="text-2xl font-bold">{member.name}</h2>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
