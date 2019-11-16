import React, { Component } from 'react'
import { NavBar, Icon, Tabs,Carousel } from 'antd-mobile';

export default class AppHome extends Component {
    render() {
        return (
            <div style={{background:'white'}}>
                <NavBar
                style={{backgroundColor:'#3fcccb',height:'75px',color:'white'}}
                
            >住吧家居</NavBar>
        <Carousel
          autoplay={true}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
          >
          {[1,2].map(val => (
            <a
            key={val}
            href="http://www.alipay.com"
            style={{ display: 'inline-block', width: '100%', height: "30%" }}
            > 
            <img src={require('./images/zhu.png')} style={{width:'100%',height:'100%'}}/>
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
        <img src={require('./images/remen.png')} style={{width:'95%',height:'100%',maxWidth:'100%',maxHeight:'100%',marginTop:'15px',marginLeft:'10px'}}/>
        <img src={require('./images/big.png')} style={{width:'100%',height:'100%',maxWidth:'100%',maxHeight:'100%',marginTop:'28px'}}/>
    </div>
        )
    }
}