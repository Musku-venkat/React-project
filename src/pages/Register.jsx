import { Link } from 'react-router-dom';

function Register(){
    return(
        <>
            <div className="d-flex justify-content-center align-items-center">
                <form className="shadow-lg rounded-4 p-5 text-center ">
                    <h2 className='mb-4'>Sign Up</h2>
                    <div className="form-floating mb-4">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required/>
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-4">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required/>
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <button className='btn btn-primary mb-4 px-4 py-2'>Sign Up</button>
                    <p>Already have an account? <Link to={'/login'}> Log In</Link></p>
                </form>
            </div>
        </>
    )
}

export default Register;