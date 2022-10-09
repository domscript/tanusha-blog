import InstagramShareButton from "./shareButtons/InstagramShareButton";
import TelegramShareButton from "./shareButtons/TelegramShareButton";
import "./shareButtons.css";

export default function ShareButtons() {
  return (
    <div>
      <InstagramShareButton />
      <TelegramShareButton />
    </div>
  );
}
