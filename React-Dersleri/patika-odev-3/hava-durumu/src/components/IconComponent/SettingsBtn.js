import React from "react";
import settingsIcon from "../../assets/icons/settings.png";
import { useAnimation } from "../../context/AnimationContext";
function SettingsBtn() {
  const { anim, setAnim } = useAnimation();

  return (
    <div
      className="btn-content"
      onClick={() =>
        setAnim(anim === "settings-page-up" ? "" : "settings-page-up")
      }
    >
      <img className="settings-icon" src={settingsIcon} alt="Settings" />
    </div>
  );
}

export default SettingsBtn;
