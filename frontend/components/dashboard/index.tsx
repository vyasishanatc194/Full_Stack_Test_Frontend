import React,{useRef, useState} from 'react'

import CommonButton from '@/components/common/Button'
import { Input ,InputRef, Table} from 'antd'

import { handleLogout } from '@/utils'
import { jobColumns } from '@/utils/helpers/constants'

const dashboard = () => {
  const [isLoading,setIsLoading] = useState<boolean>(false)
  const [jobData,setJobData] = useState<any>([])
    const inputRef = useRef<InputRef>(null)


  const handleSearch = async() => {
    try{
      const title =inputRef.current?.input?.value
      if(title){
        setIsLoading(true)
          const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + `/jobs/posting/list/?job_title=${title}`,{
              method:"GET",
              headers: {
                  'Content-Type': 'application/json',
                  },
          })
          const responseData = await response.json()
          setJobData(responseData.data)
          console.log(responseData)
      }
    }catch(error){
      console.log(error)
    }finally{
      setIsLoading(false)
    }
  }

  return (
    <>
    <h1>Dashboard</h1>
    <div className='dashboard-container'>
      <div className='search-container'>
        <Input placeholder="Job Title" ref={inputRef}/>
        <CommonButton type='primary' onClick={handleSearch} buttonLabel='Search' isLoading={isLoading}/>
      </div>
      <CommonButton type='primary' onClick={()=> handleLogout()} danger buttonLabel='Logout'/>
    </div>
    <Table dataSource={jobData} columns={jobColumns}/>;
    </>
  )
}

export default dashboard
