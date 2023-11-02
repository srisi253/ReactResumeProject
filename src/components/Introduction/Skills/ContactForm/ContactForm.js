import { useRef, useState } from 'react';
import classes from './ContactForm.module.css';

const ContactForm = (props) => {
  const [formInputValidity, setFormInputsValidity] = useState({
    name: true,
    email: true,
    message: true,
  });
  const [isMessageSent, setIsMessageSent] = useState(false);

  const isEmpty = (value) => value.trim() === '';

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const messageInputRef = useRef();

  const confirmHandler = async (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredMessage = messageInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredEmailIsValid =
      !isEmpty(enteredEmail) &&
      enteredEmail.includes('@') &&
      enteredEmail.includes('.com');
    const enteredMessageIsValid = !isEmpty(enteredMessage);

    setFormInputsValidity({
      name: enteredNameIsValid,
      email: enteredEmailIsValid,
      message: enteredMessageIsValid,
    });

    const formIsValid =
      enteredNameIsValid && enteredEmailIsValid && enteredMessageIsValid;

    if (formIsValid) {
      try {
        const response = await fetch(
          'https://reactcv10-default-rtdb.firebaseio.com/message.json', //1 mes de periodo de prueba base de datos
          {
            method: 'POST',
            body: JSON.stringify({
              user: {
                name: enteredName,
                email: enteredEmail,
                message: enteredMessage,
              },
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        if (response.ok) {
          setIsMessageSent(true);
          nameInputRef.current.value = '';
          emailInputRef.current.value = '';
          messageInputRef.current.value = '';

          setTimeout(() => {
            setIsMessageSent(false);
          }, 2000);
        } else {
          setIsMessageSent(false);
        }
      } catch (error) {
        console.error('Error sending data:', error);
        setIsMessageSent(false);
      }
    }
  };

  const nameControlClasses = `${classes.control} ${
    formInputValidity.name ? '' : classes.invalid
  }`;
  const emailControlClasses = `${classes.control} ${
    formInputValidity.email ? '' : classes.invalid
  }`;
  const messageControlClasses = `${classes.control} ${
    formInputValidity.message ? '' : classes.invalid
  }`;

  return (
    <>
      <form onSubmit={confirmHandler}>
        <h2 className={classes.title}> Contact Me! (It really works) ✍🏼</h2>

        <div className={nameControlClasses}>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" name="name" ref={nameInputRef} />
          {!formInputValidity.name && (
            <p className={classes.errorMessage}>Invalid name!</p>
          )}
        </div>

        <div className={emailControlClasses}>
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" name="email" ref={emailInputRef} />
          {!formInputValidity.email && (
            <p className={classes.errorMessage}>Invalid email!</p>
          )}
        </div>

        <div className={messageControlClasses}>
          <label htmlFor="message">Message: </label>
          <textarea id="message" name="message" ref={messageInputRef}></textarea>
          {!formInputValidity.message && (
            <p className={classes.errorMessage}>Message required!</p>
          )}
        </div>

        <div className={classes.buttonContainer}>
          <button type="submit">Submit</button>
          {isMessageSent && (
            <p className={classes.successMessage}>Message sent!</p>
          )}
        </div>
      </form>
    </>
  );
};

export default ContactForm;
