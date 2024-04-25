import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      links={[
        {
          key: 'Liaoddbi backend',
          title: 'Liaoddbi backend',
          href: 'https://github.com/DLDLDLL/liaodd-BI-backend.git',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com',
          blankTarget: true,
        },
        {
          key: 'Liaoddbi front',
          title: 'Liaoddbi front',
          href: 'https://github.com/DLDLDLL/liaodd-BI-frontend.git',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
