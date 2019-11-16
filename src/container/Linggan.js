import React, { Component } from 'react';
import { NavBar,Icon,Tabs} from 'antd-mobile';
const tabs = [
    { title: '推荐' },
    { title: '冬季'},
    { title: '宜家' },
    { title: '小清新' },
  ];
export default class Linggan extends Component {
  render() {
    return (
      <div>
        <NavBar
            style={{backgroundColor:'#3fcccb',color:'#000',color:'white',height:"75px"}}
            rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px',color:'white' }} />,
            ]}
        >灵感</NavBar>
        <Tabs tabs={tabs}
            initialPage={0}
            onChange={(tab, index) => { console.log('onChange', index, tab); }}
            onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
            >
            <div style={{}}>
                <div style={{ height: '100%',width:'50%',float:'left'}}>
                    <img src={require('./images/1.png')} style={{width:'100%',height:'100%'}}/>
                    <img src={require('./images/2.png')} style={{width:'100%',height:'100%'}}/>
                    <img src={require('./images/1.png')} style={{width:'100%',height:'100%'}}/>
                </div>
                <div style={{ height: '100%',width:'50%',float:'left'}}>
                    <img src={require('./images/2.png')} style={{width:'100%',height:'100%'}}/>
                    <img src={require('./images/1.png')} style={{width:'100%',height:'100%'}}/>
                    <img src={require('./images/2.png')} style={{width:'100%',height:'100%'}}/>
                </div>
            </div>
            <div style={{ height: '150px' }}>
                Content of second tab
            </div>
            <div style={{ height: '150px' }}>
                Content of third tab
            </div>
            <div style={{ height: '150px' }}>
                Content of four tab
            </div>
        </Tabs>
                
      </div>
    );
  }
}
