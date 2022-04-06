import { authService } from "fBase";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// import { collection, getDocs, query, where } from "@firebase/firestore";

export default ({ refreshUser, userObj }) => {
  const history = useHistory();
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };
  /*
  // const getMyJweets = async () => {
  //   const q = query(
  //     collection(dbService, "nweets"),
  //     where("creatorId", "==", userObj.uid)
  //   );
  //   const querySnapshot = await getDocs(q);
  //   querySnapshot.forEach((doc) => {
  //     console.log(doc.id, " => ", doc.data());
  //     console.log(q.docs.map((doc) => doc.data()));
  //   });
  // };

  // const getMyJweets = async () => {
  //   const jweets = await dbService
  //     .collection("jweets")
  //     .where("creatorId", "==", userObj.uid)
  //     .orderBy("createdAt", "desec")
  //     .get();

  //   console.log(jweets);
  //   console.log(jweets.creatorId);
  //   console.log("hello");
  //   console.log(userObj.uid);
  //   console.log(jweets.docs.map((doc) => doc.data()));
  // };
  
  // useEffect(() => {
  //   getMyJweets();
  // }, []);
  */

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (userObj.displayName !== newDisplayName) {
      await userObj.updateProfile({
        displayName: newDisplayName,
      });
      refreshUser();
    }
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit} className="profileForm">
        <input
          onChange={onChange}
          type="text"
          autoFocus
          placeholder="Display name"
          value={newDisplayName}
          className="formInput"
        />
        <input
          type="submit"
          value="Update profile"
          className="formBtn"
          style={{ marnTop: 10 }}
        />
      </form>
      <span className="formBtn cancelBtn logOut" onClick={onLogOutClick}>
        Log Out
      </span>
    </div>
  );
};
