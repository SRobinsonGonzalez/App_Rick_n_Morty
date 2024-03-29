import React, { useState } from 'react';
import { Button, Form, Modal, Upload, notification } from 'antd';
import ImgCrop from 'antd-img-crop';
import style from './photo.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

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

const Photo = ({ showPhoto, userId, toggleForm }) => {

  const [fileList, setFileList] = useState([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

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

  const handleFormSubmit = async () => {
    const formDataToSend = new FormData();
    formDataToSend.append('images', fileList[0].originFileObj);
    try {
      await axios.put(`/user/update/${userId}`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      notification.success({
        message: '¡Excelente!',
        description: 'Tu foto se subió con éxito.',
        placement: 'bottomLeft',
      });
    } catch (error) {
      console.log(error);
      notification.error({
        message: 'Error',
        description: `Lo sentimos, no se pudo actualizar la foto.`,
        placement: 'bottomLeft'
      });
    }
  }


  return (
    <div className={`${style.photoContainer} ${showPhoto ? style.show : ""}`}>
      <Form
        name="photo"
        onFinish={handleFormSubmit}
        className={style.formBox}
        layout="horizontal"
        style={{
          maxWidth: 600,
        }}
      >
        <h1>Añade una foto</h1>

        {/* Photo */}

        <Form.Item
          name="image"
          valuePropName="fileList"
        >
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
              {fileList.length < 1 && '+ Upload'}
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
        </Form.Item>

        {/* Photo end */}

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

        <a className={style.textAfter}>
          <Link onClick={toggleForm} style={{ textDecoration: 'none', color: 'white' }}>
            Lo haré más tarde
          </Link>
        </a>

      </Form>
    </div >
  )
};

export default Photo;