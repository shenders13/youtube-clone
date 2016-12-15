import React from 'react';

class ExampleComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {hello : "world"};
  }


  render() {
    return (
      <div>
        <h1> ExampleComponent! </h1>
      </div>
    );
  }

}

export default ExampleComponent;