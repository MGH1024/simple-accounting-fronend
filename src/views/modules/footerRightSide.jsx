import FooterRightSideItem from "../components/footer/footerRightSideItem";
const FooterRightSide = () => {
  return (
    <div className="col-lg-6 text-center pt-3">
      <ul className="list-inline">
        <FooterRightSideItem
          to="/aboutUs"
          liClass="list-inline-item me-2 ms-2"
          linkClass="text-dark"
          text="درباره ما"
        />
        <FooterRightSideItem
          to="/support"
          liClass="list-inline-item me-2 ms-2"
          linkClass="text-dark"
          text="پشتیبانی"
        />

        <FooterRightSideItem
          to="/weblog"
          liClass="list-inline-item me-2 ms-2"
          linkClass="text-dark"
          text="وبلاگ"
        />
      </ul>
    </div>
  );
};

export default FooterRightSide;
