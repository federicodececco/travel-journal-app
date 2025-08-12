import { Outlet } from 'react-router';
import { useBreakpoint } from '../hooks/useScreenSize';
import SidebarDesktop from '../components/SidebarDesktop';
import DockBar from '../components/DockBar';

export default function TravelDetailLayout() {
  const { isMobile } = useBreakpoint();
  if (isMobile) {
    return (
      <>
        <Outlet></Outlet>
        <DockBar></DockBar>
      </>
    );
  }
  return (
    <>
      <SidebarDesktop></SidebarDesktop>
      <Outlet></Outlet>
    </>
  );
}
