import { connect } from 'react-redux';
import PrivateApp from './components/private/App';
import PublicApp from './components/public/App';
import React, { Component } from 'react';

class Giraffe extends Component {
  render() {
    return (
      <div className="Giraffe">
        { this.props.session.role ? <PrivateApp /> : <PublicApp /> }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state.ApiAuthReducer;
};

export default connect(mapStateToProps, null)(Giraffe);
