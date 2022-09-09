import React from 'react'

class GirisYap extends React.Component  {
 
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
   
  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
   
    var result = Object.fromEntries(data);
    var request = JSON.stringify(result);

    fetch("https://testapi.kidokit.com/api/account/login", {
      method: "POST",
      body: request,
      headers: {'Content-Type': 'application/json'}
     
     
    });
  }
  render() {
  return (
    <div>
      <div className="container-giris-yap">
      <h1 className='header-giris-yap'>Giriş Yap</h1>
      <form onSubmit={this.handleSubmit} className='form-giris'>
      <span className="form-title">E-posta adresinizi yazınız</span> 
      <input type="email" name="username" required />
      <span className="form-title">Şifrenizi Giriniz</span> 
      <input type="password" name="password"  required />
      <a href='/SifremiUnuttum'>Şifremi unuttum</a>
      <button className='btn-giris-yap'>Giriş Yap</button>
      </form>
      </div>
    </div>
 
  )
  }
}
export default GirisYap;
