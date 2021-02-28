import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserList } from "../../../store/actions/movie.action";

class UserList extends Component {
  renderUser = () => {
    let { userList } = this.props;
    return userList.map((item, index) => {
      return (
        <tr index={index}>
          <td>{index + 1}</td>
          <td>{item.hoTen}</td>
          <td>{item.taiKhoan}</td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div>
        <table className="table col-4 centeringTable">
          <thead className="thead-dark">
            <th>STT</th>
            <th>NAME</th>
            <th>ACCOUNT</th>
          </thead>
          <tbody>{this.renderUser()}</tbody>
        </table>
      </div>
    );
  }
  componentDidMount() {
    this.props.dispatch(getUserList());
  }
}
const mapStateToProps = (state) => {
  return {
    userList: state.movie.userList,
  };
};
export default connect(mapStateToProps)(UserList);
