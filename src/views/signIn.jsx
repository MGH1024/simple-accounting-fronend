import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import SpanText from "./components/public/spanText";
import { Login } from "../services/accountService";

const SignIn = () => {
  let history = useNavigate();
  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center pt-5">
          <div className="col-md-6 col-lg-4">
            <div className="login-wrap py-5">
              <div className="img d-flex align-items-center justify-content-center"></div>
              <h3 className="text-center mb-0 mb-5">ورود به سیستم</h3>
              <Formik
                initialValues={{
                  username: "admin",
                  password: "Abcde@12345",
                  rememberMe: true,
                }}
                validate={(values) => {
                  const errors = {};
                  if (!values.username) {
                    errors.username = "ضروری";
                  }
                  if (!values.password) {
                    errors.password = "ضروری";
                  }
                  return errors;
                }}
                onSubmit={async (values, { setSubmitting }) => {
                  setTimeout(() => {
                    setSubmitting(false);
                  }, 400);
                  await Login(values);
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
                        placeholder="نام کاربری"
                        name="username"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.username}
                      />
                      <div className="mt-0 mb-2">
                        <SpanText
                          text={
                            errors.username &&
                            touched.username &&
                            errors.username
                          }
                          className="text-danger"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="icon d-flex align-items-center justify-content-center"></div>
                      <input
                        type="password"
                        className="form-control mb-3"
                        placeholder="********"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />
                      <div className="mt-0 mb-2">
                        <SpanText
                          text={
                            errors.password &&
                            touched.password &&
                            errors.password
                          }
                          className="text-danger"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="icon d-flex align-items-center justify-content-center"></div>
                      <SpanText text="ذخیره کلمه عبور" className="ms-3" />
                      <input
                        type="checkbox"
                        name="rememeberMe"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.rememberMe}
                      />
                      <div className="mt-0 mb-2"></div>
                    </div>
                    <div className="form-group d-md-flex">
                      <div className="w-100 text-md-right mb-3">
                        <Link to="/#">فراموشی کلمه عبور</Link>
                      </div>
                    </div>
                    <div className="form-group">
                      <button
                        className="btn form-control btn-primary rounded submit px-3"
                        disabled={isSubmitting}
                        type="submit"
                      >
                        ورود
                      </button>
                    </div>
                  </form>
                )}
              </Formik>
              <div className="w-100 text-center mt-4 text">
                <p className="mb-0">حساب کاربری نداری ؟</p>
                <Link to="/signup">ثبت نام</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
