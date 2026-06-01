import React from "react";

export default class UserClass extends React.Component {
  render() {
    const { godine } = this.props;
    return (
      <p>
        Pozdrav moje ime je {this.props.ime} i imam {godine} godina
      </p>
    );
  }
}
