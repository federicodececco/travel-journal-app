import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function DockBar() {
  const [isActive, setActive] = useState(1);
  const navigate = useNavigate();
  return (
    <>
      <div className='dock dock-medium z-100'>
        <button
          className={isActive == 0 && 'dock-active'}
          onClick={() => setActive(0)}
        >
          <i class='fa-solid fa-magnifying-glass'></i>
        </button>

        <button
          className={isActive == 1 && 'dock-active'}
          onClick={() => {
            setActive(1);
            navigate('/');
          }}
        >
          <i class='fa-solid fa-house'></i>
        </button>

        <button
          className={isActive == 2 && 'dock-active'}
          onClick={() => {
            setActive(2);
            navigate('/travel');
          }}
        >
          <i class='fa-solid fa-road'></i>
        </button>
      </div>
    </>
  );
}
