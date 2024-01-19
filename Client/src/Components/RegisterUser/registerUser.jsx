import React, { useState } from 'react';
import { Button, DatePicker, Form, Input, notification } from 'antd';
import { FcGoogle } from "react-icons/fc";
import Photo from '../Photo/photo';
import axios from 'axios';
import style from "./registerUser.module.css";
// import { useDispatch } from 'react-redux';
// import { useGoogleLogin } from '@react-oauth/google';
// import { loginGoogle } from '../../../redux/Actions/actions';

const buttonStyle = {
  background: "#001529",
  color: "white",
  height: "45px",
};

const googleBtnStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'white',
  border: "1px solid black",
  height: "45px",
};

const RegisterUser = ({ closeUserModal, toggleForm }) => {

  // const dispatch = useDispatch();
  const [userId, setUserId] = useState(null);
  const [showPhotoUser, setShowPhotoUser] = useState(false);

  const [formUser, setFormUser] = useState({
    nickname: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    birthdate: '',
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setFormUser({
      ...formUser,
      [property]: value
    });
  };

  const handleDateChange = (date, dateString) => {
    setFormUser({
      ...formUser,
      birthdate: dateString
    });
  };

  const handleSubmit = async () => {
    if (formUser.firstName && formUser.lastName && formUser.email && formUser.password && formUser.password === formUser.confirm) {
      try {
        const response = await axios.post('/user/register', {
          nickname: formUser.nickname,
          firstName: formUser.firstName,
          lastName: formUser.lastName,
          email: formUser.email,
          password: formUser.password,
          birthdate: formUser.birthdate,
        });
        const data = response.data.newUser._id
        setUserId(data)
        setShowPhotoUser(true);
        notification.success({
          message: '¡Excelente!',
          description: 'El registro de usuario se realizó con éxito.',
          placement: 'bottomLeft'
        });
      } catch (error) {
        notification.error({
          message: 'Error',
          description: `We're sorry, ${(error.response.data.error)}.`,
          placement: 'bottomLeft'
        })
      }
    }
  };

  // const loginGoogleAccount = useGoogleLogin({
  //   onSuccess: (googleUser) => {
  //     dispatch(loginGoogle(googleUser))
  //       .then(() => {
  //         closeUserModal()
  //       })
  //   },
  //   onError: (error) => console.log('Login Failed:', error)
  // });

  return (
    <div className={style.formBox}>
      <Form
        name="user"
        onFinish={handleSubmit}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 24,
        }}
        style={{
          maxWidth: "100%",
          width: '80%',
        }}
      >

        {/* Nickname */}

        <Form.Item
          name="nickname"
          rules={[
            {
              required: true,
              message: 'Por favor ingrese un nickname',
            },
          ]}
        >
          <div className={style.nicknameField}>
            <Input
              name="nickname"
              value={formUser.nickname}
              type="text"
              onChange={handleChange}
              autoComplete="true"
              placeholder="Nickname"
            />
          </div>
        </Form.Item>

        {/* Nickname end*/}
        {/* FirstName */}

        <div className={style.NameBox}>
          <Form.Item
            name="firstName"
            rules={[
              {
                required: true,
                message: 'Por favor ingrese su nombre',
              },
            ]}
            style={{
              maxWidth: '100%',
              width: '49%'
            }}
          >
            <div className={style.nameField}>
              <Input
                name="firstName"
                value={formUser.firstName}
                type="text"
                onChange={handleChange}
                autoComplete="true"
                placeholder="Nombres"
              />
            </div>
          </Form.Item>

          {/* FirstName end*/}
          {/* LastName */}

          <Form.Item
            name="lastName"
            rules={[
              {
                required: true,
                message: 'Por favor ingrese sus apellidos',
              },
            ]}
            style={{
              maxWidth: '100%',
              width: '49%'
            }}
          >
            <div className={style.lastnameField}>
              <Input
                name="lastName"
                value={formUser.lastName}
                type="text"
                onChange={handleChange}
                autoComplete="true"
                placeholder="Apellidos"
              />
            </div>
          </Form.Item>
        </div>

        {/* LastName end*/}
        {/* Birthdate */}

        <Form.Item name="date-picker"
          rules={[{
            required: true,
            message: "La fecha de nacimiento es obligatoria."
          },
          ]}
        >
          <DatePicker
            className={style.datePicker}
            onChange={(date, dateString) => handleDateChange(date, dateString)}
            placeholder='Fecha de nacimiento'
          />
        </Form.Item>

        {/* Birthdate end*/}
        {/* Email */}

        <p style={{ color: 'white', fontSize: '12px' }}>Once the email is registered you cannot change it</p>
        <Form.Item
          name="email"
          rules={[
            {
              type: 'email',
              message: 'La información no es válida',
            },
            {
              required: true,
              message: 'Por favor ingrese su email',
            },
          ]}
        >
          <div className={style.emailField}>
            <Input
              autoComplete="true"
              name="email"
              onChange={handleChange}
              placeholder="Email"
              value={formUser.email}
            />
          </div>
        </Form.Item>

        {/* Email end*/}
        {/* Password */}

        <div className={style.PasswordBox}>
          <Form.Item
            name="password"
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Por favor ingrese su contraseña',
              },
              {
                min: 6,
                max: 15,
                message: 'La contraseña debe tener entre 6 y 15 caracteres',
              },
              {
                pattern: /^(?=.*[0-9]).*$/,
                message: 'La contraseña debe contener al menos un número',
              },
              {
                pattern: /^(?=.*[A-Z]).*$/,
                message: 'La contraseña debe contener al menos una letra mayúscula',
              },
              {
                pattern: /^(?=.*[.!@#$%^&*]).*$/,
                message: 'La contraseña debe contener al menos un carácter especial (por ejemplo: !@#$%^&*)',
              },
            ]}
            style={{
              maxWidth: '100%',
              width: '49%'
            }}
          >
            <div className={style.passwordField}>
              <Input.Password
                name="password"
                onChange={handleChange}
                placeholder="Contraseña"
                value={formUser.password}
              />
            </div>
          </Form.Item>

          {/* Password end*/}
          {/* Confirm password */}

          <Form.Item
            name="confirm"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Confirmar contraseña',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('La contraseña no coincide'));
                },
              }),
            ]}
            style={{
              maxWidth: '100%',
              width: '49%'
            }}
          >
            <div className={style.passwordField}>
              <Input.Password
                name="confirm"
                onChange={handleChange}
                value={formUser.confirm}
                placeholder='Confirmar contraseña'
              />
            </div>
          </Form.Item>
        </div>

        {/* Confirm password end*/}
        {/* Button submit */}

        <Form.Item
          wrapperCol={{
            span: 24,
          }}
        >
          <div className={style.submitBtn}>
            <Button
              block
              htmlType="submit"
              style={buttonStyle}
              type="primary"
            >
              Registrarse
            </Button>
          </div>

          {/* Button submit end */}
          {/* Google */}

          <div className={style.googleBtn}>
            <Button
              // onClick={loginGoogleAccount}
              style={googleBtnStyle}
              type="submit"
              block
            >
              Regístrate con Google
              <FcGoogle style={{ marginLeft: 4 }} />
            </Button>
          </div>
        </Form.Item>

        {/* Google end*/}
        <Photo showPhoto={showPhotoUser} userId={userId} closeUserModal={closeUserModal} toggleForm={toggleForm} />
      </Form>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Blinker:wght@100&display=swap');
      </style>
    </div>
  )
};

export default RegisterUser;