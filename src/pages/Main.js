import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { NavLink, Outlet, useLocation } from "react-router-dom";
import AISubscriber from './AISubscriber'
const { Header, Content, Sider } = Layout;


export default function Main() {
  // const location = useLocation();
  const getItem = (path) => {
    return (
      <NavLink to={path}>
        <span className="label">{path}</span>
      </NavLink>
    );
  }
  const items = (pathname) => [
    {
      key:1,
      label: getItem("AISubscriber")
    },
    {
      key:2,
      label: getItem("AIMediaGenerator")
    },
    {
      key:3,
      label: getItem("MachineTranslator")
    },
    {
      key:4,
      label: getItem("AISummarization")
    },
    {
      key:5,
      label: getItem("AIMediaEditor")
    },
  ];
  return (
    <Layout>
      <Header
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div className="demo-logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['3  ']}
            items={items()}
            style={{
              flex: 1,
              minWidth: 0,
            }}
          />
        </Header>
      <Content>
        {/* {location.pathname === '/' ? <AISubscriber /> : <Outlet />} */}
        <Outlet />
      </Content>
    </Layout>
  )
} 