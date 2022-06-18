function signUpForm(){
  return `<div class="container">
  <div id="form_container">
  <div class="cross_btn">
  <img src="./close_FILL0_wght300_GRAD0_opsz40.png" alt="">
      </div>
  <div id="login_form">
    <h1>Sign up or Sign in</h1>
    <p>
      Enjoy the convenience of a single account across all participating
      brands
    </p>
    <form>
      <label for="number"> Mobile Number </label>
      <span>
        <span>+91</span>
        <input
          type="number"
          name="number"
          id="number"
          placeholder="Enter your mobile number"
        />
      </span>

      <p>
        By creating your account you agree to our
        <span>Terms and Conditions</span>
      </p>
      <div class="cont_btn">
        <input type="submit" value="CONTINUE" />
      </div>
    </form>
  </div>
</div>
</div>`
}
function otpForm(){
return ` <div id="otpForm " >
<div class="container">
    <div id="form_container">
        <div class="cross_btn">
            <img src="./close_FILL0_wght300_GRAD0_opsz40.png" alt="">
        </div>
        <div id="login_form">
            <h1>Sign up or Sign in</h1>
            <p>
                Enjoy the convenience of a single account across all participating
                brands
            </p>
            <h3>Verify with OTP</h3>
            <p class="mobile_number">sent to +91<span id="mobile_number">8744067661</span><span id="change">change?</span> </p>
            <div class="otpContainer">
            <form id="verifyOtpForm">
              <input type="text" class="pass" name="" id="" maxlength="1">
              <input type="text" class="pass" name="" id="" maxlength="1">
              <input type="text" class="pass" name="" id="" maxlength="1">
              <input type="text" class="pass" name="" id="" maxlength="1">
              <input type="text" class="pass" name="" id="otpLast" maxlength="1">
              <input type="submit" value="submit" id="checkOtp">
           </form>
                
            </div>
            <p class="time">We've sent your code . Try again in <span id="time">time</span></p>
            
        </div>
    </div>
</div>
</div>`
}
function emailForm(){
return `<div id="emailForm " ">
<div class="container">
    <div id="form_container">
    <div class="cross_btn">
        <p>skip</p>
        </div>
    <div id="login_form">
      <h1>Link your account</h1>
      <p>
        Existing User please login to your account to link your account to your phone number. it's one life time process.
      </p>
      <form id="userEmail">
        <input type="text" placeholder="Your Email" id="email">
        <div id="email_btn">
            <input type="submit" value="PROCEED" id="">
        </div>
      </form>
    </div>
  </div>
  </div>
</div> `
}
function nameForm(){
return `<div id="userDataForm " >

<div class="container">
    <div id="form_container">
    <div class="cross_btn">
    <img src="./close_FILL0_wght300_GRAD0_opsz40.png" alt="">
        </div>
    <div id="login_form">
      <h1>How do we address you?</h1>
      <div class="names">
        <input id="fName" type="text" placeholder="First  Name">
        <input id="lName" type="text" placeholder="Last  Name">
    </div>
    <div id="checkbox">
       <input type="checkbox" >
        <label >Enroll me for Landmark Rewards
        </label> 
    </div>
      
      <form>
        <p>
            By creating your account you agree to our
            <span>Terms and Conditions</span>
          </p>
      </form>
      <div id="userButtons">
        <button class="goBack">GO BACK</button>
        <button class="next"> CONTINUE</button>
      </div>

    </div>
  </div>
  </div>

</div> `
}
export { signUpForm,otpForm,emailForm,nameForm};