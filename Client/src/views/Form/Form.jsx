import RegisterUser from '../../Components/RegisterUser/registerUser';
import { Input, Button, Checkbox, Form } from 'antd';
import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import style from './Form.module.css'

const buttonStyle = {
  background: "#001529",
  color: "white",
  height: "45px",
};

const googleBtnStyle = {
  alignItems: 'center',
  background: 'white',
  border: "1px solid black",
  display: 'flex',
  height: "45px",
  justifyContent: 'center',
  marginBottom: '5px'
};

const LoginForm = ({ login }) => {
  const [showRegister, setShowRegister] = useState(false);
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  const toggleForm = () => {
    setShowRegister(!showRegister);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData)
  };

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setUserData({
      ...userData,
      [property]: value
    });
  };

  const handleRememberChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      localStorage.setItem("rememberMe", "true");
      localStorage.setItem("email", userData.email);
    } else {
      localStorage.removeItem("rememberMe");
      localStorage.removeItem("email");
    }
  };

  useEffect(() => {
    const rememberMe = localStorage.getItem("rememberMe");
    if (rememberMe === "true") {
      const email = localStorage.getItem("email") || "";
      setUserData({ email });
    }
  }, []);

  // Google

  // const loginGoogleAccount = useGoogleLogin({
  //   onSuccess: (googleUser) => {
  //     dispatch(loginGoogle(googleUser))
  //       .then(() => {
  //         closeModal();
  //       })
  //   },
  //   onError: (error) => console.log('Login Failed:', error)
  // });

  return (
    <div className={style.backForm}>
      <div className={style.ImgBox}>
        <img className={style.imgForm} src="./src/assets/img/04.png" />
      </div>
      <div className={style.formBox}>
        <h2 className={style.login} >{showRegister ? 'Register' : 'Login'}</h2>
        {showRegister ? (
          <RegisterUser toggleForm={toggleForm} />
        ) : (
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 24,
            }}
            style={{
              maxWidth: "100%",
              width: '80%'
            }}
            initialValues={{
              remember: true,
            }}
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Por favor ingrese su email',
                },
              ]}
            >

              {/* Email */}

              <div className={style.emailField}>
                <Input
                  name="email"
                  value={userData.email}
                  type="email"
                  onChange={handleChange}
                  autoComplete="true"
                  placeholder="Correo"
                />
              </div>
            </Form.Item>

            {/* Email end*/}
            {/* Password */}

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Por favor ingrese su contraseña',
                },
              ]}
            >
              <div className={style.passwordField}>
                <Input.Password
                  name="password"
                  value={userData.password}
                  onChange={handleChange}
                  placeholder="Contraseña"
                />
              </div>
            </Form.Item>

            {/* Password end*/}
            {/* Remember */}

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                span: 24,
              }}
            >
              <Checkbox
                onChange={handleRememberChange}
                style={{
                  color: 'white',
                }}
              >
                Recuérdame
              </Checkbox>
            </Form.Item>

            {/* Remember end*/}

            <div className={style.spanBox}>
              <hr />
              <span className={style.span}>or</span>
              <hr />
            </div>

            {/* Login Google */}

            <Form.Item
              wrapperCol={{
                span: 24,
              }}
            >
              <div className={style.googleBtn}>
                <Button
                  // onClick={loginGoogleAccount}
                  style={googleBtnStyle}
                  type="submit"
                  block
                >
                  Continuar con Google
                  <FcGoogle style={{ marginLeft: 4 }} />
                </Button>
              </div>

              {/* Login Google end*/}
              {/* button submit */}

              <div className={style.submitBtn}>
                <Button
                  block
                  htmlType="submit"
                  onClick={handleSubmit}
                  style={buttonStyle}
                  type="primary"
                >
                  Ingresar
                </Button>
              </div>

              {/* button submit */}

            </Form.Item>
          </Form>
        )}
        <div className={style.textRegister}>
          <p style={{ color: 'white' }}>
            {showRegister ? '¿Ya tienes una cuenta?' : '¿No tienes una cuenta?'}
            <Link onClick={toggleForm} style={{ textDecoration: 'none', color: '#001529' }}>
              {showRegister ? ' Ingresar' : ' Regístrate'}
            </Link>
          </p>
        </div>
      </div>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Blinker:wght@100&display=swap');
      </style>
    </div>
  );
};

export default LoginForm;