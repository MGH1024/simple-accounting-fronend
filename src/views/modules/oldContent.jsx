{
  /* modal  */
}
<div className="modal fade" id="logoutModal">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h4>آیا میخواهید خارج شود ؟</h4>
      </div>
      <div className="modal-body">
        <p className="text-muted">
          در صورت خروج ، برای دسترسی به پنل باید مجددا وارد شوید{" "}
        </p>
      </div>
      <div className="modal-footer">
        <button className="btn btn-success" data-dismiss="modal">
          میمانم
        </button>
        <button className="btn btn-danger">خارج میشوم</button>
      </div>
    </div>
  </div>
</div>;
{
  /* end of modal  */
}

{
  /* cards  */
}
<section>
  <div className="container-fluid">
    <div className="row">
      <div className="col-sm-12">
        <div className="row">
          {/* card  */}
          <div className="col-lg-3 col-md-6 p-2">
            <div className="card card-common">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="text-secondary">
                    <h5>فروش</h5>
                    <h5 className="mt-4">۳۰ میلیون</h5>
                  </div>
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="fa-3x text-danger"
                  ></FontAwesomeIcon>
                </div>
              </div>
              <div className="card-footer text-secondary text-left">
                <FontAwesomeIcon
                  icon={faSync}
                  className="m-1 me-2 ms-3"
                ></FontAwesomeIcon>
                <span>به روز رسانی</span>
              </div>
            </div>
          </div>
          {/* end of card  */}
          {/* card  */}
          <div className="col-lg-3 col-md-6 p-2">
            <div className="card card-common">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="text-secondary">
                    <h5>هزینه</h5>
                    <h5 className="mt-4">۵ میلیون</h5>
                  </div>
                  <FontAwesomeIcon
                    icon={faMoneyBillAlt}
                    className="fa-3x text-success"
                  ></FontAwesomeIcon>
                </div>
              </div>
              <div className="card-footer text-secondary text-left">
                <FontAwesomeIcon
                  icon={faSync}
                  className="m-1 me-2 ms-3"
                ></FontAwesomeIcon>
                <span>به روز رسانی</span>
              </div>
            </div>
          </div>
          {/* end of card  */}
          {/* card  */}
          <div className="col-lg-3 col-md-6 p-2">
            <div className="card card-common">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="text-secondary">
                    <h5>کاربران</h5>
                    <h5 className="mt-4">۵۰،۰۰۰</h5>
                  </div>
                  <FontAwesomeIcon
                    icon={faUsers}
                    className="fa-3x text-info"
                  ></FontAwesomeIcon>
                </div>
              </div>
              <div className="card-footer text-secondary text-left">
                <FontAwesomeIcon
                  icon={faSync}
                  className="m-1 me-2 ms-3"
                ></FontAwesomeIcon>
                <span>به روز رسانی</span>
              </div>
            </div>
          </div>
          {/* end of card  */}
          {/* card  */}
          <div className="col-lg-3 col-md-6 p-2">
            <div className="card card-common">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="text-secondary">
                    <h5>بازدید</h5>
                    <h5 className="mt-4">۱۰،۰۰۰</h5>
                  </div>
                  <FontAwesomeIcon
                    icon={faChartLine}
                    className="fa-3x text-danger"
                  ></FontAwesomeIcon>
                </div>
              </div>
              <div className="card-footer text-secondary text-left">
                <FontAwesomeIcon
                  icon={faSync}
                  className="m-1 me-2 ms-3"
                ></FontAwesomeIcon>
                <span>به روز رسانی</span>
              </div>
            </div>
          </div>
          {/* end of card  */}
        </div>
      </div>
    </div>
  </div>
