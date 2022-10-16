import {React , useState}  from 'react'

function SifreSifirlama() {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [activationLink,setActivationLink] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://testapi.kidokit.com/api/account/activateForgetPassword", {
        method: "POST",
        body: JSON.stringify({
          password: password,
          activationLink: activationLink
         
        }),
        headers: {'Content-Type': 'application/json'}
      });
      
      if (res.status === 200) {
        setPassword("");
        
        setMessage("Şifrenizi sıfırlamak için gerekli bağlantı  mailinize gönderildi");
              
      } else {
        setMessage("E-posta adresinize 'Şifre Sıfırlama' maili gönderilemedi!");
      }
    } catch (err) {
      setMessage("bir hata oluştu");
    }
  };
  return (
    <div> 
     <div className="container-sifre-sifirlama">
     <h1 className="header-sifre-sifirlama">Şifre Sıfırlama</h1>
     <form className='form-sifre-sifirlama'   onSubmit={handleSubmit}>
        <span className="form-title-sifre">Lütfen yeni şifrenizi belirleyiniz </span>  
        <input className='form-input' type="password" value={password} placeholder="şifre" required onChange={(e) => setPassword(e.target.value)}/>
        <span className="form-title-sifre">Lütfen yeni şifrenizi doğrulayınız </span>  
        <input className='form-input' type="password"  placeholder="şifre tekrar" required/>  
        <span className="form-title-sifre">Activation Linkini giriniz </span>  
        <input className='form-input' type="text" onChange={(e) => setActivationLink(e.target.value)} />  
         <button className='e-posta-btn' type="submit">Şifre Sıfırlama</button>
         {message ?  <p>{message}</p>  : null}

       
       
        </form>
    
     </div>
      
     </div>
  )
}

export default SifreSifirlama