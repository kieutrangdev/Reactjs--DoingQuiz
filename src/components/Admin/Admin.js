import React, { useState } from 'react'
import SideBar from './SideBar'
import './Admin.scss'
import { FaBars, FaHeart } from 'react-icons/fa';
const Admin = (props) => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className='admin-contanier'>
      <div className='admin-sidebar'>
        <SideBar collapsed= {collapsed}/>
      </div>
      <div className='admin-content'>
        <FaBars onClick={() => setCollapsed(!collapsed)}/>
      </div>
    </div>
  )
}

export default Admin
