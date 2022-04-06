import React, { useEffect, useState } from "react";
import { dbService, storageService } from "fBase";
import Jweet from "components/Jweet";
import "firebase/storage";
import JweetFactory from "components/JweetFactory";
// import { ref, uploadString } from "@firebase/storage";

const Home = ({ userObj }) => {
  const [jweets, setJweets] = useState([]);

  useEffect(() => {
    dbService.collection("jweets").onSnapshot((snapshot) => {
      // snapshot은 데이터베이스에 무슨 일이 있을 때, 알림을 받는다
      const jweetArray = snapshot.docs.map((doc) => ({
        // 새로운 스냅샷을 받을 때 배열을 만든다
        id: doc.id,
        ...doc.data(),
      }));
      setJweets(jweetArray);
      // State에 배열을 넣는다
    });
  }, []);

  return (
    <div className="container">
      <JweetFactory userObj={userObj} />
      <div style={{ marginTop: 30 }}>
        {jweets.map((jweet) => (
          <Jweet
            key={jweet.id}
            jweetObj={jweet}
            isOwner={jweet.creatorID === userObj.uid}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;
