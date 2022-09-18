import React, { FC, PropsWithChildren } from 'react';
import { useAuth } from '@/hooks/useAuth';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import { Col, Row } from 'antd';

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const { user } = useAuth();
  return (
    <>
      <Header />
      <Row gutter={[5, 2]}>
        {user && (
          <Col span={3}>
            <Sidebar />
          </Col>
        )}
        <Col span={user ? 9 : 12}>{children}</Col>
      </Row>
    </>
  );
};

export default Layout;
