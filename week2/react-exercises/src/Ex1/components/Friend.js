import React, { useState } from "react";
import Button from "./Button";
import FriendProfile from "./FriendProfile";

const Friend = () => {
  const [friend, setFriend] = useState();

  const getFriend = () => {
    fetch("https://www.randomuser.me/api?results=1")
      .then((responseData) => responseData.json())
      .then((data) => {
        setFriend(data.results[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(friend)
  return (
    <div className="Friend">
      <Button getFriend={getFriend} />
      {friend && <FriendProfile friend={friend} /> }
    </div>
  );
};

export default Friend;


