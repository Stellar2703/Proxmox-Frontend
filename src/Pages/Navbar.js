import '../Styles/Navbar.css';

const NavbarItem = (props) => {
    return(
        <div className='NavbarItem'>
        <div className="NavbarContent">
            <span className="navbarItemIcon">{props.icon}</span>
            <span className="navbarItemLabel">{props.label}</span>
        
        </div>
        <div className='DropdownIcon'>^</div>
        </div>
    )
}

const Navbar = () => {
    return (
        <div className='Navbar'>
            <NavbarItem icon="A" label="Asdfg" />
            <NavbarItem icon="B" label="Bjhtf" />
            <NavbarItem icon="C" label="Ckyjgk" />

            
        </div>
    )
}

export default Navbar;