import  { useEffect, useState } from 'react';
import * as React from 'react';
import { useSelector } from 'react-redux';

function UserProfile() {
  const userId = useSelector((state) => state.users.userId);
  const [profileData, setProfileData] = useState(null); // État local pour stocker les données du profil

  useEffect(() => {
    if (userId) {
      fetchUserProfile(userId);
    }
  }, [userId]);

  function fetchUserProfile(userId) {
    fetch(`https://backend-69akwqelc-mohameds-projects-0a53d120.vercel.app/users/${userId}/profile`)
      .then(response => response.json())
      .then(data => {
        if (data.result) {
          setProfileData(data.profile); // Mise à jour de l'état avec les données du profil
        } else {
          console.error('Erreur lors de la récupération du profil');
        }
      })
      .catch(error => console.error('Erreur:', error));
  }

  return (
    <div>
      {profileData ? (
        <div>
          <h1>Profil de {profileData.firstName} {profileData.lastName}</h1>
          <p>Email: {profileData.email}</p>
          <p>Adresse: {profileData.address}</p>
          <p>Téléphone: {profileData.phone}</p>
          <h2>Missions:</h2>
          <ul>
            {profileData.missions.map(mission => (
              <li key={mission._id}>{mission.description}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Chargement du profil...</p>
      )}
    </div>
  );
}

export default UserProfile;
