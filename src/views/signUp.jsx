import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import SpanText from "./components/public/spanText";
const SignUp = () => {
  let history = useNavigate();
  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center pt-5">
          <div className="col-md-6 col-lg-4">
            <div className="login-wrap py-5">
              <div className="img d-flex align-items-center justify-content-center"></div>
              <h3 className="text-center mb-0 mb-5">ثبت نام</h3>
              <Formik
                initialValues={{ username: "", password: "" }}
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
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }, 400);
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
                  <form onSubmit={handleSubmit} className="signIn-form">
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
                      <button
                        className="btn form-control btn-primary rounded submit px-3"
                        disabled={isSubmitting}
                        type="submit"
                      >
                        ثبت نام
                      </button>
                    </div>
                  </form>
                )}
              </Formik>
              <div className="w-100 text-center mt-4 text">
                <p className="mb-0">حساب کاربری داری ؟</p>
                <Link to="/">ورود</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
