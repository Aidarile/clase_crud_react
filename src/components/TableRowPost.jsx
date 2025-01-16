/* eslint-disable react/prop-types */

import { useState } from "react";

// los componentes en React deben empezar en mayusculas
// los argumentos de los componentes en React se declaran dentro de { }

// CON ESTE ARCHIVO CREAMOS LAS FILAS QUE SE VAN A MOSTRAR EN LA TABLA:

const TableRowPost = ({postProp, editar}) => {
    const [editMode, setEditMode] = useState (false);
    /*Variable de estado la cual va a permitir la modificación. 
    Su estado inicial debe ser el objeto de post para poder mostrar 
    la informacion del post en los Inputs: */
    const [postEdit, setPostEdit] = useState (postProp);

    const changeEdit = () => {
        setEditMode(!editMode)
    };

    const handleIdUsuarioChange = (e) => {
        setPostEdit({...postEdit, idUsuario: e.target.value})
    };

    const handleTituloChange = (e) => {
        setPostEdit({...postEdit, titulo: e.target.value})
    };

    const handleContenidoChange = (e) => {
        setPostEdit({...postEdit, contenido: e.target.value})
    };

    const handleConfirmarClick = () => {
        editar(postEdit);
        changeEdit();
    };

    const handleCancelarClick = () => {
        changeEdit();
        setPostEdit(postProp);

    };

    

    if (editMode) {
        return (
            <tr> 
                <td> 
                    <input type="number" value={postEdit.idUsuario} onChange={handleIdUsuarioChange}/> 
                </td>
                <td>
                    <input type="text" value={postEdit.titulo} onChange={handleTituloChange}/>
                </td>
                <td>
                    <input type="text" value={postEdit.contenido} onChange={handleContenidoChange}/>
                </td>
                <td className="iconos">
                <button onClick={handleConfirmarClick}>
                    <img src='/src/assets/confirm-icon.svg'/>
                </button>
                <button onClick={changeEdit}>
                    <img src='/src/assets/cancel-icon.svg'/>
                </button>
                </td>
            </tr>
        )
    }


    return(
        <tr>
            <td> {postProp.idUsuario} </td>
            <td> {postProp.titulo} </td>
            <td> {postProp.contenido} </td>
            <td className="iconos">
                <button onClick={changeEdit}>
                    <img src='/src/assets/edit-icon.svg'/>
                </button>
                <button>
                    <img src='/src/assets/delete-icon.svg'/>
                </button>
            </td>
        </tr>
    );
};

export default TableRowPost;