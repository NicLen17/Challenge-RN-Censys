import { useEffect, useState } from 'react';
import axios from 'axios';
import { Form, Button, InputGroup } from 'react-bootstrap';
import './Styles/Form.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const Formulario = ({ onSubmit, setCiudad }) => {

    return (
        <Form className="Form-container" onSubmit={onSubmit}>
            <InputGroup className="mb-4">
                <Form.Control
                    className="Form-input mt-1"
                    placeholder="Ingrese para consultar el clima..."
                    onChange={(e) => setCiudad(e.target.value)}
                />
                <Form.Group className="selectsa">
                    <select className="Form-select mt-1" aria-label="Default select example"
                        name="categoria" onChange={(e) => setCiudad(e.target.value)} required>
                        <option style={{ fontWeight: 'bold' }} defaultValue >O seleccione alguna</option>
                        <option style={{ fontWeight: 'bold' }} value="Tucuman">Tucuman</option>
                        <option style={{ fontWeight: 'bold' }} value="La plata">La plata</option>
                        <option style={{ fontWeight: 'bold' }} value="Mendoza">Mendoza</option>
                        <option style={{ fontWeight: 'bold' }} value="Santiago del estero">Santiago del estero</option>
                        <option style={{ fontWeight: 'bold' }} value="Salta">Salta</option>
                    </select>
                </Form.Group>
                <Button type="submit" className="Boton-busqueda mt-1">
                    Buscar
                </Button>
            </InputGroup>
        </Form>
    )
}

export default Formulario;