import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

function SignupForm() {
  // -[x] Sign up button
  // -[] Functioning form
  // -[] Form validation
  // -[] Alert "Thank you for signing up!"
  const [text, setText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text);
    setIsSubmitting(true);
    setText('');
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e) => {
    setText({ ...text, [e.target.name]: e.target.value });
  };
  return (
    <>
      {isSubmitting ? (
        <p>Loading...</p>
      ) : (
        <form
          className='signupForm'
          onSubmit={handleSubmit}
          noValidate
          autoComplete='off'
        >
          <TextField
            onChange={handleChange}
            type='text'
            name='fName'
            id='standard-basic'
            label='First Name'
            required
            className='testing'
          />
          <TextField
            onChange={handleChange}
            name='lName'
            id='standard-basic'
            label='Last Name'
            required
            type='text'
          />
          <TextField
            onChange={handleChange}
            name='email'
            id='standard-basic'
            label='Email'
            required
            type='email'
          />
          <TextField
            onChange={handleChange}
            name='phone'
            id='standard-basic'
            label='Phone'
            required
            type='text'
            helperText=' We’ll call or text you to confirm your appointment. Standard message
          and data rates apply.'
          />

          <TextField
            onChange={handleChange}
            name='password'
            id='standard-basic'
            label='Password'
            required
            type='password'
          />
          <TextField
            onChange={handleChange}
            name='password'
            id='standard-basic'
            label='Confirm Password'
            required
            type='password'
          />

          <Button
            className='btn'
            variant='outlined'
            color='primary'
            type='submit'
          >
            sign up
          </Button>
          <small className='small'>
            Already have an account? <a href='/'> Sign in</a>{' '}
          </small>
        </form>
      )}
    </>
  );
}

export default SignupForm;
