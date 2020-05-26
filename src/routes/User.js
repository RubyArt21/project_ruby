import React, { Component } from "react";

class User extends Component {
  render() {
    let user = {
      id: 1,
      firstName: "Darya",
      secondName: "Kovalchuk",
      email: "daryakov@example.com"
    };
    return (
      <div>
        {user.firstName}
        <br />
        {user.secondName}
      </div>
    );
  }
}

export default User;
