import { useRouter } from 'next/navigation';
import loginStyles from '@/styles/Login.module.css'
import { useState } from 'react';


export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    {(password==111 && username==111) && router.push("/home")}
    
  };

    
  return (
    
    <div className={loginStyles.loginPage}>
      
      <form onSubmit={handleSubmit} className={loginStyles.loginForm}>
      <h1 className={loginStyles.loginHeading}>Login </h1>
        <div className={loginStyles.formGroup}>
          
          <input type="text" id="username" value={username}  placeholder='Username' onChange={handleUsernameChange} className={loginStyles.formInput} />
        </div><br />
        <div className={loginStyles.formGroup}>
          <input type="password" id="password" value={password} placeholder='Password' onChange={handlePasswordChange} className={loginStyles.formInput} />
        </div><br />
        <button type="submit" className={loginStyles.loginButton}>login</button>
      </form>
    </div>
  );
}

