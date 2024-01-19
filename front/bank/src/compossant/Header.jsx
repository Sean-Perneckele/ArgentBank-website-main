
import '../designs/css/main.css'
 import { Link } from 'react-router-dom';
 import logo from '../designs/img/argentBankLogo.png'
 import { useSelector, useDispatch } from 'react-redux'; // Importer useSelector
 import { logout } from '../pages/singIn/Sing-inSlice';
import { noName}  from '../pages/user/userSlice';

function Header() {

  // Utiliser useSelector pour accéder à l'état du reducer auth
  const authState = useSelector((state) => state.auth);
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Dispatch l'action de déconnexion lorsque le lien est cliqué
    dispatch(logout());
    dispatch(noName())
  };


  return (
  <header>

    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className='main-nav-logo-image'
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      
      {authState.isAuthenticated ? (
          // Si l'utilisateur est authentifié
          <div>
            <Link className="main-nav-item" to="/user">
              <i className="fa fa-user-circle"></i>
                 {userData.firstName}  {userData.lastName} {/* Afficher le nom de l'utilisateur, ajustez selon vos besoins */}
            </Link>
            <Link className="main-nav-item" to="/"  onClick={handleLogout}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </Link>
          </div>
        ) : (
          // Si l'utilisateur n'est pas authentifié
          <div>
            <Link className="main-nav-item" to='/singIn'>
              <i className="fa fa-user-circle"></i>
              <span>  Sign In  </span>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header