</section>;
{
  /* end of cards  */
}
{
  /* progress / tasklist  */
}
<section>
  <div className="container-fluid">
    <div className="row">
      <div className="col-sm-12">
        <div className="row">
          {/* progress  */}
          <div className="col-lg-6">
            <div className="bg-dark text-white p-4 rounded">
              <h4 className="mb-4">پروژه ها</h4>
              {/* project  */}
              <h6 className="mb-2 mt-4">کتابخانه آنلاین</h6>
              <div className="progress" style={{ height: "20px" }}>
                <div
                  className="progress-bar progress-bar-striped font-weight-bold bg-danger"
                  style={{ width: "85%" }}
                >
                  85%
                </div>
              </div>
              {/* end of project  */}
              {/* project  */}
              <h6 className="mb-2 mt-4">اپلیکیشن سینا سافت</h6>
              <div className="progress" style={{ height: "20px" }}>
                <div
                  className="progress-bar progress-bar-striped font-weight-bold bg-primary"
                  style={{ width: "23%" }}
                >
                  23%
                </div>
              </div>
              {/* end of project  */}
              {/* project  */}
              <h6 className="mb-2 mt-4">وب سرویس</h6>
              <div className="progress" style={{ height: "20px" }}>
                <div
                  className="progress-bar progress-bar-striped font-weight-bold bg-success"
                  style={{ width: "55%" }}
                >
                  55%
                </div>
              </div>
              {/* end of project  */}
            </div>
          </div>
          {/* end of progress  */}
          {/* tasklist  */}
          <div className="col-lg-6">
            <h4 className="text-muted p-3 mb-3">تسک ها</h4>
            {/* task  */}
            <div className="container-fluid bg-white">
              <div className="row py-3 mb-4 align-content-center task-border">
                <div className="col-1">
                  <input type="checkbox" />
                </div>
                <div className="col-9">آماده کردن سمت بک اند</div>
                <div className="col-1">
                  <a
                    data-toggle="tooltip"
                    data-html="true"
                    data-placement="top"
                    title="<h6>ویرایش</h6>"
                    href="/#"
                  >
                    <FontAwesomeIcon
                      icon={faEdit}
                      className="text-success"
                    ></FontAwesomeIcon>
                  </a>
                </div>
                <div className="col-1">
                  <a
                    data-toggle="tooltip"
                    data-html="true"
                    data-placement="top"
                    title="<h6>حذف</h6>"
                    href="/#"
                  >
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="text-danger"
                    ></FontAwesomeIcon>
                  </a>
                </div>
                <div className="col-1"></div>
              </div>
            </div>
            {/* end of task  */}
            {/* task  */}
            <div className="container-fluid bg-white">
              <div className="row py-3 mb-4 align-content-center task-border">
                <div className="col-1">
                  <input type="checkbox" />
                </div>
                <div className="col-9">آماده کردن سمت بک اند</div>
                <div className="col-1">
                  <a
                    data-toggle="tooltip"
                    data-html="true"
                    data-placement="top"
                    title="<h6>ویرایش</h6>"
                    href="/#"
                  >
                    <FontAwesomeIcon
                      icon={faEdit}
                      className="text-success"
                    ></FontAwesomeIcon>
                  </a>
                </div>
                <div className="col-1">
                  <a
                    data-toggle="tooltip"
                    data-html="true"
                    data-placement="top"
                    title="<h6>حذف</h6>"
                    href="/#"
                  >
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="text-danger"
                    ></FontAwesomeIcon>
                  </a>
                </div>
                <div className="col-1"></div>
              </div>
            </div>
            {/* end of task  */}
            {/* task  */}
            <div className="container-fluid bg-white">
              <div className="row py-3 mb-4 align-content-center task-border">
                <div className="col-1">
                  <input type="checkbox" />
                </div>
                <div className="col-9">آماده کردن سمت بک اند</div>
                <div className="col-1">
                  <a
                    data-toggle="tooltip"
                    data-html="true"
                    data-placement="top"
                    title="<h6>ویرایش</h6>"
                    href="/#"
                  >
                    <FontAwesomeIcon
                      icon={faEdit}
                      className="text-success"
                    ></FontAwesomeIcon>
                  </a>
                </div>
                <div className="col-1">
                  <a
                    data-toggle="tooltip"
                    data-html="true"
                    data-placement="top"
                    title="<h6>حذف</h6>"
                    href="/#"
                  >
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="text-danger"
                    ></FontAwesomeIcon>
                  </a>
                </div>
                <div className="col-1"></div>
              </div>
            </div>
            {/* end of task  */}
          </div>
          {/* end of tasklist  */}
        </div>
      </div>
    </div>
  </div>
</section>;
{
  /* end of  progress / tasklist  */
}

