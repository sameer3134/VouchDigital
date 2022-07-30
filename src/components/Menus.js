import React, { Component } from 'react'
import { Button, Menu } from 'antd';
import "../App.css"




export class Menus extends Component {
  render() {

    return (
      <div>
        <div style={{
          float: 'left',
          width: '0px',
          height: '16px',
          margin: '10px 24px 16px 10px',
          background: 'rgba(255, 255, 255, 2)'
        }} >
          <a href="/" className='as'>ATools
          </a>
        </div>

        <Menu
        >
          <Menu.Item key="atrs" style={{ float: 'right' }}><Button className='button1' style={{ backgroundColor: "orange", color: 'white', width: ' 100px' }} type='dashed'>Login</Button>
          </Menu.Item>
          <Menu.Item key="autrs" style={{ float: 'right' }}><Button className='button1' style={{ backgroundColor: "#002766", color: 'white' }} type='dashed'>Start Free Trial</Button>
          </Menu.Item>
        </Menu>

      </div>
    )
  }
}

export default Menus