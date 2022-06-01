import React,{Component} from 'react';
import { BrowserRouter,Route,Switch,Link } from 'react-router-dom'
import {  Breadcrumb, BreadcrumbItem} from 'reactstrap';


// import Footer from './../components/Footer'

class PostJobs extends Component {
  // constructor(props){
  //   super(props)
  //   this.state = {

  //   }
  // }

  render(){
  return (
    
    <div>

   

     <div>
      <Breadcrumb tag="nav" listTag="div">
      <BreadcrumbItem tag="a" ><Link to='/postjobs/crudjob'>Job</Link></BreadcrumbItem>
        <BreadcrumbItem tag="a"><Link to='/postjobs/crudcompany'>Company</Link></BreadcrumbItem>
      </Breadcrumb>
    </div>  
    {/* <Footer/> */}

    </div>
    
    
  );
}
}
export default PostJobs;