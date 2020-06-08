import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
function preventDefault(event) {
  event.preventDefault();
}




export default class Users extends Component {
  state = {
    rows: []
  };
  
  componentDidMount() {
    const url = "http://localhost:8000/db/emps";
    axios
      .get(url)
      .then(response => response.data)
      .then(data => {
        this.setState({ rows: data });
      });
  }
  handleSubmit=(e,id)=>
  {
    e.preventDefault();
    axios.delete('http://localhost:8000/db/emps/'+id).then(response=>response.data);
  }
  render() {
    return (
      <React.Fragment>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Emp age</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.empAge}</TableCell>
              <TableCell>{row.email}</TableCell>
              {/* <TableCell align="right">{row.address}</TableCell> */}
              <TableCell>
              <Button
                                    type="button"
                                    halfWidth
                                    variant="contained"
                                    color="primary"
                                    className="form-button {classes.submit}"
                                    onClick={(e) => {
                                      if (
                                        // eslint-disable-next-line no-alert
                                        window.confirm(
                                          "Are you sure you wish to delete employee?"
                                        )
                                      )
                                        this.handleSubmit(
                                          e,row.id
                                        )
                                    }}
                                  >
                                    Delete
                                  </Button>

              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div> */}
    </React.Fragment>
  );
      // <div className="container">
      //   <div className="col-xs-8">
      //     <table className="table table-striped">
      //       <thead>
      //         <tr scope="row">
      //           <th>ID</th>
      //           <th>NAME</th>
      //           <th>USERNAME</th>
      //           <th>PHONE</th>
      //           <th>EMAIL</th>
      //         </tr>
      //       </thead>
      //       <tbody>
      //         {this.state.users.map(user => {
      //           return (
      //             <tr scope="row">
      //               <td>
      //                 <Link to={"/user/" + user.id}>
      //                   {user.id}
      //                 </Link>
      //               </td>
      //               <td>{user.name}</td>
      //               <td>{user.username}</td>
      //               <td>{user.phone}</td>
      //               <td>{user.email}</td>
      //             </tr>
      //           );
      //         })}
      //       </tbody>
      //     </table>
      //   </div>
      // </div>
    
    //);
  }
}