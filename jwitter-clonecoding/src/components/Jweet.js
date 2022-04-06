import { dbService, storageService } from "fBase";
import React, { useState } from "react";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const Jweet = ({ jweetObj, isOwner }) => {
  const [editing, setEditing] = useState(false); // editing 모드인지 아닌지 알려줌
  const [newJweet, setNewJweet] = useState(jweetObj.text); // input에 입력된 text를 업데이트 해줌
  const onDeleteClick = async () => {
    const ok = window.confirm("Are you sure you want to delete this jweet");
    console.log(ok);
    if (ok) {
      const JweetTextRef = doc(dbService, "jweets", `${jweetObj.id}`);
      await deleteDoc(JweetTextRef);
      // await dbService.doc(`jwwets/${jweetObj.id}`).delete();
      await storageService.refFromURL(jweetObj.attachmentUrl).delete();
    }
  };
  const toggleEditing = () => setEditing((prev) => !prev);
  const onSubmit = async (event) => {
    console.log(newJweet);
    event.preventDefault();
    // await updateDoc(JweetTextRef, {
    //   text: newJweet,
    // });
    const JweetTextRef = doc(dbService, "jweets", `${jweetObj.id}`);
    await updateDoc(JweetTextRef, {
      text: newJweet,
    });

    setEditing(false);
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewJweet(value);
  };

  return (
    <div className="jweet">
      {editing ? (
        <>
          <form onSubmit={onSubmit} className="container jweetEdit">
            <input
              type="text"
              placeholder="Edit your jweet"
              value={newJweet}
              required
              autoFocus
              onChange={onChange}
              className="formInput"
            />
            <input type="submit" value="Update Jweet" className="formBtn" />
          </form>
          <span onClick={toggleEditing} className="formBtn cancelBtn">
            Cancel
          </span>
        </>
      ) : (
        <>
          <h4>{jweetObj.text}</h4>
          {jweetObj.attachmentUrl && <img src={jweetObj.attachmentUrl} />}
          {isOwner && (
            <div className="jweet__actions">
              <span onClick={onDeleteClick}>
                <FontAwesomeIcon icon={faTrash} />
              </span>
              <span onClick={toggleEditing}>
                <FontAwesomeIcon icon={faPencilAlt} />
              </span>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Jweet;
