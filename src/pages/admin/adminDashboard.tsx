import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link, Outlet, Navigate } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import { StyledAdminWindow, StyledSidebar, StyledNav, StyledToggleContainer } from '../../styles/styledAdminComponents';
import AdminSidebar from '../../components/adminComponents/adminSidebar';
const AdminComponent = () => {


  const redirect = true;
  const [isSidebarToggled, setIsSidebarToggled] = useState(true);


  return (

    redirect
      ? <Navigate replace to='/admin/login' />
      : (
        <StyledAdminWindow>
      <AnimatePresence>
    {
      isSidebarToggled
          ? <StyledToggleContainer
            whileHover={{
              opacity: 1,
                x: 10,
              }}
              initial={{
                x: '-100%'
              }}
              animate={{
                x: 0
              }}
              exit={{
                x: '-100%'
              }}
            onClick={ () => setIsSidebarToggled(false)}
          >
            <IoIosArrowForward className='icon' />
      </StyledToggleContainer>
            : <AdminSidebar setToggle={setIsSidebarToggled} />
        }
        </AnimatePresence>
     
      <div className='main'>
        <Outlet />
      </div>
    </StyledAdminWindow>)
  );
}

export default AdminComponent;