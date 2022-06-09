import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import { StyledSidebar, StyledNav } from '../../styles/styledAdminComponents';

interface Props {
  setToggle: React.Dispatch<React.SetStateAction<boolean>>
}

const AdminSidebar = ({ setToggle }: Props) => {
  return (
    <StyledSidebar
            initial={{
              x: '-100%'
            }}
            animate={{
              x: 0
            }}
            exit={{
              x: '-100%'
            }}>
            <StyledNav>
              {/* cheap, cheap, cheap, cheap, cheap... ... ... */}
              <div className='x' onClick={() =>setToggle(true)}>
                x
            </div>
        <ul>

          <motion.li >
            <Link to='/admin' className='link' onClick={()=>setToggle(true)}>
              zurück
            </Link>
          </motion.li>
       
          <li>
            <Link to='/admin/creators' className='link' onClick={()=>setToggle(true)}>
              Creators
            </Link>
          </li>
          <li>
            <Link to="/admin/businesses" className='link' onClick={() => setToggle(true)}>
              Unternehmen
            </Link>
          </li>
          <li>
            <Link to="/admin/campaigns" className='link' onClick={() => setToggle(true)}>
              Kampagnen
            </Link>
          </li>
        </ul>
      </StyledNav>
    </StyledSidebar>
  )
}

export default AdminSidebar