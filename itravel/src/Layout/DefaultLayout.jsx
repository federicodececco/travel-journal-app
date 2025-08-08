import { useState } from 'react';
import { Outlet } from 'react-router';
import {
  useScreenSize,
  useIsMobile,
  useIsDesktop,
  useBreakpoint,
} from '../hooks/useScreenSize';

import DockBar from '../components/DockBar';
import NavbarDesktop from '../components/NavbarDesktop';

export default function DefaultLayout() {
  const { isMobile, isTablet, isDesktop } = useBreakpoint();

  if (isMobile) {
    return (
      <>
        <Outlet />
        <DockBar></DockBar>
      </>
    );
  }
  if (isTablet) {
    return <div>ciao</div>;
  }
  return (
    <>
      <div className='relative'>
        <div className='mt-24'>
          <Outlet></Outlet>
        </div>
        <NavbarDesktop></NavbarDesktop>
      </div>
    </>
  );
}
