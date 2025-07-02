import { Link } from 'react-router-dom';

function Login(){
    return(
        <>
            <form className="shadow p-2 rounded-2 text-center">
                <h2 className='m-4'>Log In</h2>
                <div className="form-floating mb-2">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-4">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <button className='btn btn-primary mb-4 px-4 py-2'>Log In</button>
                <p>Don't have an account?  <Link to={'/register'}>Sign Up</Link></p>
            </form>
        </>
    )
}

export default Login;