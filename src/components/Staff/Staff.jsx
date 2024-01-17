import "./Staff.css";
import { useState } from "react";
import Popup from "../Popup/Popup";

export default function Staff({
  name,
  prof,
  avatar,
}) {
  const [modalActive, setModalActive] =
    useState(false);

  return (
    <div className="team__container-box-card">
      <img
        className="team__container-box-card-avatar"
        src={avatar}
        alt={name}
        onClick={() => setModalActive(true)}
      />
      <p className="team__container-box-card-text">
        {name}
      </p>
      <p className="team__container-box-card-text">
        {prof}
      </p>
      <Popup
        active={modalActive}
        setActive={setModalActive}
      />
    </div>
  );
}
