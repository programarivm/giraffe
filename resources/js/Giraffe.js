import { connect } from 'react-redux';
import PrivateApp from '@/components/private/App';
import React, { Component } from 'react';

class Giraffe extends Component {
  render() {
    return (
      <div className="Giraffe">
        { this.props.session.role ? <PrivateApp /> : window.location.href = '/login' }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state.ApiAuthReducer;
};

export default connect(mapStateToProps, null)(Giraffe);
