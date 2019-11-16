import React, { Component } from 'react';
import { NavBar,Icon,Carousel,SearchBar} from 'antd-mobile';
export default class Shangcheng extends Component {
  
  render() {
    return (
      <div>
        <NavBar
            style={{backgroundColor:'#3fcccb',color:'#000',height:'75px',color:'white'}}
            rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px',color:'white' }} />,
            ]}
        >商城</NavBar>
        <Carousel
          autoplay={true}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
          >
          {[1,2,3,4].map(val => (
            <a
            key={val}
            href="http://www.alipay.com"
            style={{ display: 'inline-block', width: '100%', height:'30%'}}
            > 
            <img src={require('./images/banner1.png')} style={{width:'100%',height:'100%'}}/>
              <img
              src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
              alt=""
              style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                // fire window resize event to change height
                window.dispatchEvent(new Event('resize'));
                this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
            ))}
        </Carousel>
        <img src={require('./images/zhongjian.png')} style={{width:'100%',height:'100%'}}/>
        <img src={require('./images/dixia.png')} style={{width:'100%',height:'100%'}}/>
        <img src={require('./images/ing.png')} style={{width:'100%',height:'100%'}}/>
        
        <div className="shangcheng"><SearchBar placeholder="输入关键字搜索" maxLength={8} /></div>
      </div>
    );
  }
}
