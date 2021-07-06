import React, { useEffect } from 'react'
import Cursor from '../../components/utils/custom/Cursor'
import { navigation } from '../../data/navigation';
import Dropdown from '../../components/utils/Dropdown';
import Nav from '../../components/utils/navigation/Nav';
import NavItem from '../../components/utils/navigation/NavItem';

function Header({ props }) {

    const displayNav = () => {
        return navigation.map((item) => {
          return (
            <NavItem
              href={item.link}
              key={item.title}
              id={item.title}
              props={props}
            >
              {item.title}
            </NavItem>
          );
        });
      };

    return (
        <div className="page_header">
            <div className="page_header_logo">
                <span className="element">Imane.</span>
            </div>

            <div className="page_header_menu">
                <span className="element" onClick={() => props.setIsOpen(!props.isOpen)}>menu</span>
            </div>

            <Dropdown props={props}>
                <Nav>{displayNav()}</Nav>
            </Dropdown>
        </div>
    )
}

export default Header
