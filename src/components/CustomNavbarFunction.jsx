import React, {Fragment} from "react";
import {
  Image,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle
} from "@nextui-org/react";

function CustomNavbarFunction() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // const menuItems = ["Home", "Chi Siamo", "Servizi", "Contatti"];
  const menuItems = [
    {
      link: "Home",
      path: "/home"
    },
    {
      link: "Chi Siamo",
      path: "/chi-siamo"
    },
    {
      link: "Servizi",
      path: "/servizi"
    },
    {
      link: "Contatti",
      path: "/contatti"
    }
  ];

  const getMenuItems = () => {
    return <Fragment>
      {
        menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link color={'foreground'} className="w-full" href={item.path} size="lg" onClick={handleClick}>
              {item.link}
            </Link>
          </NavbarMenuItem>
        ))
      }
    </Fragment>
  }
  
  const handleClick = () => {
    
  }

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden"/>
        <NavbarBrand>
          <Image
            src="https://studioprofessionaledinutrizione.it/wp-content/uploads/2022/10/logo-gaspa-micheli-salvia.png"
            width={180} height={180}/>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        {getMenuItems()}
      </NavbarContent>
      <NavbarMenu className="pt-20 h-auto">
        {getMenuItems()}
      </NavbarMenu>
    </Navbar>
  );
}

export default CustomNavbarFunction;
