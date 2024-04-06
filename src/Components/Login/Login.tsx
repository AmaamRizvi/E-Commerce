import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useMediaQuery } from '@react-hook/media-query';

export default function Login() {
  const navigate = useNavigate();
  const [buttonText, setButtonText] = useState('Sign Up');
  //phone number-->emailField
  const [emailField, setEmailField] = useState(true);
  const [userEmail, setUserEmail] = useState('');

  const phoneNoInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const isSmallScreen = useMediaQuery('(max-width: 768px)');


//emailField replaced with phone Number but variable name not changed
const inputField = () => {
  if (emailField) {
    const userEmailValue = userEmail || (phoneNoInputRef.current && phoneNoInputRef.current.value);

    if ((userEmailValue?.length === 10)) {
      setEmailField(false);
      // setOtpField(true);
    } else {
      toast.error('Invalid Contact Details');
    }
    setButtonText('Sign In');
    const userDetails = {
      phoneno: userEmail,
    };

    localStorage.setItem('userDetails', JSON.stringify(userDetails));
    navigate('/Home');
  }
};
  return (
    <>
      <ToastContainer />
      <div
        style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#2874f0',
        }}
      >
        <div
          className='login-container'
          style={{
            display: 'flex',
            backgroundColor: '#fff',
            flexDirection: isSmallScreen ? 'column' : 'row',
          }}
        >
          {!isSmallScreen && (
            <div
              className='login-img'
              style={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#2C3E50',
                color: '#fff',
                padding: '30px',
                width: '330px',
              }}
            >
              <span
                style={{
                  marginBottom: '18px',
                  fontWeight: 'bold',
                  fontSize: '25px',
                }}
              >
                Sign up
              </span>
              <span>
                Get access to your Orders, Wishlist and Recommendations
              </span>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <img
                  src='
                  https://www.bingocycles.com/images/login_img.png'
                  alt='login-img'
                  style={{
                    width: '70%',
                    marginTop: '100px',
                  }}
                />
              </div>
            </div>)}
          {isSmallScreen && (
            <img src=" https://media.licdn.com/dms/image/D4D12AQFvqALoStLQaQ/article-cover_image-shrink_600_2000/0/1698387745891?e=2147483647&v=beta&t=tapWtPz-xt1XKfDtep0mksFHkqzz8E1tclvsnjGSWwU" alt="gif-login"
              style={{
                width: '380px'
              }}
            />
          )}
          <form action="get">
            <div
              className='login-form'
              style={{
                width: '380px',
                padding: '20px',
              }}
            >
              {emailField && (
                <div className='form-floating mb-3' style={{ marginTop: '20px' }}>
                  <input
                    type='number'
                    className='form-control'
                    id='floatingInput'
                    autoComplete='off'
                    
                    ref={phoneNoInputRef}
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                  />
                  <label htmlFor='floatingInput'>
                     Enter 1234567890
                  </label>
                </div>
              )}
              {emailField && (
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" checked disabled />

                  <span style={{
                    fontSize: '12px',
                  }}>
                    By continuing, you agree to Flipkart's Terms of Use and Privacy
                    Policy.
                  </span>
                </div>

              )}
              <div
                className='d-grid gap-2 mb-3'
                style={{ marginTop: '10px' }}
              >
                <button
                  className='btn '
                  type='button'
                  style={{
                    backgroundColor: '#fb641b',
                    color: '#fff',
                    padding: '10px 30px',
                  }}
                  onClick={inputField}
                >
                  {buttonText}
                </button>
                {emailField&&(
                <span style={{fontSize:'small',textAlign:'center'}}>Already have an account? <span style={{color:'#2874f0',fontWeight:'bold',cursor:'pointer'}}>Log in</span></span>
                )}
               
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
