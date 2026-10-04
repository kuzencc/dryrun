import {Link, useNavigate} from 'react-router-dom'
import {useState} from 'react'

export default function Register(){
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()

  const register = async () =>{
    if(!email || !username || !password ){
      setErrorMessage('Please Fill in all Fields')
      return
    }

    if(password !== confirmPassword){
      setErrorMessage('Password does not match')
    }
    navigate('/Home')
  }

  return(
    <div className='Register-Card'>
      <div className='Register-Content'>
        <h1 className='Register-Title'>Register</h1>
      </div>
      <div className='Register-Form'>
        <label for="Email" className='form-label'>Email</label>
        <input type='Email' id='Email' placeholder='Enter your Email' onChange={(e) => setEmail(e.target.value)}></input>
        <label for="Username" className='form-label'>Username</label>
        <input type="Username" id='Username' placeholder='Enter your Username' onChange={(e) => setUsername(e.target.value)}></input>
        <label for="CrPass" className='form-label'>Password</label>
        <input type="password" id="CrPass" placeholder='Create your password' onChange={(e) => setPassword(e.target.value)}></input>
        <label for="CoPass" className='form-label'>Confirm Password</label>
        <input type="password" id="CoPass" placeholder='Confirm your password' onChange={(e) => setConfirmPassword(e.target.value)}></input>
      </div>
      <button type='submit' onClick={register}>Register</button>
      {errorMessage && <p className='error-message'>{errorMessage}</p>}
      <div className='Login-'>
        <Link to='/login'>Login <Here></Here></Link>
      </div>
    </div>
  )
}