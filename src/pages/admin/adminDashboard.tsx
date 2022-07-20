import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import LogoutComponent from '../../components/adminComponents/LogoutComponent'
import { IoIosArrowForward } from 'react-icons/io';
import { StyledAdminWindow, StyledToggleContainer } from '../../styles/styledAdminComponents';
import AdminSidebar from '../../components/adminComponents/adminSidebar';
const AdminComponent = () => {

  const [isSidebarToggled, setIsSidebarToggled] = useState(true);

  return (

     
    <StyledAdminWindow>
      <LogoutComponent />
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
  
}

export default AdminComponent;