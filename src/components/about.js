import React from 'react';
import aboutShell from './aboutShell.jpg';
import {Card,ListGroup,ListGroupItem} from 'react-bootstrap'; 
import {AnimatePresence, motion} from "framer-motion";
function about(){
    return <motion.div
             initial = {{opacity:0,x:"-100vh"}}
             animate={{opacity:1,x:"0"}}
             exit={{opacity:0,x:"-100vh"}}   
            
            >
        <Card style={{ width: '24rem',margin: "auto",marginTop:"5%",boxShadow: "-20px 20px 20px rgba(0,0,0,0.3)"}}>
  <Card.Img variant="top" src={aboutShell} />
  <Card.Body>
    <Card.Title>Vcores Tracker</Card.Title>
    <Card.Text>
      A simple and efficient tool to track projects and resources utilized across the Shell ITY-Group
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Add New Projects</ListGroupItem>
    <ListGroupItem>Track Projects</ListGroupItem>
    <ListGroupItem>Filter Projects</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="https://rtf01-dev-ipaaslb.shell.com/mule-advanced-application-v1/login">No free Vcores? Click here</Card.Link>
  </Card.Body>
</Card>
    </motion.div>
}



export default about