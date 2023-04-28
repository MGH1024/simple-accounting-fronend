import { Link } from "react-router-dom";
const FooterItem = (props) => {
  return (
    <li className={props.liClass}>
      <Link to={props.to} className={props.linkClass}>
        {props.text}
      </Link>
    </li>
  );
};

export default FooterItem;
