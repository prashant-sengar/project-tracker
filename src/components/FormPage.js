import {React,useState} from 'react';
import "bootstrap/dist/css/bootstrap.css"
import {Row,Col,Button} from 'react-bootstrap';
import shellmain from './shell-main.jpg';
import {Form} from 'react-bootstrap';
import {AnimatePresence, motion} from "framer-motion";


function FormPage() {
    return (<motion.div
             initial = {{opacity:0,x:"-100vh"}}
             animate={{opacity:1,x:"0"}}
             exit={{opacity:0,x:"-100vh"}}   
            
            >
        <br/><br/><br/>
        <Row>
            <Col>
            <Form style={{width:"80%", marginLeft : "10%"}}>
                <Form.Group>
                <Form.Label>Employee ID</Form.Label>
                <Form.Control placeholder="Enter your Employee ID"/>
                </Form.Group>
                <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control placeholder="Enter your Name"/>
                </Form.Group>
                <Form.Group>
                <Form.Label>Project Name</Form.Label>
                <Form.Control placeholder="Enter the Project Name"/>
                </Form.Group>
                <Form.Group>
                <Form.Label>Business Group</Form.Label>
                <Form.Control placeholder="Enter the Project Business Group"/>
                </Form.Group>
                <Form.Group>
                <Form.Label>Vcores Needed</Form.Label>
                <Form.Control type="Decimal" placeholder="Enter total Vcores required"/>
                </Form.Group>
                <Form.Group>
                <Form.Label>Additional Tags</Form.Label>
                <Form.Control type="Decimal" placeholder="Enter additional information"/>
                </Form.Group>
                
                <br/>
                <Button type="submit" variant="primary" style={{width: "80px"}}>Submit</Button>
                <Button type="reset" variant="primary" style={{marginLeft:"8%",width: "80px"}}>Reset</Button>
            </Form>
            </Col>
            <Col>
            <img src={shellmain} alt="Shell Petrol Bunk"
            style={{border:"none",height:"400",width:"400",boxShadow: "-20px 20px 20px rgba(0,0,0,0.3)" }}/>
            </Col>
        </Row>
        <br/><br/><br/>
        </motion.div>
    );
}

export default FormPage;