import React ,{useState} from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './register.css'
import { useNavigate  } from 'react-router-dom'


const Register=()=>{

    const navigate = useNavigate()
    const [user, setUser] = useState({
        name: "",lastname:"",email: "",phone: "", password:""
    })
    let name,value;
    const handleInput=(e)=>{
        name = e.target.name;
        value = e.target.value;
        setUser({...user,[name]:value})
    }
    const postData =async(e)=> {
        e.preventDefault();
        const {name,lastname,email,phone,password}=user

        const response =await fetch("http://localhost:5000/api/v1/register",{
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({
                name,lastname,email,phone,password}
            )
        })
        const data = await response.json()

        if(data.status===422 ||!data){
            window.alert('Invalid Registration')
            console.log("invalid registration")
        }
        else{
            window.alert('Registration sucessfull')
            console.log("registration sucessfull")
            navigate("/")
        }



    }   

    return (
        <>
        <Header/>
            <div classname="d-flex flex-column register">
                <form className="d-flex flex-column mb-3 reg">
                    <div className="col-md-2">
                        <label htmlFor="inputname" className="form-label">Name</label>
                        <input type="text" className='form-control' id='inputname' name='name'
                            autoComplete='off'
                            value={user.name}
                            onChange={handleInput}
                          required />
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="inputname" className="form-label">Last Name</label>
                        <input type="text" className='form-control' id='inputname' name='lastname'
                            autoComplete='off'
                            value={user.lastname}
                            onChange={handleInput}
                          required />
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="inputEmail4" class="form-label">Email</label>
                        <input type="email" class="form-control" id="inputEmail4" name='email'
                            autoComplete='off'  
                            value={user.email}
                            onChange={handleInput}
                          required/>
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="inputphone" className="form-label">Phone</label>
                        <input type="text" className='form-control' id='inputphone' name='phone'
                        autoComplete='off'
                        value={user.phone}
                        onChange={handleInput}
                          required />
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="inputPassword4" classname="form-label">Password</label>
                        <input type="password" className="form-control" id="inputPassword4" name='password'
                            autoComplete='off'
                            value={user.password}
                            onChange={handleInput}
                         required/>
                    </div>
                   
                    <div className="col-12 md-2">
                        <div className="form-check my-2">
                            <input className="form-check-input " type="checkbox" id="gridCheck"  required/>
                                <label className="form-check-label" htmlFor="gridCheck">
                                I agree to Terms & Conditions 
                                </label>
                        </div>
                    </div>
                    <div classname="col-12 md-2 registerbutton">
                        <button type="registerbutton" className="btn btn-dark my-2" onClick={postData}>Register</button>
                    </div>
                </form>
            </div>
            <Footer/>

        </>
    )
}

export default Register