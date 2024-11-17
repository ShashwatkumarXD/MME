// import React from 'react';
// import useLogout from "../../hooks/useLogout";

// const Logout = () => {
//   const { loading, logout } = useLogout();

//   return (
//     <a>
//       {!loading ? (
//         <span className='cursor-pointer' onClick={logout}>Logout</span>
//       ) : (
//         <span className='loading loading-spinner'></span>
//       )}
//     </a>
//   );
// }

// export default Logout;

import React from 'react';
import useLogout from "../../hooks/useLogout";

const Logout = () => {
  const { loading, logout } = useLogout();

  return (
    <span className='cursor-pointer' onClick={logout}>
      {loading ? (
        <span className='loading loading-spinner'></span>
      ) : (
        "Logout"
      )}
    </span>
  );
};

export default Logout;

