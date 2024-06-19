import React, { useState } from 'react';
import { useRouter } from 'next/router';

import type { FormProps } from 'antd';
import { Form, Input } from 'antd';
import CommonButton from '@/components/common/Button';
 import { ToastContainer, toast } from 'react-toastify';

import { setCookie } from '@/utils';

import { ILoginData } from '@/types/global';


const LoginForm = () => {
  const [isLoading,setIsLoading]  = useState<boolean>(false)
  const router = useRouter();

  const onFinish: FormProps<ILoginData>['onFinish'] = async (values) => {
    try{
      setIsLoading(true)
      const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL +"/users/login/",{
        method:"POST",
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(values)  
      })
      const data = await response.json();
      
      if(data.success){
        setCookie("__session",JSON.stringify(data.data),1)
        router.push("/dashboard")
      }
      else{
        toast.error(data.message)
      }
    }catch(error){
      console.log("Error While Login",error)
    }finally{
      setIsLoading(false)
    }
      

  };


return(
    <>
        <ToastContainer />
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
          className='login-form'
        >
          <h1 style={{marginLeft:"200px"}}>Login</h1>
          <Form.Item<ILoginData>
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your Email' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<ILoginData>
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password' }]}
          >
            <Input.Password autoComplete='off'/>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8 }}>
            <CommonButton type="primary" htmlType="submit" isLoading={isLoading} buttonLabel='Submit'/>
            <a type="primary" href="/">
              Don't have an account?
            </a>
          </Form.Item>
        </Form>
    </>
  )
  
}

export default LoginForm;