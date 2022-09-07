import React from 'react';
import logo from '../images/logo.png';
import {useNavigate} from 'react-router-dom';


export default function AnaSayfa() {
  const navigate = useNavigate();
  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
    <section className='Body'> 
    <h3> Hoş geldiniz !</h3>
    <br />
    <p>Çocuğunuzu büyütürken artık yalnız değilsiniz!</p>
    <p>Hemen kayıt olup Günlük Plan'a erişinn</p>   
    </section>

    <section className='Button'>
        <button type="button" onClick={() =>{
          navigate('/kayitol')
        }}>Kayıt Ol</button>
   </section>
   <p className='p-giris'> Zaten bir hesabınız var mı? <a href='/girisyap' className='giris-link'>Giriş Yap</a> </p>
    
  </div>
  )
}
