import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import SpanText from "./components/public/spanText";
import { Create } from "../services/partyService";

const CreateParty = () => {
  let history = useNavigate();
  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center pt-5">
          <div className="col-md-6 col-lg-4">
            <div className="login-wrap py-5">
              <div className="img d-flex align-items-center justify-content-center"></div>
              <h3 className="text-center mb-0 mb-5">ساخت مشتری جدید</h3>
              <Formik
                initialValues={{
                  partyName:"",
                  email: "",
                  cellphone:"",
                  image: "",
                  description: "",
                  nationalIdentificaion: "",
                  balance: ""
                }}
                validate={(values) => {
                  const errors = {};
                  if (!values.partyName) {
                    errors.partyName = "ضروری";
                  }
                  if (!values.email) {
                    errors.email = "ضروری";
                  }

                  if (!values.cellphone) {
                    errors.cellphone = "ضروری";
                  }

                  if (!values.image) {
                    errors.image = "ضروری";
                  }

                  if (!values.description) {
                    errors.description = "ضروری";
                  }

                  if (!values.nationalIdentificaion) {
                    errors.nationalIdentificaion = "ضروری";
                  }

                  if (!values.balance) {
                    errors.balance = "ضروری";
                  }
                  return errors;
                }}

                onSubmit={async (values, { setSubmitting }) => {
                  setTimeout(() => {
                    setSubmitting(false);
                  }, 100);
                  await Create(values);
                  history("/main");
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
                }) => (
                  <form onSubmit={handleSubmit} className="SignIn-form">
                    <div className="form-group">
                      <div className="icon d-flex align-items-center justify-content-center"></div>
                      <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="نام"
                        name="partyName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.partyName}
                      />
                      <div className="mt-0 mb-2">
                        <SpanText
                          text={
                            errors.partyName &&
                            touched.partyName &&
                            errors.partyName
                          }
                          className="text-danger"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="icon d-flex align-items-center justify-content-center"></div>
                      <input
                        type="email"
                        className="form-control mb-3"
                        placeholder="ایمیل"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      <div className="mt-0 mb-2">
                        <SpanText
                          text={
                            errors.email &&
                            touched.email &&
                            errors.email
                          }
                          className="text-danger"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="icon d-flex align-items-center justify-content-center"></div>
                      <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="موبایل"
                        name="cellphone"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.cellphone}
                      />
                      <div className="mt-0 mb-2">
                        <SpanText
                          text={
                            errors.cellphone &&
                            touched.cellphone &&
                            errors.cellphone
                          }
                          className="text-danger"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="icon d-flex align-items-center justify-content-center"></div>
                      <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="عکس"
                        name="image"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.image}
                      />
                      <div className="mt-0 mb-2">
                        <SpanText
                          text={
                            errors.image &&
                            touched.image &&
                            errors.image
                          }
                          className="text-danger"
                        />
                      </div>
                    </div>


                    <div className="form-group">
                      <div className="icon d-flex align-items-center justify-content-center"></div>
                      <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="توضیحات"
                        name="description"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.description}
                      />
                      <div className="mt-0 mb-2">
                        <SpanText
                          text={
                            errors.description &&
                            touched.description &&
                            errors.description
                          }
                          className="text-danger"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="icon d-flex align-items-center justify-content-center"></div>
                      <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="کد ملی"
                        name="nationalIdentificaion"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.nationalIdentificaion}
                      />
                      <div className="mt-0 mb-2">
                        <SpanText
                          text={
                            errors.nationalIdentificaion &&
                            touched.nationalIdentificaion &&
                            errors.nationalIdentificaion
                          }
                          className="text-danger"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="icon d-flex align-items-center justify-content-center"></div>
                      <input
                        type="numner"
                        className="form-control mb-3"
                        placeholder="مقدار اولیه دارایی"
                        name="balance"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.balance}
                      />
                      <div className="mt-0 mb-2">
                        <SpanText
                          text={
                            errors.balance &&
                            touched.balance &&
                            errors.balance
                          }
                          className="text-danger"
                        />
                      </div>
                    </div>
                
                
                    <div className="form-group">
                      <button
                        className="btn form-control btn-primary rounded submit px-3"
                        disabled={isSubmitting}
                        type="submit"
                      >
                        ثبت
                      </button>
                    </div>
                  </form>
                )}
              </Formik>
              <div className="w-100 text-center mt-4 text">
                <Link to="/signup">بازگشت</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateParty;
