import {Col, Container, Row} from "reactstrap";
import {NavLink} from "react-router-dom";
import {AiOutlineMenu} from "react-icons/all";
import {useState} from 'react';

const HeaderComponent = () => {
    const [phoneMenu, setPhoneMenu] = useState(false);
    return(
        <Container fluid>
            <Row>
                <Col md={4} xs={6}>
                    <a href='/'><img src='/images/Logo-Test.png' className='w-100 p-3'/></a>
                </Col>
                <Col md={8} xs={6}>
                    <div className='d-none d-md-flex h-100 w-100 justify-content-end'>
                        <NavLink className='align-self-center p-3 link border-animation' to='/home'>Home</NavLink>
                        <NavLink className='align-self-center p-3 link border-animation' to='/home'>Home</NavLink>
                        <NavLink className='align-self-center p-3 link border-animation' to='/home'>Home</NavLink>
                    </div>
                    <div className='d-flex d-md-none h-100 w-100 justify-content-end px-5'>
                        <AiOutlineMenu onClick={() => setPhoneMenu(!phoneMenu)} className='align-self-center header-phone-menu'/>
                    </div>
                </Col>
            </Row>
            <Row className={phoneMenu ? 'text-center' : 'd-none'}>
                <Col xs={12}>
                    <NavLink className='align-self-center p-3 w-100 link' to='/home'>Home</NavLink>
                </Col>
                <Col xs={12}>
                    <NavLink className='align-self-center p-3 w-100 link' to='/home'>Home</NavLink>
                </Col>
                <Col xs={12}>
                    <NavLink className='align-self-center p-3 w-100 link' to='/home'>Home</NavLink>
                </Col>
            </Row>
        </Container>
    )
}

export default HeaderComponent;