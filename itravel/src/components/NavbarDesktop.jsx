export default function NavbarDesktop() {
  return (
    <>
      <nav className=' fixed  top-3 left-4 right-4 mb-4'>
        <div className='navbar  bg-base-100/90 shadow-md  rounded-2xl'>
          <div className='flex-1'>
            <a className='btn btn-ghost text-xl' href='/'>
              ITravel
            </a>
          </div>
          <div className='flex-3 gap-2'>
            <input
              type='text'
              placeholder='Cerca'
              className='input input-bordered w-80'
            />
          </div>
          <div className=' gap-2'>
            <div className='dropdown dropdown-end'>
              <div
                tabIndex={0}
                role='button'
                className='btn btn-ghost btn-circle avatar'
              >
                <div className='w-10 rounded-full'>
                  <img
                    alt='Tailwind CSS Navbar component'
                    src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'
              >
                <li>
                  <a>
                    <i class='fa-solid fa-user'></i> Profilo
                  </a>
                </li>
                <li>
                  <a href='/viaggi'>
                    <i class='fa-solid fa-road'></i> I miei Viaggi
                  </a>
                </li>
                <li>
                  <a>
                    <i class='fa-solid fa-gear'></i> impostazioni
                  </a>
                </li>
                <li>
                  <a>
                    <i class='fa-solid fa-door-open'></i> Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
