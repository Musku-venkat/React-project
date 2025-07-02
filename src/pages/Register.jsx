import { Link } from 'react-router-dom';

function Register(){
    return(
        <>
            <form className="shadow rounded-2 p-2 text-center">
                <h2 className='m-4'>Sign Up</h2>
                <div className="form-floating mb-2">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-4">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <button className='btn btn-primary mb-4 px-4 py-2'>Sign Up</button>
                <p>Already have an account? <Link to={'/login'}> Log In</Link></p>
            </form>
        </>
    )
}

export default Register;