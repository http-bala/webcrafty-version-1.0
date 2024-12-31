import React from 'react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Balakrishna Kolla',
      role: 'Full-Stack Developer',
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
      socials: {
        linkedin: 'https://linkedin.com',
        github: 'https://github.com',
        twitter: 'https://twitter.com',
      },
    },
    {
      name: 'John Doe',
      role: 'UI/UX Designer',
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
      socials: {
        linkedin: 'https://linkedin.com',
        github: 'https://github.com',
        twitter: 'https://twitter.com',
      },
    },
    {
      name: 'Jane Smith',
      role: 'Project Manager',
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
      socials: {
        linkedin: 'https://linkedin.com',
        github: 'https://github.com',
        twitter: 'https://twitter.com',
      },
    },
  ];

  return (
    <div className="my-12">
      <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto px-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden text-center border border-gray-200"
          >
            {/* Team Member Image */}
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              {/* Name and Role */}
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>

              {/* Social Media Icons */}
              <div className="flex justify-center mt-4 space-x-4 text-gray-600">
                {member.socials.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600"
                  >
                    <i className="fab fa-linkedin"></i> LinkedIn
                  </a>
                )}
                {member.socials.github && (
                  <a
                    href={member.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-800"
                  >
                    <i className="fab fa-github"></i> GitHub
                  </a>
                )}
                {member.socials.twitter && (
                  <a
                    href={member.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400"
                  >
                    <i className="fab fa-twitter"></i> Twitter
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