{
  /* tables  */
}
<section>
  <div className="container-fluid">
    <div className="row mb-5">
      <div className="col-sm-12 me-auto">
        <div className="row">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <h3 className="text-muted text-center mb-3">پرداختی ها </h3>
            <table className="table table-dark table-hover text-center">
              <thead>
                <tr>
                  <th>#</th>
                  <th>نام</th>
                  <th>مبلغ</th>
                  <th>تاریخ</th>
                  <th>وضعیت</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>محمد</td>
                  <td>5 میلیون</td>
                  <td>10 تیر</td>
                  <td>
                    <span className="badge w-75 py-2 badge-success">
                      پرداخت شده
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>محمد</td>
                  <td>5 میلیون</td>
                  <td>10 تیر</td>
                  <td>
                    <span className="badge w-75 py-2 badge-danger">رد شده</span>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>محمد</td>
                  <td>5 میلیون</td>
                  <td>10 تیر</td>
                  <td>
                    <span className="badge w-75 py-2 badge-warning">
                      انتظار
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>محمد</td>
                  <td>5 میلیون</td>
                  <td>10 تیر</td>
                  <td>
                    <span className="badge w-75 py-2 badge-success">
                      پرداخت شده
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            {/* pagination  */}
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <a href="/#" className="page-link py-2 px-3">
                  &laquo;
                </a>
              </li>
              <li className="page-item">
                <a href="/#" className="page-link py-2 px-3">
                  3
                </a>
              </li>
              <li className="page-item">
                <a href="/#" className="page-link py-2 px-3">
                  2
                </a>
              </li>
              <li className="page-item active">
                <a href="/#" className="page-link py-2 px-3">
                  1
                </a>
              </li>
              <li className="page-item">
                <a href="/#" className="page-link py-2 px-3">
                  &raquo;
                </a>
              </li>
            </ul>
            {/* end of pagination  */}
          </div>
          <div className="col-lg-6">
            <h3 className="text-muted text-center mb-3">تیکت های اخیر </h3>
            <table className="table table-striped text-center bg-light">
              <thead>
                <tr>
                  <th>#</th>
                  <th>نام</th>
                  <th>تاریخ</th>
                  <th>عملیات</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>محمد</td>
                  <td>10 تیر</td>
                  <td>
                    <button className="btn btn-info btn-sm">پاسخ</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>محمد</td>
                  <td>10 تیر</td>
                  <td>
                    <button className="btn btn-info btn-sm">پاسخ</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>محمد</td>
                  <td>10 تیر</td>
                  <td>
                    <button className="btn btn-info btn-sm">پاسخ</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>محمد</td>
                  <td>10 تیر</td>
                  <td>
                    <button className="btn btn-info btn-sm">پاسخ</button>
                  </td>
                </tr>
              </tbody>
            </table>
            {/* pagination  */}
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <a href="/#" className="page-link py-2 px-3">
                  &laquo;
                </a>
              </li>
              <li className="page-item">
                <a href="/#" className="page-link py-2 px-3">
                  3
                </a>
              </li>
              <li className="page-item">
                <a href="/#" className="page-link py-2 px-3">
                  2
                </a>
              </li>
              <li className="page-item active">
                <a href="/#" className="page-link py-2 px-3">
                  1
                </a>
              </li>
              <li className="page-item">
                <a href="/#" className="page-link py-2 px-3">
                  &raquo;
                </a>
              </li>
            </ul>
            {/* end of pagination  */}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>;
{
  /* end of tables  */
}

