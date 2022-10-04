import { useState } from "react";
import settingsIcon from "../../assets/icons/settings.png";

function SettingsBtn() {
  const [anim, setAnim] = useState("");

  return (
    <div className={`icon-settings animate__animated ${anim}`}>
      <img
        src={settingsIcon}
        alt="Settings"
        onMouseOver={() => setAnim("animate__heartBeat")}
        onMouseOut={() => setAnim("animate__pulse")}
      />
    </div>
  );
}

export default SettingsBtn;
