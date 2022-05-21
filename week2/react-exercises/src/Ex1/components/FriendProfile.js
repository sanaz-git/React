import React from 'react';

const FriendProfile = ({ friend }) => {
  console.log(friend);
  return (
    <ul className="friend">
      <li>First Name: {friend.name.first}</li>
      <li>Last Name: {friend.name.last}</li>
      <li>
        Address:{friend.location.street.number}, {friend.location.street.name}
      </li>
      <li>Country: {friend.location.country}</li>
      <li>emailAddress: {friend.email}</li>
      <li>phoneNumber: {friend.phone}</li>
    </ul>
  );
};

export default FriendProfile;
