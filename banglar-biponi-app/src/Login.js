import React,{useState} from 'react';
import { Link,useHistory } from 'react-router-dom';
import './Login.css'
import {auth} from "./firebase";
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const Login = () => {
    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const signIn = e=>{
        e.preventDefault()
        //firebase
        auth.signInWithEmailAndPassword(email,password).then(auth=>{
            history.push('/')
        })
        .catch(error=> alert(error.message))
    }
    const register = e=>{
        e.preventDefault()
        //firebase
        auth.createUserWithEmailAndPassword(email,password).then((auth) => {
            console.log(auth);
            if(auth){
                history.push('/')
            }
        })
        .catch(error => alert(error.message))

    }
    return <div className="login">
        <Link to= '/'>
        <img 
        className="login__logo"
        src='https://spng.pngfind.com/pngs/s/404-4040022_demo-team-png-logo-demo-transparent-png.png' />
        </Link>
        <div className="login__container">
            <h1>Sign-in</h1>
            <form>
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} ></input>
                <h5>Password</h5>
                <input type="password" value={password} onChange={e=>setPassword(e.target.value)}></input>
                <button type='submit' onClick={signIn} className='login__signinBtn'>Sign In</button>
                <p className='login__registerText'>Don't Have an Account?</p>
                <button onClick={register} className='login__registerBtn'>Create Account</button>
            </form>
        </div>
    </div>;
}

Login.propTypes = propTypes;
Login.defaultProps = defaultProps;
// #endregion

export default Login;