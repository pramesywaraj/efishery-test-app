import { Outlet } from 'react-router-dom';
import Navbar from '@components/Navbar';

const ScreenLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default ScreenLayout;
