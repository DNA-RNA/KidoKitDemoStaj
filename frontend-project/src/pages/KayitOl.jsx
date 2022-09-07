import React from "react";
import vektor from '../images/Vector.png';
import sifreVector from '../images/sifre-vektor.png';
import sifreVisibleVector from '../images/sifre-vektor-visible.png';


class KayitOl extends React.Component {
 
  state = {
    isShown : false,
    password:"",
    passwordLenght : false,
    containsNumbers : false,
    isUpperCase: false,
    containsSymbols : false
  }
  checkForUpperCase = (string) =>{
   var matches = string.match(/[A-Z]/);
   this.setState({
    isUpperCase : matches != null ? true : false
   });
  }
  checkForNumbers = (string) =>{
    var matches = string.match(/\d+/g);
    this.setState({
      containsNumbers : matches != null ? true : false
    })
  }
  togglePassword  =() =>{
    const {isShown} = this.state;
    this.setState({isShown : !isShown});
  }
  handleChange = () => e =>{
    let targetValue = e.target.value
    this.checkForNumbers(targetValue);
    this.checkForUpperCase(targetValue);
   
    this.setState({
      passwordLenght: targetValue.lenght > 7 && targetValue.lenght < 30 ? true : false
    })
  }
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
 
  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
   
    var result = Object.fromEntries(data);
    if(result.childGender==="on"){
      result.childGender = 0;
    }
    if(result.childGender ==="off"){
      result.childGender =1;
    }
    var request = JSON.stringify(result);

    fetch("https://testapi.kidokit.com/api/account/v2/register", {
      method: "POST",
      body: request,
      headers: {'Content-Type': 'application/json'}
     

    });
  }
  render() {
    const {isShown} = this.state;
    let {passwordLenght, containsNumbers,checkForUpperCase} = this.state;
    return (
      <div className="body">
 <div className="container">
        <div className="title">Kayıt Olun</div>
        <form onSubmit={this.handleSubmit} className="form">
       <div className="details">
       <div  className="form-box">
      <span className="description">Adınız ve Soyadınız</span> 
      <input type="text" name="fullName" placeholder="Adınız ve soyadınız" required />
      </div>
      <div className="form-box">
      <span className="description">E-posta adresinizi yazınız</span> 
      <input type="text" name="email"  placeholder="Mail adresini giriniz"  required/>
     
 
      </div>
      <div className="form-box form-box-password">
      <span className="description">Bir şifre belirleyiniz</span>
      <img className="password-vector-1" src={ isShown ?  sifreVisibleVector : sifreVector } alt="sifre-vector"  onClick={this.togglePassword}/>  
      <input onChange ={this.handleChange("password")} type={(isShown) ? "text" : "password"} name="password"  placeholder="Sifre giriniz"   required/>
      <div className="password-warning">
        <div className={passwordLenght ? "green" : null}>8 ila 30 karakterden oluşmalı</div>
        <div className={containsNumbers ? "green" : "red"}>En az bir tane rakam bulunmalı</div>
        <div  className={checkForUpperCase ? "green" : "red"}>En az bir tane özel karakter bulunmalı</div>
        <div>En az bir tane büyük harf bulunmalı</div>

      </div>
      
      </div>
      <div className="form-box form-box-password">
      <span className="description">Bir şifre belirleyiniz</span>
      <img className="password-vector-2"  src={ isShown ?  sifreVisibleVector : sifreVector } alt="sifre-vector" onClick={this.togglePassword}/> 
      <input type={(isShown) ? "text" : "password"}  name="password"  placeholder="Sifre giriniz"  required />
      <div className="password-warning">
        <div className={passwordLenght ? "green" : "red"}>8 ila 30 karakterden oluşmalı</div>
        <div className={containsNumbers ? "green" : "red"}>En az bir tane rakam bulunmalı</div>
        <div  className={checkForUpperCase ? "green" : "red"}>En az bir tane özel karakter bulunmalı</div>
        <div>En az bir tane büyük harf bulunmalı</div>

      </div>
      </div>
      <div className="form-box">
      <span className="description">Çocuğun ismi?</span> 
      <input type="text" name="childName" placeholder="Çocuğun İsmi"  required />
      </div>
      <div className="form-box">
      <span className="description">Çocuğun Doğum tarihi?</span> 
      <input type="date" name="childBirthday"  placeholder="Çocuğun doğum tarihini giriniz"  required />
      </div>
      <div className="form-box">
      <input type="radio" name="childGender" id="radio-one" />
      <input type="radio" name="childGender" id="radio-two" />
      <span className="description">Çocuğunuzun Cinsiyet?</span> 
      <div className="category">
        <label htmlFor="radio-one">
          <span className="gender-1 radio-1" name="childGender">Erkek</span>
        </label>
        <label htmlFor="radio-two">
          <span className="gender-2 radio-2" name="childGender">Kız</span>
        </label>
      </div>
      </div>
      <div className="form-box">
      <img src={vektor} className="warning-vector" alt="vektor" />
      <span className="warning-text">  Kayıt sonrası yeni çocuk kayıtları oluşturabilirsiniz</span>
      </div>
       </div>
      
       <div className="contract"> 
          <input className="contract-checkbox" type="checkbox" onChange={this.handleChangeChk} />
          <p>  <b>Kullanım Koşullarını ve Gizlilik Sözleşmesini </b>okudum,kabul ediyorum.</p>
       </div>
           <div className="button">
            <button className="btn">Kayıt Ol</button>
          </div>
      </form>
      </div>

      </div>
     
      
    );
  }
}

export default KayitOl;
