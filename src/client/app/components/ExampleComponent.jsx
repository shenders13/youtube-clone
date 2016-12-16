import React from 'react';

class ExampleComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p onClick={this.props.updateText}> Click Me Yo (ExampleComponent)! </p>
      </div>
    );
  }

}

export default ExampleComponent;