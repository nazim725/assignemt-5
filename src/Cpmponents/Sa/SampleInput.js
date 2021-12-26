import { useState } from 'react';
import './SampleInput.css'

const SimpleInput = (props) => {
  const [name, setName] = useState('');
  const [touchedName, setTouchedName] = useState(false);

  const [email, setEmail] = useState('');
  const [touchedEmail, setTouchedEmail] = useState(false);

  const isNameValid = name.trim() !== '';
  const isNameInvalid = !isNameValid && touchedName;

  const isEmailValid =email.trim()  !== '' && email.includes('@');
  const isEmailInvalid = !isEmailValid && touchedEmail;

  let success = false;

  if (isNameValid && isEmailValid) {
    success = true;
  }

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNameBlur = () => {
    setTouchedName(true);
  };

  const handleEmailBlur = () => {
    setTouchedEmail(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTouchedName(true);

    if (!isNameValid) {
      return;
    }

   

  
    setName('');
    setTouchedName(false);

    setEmail('');
    setTouchedEmail(false);
  };

  const nameClasses = isNameInvalid
    ? 'form-control invalid'
    : 'form-control';

  const emailClasses = isEmailInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form  onSubmit={handleSubmit}>
      <div className={nameClasses}>
        <label>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={handleNameChange}
          onBlur={handleNameBlur}
          value={name}
        />
        {isNameInvalid && (
          <p className='error-text'>Name must not be empty.</p>
        )}
      </div>
      <div className={emailClasses}>
        <label htmlFor='email'>Your E-Mail</label>
        <input
          type='email'
          id='email'
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          value={email}
          required
        />
        {isEmailInvalid && (
          <p className='error-text'>Please enter a valid email.</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!success}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;