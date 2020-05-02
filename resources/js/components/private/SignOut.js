import ability from '@/ability';
import ApiAuthActions from '@/actions/api/AuthActions';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import React from 'react';

class SignOut extends React.Component {
  componentDidMount() {
    this.props.logout().then(() => {
      ability.update([]);
      window.location.href = '/';
    });
  }

  render() {
    return (
      <Grid container style={{ margin: 20, padding: 20 }}>
        <p>Signing out...</p>
      </Grid>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(ApiAuthActions.logout())
  };
};

export default connect(null, mapDispatchToProps)(SignOut);
