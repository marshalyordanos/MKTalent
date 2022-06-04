/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component,useState} from 'react'
import axios from 'axios'
import {
    Spinner,Button, Modal, ModalHeader, ModalBody
  } from 'reactstrap';
import { Container } from 'reactstrap';
import {  Form, FormGroup, Label, Input, Table} from 'reactstrap';
import {connect} from 'react-redux'
import './crudjob.css'
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../redux/authReducer";
import { useNavigate } from "react-router-dom"
import api from "../api/api";
import { ToastContainer, toast } from "react-toastify";
import { getAllJobPost } from "../redux/jobpostReducer";

  const CrudJob=()=>{

  
      const navigate = useNavigate();
      const dispatch = useDispatch();
      const userData = useSelector((state) => state.userAuth.data);
      
  const { loading, error, data } = useSelector((state) => state.userAuth);
      const [value, setValue] = useState({
        jobtitle: "",
        jobdesc: "",
        jobtype: "",
        salary: "",
        location: "",
        responsibilities: "",
        requirements: "",
      });
      const toastOption = {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
     
        // progress: undefined
      };
      const onChangeHandler = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
      };
        const onFinish = (values) => {
      console.log(values);
    };
      const handleValidation = async (e) => {
        e.preventDefault();
        const { jobtitle,
        jobdesc,
        jobtype,
        salary,
        location,
        responsibilities,
        requirements, } = value;
        if (!jobtitle) {
          toast.error("Please provide your username", toastOption);
        } else if (!jobdesc) {
          toast.error("Please provide your emal", toastOption);
        } else if (!jobtype) {
          toast.error("Please provide your gender", toastOption);
        } else if (!salary) {
          toast.error("Please provide your password", toastOption);
        } 
        else if (!responsibilities) {
          toast.error("Please provide your password", toastOption);
        } 
        else if (!requirements) {
          toast.error("Please provide your password", toastOption);
        } 
        else if (!location) {
          toast.error(
            "Your password and confirm password is not match",
            toastOption
          );
        } else {
          try {   
            dispatch(register({ loading: true }));
            if (data.data.role == "company") {
             
         
            api.post("/job/createjob", value, {
              headers: {
                "Access-Control-Allow-Origin": true,
                authorization: `Bearer ${userData.token}`,
              },
            }
          
            );
            navigate('/companylayout')
           
            
          } else{
             dispatch(register({ data: data, loading: false }));
             console.log("you are not logged in as a company ")
          }
   
       
          } catch (err) {
            dispatch(
              register({
                error: err.response && err.response.data.message,
                loading: false,
              })
            );
          }
        }
      };
    return (
        <div>
       <Container className='container_job'>
       <br></br>     <br></br>
        <h1>ADD JOB</h1>     
        <br></br>
        <Form id="register" method="post" onSubmit ={onFinish}>
    <FormGroup>
        <Label for="name">Job title</Label>
        <Input type="text" name="jobtitle" id="jobtitle"  value={value.jobtitle} onChange={(e) => onChangeHandler(e)} placeholder="Enter job title" required/>
      </FormGroup>
      <FormGroup>
        <Label for="description">Description</Label>
        <Input type="textarea" name="jobdesc" id="jobdesc"  value={value.jobdesc} onChange={(e) => onChangeHandler(e)} placeholder="Enter job description" required/>
      </FormGroup>
      <FormGroup>
        <Label for="id_category">Select Category</Label>
        <Input type="select" name="jobtype" id="jobtype"  value={value.jobtype} onChange={(e) => onChangeHandler(e)}>
        <option>FULL TIME</option>  
        <option>PART TIME</option>  
        <option>REMOTE</option>  
        <option>CONTRACTUAL</option>  
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="salary">Salary</Label>
        <Input type="text" name="salary" id="salary"  value={value.salary} onChange={(e) => onChangeHandler(e)} placeholder="Enter Salary" required/>
      </FormGroup>
      <FormGroup>
        <Label for="location">Location</Label>
        <Input type="text" name="location" id="location"  value={value.location} onChange={(e) => onChangeHandler(e)} placeholder="Enter Location" required/>
      </FormGroup>
      <FormGroup>
        <Label for="salary">Resposibilities</Label>
        <Input type="text" name="responsibilities" id="responsibilities"  value={value.responsibilities} onChange={(e) => onChangeHandler(e)} placeholder="Enter Responsibilities" required/>
      </FormGroup>
      <FormGroup>
        <Label for="salary">Requirements</Label>
        <Input type="text" name="requirements" id="requirements"  value={value.requirements} onChange={(e) => onChangeHandler(e)} placeholder="Enter Requirements" required/>
      </FormGroup>
      <Button className='button_login bg-success' type='submit'
      
      onClick={handleValidation}
      
      
      >Submit</Button>
    </Form>
</Container>
<ToastContainer />
 </div>
)
}



export default  CrudJob