import { Link, useNavigate } from 'react-router-dom';
import style from './Auth.module.css';
import { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';

export function Login() {
    const ctx = useContext(UserContext);

    const navigate = useNavigate();
    const [formErr, setFormErr] = useState('');
    const [email, setEmail] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [pass, setPass] = useState('');
    const [passErr, setPassErr] = useState('');

    function isValidEmail(e) {
        const { value } = e.target;
        const minSize = 6;

        if (value.length < minSize) {
            return setEmailErr(`Email per trumpas. Minimum ${minSize} simboliu.`);
        }
        return setEmailErr('');
    }

    function isValidPass(e) {
        const { value } = e.target;
        const minSize = 6;

        if (value.length < minSize) {
            return setPassErr(`Pass per trumpas. Minimum ${minSize} simboliu.`);
        }
        return setPassErr('');
    }

    function handleSubmit(e) {
        e.preventDefault();

        fetch('http://localhost:3001/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({
                email,
                password: pass,
            }),
        }).then(res => res.json())
            .then(data => {
                if (data.status === 'err') {
                    setFormErr(data.msg);
                }
                if (data.status === 'ok') {
                    ctx.loginUser();
                    navigate('/dashboard');
                }
            })
            .catch(err => console.error(err));
    }

    return (
        <div className={`form-signin w-100 m-auto ${style.formSignin}`}>
            <form onSubmit={handleSubmit}>
                <h1 className="h1 mb-3 fw-normal">Please sign in</h1>

                {
                    formErr && (
                        <div className="alert alert-danger alert-dismissible fade show" role="alert">
                            {formErr}
                            <button onClick={() => setFormErr('')} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    )
                }

                <div className="form-floating mb-3">
                    <input onChange={e => setEmail(e.target.value)} onBlur={isValidEmail}
                        type="email" id="email" value={email}
                        className={`form-control ${emailErr ? 'is-invalid' : ''}`} />
                    <label htmlFor="email">Email address</label>
                    <div className="invalid-feedback">{emailErr}</div>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={e => setPass(e.target.value)} onBlur={isValidPass}
                        type="password" id="password" value={pass}
                        className={`form-control ${passErr ? 'is-invalid' : ''}`} />
                    <label htmlFor="password">Password</label>
                    <div className="invalid-feedback">{passErr}</div>
                </div>

                <div className="form-check text-start my-3">
                    <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Remember me
                    </label>
                </div>
                <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
                <p className="my-3 text-center text-body-secondary">or</p>
                <Link to='/register' className="btn btn-outline-primary w-100 py-2">Sign up</Link>
            </form>
        </div>
    );
}
