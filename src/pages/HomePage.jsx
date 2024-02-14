
import { Header } from "../components/Header";
import Logo from "../components/Logo"


export const HomePage = () => {
    return (

        <>
    <Header/>
        


        <div className="contenedor-modal">

<div className="modal-difuminado">
<Logo/>
<p className="parrafo-modal-home">
<b>Desarrollador Web Full Stack</b>  con entusiasmo por especializarme en el frontend. Apasionado por crear experiencias visuales impactantes, 
estoy comprometido a seguir aprendiendo y creciendo en el mundo del diseño y desarrollo de interfaces de usuario</p>

</div>
<img className="img-modal-home" src="./../../img/home-gif.gif" alt="" />
</div>

        </>





    )
}
export default HomePage;