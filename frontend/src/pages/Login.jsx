import {useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'

export default function Login(){
  const [Email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()

  const login = async () => {
    if(!Email || !password){
      setErrorMessage('Please Fill in All forms')
      return
    }
    navigate('/Home')
  }

  return (
    <div className='Login-Card'>
      <div className='Login-Content'>
        <h1 className='Login-Title'>
          Login
        </h1>
        <div className='Login-Form'>
          <label for='Email' className='form-label'>Email</label>
          <input type='Email' id='Email' placeholder='Enter your Email' onChange={(e) => setEmail(e.target.value)}></input>
          <label for='Password' className='form-label'>Password</label>
          <input type='Password' id='Password' placeholder='Enter your Password' onChange={(e)=>setPassword(e.target.value)}></input>
        </div>
        <div className='Submit-button'>
          <button type="submit" onClick={login}>Log in</button>
          {errorMessage && <p className='error-message'>{errorMessage}</p>}
        </div>
        <div className='Create-Account'>
          <Link to="/register">Create Account</Link>
        </div>
      </div>
    </div>
  )
}