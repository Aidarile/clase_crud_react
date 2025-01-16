/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import Post from './models/Post';
import TableRowPost from './components/TableRowPost';

function App() {
 
  const [listaPosts, setListaPost] = useState([]);
  const [createPost, setCreatePost] = useState(new Post);

  // funciones de los hanble
  const handleTituloChange = (e) => {
    /**Cambiamos el valor de createPost e introducimos un nuevo objeto
     * el cual tiene la información anterior de createPost, pero cambiando
     * el valor de titulo.
     * Para coger la información que había en createPost sin tener que
     * escribir cada uno de sus parametros, utilizamos el spread operator (...)
     * para que copie sus datos:*/
    setCreatePost({...createPost, titulo: e.target.value})
  }

  const handleContenidoChange = (e) => {
    setCreatePost({...createPost, contenido: e.target.value})    
  }

  const handleUsuarioChange = (e) => {
    setCreatePost({...createPost, idUsuario: e.target.value})
  }

  const handleAgregarClick = () => {
    const newPost = new Post(
    crypto.randomUUID(), 
    createPost.titulo, 
    createPost.contenido, 
    createPost.idUsuario
  );
  setListaPost([...listaPosts, newPost])
  };

  const handleEditarClick = (post) => {
    setListaPost(listaPosts.map((p) => {
      /* Si el id del post iterado es igual que el post que pasamos como parametro,
      devolvemos el post pasado como parametro: */
      if (p.id === post.id) {
        return post;
      } else {
        /* Si el id del post iterado no es igual al post que pasamos como parametro,
        devolvemos el post iterado: */
        return p;
      }
    }));
};


  return (
    <>
      <div className='contenedor_header'>
        <h1>CRUD REACT</h1>
      </div>
      <div className='contenedor_inputs'>
        <p>Titulo</p>
        <input type='text' onChange={handleTituloChange}/>
        <p>Contenido</p>
        <input type='text' onChange={handleContenidoChange}/>
        <p>ID Usuario</p>
        <input type='number' onChange={handleUsuarioChange}/>
        <button onClick={handleAgregarClick}>AGREGAR</button>
      </div>

      {/* contenedor donde vamos a mostrar los datos */}

      <div className='contenedor_lista'>
        <table>
          <thead>
            <tr>
              <th>Usuario</th>
              <th>Titulo</th>
              <th>Contenido</th>

              {/* botones de editar y eliminar: */}

              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* lista donde poder renderizar: */}
            {listaPosts.map((p) => (
              <TableRowPost key = {p.id} postProp = {p} editar = {handleEditarClick}/>

            ))}

          </tbody>
        </table>
      </div>
      
    </>
  )
}

export default App;
