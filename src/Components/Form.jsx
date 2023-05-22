
import eyeHidden from '../assets/icons/Eye-Hidden.svg'


function LoginSection() {
    return (
        <div className="signin-form">
            <h2>Sign in</h2>
            <br />
            <p className="form-para">
                Welcome Back!
                <span className="span1">
                    Sign In and enjoy zero service charge on all
                </span>
                your transactions.
            </p>
            <form>
                <input type="text" placeholder="Enter your email" />
                <input type="password" placeholder="Enter your password" />
                <img className="eye-icon" src={eyeHidden} alt="password hide icon" />
                <p className="password">
                    Forgot your password? <span className="span2">Reset</span>
                </p>
                <button className="signin-btn">Sign in</button>
            </form>
        </div>
    );
}


export default LoginSection;