{
  /* activities - quickpost  */
}
<section>
  <div className="container-fluid">
    <div className="row">
      <div className="col-sm-12 me-auto">
        <div className="row">
          <div className="col-lg-7">
            <h4 className="text-muted mb-4 ">فعالیت های اخیر</h4>
            <div id="myaccordion">
              <div className="card">
                <div className="card-header">
                  <button
                    className="btn btn-block btn-light text-right"
                    data-toggle="collapse"
                    data-target="#collapse1"
                  >
                    <img
                      src={require("../assets/images/p1.jpg")}
                      alt=""
                      className="ml-2 rounded "
                      style={{ width: "50px", height: "50px" }}
                    />
                    محمد یک گفتگوی جدید ایجاد کرد
                  </button>
                </div>
                <div
                  className="collapse"
                  data-parent="#myaccordion"
                  id="collapse1"
                >
                  <div className="card-body">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و
                    آینده
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <button
                    className="btn btn-block btn-light text-right"
                    data-toggle="collapse"
                    data-target="#collapse2"
                  >
                    <img
                      src={require("../assets/images/p2.jpg")}
                      alt=""
                      className="ml-2 rounded "
                      style={{ width: "50px", height: "50px" }}
                    />
                    رضا یک گفتگوی جدید ایجاد کرد
                  </button>
                </div>
                <div
                  className="collapse"
                  data-parent="#myaccordion"
                  id="collapse2"
                >
                  <div className="card-body">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و
                    آینده
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <button
                    className="btn btn-block btn-light text-right"
                    data-toggle="collapse"
                    data-target="#collapse3"
                  >
                    <img
                      src={require("../assets/images/p3.jpg")}
                      alt=""
                      className="ml-2 rounded "
                      style={{ width: "50px", height: "50px" }}
                    />
                    پژمان یک گفتگوی جدید ایجاد کرد
                  </button>
                </div>
                <div
                  className="collapse"
                  data-parent="#myaccordion"
                  id="collapse3"
                >
                  <div className="card-body">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و
                    آینده
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <button
                    className="btn btn-block btn-light text-right"
                    data-toggle="collapse"
                    data-target="#collapse4"
                  >
                    <img
                      src={require("../assets/images/p2.jpg")}
                      alt=""
                      className="ml-2 rounded "
                      style={{ width: "50px", height: "50px" }}
                    />
                    رضا یک گفتگوی جدید ایجاد کرد
                  </button>
                </div>
                <div
                  className="collapse"
                  data-parent="#myaccordion"
                  id="collapse4"
                >
                  <div className="card-body">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و
                    آینده
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <button
                    className="btn btn-block btn-light text-right"
                    data-toggle="collapse"
                    data-target="#collapse5"
                  >
                    <img
                      src={require("../assets/images/p2.jpg")}
                      alt=""
                      className="ml-2 rounded "
                      style={{ width: "50px", height: "50px" }}
                    />
                    رضا یک گفتگوی جدید ایجاد کرد
                  </button>
                </div>
                <div
                  className="collapse"
                  data-parent="#myaccordion"
                  id="collapse5"
                >
                  <div className="card-body">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و
                    آینده
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 mt-5">
            <div className="card rounded">
              <div className="card-body">
                <h5 className="text-muted text-center mb-4">پست جدید</h5>
                <ul className="list-inline text-center py-3">
                  <li className="list-inline-item">
                    <a href="/#">
                      <FontAwesomeIcon
                        icon={faPencil}
                        className="text-success"
                      ></FontAwesomeIcon>

                      <span className="h6 text-muted">وضعیت</span>
                    </a>
                  </li>
                  <li className="list-inline-item px-2">
                    <a href="/#">
                      <FontAwesomeIcon
                        icon={faCamera}
                        className="text-info"
                      ></FontAwesomeIcon>
                      <span className="h6 text-muted">تصویر</span>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="/#">
                      <FontAwesomeIcon
                        icon={faMapMarker}
                        className="text-danger"
                      ></FontAwesomeIcon>
                      <span className="h6 text-muted">مکان</span>
                    </a>
                  </li>
                </ul>
                <form action="">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control py-2 mb-3"
                      placeholder="یه چیزی بنویس ..."
                    />
                    <button className="btn btn-block text-light bg-info py-2 mb-5">
                      ارسال
                    </button>
                  </div>
                </form>
                <div className="row">
                  <div className="col-6">
                    <div className="card ">
                      <FontAwesomeIcon
                        icon={faCalendarDays}
                        className="fa-4x text-warning d-block py-3 m-auto"
                      ></FontAwesomeIcon>
                      <div className="card-body">
                        <p className="card-text text-center">سه شنبه 17 تیر</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="card ">
                      <FontAwesomeIcon
                        icon={faClock}
                        className="fa-4x text-warning d-block py-3 m-auto"
                      ></FontAwesomeIcon>
                      <div className="card-body">
                        <p className="card-text text-center">9:30 صبح</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>;
{
  /* end of activities - quickpost  */
}

{
  /* footer  */
}
<footer>
  <div className="container-fluid">
    <div className="row mt-5 mb-3">
      <div className="col-sm-12 me-auto">
        <div className="row">
          <div className="col-lg-6 text-center">
            <ul className="list-inline">
              <li className="list-inline-item ml-4">
                <a href="/#" className="text-dark">
                  درباره ما
                </a>
              </li>
              <li className="list-inline-item ml-4">
                <a href="/#" className="text-dark">
                  پشتیبانی
                </a>
              </li>
              <li className="list-inline-item ml-4">
                <a href="/#" className="text-dark">
                  وبلاگ
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 text-center ">
            ساخته شده{" "}
            <FontAwesomeIcon
              icon={faHeart}
              className="text-danger"
            ></FontAwesomeIcon>{" "}
            توسط سینا سافت
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>;
{
  /* end of footer  */
}
