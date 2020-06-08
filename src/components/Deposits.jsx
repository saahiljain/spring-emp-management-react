
import React,{Component} from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';
import {
    InputLabel,
    TextField,
    Typography,
    Button,
    FormControl,
    InputAdornment,
    MenuItem,
  } from "@material-ui/core"
  import Users from './Users';
import axios from "axios";  
function preventDefault(event) {
  event.preventDefault();
}


export default class Deposits extends Component {
    constructor(props) {
        super(props)
        this.state = 
        {
            Employee:{
              id:"",
              name:"",
              empAge:"",
              email:"",
            address:{
                houseNo:"",
                street:"",
                city:"",
                country:""
            }}
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleAddressChange=this.handleAddressChange.bind(this)
      };
    
    handleChange(e) {
    const { name, value } = e.target
    const { Employee } = this.state
    Employee[name] = value
    this.setState({ Employee })
    } 
    
    handleSubmit() {
        
        const { Employee } = this.state
        
    console.log(Employee);
    const url = "http://localhost:8000/db/emps";
    axios
      .post(url,Employee)
      .then(response => response.data);
      }
    
    handleAddressChange(e)
    {
    const { name, value } = e.target
    //const { Employee } = this.state
    const { address } = this.state.Employee
    console.log(name,value)
    address[name] = value
    this.setState({ address })
    }

  render(){
  return (
    <React.Fragment>
      <Title>Add Employee</Title>
      <form>
      <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  type="number"
                  id="id"
                  label="id"
                  name="id"
                  autoComplete="id"
                  onChange={this.handleChange}
                  value={this.state.Employee.id}
                  autoFocus
                />
<TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  type="name"
                  label="name"
                  name="name"
                  autoComplete="name"
                  onChange={this.handleChange}
                  value={this.state.Employee.name}
                  autoFocus
                />  

                   <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  type="number"
                  id="empAge"
                  label="empAge"
                  name="empAge"
                  autoComplete="empAge"
                  onChange={this.handleChange}
                  value={this.state.Employee.empAge}
                  autoFocus
                />     
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  onChange={this.handleChange}
                  autoFocus
                  value={this.state.Employee.email}
                /> 

                <div className="vert-space" />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="city"
                  label="city"
                  //type="city"
                    name="city"
                  //autoComplete="place"
                  onChange={this.handleAddressChange}
                  autoFocus
                  //value={this.state.Employee.address.city}
                /> 
                 <div className="vert-space" />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="country"
                  label="country"
                  //type="city"
                    name="country"
                  //autoComplete="place"
                  onChange={this.handleAddressChange}
                  autoFocus
                  //value={this.state.Employee.address.city}
                />   
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className="{classes.submit}"
                  onClick={this.handleSubmit}
                  id="submit-prods"
                >
                  Save
                </Button> 
                </form>
    </React.Fragment>
  );
  }
}
