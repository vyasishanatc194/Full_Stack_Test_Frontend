import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { Form, Input } from 'antd';
import CommonButton from '@/components/common/Button';
 import { ToastContainer, toast } from 'react-toastify';

import { emailRegex, passwordRegex } from '@/utils/helpers/constants';
import { ISignUpData } from '@/types/global';


const SignUpForm = () => {
  const [isLoading,setIsLoading] = useState<boolean>(false)
  const router = useRouter()

  const onSubmit =async (signUpValues:ISignUpData) => {
    try{
      setIsLoading(true)
      const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL +"/users/signup/",{
        method:"POST",
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify({'email':signUpValues.email,'first_name':signUpValues.firstName,'last_name':signUpValues.lastName,'password':signUpValues.password})  
      })
      const data = await response.json();
      if(data.success){
        toast.success(data.message)
        router.push("/login")
      }
      else{
        toast.error(data.message)
      }
      }catch(error){
        console.log("Error while sign up",error)
      }finally{
        setIsLoading(false)
      }
    }

  return (
    <>
      <ToastContainer />
      <Form 
        onFinish={(onSubmit)} 
        layout="vertical" 
        autoComplete='off' 
        className='signup-form'
        initialValues={{ remember: false }}
        >
        <h1>Sign Up</h1>
        <Form.Item<ISignUpData>
          label="First Name"
          name="firstName"
          rules={[{ required: true, message: '*First Name is Required' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<ISignUpData>
          label="Last Name"
          name="lastName"
          rules={[{ required: true, message: '*Last Name is Required' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<ISignUpData>
          label="Email"
          name="email"
          rules={[{ required: true, message: '*Email is Required' },{pattern:emailRegex,message:"*Enter Valid Email Address"}]}
        >
          <Input />
        </Form.Item>

        <Form.Item<ISignUpData>
          label="Password"
          name="password"
          rules={[{ required: true, message: '*Password is Required' },{pattern:passwordRegex,message:"*Password must contain at least 8 char, 1 uppercase letter, 1 lowercase letter, 1 digit and 1 special char."}]}
        >
          <Input.Password autoComplete='off'/>
        </Form.Item>
        <Form.Item>
            <CommonButton type="primary" htmlType="submit" loading={isLoading} buttonLabel='Sign Up'/>
            <a type="primary" href='/login'>
              Already have an Account? Login
            </a>
        </Form.Item>
      </Form>
    </>
  );
};

export default SignUpForm;
