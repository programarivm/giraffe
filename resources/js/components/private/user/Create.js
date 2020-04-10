import ApiUserActions from '../../../actions/api/UserActions';
import { Button, ButtonGroup, FormGroup, Paper, TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import { FormGroups } from './FormGroups';
import Loading from '../../Loading';
import React from 'react';
import UserState from '../../../states/UserState';
import Validation from '../../Validation';

const initialState = Object.assign({}, UserState.initial(), { response: [] });

class UserCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleClickCancel = this.handleClickCancel.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleChange = e => {
    let record = {...this.state.record};
    record[e.target.id] = e.target.value;
    this.setState({record});
  }

  handleClickCancel(e) {
    this.setState({
      ...initialState,
      response: []
    });
    e.preventDefault();
  }

  handleSubmitForm(e) {
    e.preventDefault();
    this.props.create(this.state.record)
      .then((res) => {
        switch (res.status) {
          case 201:
            this.props.fetchAll();
            this.setState({
              ...initialState,
              response: []
            });
            break;
          case 422:
            this.setState({ response: res.errors });
            break;
        }
      });
  }

  render() {
    return (
      <Paper style={{ padding: 15 }}>
        <form onSubmit={ (e) => this.handleSubmitForm(e) }>
          <FormGroups {...this.state.record} handleChange={this.handleChange} />
          <FormGroup>
            <TextField
              required
              fullWidth
              id="password"
              label="Password"
              name="password"
              type="password"
              margin="normal"
              value={this.state.record.password}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup style={{ marginTop: 10, marginBottom: 10 }}>
            <ButtonGroup size="small" fullWidth>
              <Button color="primary" type="submit">Add user</Button>
              <Button color="secondary" onClick={ (e) => this.handleClickCancel(e) }>Cancel</Button>
            </ButtonGroup>
          </FormGroup>
        </form>
        <Loading loading={this.props.loading}>
          <Validation messages={this.state.response} />
        </Loading>
      </Paper>
    );
  }
}

const mapStateToProps = state => {
  return state.ApiUserCreateReducer;
};

const mapDispatchToProps = dispatch => {
  return {
    create: (record) => dispatch(ApiUserActions.create(record)),
    fetchAll: () => dispatch(ApiUserActions.fetchAll())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserCreate);
