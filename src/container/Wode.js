import React, { Component } from 'react';
import { NavBar,Icon} from 'antd-mobile';
export default class Wode extends Component {
  render() {
    return (
      <div>
        <NavBar
            style={{backgroundColor:'#3fcccb',color:'#000',height:'75px',color:'white'}}
            rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px',color:'white' }} />,
            ]}
        >我的</NavBar>
      </div>
    );
  }
}
