import Formulario from "../components/Formulario"


export const ContactoPage = () => {
  return (
    <div>



<div className="contenedor-modal2">

<div className="modal-difuminado2">
  <p className="parrafo-home" >
    
¡Hola y bienvenido! <br/>

Estoy emocionado de que hayas llegado a mi espacio digital. Si tienes alguna pregunta, comentario o proyecto en mente, no dudes en ponerte en contacto conmigo. Estoy aquí para escucharte y colaborar contigo en lo que necesites.

Puedes enviarme un mensaje directamente a través del formulario a continuación, o también puedes contactarme por correo electrónico. Si prefieres las redes sociales, estoy activo en:
</p>
<div className="redes-contacto">

<a aria-label="GitHub" href="https://github.com/GonzaSotelo"><img alt="GitHub" className="contacto-git" src="./../../img/git.png"/>
</a>

<a aria-label="Linkedin" href="https://www.linkedin.com/in/gonzasotelo/"><img alt="Gran-lider" className="contacto-git" src="./../../img/linkedin.png"/>
</a>
</div>


<p className="parrafo-home" >
¡Prometo responder rápidamente y estoy ansioso de conocer más sobre tus ideas y cómo puedo contribuir a tu éxito!
</p>

<h2 className="h2-contacto" >Email : sotelogonzalodamian@gmail.com</h2>



<p className="parrafo-home">
¡Gracias por visitar y espero tener noticias tuyas pronto!
</p>

 
  <div className="contacto-celular">
  <h2 className="h2-contacto" >Celular : 11 2408-1298</h2>
<a aria-label="Chat on WhatsApp" href="https://wa.me/541124081298"><img alt="Chat on WhatsApp" src="./../../img/WhatsAppButtonGreenSmall.svg"/>
</a>
  </div>




</div>
<div className="formulario-contacto">
  <h2 className="h2-contacto" >
    o completa este formulario...
  </h2>
  <div className="formulario">
  <Formulario/>
  </div>
 
</div>
</div>

    </div>
  )
}
