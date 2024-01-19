import { getUserData } from "../../redux/Actions/actions";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import style from "./profile.module.css"
import ImgCrop from "antd-img-crop";
import axios from "axios";

import { Button, Checkbox, Form, Input, Modal, Upload, notification } from "antd";

const buttonStyle = {
  background: "#001529",
  color: "white",
  height: "40px",
};

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const Profile = () => {
  const [componentDisabled, setComponentDisabled] = useState(true);
  const userId = localStorage.getItem('userId');
  const userData = useSelector((state) => state.userData);
  const dispatch = useDispatch();

  const nickname = userData.nickname;
  const profileImage = userData.profileImage;
  const firstName = userData.firstName;
  const lastName = userData.lastName;
  const email = userData.email;

  const [fileList, setFileList] = useState([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");

  const [form] = Form.useForm();

  useEffect(() => {
    if (!userData) {
      dispatch(getUserData(userId));
    };
  }, []);

  const beforeUpload = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setFileList(() => [{ url: reader.result, originFileObj: file }]);
    };
    return false;
  };

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const handleFormSubmit = async () => {
    const changedFields = form.getFieldsValue();
    try {
      if (fileList.length > 0) {
        const formDataToSend = new FormData();
        formDataToSend.append('images', fileList[0].originFileObj);
        await axios.put(`/user/update/${userId}`, formDataToSend, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        dispatch(getUserData(userId));
        notification.success({
          message: '¡Excelente!',
          description: 'Tu foto se subió con éxito.',
          placement: 'bottomLeft',
        });
      };
      if (Object.keys(changedFields).length > 0) {
        await axios.put(`/user/update/${userId}`, changedFields);
        alert('Todo ok')
      };
    } catch (error) {
      notification.error({
        message: 'Error',
        description: `We're sorry, ${(error.response.data.error)}.`,
        placement: 'bottomLeft'
      });
    };
  };

  return (
    <div className={style.profileBox}>
      <div className={style.FormBox}>
        <Form
          form={form}
          name="photo"
          onFinish={handleFormSubmit}
        >
          {/* Photo */}

          <Form.Item
            name="image"
          >
            <div>
              <ImgCrop rotationSlider>
                <Upload
                  accept="image/*"
                  beforeUpload={beforeUpload}
                  className={style.upload}
                  fileList={fileList}
                  listType="picture-circle"
                  onChange={onChange}
                  onPreview={handlePreview}
                  type="file"
                >
                  {/* {fileList.length < 1 && '+ Upload'} */}
                  {fileList.length < 1 && profileImage && <img src={profileImage} alt="profile" style={{ width: '100%', borderRadius: '100%' }} /> || '+ Upload'}
                </Upload>
              </ImgCrop>
              <Modal
                footer={null}
                onCancel={handleCancel}
                open={previewOpen}
              >
                <img
                  alt="example"
                  style={{
                    width: '100%',
                  }}
                  src={previewImage}
                />
              </Modal>
            </div>
          </Form.Item>

          {/* Photo end */}

          <h1>{nickname}</h1>

        </Form>

        <Checkbox
          checked={componentDisabled}
          onChange={(e) => setComponentDisabled(e.target.checked)}
          style={{
            marginBottom: 20
          }}
        >
          Do you want to change your information?
        </Checkbox>

        <div className={style.formBox}>
          <Form
            form={form}
            layout="horizontal"
            disabled={componentDisabled}
            style={{
              width: '50%'
            }}
          >

            {/* Nickname */}

            <Form.Item
              name="nickname"
              rules={[
                {
                  required: false,
                  message: 'Por favor ingrese un nickname',
                },
              ]}
            >
              <div className={style.nicknameField}>
                <Input
                  name="nickname"
                  type="text"
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
                    required: false,
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
                    type="text"
                    autoComplete="true"
                    placeholder={firstName}
                  />
                </div>
              </Form.Item>

              {/* FirstName end*/}
              {/* LastName */}

              <Form.Item
                name="lastName"
                rules={[
                  {
                    required: false,
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
                    type="text"
                    autoComplete="true"
                    placeholder={lastName}
                  />
                </div>
              </Form.Item>
            </div>

            {/* LastName end*/}
            {/* Password */}

            <div className={style.PasswordBox}>
              <Form.Item
                name="password"
                hasFeedback
                rules={[
                  {
                    required: false,
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
                    placeholder="Contraseña"
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
                    required: false,
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
                    placeholder='Confirmar contraseña'
                  />
                </div>
              </Form.Item>
            </div>

            {/* Confirm password end*/}
            {/* Email */}

            <p style={{ color: 'black', fontSize: '12px' }}>Once the email is registered you cannot change it</p>
            <Form.Item
              name="email"
              initialValue={email}
            >
              <div className={style.emailField}>
                <Input
                  autoComplete="true"
                  name="email"
                  readOnly
                  placeholder={email}
                />
              </div>
            </Form.Item>

            {/* Email end*/}

            <Form.Item>
              <Button
                onClick={handleFormSubmit}
                type="primary"
                htmlType="submit"
                style={buttonStyle}
                block
              >
                Finalizar
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
};

export default Profile