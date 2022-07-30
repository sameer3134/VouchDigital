import { Button, Checkbox, Form, Input } from 'antd';
import React, { useState } from 'react';
import axios from 'axios'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const onemail = (e) => {
    setEmail(e.target.value)
  }
  const onpassword = (e) => {
    setPassword(e.target.value)
  }

  const handleApi = () => {
    axios.post('https://reqres.in/api/login', {
      email: email,                  //    correct email:- eve.holt@reqres.in
      password: password              //   correct password:- cityslicka 
    })
      .then(result => {
        console.log(result.data)
        alert('you are login check token on console')
      })
      .catch(error => {
        console.log("error")
        alert("login failed")
      })
  }
  return (
    <div className='spes'>
      <Form name="basic" labelCol={{ span: 15 }} wrapperCol={{ span: 50 }} initialValues={{ remember: true }}
        autoComplete="off">
        <h4><div className='spa'>Welcome Back</div>
          Sub-title goes here</h4>
        <Form.Item rules={[{ required: true, message: 'Please input your username!' }]}>
          <Input placeholder='username' value={email} onChange={onemail} />
        </Form.Item>
        <Form.Item rules={[{ required: true, message: 'Please input your password!' }]}>
          <Input.Password placeholder='password' value={password} onChange={onpassword} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" onClick={handleApi} style={{ backgroundColor: "#002766", color: 'white' }} className='pad'>
            Login
          </Button>
        </Form.Item>
        <Form.Item name="remember" style={{ float: 'left', color: 'green' }} valuePropName="checked" >
          <Checkbox style={{
            color: "002766"
          }}>Remember me</Checkbox>
        </Form.Item>
        <Form.Item name="remember" style={{ float: 'right' }} >
          Forgot password
        </Form.Item>
      </Form>
    </div>
  )
}

export default LoginPage