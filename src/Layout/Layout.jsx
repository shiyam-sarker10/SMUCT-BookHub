
import Nav from '../component/shared/Nav/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../component/shared/Footer/Footer';

const Layout = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;