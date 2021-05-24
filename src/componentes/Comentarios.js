import React from 'react'

import {Button,Row,Container,Col,Form,Navbar,Table} from 'react-bootstrap';

function Comentarios()  {

    const [tasks, setTasks] = React.useState([]);
    const [newTask, setnewTask]= React.useState('');
  

    React.useEffect(() => {
        const readTasks = () => {
            if (localStorage.getItem('tasks')) {
                setTasks(JSON.parse(localStorage.getItem('tasks')))
            }
        }

       readTasks()
        
    }, []);

    const onCreate = () => {
        tasks.push(newTask)
        localStorage.setItem('tasks', JSON.stringify(tasks))
        setnewTask('')
    };

    function onDelete (task){
        let index = tasks.indexOf(task);
        tasks.splice(index,1)
        localStorage.setItem('tasks',JSON.stringify(tasks))
        setnewTask('')
        setTasks(JSON.parse(localStorage.getItem('tasks')))
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
                        <Form.Control as="textarea" autoComplete="off" value={newTask} onChange={e => setnewTask(e.target.value)} rows={3} />
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
                            {tasks.map(task => (
                                <tr key={task }>
                                    <td>{task}</td>
                                    <td></td>
                                    <td width="50px"><Button variant="danger" onClick={() => onDelete(task)}>❌</Button></td>
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