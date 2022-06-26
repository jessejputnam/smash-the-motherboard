import "../styles/NavPanel.css";

const ErrNavPanel = () => {
  return (
    <div className='ErrNavPanel'>
      <p>Error: improper user-type for NavPanel</p>
    </div>
  );
};

const CreatorNavPanel = () => {
  return <div className='CreatorNavPanel'></div>;
};

const PatronNavPanel = () => {
  return (
    <div className='PatronNavPanel'>
      <ul>
        <li>
          <a href='hello'>Account</a>
        </li>
        <li>
          <a href='hello'>Home</a>
        </li>
        <li>
          <a href='hello'>Search</a>
        </li>
        <li>
          <a href='hello'>Settings</a>
        </li>
      </ul>
    </div>
  );
};
// const PatronNavPanel = () => {
//   return (
//     <div className='PatronNavPanel'>
//       <div className='panel__nav'>
//         <button type='button' className='btn--nav-panel'>
//           Account
//         </button>
//       </div>
//       <div className='panel__nav'>
//         <button type='button' className='btn--nav-panel'>
//           Search
//         </button>
//       </div>
//       <div className='panel__nav'>
//         <button type='button' className='btn--nav-panel'>
//           Subs
//         </button>
//       </div>
//       <div className='panel__nav'>
//         <button type='button' className='btn--nav-panel'>
//           Settings
//         </button>
//       </div>
//     </div>
//   );
// };

const NavPanel = (props) => {
  const userType = props.userType;

  let panel;

  if (userType === "patron") panel = <PatronNavPanel />;
  else if (userType === "creator") panel = <CreatorNavPanel />;
  else panel = <ErrNavPanel />;

  return <div className='NavPanel'>{panel}</div>;
};

export default NavPanel;
