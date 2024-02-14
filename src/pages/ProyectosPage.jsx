import { CardsProyectos } from "../components/Cards";
import { Header } from "../components/Header";





export const ProyectosPage = () => {
  return (
    <>
    <Header/>
     <div className="contenedor-modal4">

<div className="modal-difuminado4">

<h2 className="h2-proyectos" > Mis Proyectos</h2>

<div className="fila-1">
<CardsProyectos/>
   
</div>

</div>
</div>
    </>
  )
}
export default ProyectosPage;