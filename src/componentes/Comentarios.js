import React from 'react'

import {Button,Row,Container,Col,Form,Navbar,Table} from 'react-bootstrap';

function Comentarios()  {

    const [coments, setComents] = React.useState([]);
    const [newComent, setnewComent]= React.useState('');
  

    React.useEffect(() => {
        const readComents = () => {
            if (localStorage.getItem('coments')) {
                setComents(JSON.parse(localStorage.getItem('coments')))
            }
        }

       readComents()
        
    }, []);

    const onCreate = () => {
        coments.push(newComent)
        localStorage.setItem('coments', JSON.stringify(coments))
        setnewComent('')
    };

    function onDelete (coment){
        let index = coments.indexOf(coment);
        coments.splice(index,1)
        localStorage.setItem('coments',JSON.stringify(coments))
        setnewComent('')
        setComents(JSON.parse(localStorage.getItem('coments')))
    }




    
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    Caja de comentarios
                </Navbar.Brand>
            </Navbar>
            <br/>
            <Container>
                <Row>
                    <Col>
                    <h3>Agrega un Comentario</h3>
                    <Form>
                    <Form.Group controlId="exampleForm.ControlTextarea1">                       
                        <Form.Control as="textarea" autoComplete="off" value={newComent} onChange={e => setnewComent(e.target.value)} rows={3} />
                    </Form.Group>
                       
                        <Button variant="primary" onClick={onCreate}>Crear Comentario</Button>
                    </Form>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Comentarios</th>
                                <th></th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {coments.map(coment => (
                                <tr key={coment }>
                                    <td>{coment}</td>
                                    <td></td>
                                    <td width="50px"><Button variant="danger" onClick={() => onDelete(coment)}>❌</Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    </Col>
                </Row>
            </Container>
            
        </div>
    );
}

export default Comentarios;