import styled from "styled-components";

const Header = (props) =>{
    return <Nav>Header</Nav>;
};

const Nav = styled.nav`
position: fixed;
top: 0;
left: 0;
right: 0;
height: 70px;
background-color: #090b13;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 36px;
`;

export default Header;