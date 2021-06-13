import {React,event} from 'react';
import MaterialTable from 'material-table';
import {Row,Col} from 'react-bootstrap';
import {AnimatePresence, motion} from "framer-motion";


export default function ProjectTable() {
    const data=[
        {"Employee ID":631719,"Employee Name": "Prashant Sengar","Project Name" : "SAP-Hybris", "Business Group": "DS-Retail","vcores" : 0.2, "additional" : "common-email-alert, Cloudhub"},
        {"Employee ID":631719,"Employee Name": "Prashant Sengar","Project Name" : "Canada Loyalty", "Business Group": "P&T","vcores" : 0.6,"additional" : "common-aggr-email-alert, RTF"},
        {"Employee ID":631719,"Employee Name": "Prashant Sengar","Project Name" : "Lorem Ipsum", "Business Group": "DS-TS","vcores" : 0.1,"additional" : "cip-forwarder"}
        ];
        const columns=[
            {
                title:'Employee ID',field:'Employee ID'
            },
            {
                title:'Employee Name', field:'Employee Name'
            },
            {
                title:'Project Name',field:'Project Name'
            },
            {
                title:'Business Group',field: 'Business Group'
            },
            {
                title:'Vcores',field: 'vcores'
            },
            {
                title:'Additional Tags',field: 'additional'
            }

        ];
    return (
        <motion.div
        initial = {{opacity:0,x:"-100vh"}}
        animate={{opacity:1,x:"0"}}
        exit={{opacity:0,x:"-100vh"}}>
        <Row>
        <Col>
        
            <br/><br/><br/><br/>
            <MaterialTable
            title="Integration Projects" 
            data={data}
            columns={columns}
            options={{exportButton: true}}
            actions={[{
                icon: 'delete',
                tooltip: 'Delete User',
                onClick: (event, rowData) => window.confirm("You want to delete " + rowData.name)
            }]}
            />
        </Col>
        </Row>
        </motion.div>
    )
}
