import { AccountCircle, Assessment, Build, Home, Menu, Work } from "@mui/icons-material";
import { Box, Drawer, IconButton, ListItemIcon, ListItemText, MenuItem, MenuList, Tab, Tabs, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";


const menuItems = [
  { href: "/", name: "Home", icon: <Home /> },
  { href: "/about-me/", name: "About Me", icon: <AccountCircle /> },
  { href: "/work/", name: "Work", icon: <Work /> },
  { href: "/skills/", name: "Skills", icon: <Assessment /> },
  { href: "/lab/", name: "Lab", icon: <Build /> },
];

export function SiteNavigation() {
  const [sidebarOpened, setSidebarOpened] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const isDesktop = useMediaQuery("(min-width:800px)");

  const changeRoute = function (newValue: string) {
    setSidebarOpened(false);
    navigate(newValue);
  };

  const renderTopMenu = function () {
    return (
      <nav>
        <Tabs
          style={{ minHeight: "53px", height: "53px" }}
          value={location.pathname}
          onChange={(_, newValue) => changeRoute(newValue)}
        >
          {menuItems.map((item) => (
            <Tab
              key={item.href}
              style={{ minHeight: "45px", height: "45px" }}
              label={item.name}
              icon={item.icon}
              value={item.href}
            />
          ))}
        </Tabs>
      </nav>
    );
  };
  const renderSideMenuIcon = function () {
    return (
      <IconButton
        aria-label="menu"
        size="medium"
        onClick={() => setSidebarOpened(true)}
      >
        <Menu />
      </IconButton>
    );
  };

  const renderSideMenu = function () {
    return (
      <Drawer
        color="primary"
        anchor="left"
        open={sidebarOpened}
        onClose={() => setSidebarOpened(false)}
      >
        <div className="logo-image">

        </div>
        <MenuList>
          {menuItems.map((item) => (
            <MenuItem key={item.href} onClick={() => changeRoute(item.href)}>
              <ListItemIcon> {item.icon} </ListItemIcon>
              <ListItemText>{item.name}</ListItemText>
            </MenuItem>
          ))}
        </MenuList>
      </Drawer>
    );
  };

  return (
    <>
      <Box
        sx={{ borderBottom: 1, borderColor: "divider" }}
        className="menucontainer"
      >
        {!isDesktop && renderSideMenuIcon()}
        {isDesktop && renderTopMenu()}
      </Box>
      {renderSideMenu()}
    </>
  );
}
