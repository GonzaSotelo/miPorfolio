import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Formulario = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9425fyu', 'template_5zufahy', form.current, {
        publicKey: '6YD6xJABYsGImcnen',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <form className='formulario-c' ref={form} onSubmit={sendEmail}>
      <label>Nombre</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Mensaje</label>
      <textarea name="message" />
      <input className='enviar' type="submit" value="Enviar" />
    </form>
  )
}
export default Formulario;