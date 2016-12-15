import React from 'react'
import { connect } from 'react-redux';
import ExampleComponent from '../components/ExampleComponent.jsx'
import Actions from '../actions/index'

class App extends React.Component {
  render () {
    console.log('this.props: ', this.props)
    return (
      <div>
        <p> Props from store: {this.props.text}</p>
        <ExampleComponent updateText={this.props.updateText}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const props = {text: state.exampleReducer.text
  };
  return props;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateText: () => {
      dispatch(Actions.exampleAction({text: "STORE UPDATED!"}))
    }
  }
}

const AppConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);


export default AppConnected;