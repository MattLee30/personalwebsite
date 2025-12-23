import React from 'react';

function ProfileSection({ imageSrc, name, role, education }) {
  return (
    <section className="profile-container">
      <div className="profile-picture">
        <img src={imageSrc} alt={`${name} headshot`} />
      </div>
      <div className="profile-text">
        <h1>{name}</h1>
        <p>{role}</p>
        <div className="education">
          <h1>Education</h1>
          {education.map((entry) => (
            <p key={entry}>{entry}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProfileSection;
