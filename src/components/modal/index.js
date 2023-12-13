import React from 'react';
import { Modal } from 'antd';

import './style.css';

const CustomModal = ({
  isModalOpen,
  setIsModalOpen,
  projectInfo,
  setProjectInfo
}) => {
  const { title, description, role } = projectInfo || {};

  const handleOk = () => {
    setIsModalOpen(false);
    setProjectInfo({});
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal title={title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <p>{description}</p>
      <span className='role'>My Role</span>
      <p className='role-dis'>{role}</p>
    </Modal>
  );
};

export default CustomModal;