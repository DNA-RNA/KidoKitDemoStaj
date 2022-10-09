import {React,useState} from 'react'
import uyari from '../images/sifre-unuttum-uyari.png';
import success from '../images/sifre-unuttum-success.png';
import PopUp from '../pages/PopUp'

export default function SifreUnuttum() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [popUp,setPopUp] = useState(false);
 
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://testapi.kidokit.com/api/account/forgetPassword", {
        method: "POST",
        body: JSON.stringify({
          email: email
         
        }),
        headers: {'Content-Type': 'application/json'}
      });
      
      if (res.status === 200) {
        setEmail("");  
        setMessage("Şifrenizi sıfırlamak için gerekli bağlantı " + email + " mailinize gönderildi");
              
      } else {
        setMessage("E-posta adresinize 'Şifre Sıfırlama' maili gönderilemedi!");
      }
    } catch (err) {
      setMessage("bir hata oluştu");
    }
  };
  return (
    <div>
      <div className="container-sifre-unuttum">
        <h1 className="header-sifre-unuttum">Şifre Sıfırlama</h1>
        <form className='form-sifre-unuttum' onSubmit={handleSubmit}>
        <span className="form-title-sifre">Şifrenizi sıfırlamak için daha önce KidoKit'e üye </span> 
        <span className="form-title-sifre"> olduğunuz e-posta adresini yazınız </span> 
        <input className='form-input' type="text" value={email} placeholder=" E-posta adresini giriniz" onChange={(e) => setEmail(e.target.value)}/>
         <button className='e-posta-btn' onClick={()=> setPopUp(true)} type="submit">E-posta gönder</button>
       
       
         <PopUp trigger={popUp} setTrigger={setPopUp}>
        
        
        {message!=="E-posta adresinize 'Şifre Sıfırlama' maili gönderilemedi!" ? <div> <img  src={success} alt="success"/> <h1>E-postanızı kontrol ediniz </h1>   </div>: null }
         {message==="E-posta adresinize 'Şifre Sıfırlama' maili gönderilemedi!" ? <div><img src={uyari} alt="warning" /> <p>Hata</p></div>   : null }
      
         {message ?  <p>{message}</p>  : null}
         </PopUp>
         
        </form>
         </div>
    </div>
  )
}
