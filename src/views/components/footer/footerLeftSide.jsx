import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Icon from "../public/icon";
const FooterLeftSide = () => {
  return (
    <div className="col-lg-6 text-center pt-3 ">
      ساخته شده با
      <Icon icon={faHeart} className="text-danger" />
      توسط سینا سافت
    </div>
  );
};

export default FooterLeftSide;
