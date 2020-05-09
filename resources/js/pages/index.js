import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
  
  static getInitialProps({store}) {}

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Hello Next.js</h1>
    );
  }
}

const mapStateToProps = state => {
  return state.ApiAuthReducer;
};

export default connect(mapStateToProps, null)(App);
