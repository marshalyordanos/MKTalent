/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react'
import axios from 'axios'
import {
    Spinner,Button, Modal, ModalHeader, ModalBody
  } from 'reactstrap';
import { Container } from 'reactstrap';
import {  Form, FormGroup, Label, Input, Table} from 'reactstrap';
import {connect} from 'react-redux'


class CrudJob extends Component {
    
    render(){
    return (
        <div>
       <Container>
        <button type="button" onClick="{this.toggle}" className="btn btn-primary" data-toggle="modal" style={{ marginLeft : '30px', marginTop : '10px', marginBottom : '10px' }}>
        <i className="fa fa-plus-square"> Add Data</i>
        </button>

    
      <Modal isOpen="{this.state.isOpen}" toggle="{this.toggle}" className="">
        <ModalHeader toggle="{this.toggle}">ADD JOB</ModalHeader>
        <ModalBody>
        <br></br>
        <Form id="register" method="post" onSubmit ="{this.handleSubmit}">
    <FormGroup>
        <Label for="name">Job title</Label>
        <Input type="text" name="name" id="name" onChange="{this.handlenameChange}" placeholder="Enter job title" required/>
      </FormGroup>
      <FormGroup>
        <Label for="description">Description</Label>
        <Input type="textarea" name="description" id="description" onChange="{this.handleDescriptionChange} "placeholder="Enter your job description" required/>
      </FormGroup>
      <FormGroup>
        <Label for="id_category">Select Category</Label>
        <Input type="select" name="id_category" id="id_category" onChange="{this.handleCategoryChange}">
        <option>FULL TIME</option>  
        <option>PART TIME</option>  
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="salary">Salary</Label>
        <Input type="number" name="salary" id="salary" onChange="{this.handleSalaryChange}" placeholder="Enter your salary" required/>
      </FormGroup>
      <FormGroup>
        <Label for="location">Location</Label>
        <Input type="text" name="location" id="location" onChange="{this.handleLocationChange}" placeholder="Enter your salary" required/>
      </FormGroup>
      <FormGroup>
        
        {/* {this.props.company.data.map( (item,index) =>
          <option key={index.toString()} value={item.id}>{item.name}</option>
        )} */}
   
      </FormGroup>
      <Button className='button_login bg-success'>Submit</Button>
    </Form>
        </ModalBody>
      </Modal>

        
{/* 
      {
        this.props.job.isLoading&&(
        <div><Spinner style={{ width: '3rem', height: '3rem' }} type="grow" /></div>
      )} */}
{/* 
    {!this.props.job.isLoading&&
    <React.Fragment>   
    
    {this.props.job.data.map((v,i)=>(  
    <div className="row no-gutters shadow-lg p-3 mb-5 bg-white rounded" key={i.toString()} >
    <div className="col-md-4">
      <img  src={v.logo} className="card-img App-img" alt={v.name} width="120px" height="160px"/>
    </div>
    
      <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title" >{v.name}</h5>
        <p className="card-text"><small className="text-muted">{v.company}</small> | <small className="text-muted">Rp.{v.salary}</small> | <small className="text-muted">{v.location}</small></p>
        <p className="card-text">{v.description}</p>
        <p className="card-text"><small className="text-muted">{v.date_updated}</small></p>
        <Button className="card-text bg-success"  onClick={() => this.toggleupdate(v)}><i className="fa fa-edit"> Update </i></Button>
        <Button className="card-text bg-danger"style={{ marginLeft : '10px' }} onClick={()=> this.deleteData(v.id)}><i className="fa fa-trash"> Delete </i></Button>
      </div>
    </div>

   </div> 
  ))}
  </React.Fragment>

} */}


{/* <nav aria-label="Page navigation example">
    <ul className="pagination justify-content-center">
    {
        this.state.previous === ' ' ? null :
        <li className="page-item">
         <a className="page-link" onClick={()=>this.buttonPress(this.state.previous)} tabindex="-1" aria-disabled="false">Previous</a>
        </li>
      }  
        <li className="page-item">
        {
        this.state.next === ' ' ? null :<a className="page-link" onClick={()=>this.buttonPress(this.state.next)} tabindex="-1">Next</a>
        }</li>
    </ul>
</nav> */}
</Container>
 </div>
)}
}

const mapStateProps = state => ({
  job : state.job,
  company : state.company,
  category : state.categories
})

export default connect(mapStateProps)(CrudJob)