import { Link } from "react-router-dom"

const Error = () => {
  return (
    <main>
      <h2>Error</h2>
      <p>Ha ocurrido un error inesperado</p>
      <Link to="/home">Volver a la página principal</Link>
    </main>
  )
}

export default Error