import {
  faUser,
  faHome,
  faEnvelope,
  faShoppingCart,
  faChartLine,
  faChartBar,
  faTable,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import CurrentUser from "../components/sidebar/currentUser";
import CustomImage from "../../assets/images/profile.jpg";

import SidebarItem from "../modules/sidebarItem";
import SidebarSearch from "../components/sidebar/sidebarSearch";
import SiteTitle from "../components/sidebar/siteTitle";

const Sidebar = () => {
  return (
    <div className="sidebar collapse show" id="sidebar">
      <SiteTitle
        to="/#"
        siteName="سینا سافت"
        className="navbar-brand text-white d-block text-center mx-auto"
      />

      <CurrentUser
        imageSrc={CustomImage}
        imageClass="rounded-circle ml-6 sidebar-user-image"
        imageAlt="میثم قیاسوند"
        userName="میثم قیاسوند"
      />

      <ul className="nav-bar list-unstyled flex-column mt-4 pe-2">
        <SidebarSearch placeHolder="جستجو در منو" />
        <SidebarItem
          liClass="nav-item current custome-nav-item"
          to="/#"
          linkClass="nav-link text-white mb-2"
          icon={faHome}
          iconClassName={"ms-3 2xl"}
          spanClass={"sidebar-li-span"}
          spanText={"داشبورد"}
        />

        <SidebarItem
          liClass="nav-item custome-nav-item"
          to="/#"
          linkClass="nav-link text-white mb-2"
          icon={faUser}
          iconClassName={"ms-3 2xl"}
          spanClass={"sidebar-li-span"}
          spanText={"پروفایل"}
        />

        <SidebarItem
          liClass="nav-item custome-nav-item"
          to="/#"
          linkClass="nav-link text-white mb-2"
          icon={faEnvelope}
          iconClassName={"ms-3 2xl"}
          spanClass={"sidebar-li-span"}
          spanText={"پیام ها"}
        />

        <SidebarItem
          liClass="nav-item custome-nav-item"
          to="/#"
          linkClass="nav-link text-white mb-2"
          icon={faShoppingCart}
          iconClassName={"ms-3 2xl"}
          spanClass={"sidebar-li-span"}
          spanText={"فروش"}
        />

        <SidebarItem
          liClass="nav-item custome-nav-item"
          to="/#"
          linkClass="nav-link text-white mb-2"
          icon={faChartLine}
          iconClassName={"ms-3 2xl"}
          spanClass={"sidebar-li-span"}
          spanText={"تحلیل"}
        />

        <SidebarItem
          liClass="nav-item custome-nav-item"
          to="/#"
          linkClass="nav-link text-white mb-2"
          icon={faChartBar}
          iconClassName={"ms-3 2xl"}
          spanClass={"sidebar-li-span"}
          spanText={"نمودارها"}
        />

        <SidebarItem
          liClass="nav-item custome-nav-item"
          to="/#"
          linkClass="nav-link text-white mb-2"
          icon={faTable}
          iconClassName={"ms-3 2xl"}
          spanClass={"sidebar-li-span"}
          spanText={"جدول ها"}
        />
        <SidebarItem
          liClass="nav-item custome-nav-item"
          to="/#"
          linkClass="nav-link text-white mb-2"
          icon={faWrench}
          iconClassName={"ms-3 2xl"}
          spanClass={"sidebar-li-span"}
          spanText={"تنظیمات"}
        />
      </ul>
    </div>
  );
};

export default Sidebar;
