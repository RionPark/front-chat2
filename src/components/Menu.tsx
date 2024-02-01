import { Link } from "react-router-dom"

export const Menu = ()=>{
    return (<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link className="nav-link" to={'/sign-in'}>
          SignIn
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={'/sign-up'}>
          SignUp
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={'/main'}>
          채팅
        </Link>
      </li>
    </ul>
  </div>)
}