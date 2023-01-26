import React, { useEffect, useState } from 'react'
import {
    Box,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    Drawer,
    useTheme,
} from "@mui/material"
import { useLocation, useNavigate } from 'react-router-dom'
import FlexBetween from 'components/FlexBetween'
import profileImage from 'assets/profile.jpeg'


const NavItems = [
    {
        text: "Dashboard",
        icon: <Homeo
    }
]
import {
    SettingsOutlined,
    ChevronLeft,
    ChevronRightOutline,
    HomeOutlined,
    ShoppingCartOutlined,
    Groups2Outlined,
    PointOfSaleOutlined,
    ReceiptLongOutlined,
    AdminPanelSettingsOutlined,
    TrendingUpOutlined,
    PieChartOutlined,
    TodayOutlined,
    PublicOutlined,
    CalendarMonthOutlined
} from "@mui/icons-material"

const Sidebar = ({
    drawerWidth,
    isSidebarOpen,
    setSidebarOpen,
    isNoneMobile,
}) => {
    const { pathname } = useLocation()
    const [active, setActive] = useState("")
    const navigate = useNavigate()
    const theme = useTheme()

    useEffect(() => {
        setActive(pathname.substring(1))
    }, [pathname])


  return (
    <Box component="nav">
        {isSidebarOpen && (
            <Drawer
                open={isSidebarOpen}
                onClose={() => setSidebarOpen(false)}
                variant="persistent"
                anchor="left"
                sx={{
                    width: drawerWidth,
                    "& .MuiDrawer-paper": {
                        color: theme.palette.secondary[200],
                        backgroundColor: theme.palette.background.alt,
                        boxSizing: "border-box",
                        borderWidth: isNoneMobile ? 0 : "2px",
                        width: drawerWidth
                    }
                }}
            >
                <Box width="100%">
                    <Box m="1.5rem 2rem 2rem 3rem">
                        <FlexBetween color={theme.palette.secondary.main}>
                            <Box display="flex" alignItems="center" gap="0.5rem">
                                <Typography variant="h4" fontWeight="bold">
                                    ECOMVISION
                                </Typography>
                            </Box>
                            {!isNoneMobile && (
                                <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                                    <ChevronLeft/>
                                </IconButton>
                            )}
                        </FlexBetween>
                    </Box>
                </Box>

            </Drawer>
        )}
    </Box>
  )
}

export default Sidebar