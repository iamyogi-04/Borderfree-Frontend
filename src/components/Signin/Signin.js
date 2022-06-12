import React, { useState } from 'react'
import "./signin.css"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Signin = () => {
    window.history.forward();
    function noBack() {
        window.history.forward();
    }
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: '',
        password: '',
      });
    const handleonchnage = (e)=>{
        const {name, value} = e.target.value
        console.log(e.target.value)
        setUser({...user, [name]: value})
    }
    const getUser = async (token) => {
        const response = await fetch('http://localhost:5000/api/v1/getuser', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": token,
            },
            body: JSON.stringify()
        })
        const data = await response.json()
        console.log(data)
        navigate("/mainpage")
    }
    const loginUser = async (e) => {
        e.preventDefault();

        // const data = {
        //     email: user.email,
        //     password: user.password,
        //   };
      
          try {
            const jsonResponse = await fetch('http://localhost:5000/api/v1/signin', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({...user}),
            });
            const response = await jsonResponse.json();
            localStorage.setItem('token', response.authtoken);
            const token = localStorage.getItem("token")
            getUser(token)
          } catch (error) {
            console.log(error);
          }

    }

    return (
        <>
            <div className="container-fluid signin " onLoad={noBack()}>
                <div className="container">
                    <div className="d-flex justify-content-center signup">
                        <form className="d-flex flex-column mb-4 " >
                            <div class="col-md-20">
                                <label htmlFor="inputEmail4" className="form-label">Email</label>
                                <input type="email" className="form-control" id="inputEmail4"
                                    name='email'
                                    onChange={handleonchnage}
                                />
                            </div>
                            <div className="col-md-20">
                                <label for="inputPassword4" className="form-label">Password</label>
                                <input type="password" className="form-control" id="inputPassword4"
                                    name='password'
                                    onChange={handleonchnage}
                                />
                            </div>
                            <div cclassName="col-12 mt-4">
                                <button type="submit" onClick={loginUser} className="btn btn-dark my-2">Sign in</button>
                            </div>
                            <div className="col">
                                <span>New user?</span>
                                <Link to="/register"><button type='register' className='btn btn-secondary mx-5'>Register</button></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin