import React, { useState} from 'react'
import { Box, useMediaQuery } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Navbar from 'components/Navbar'
import Sidebar from 'components/Sidebar'

const Layout = () => {
  const isNoneMobile = useMediaQuery("(min-width: 600px")
  const [isSidebarOpen, setSidebarOpen] = useState(true)

  return <Box display={isNoneMobile ? "flex" : "block"} width="100%" height="100%">
    <Sidebar
      isNoneMobile={isNoneMobile}
      drawerWidth="250px"
      isSidebarOpen={isSidebarOpen}
      setSidebarOpen={setSidebarOpen}
    />
    <Box>
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        {/* Outlet is a placeholder for content*/ }
        <Outlet/>
    </Box>
  </Box>
}

export default Layout