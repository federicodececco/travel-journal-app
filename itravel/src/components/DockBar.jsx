import { useState } from 'react';

export default function DockBar() {
  const [isActive, setActive] = useState(1);
  return (
    <>
      <div
        className='dock dock-medium
      '
      >
        <button
          className={isActive == 0 && 'dock-active'}
          onClick={() => setActive(0)}
        >
          <i class='fa-solid fa-magnifying-glass'></i>
        </button>

        <button
          className={isActive == 1 && 'dock-active'}
          onClick={() => setActive(1)}
        >
          <i class='fa-solid fa-house'></i>
        </button>

        <button
          className={isActive == 2 && 'dock-active'}
          onClick={() => setActive(2)}
        >
          <i class='fa-solid fa-user'></i>
        </button>
      </div>
    </>
  );
}
