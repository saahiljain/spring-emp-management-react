import React, { Component } from "react";
import { withRouter } from "react-router";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
class user extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    };
  }
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users/"+this.props.match.params.pathparam).then(res => {
      this.setState({ user: res.data });
    });
  }

  render() {
    return (
      <div className="col-md-4">
        <li class="list-group-item d-flex justify-content-between align-items-center">
        User Details of : {this.state.user.name}
        </li>
        <hr></hr>
        <table className="table table-striped">
          <tbody>
            <tr scope="row">
              <td>
                <b>ID</b>
              </td>
              <td>{this.state.user.id}</td>
            </tr>
            <tr scope="row">
              <td>
                <b>USERNAME</b>
              </td>
              <td>{this.state.user.username}</td>
            </tr>
            <tr scope="row">
              <td>
                <b>PHONE</b>
              </td>
              <td>{this.state.user.phone}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default withRouter(user);