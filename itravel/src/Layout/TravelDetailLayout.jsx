import { Outlet } from 'react-router';
import { useBreakpoint } from '../hooks/useScreenSize';

export default function TravelDetailLayout() {
  const { isMobile } = useBreakpoint();
  if (isMobile) {
    return (
      <>
        <Outlet></Outlet>
      </>
    );
  }
  return (
    <>
      <Outlet></Outlet>
    </>
  );
}
