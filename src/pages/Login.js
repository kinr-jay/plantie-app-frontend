import {Link} from "react-router-dom"
const Login = () => {

    return (
      <div className="login-page">
        <img
          className="logo"
          src="https://res.cloudinary.com/kinr-jay/image/upload/v1621966095/GA/plantie%20app/plantie-icon-vector_bjdb6k.svg"
          alt="plantie logo"
        />
        <h1>plantie</h1>
        <p>Welcome! We will help you to take care of your plants!</p>
        <Link to="/signup">
        <button className="sign-up">Sign up</button>
        </Link>
        <Link to="/signin">
        <button className="log-in">Log in</button>
        </Link>
        {/* <p>or use</p>
        <button className="third-party-auth"></button>
        <button className="third-party-auth"></button> */}
      </div>
    )
}

export default Login