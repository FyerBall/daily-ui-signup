import { Modal } from '@material-ui/core';
import React from 'react';
import { FaFacebookF, FaApple, FaGoogle, FaEnvelope } from 'react-icons/fa';
import { makeStyles } from '@material-ui/core/styles';
import SignupForm from './SignupForm';

export default function Signup() {
  const [open, setOpen] = React.useState(false);
  const [modalStyle] = React.useState(getModalStyle);
  function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 370,
      backgroundColor: '#5BC0BE',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      borderRadius: 50,
      border: 'none',
      outline: 'none',
    },
  }));
  const classes = useStyles();
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    // -[x] form
    // -[x] title
    // -[x] Option to sign in
    // -[x] social media log in options
    // -[x] or email and pass

    <div className='signup'>
      <header>
        {/* Title */}
        <h2 className='title'>Sign up</h2>
        <small className='small'>
          Already have an account?
          <a href='/'> Sign in</a>
        </small>
      </header>
      <div className='icons'>
        {/* 
             Font awesome pixel sizes relative to the multiplier. 
             1x - 14px
             2x - 28px 
             3x - 42px 
             4x - 56px 
             5x - 70px */}
        <div className='icon'>
          <FaApple size={14} />
          <span>Sign up with Apple</span>
        </div>

        <div className='icon'>
          <FaGoogle size={14} />
          <span>Sign up with Google</span>
        </div>

        <div className='icon'>
          <FaFacebookF size={14} />
          <span>Sign up with Facebook</span>
        </div>
      </div>

      <div className='divider'>
        <small className='dividerText'>or</small>
      </div>

      {/*Modal  */}
      <div className='icon' onClick={handleOpen}>
        <FaEnvelope size={14} />
        <span>Sign up with email</span>
      </div>

      <Modal open={open} onClose={handleClose}>
        <div style={modalStyle} className={classes.paper}>
          <SignupForm />
        </div>
      </Modal>
    </div>
  );
}
