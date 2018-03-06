import React from 'react';
import Layout from './../../components/Layout';
import {
  NavLink
} from 'react-router-dom';
import './../../styles/header/index.css';
import GithubIcon from './../../assets/icon/github.svg';

export default class Header extends React.Component {

  isActive(current) {
    return (match, location) => {
      if (location.pathname === current) {
        return true;
      } else {
        return false;
      }
    };
  }

  render() {

    return <Layout.Row align="left" className="r-ui-header">
      <Layout.Col flex="fixed" width={260}>
        <div className="logo" version="Ver: 1.0.0" library="React: 16.3.0-alpha.1">
          R-UI
        </div>
      </Layout.Col>
      <Layout.Col flex="growAndShrink">
        <Layout.Row align="right" className="navigate">
          <Layout.Col>
            <div className="item">
              <NavLink
                to="/"
                activeClassName="active"
                isActive={ this.isActive('/') }
              >
                概要
              </NavLink>
            </div>
          </Layout.Col>
          <Layout.Col>
            <div className="item">
              <NavLink
                to="/main"
                activeClassName="active"
                isActive={ this.isActive('/main') }
              >
                文档
              </NavLink>
            </div>
          </Layout.Col>
          <Layout.Col>
            <div className="item">
              <NavLink
                to="/about"
                activeClassName="active"
                isActive={ this.isActive('/about') }
              >
                关于
              </NavLink>
            </div>
          </Layout.Col>
          <Layout.Col flex="fixed" width={56}>
            <a href="https://github.com/ryouaki/R-UI">
              <img src={GithubIcon} alt="Github Icon" className="github-icon"/>
            </a>
          </Layout.Col>
        </Layout.Row>
      </Layout.Col>
    </Layout.Row>
  }
}