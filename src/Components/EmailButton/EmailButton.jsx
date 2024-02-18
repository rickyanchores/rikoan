import React from 'react';

class EmailButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const email = 'ricky23anchores@gmail.com';
    const subject = encodeURIComponent('Subject Here');
    const body = encodeURIComponent('Body Here');

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }

  render() {
    return (
      <button onClick={this.handleClick}>ricky23anchores@gmail.com</button>
    );
  }
}

export default EmailButton;
