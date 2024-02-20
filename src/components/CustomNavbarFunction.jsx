import React, { Fragment, useState } from "react";
import { Image, Link, Navbar, NavbarBrand, NavbarContent, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import { useNavigate, useLocation } from "react-router-dom";

function CustomNavbarFunction() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      id: 1,
      link: "Home",
      path: "/home",
    },
    {
      id: 2,
      link: "Chi Siamo",
      path: "/chi-siamo",
    },
    {
      id: 3,
      link: "Servizi",
      path: "/servizi",
    },
    {
      id: 4,
      link: "Contatti",
      path: "/contatti",
    },
  ];

  React.useEffect(() => {
    const currentPathItem = menuItems.find((item) => item.path === location.pathname);
    if (currentPathItem) {
      setSelectedItem(currentPathItem.id);
    }
  }, [location.pathname]);

  const handleClick = (itemID, path) => {
    console.log("Clicked item ID:", itemID);
    setSelectedItem(itemID)
    navigate(path);
  };

  const getMenuItems = () => {
    return (
      <Fragment>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link color={"foreground"} className={`w-full cursor-pointer ${selectedItem === item.id ? "font-bold" : ""}` } href={item.path} size="lg" onClick={() => handleClick(item.id, item.path)}>
              {item.link}
            </Link>
          </NavbarMenuItem>
        ))}
      </Fragment>
    );
  };

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden" />
        <NavbarBrand>
          <Image src="https://studioprofessionaledinutrizione.it/wp-content/uploads/2022/10/logo-gaspa-micheli-salvia.png" width={180} height={180}/>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        {getMenuItems()}
      </NavbarContent>
      <NavbarMenu className="pt-20 h-auto">{getMenuItems()}</NavbarMenu>
    </Navbar>
  );
}

export default CustomNavbarFunction;
