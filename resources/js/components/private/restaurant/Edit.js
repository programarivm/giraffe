import ApiRestaurantActions from '@/actions/api/RestaurantActions';
import { Backdrop, Button, ButtonGroup, Fade, Modal } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { FormInputs } from '@/components/private/restaurant/FormInputs';
import Loading from '@/components/Loading';
import React from 'react';
import Validation from '@/components/Validation';

const styles = theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
});

class RestaurantEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.ApiRestaurantUpdateReducer,
      modal: {
        open: false
      }
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleClickCancel = this.handleClickCancel.bind(this);
    this.handleClickUpdate = this.handleClickUpdate.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.ApiRestaurantShowReducer.record !== this.props.ApiRestaurantShowReducer.record) {
      this.setState({
        ...this.props.ApiRestaurantShowReducer,
        modal: {
          open: true
        }
      });
    }
  }

  handleChange = e => {
    let record = {...this.state.record};
    record[e.target.id] = e.target.value;
    this.setState({record});
  }

  handleClickCancel(e) {
    e.preventDefault();
    this.setState({
      response: [],
      modal: {
        open: false
      }
    });
  }

  handleClickUpdate(e) {
    e.preventDefault();
    this.props.update(this.state.record.id, this.state.record)
      .then((res) => {
        switch (res.status) {
          case 200:
            this.props.fetchAll();
            this.setState({
              response: [],
              modal: {
                open: false
              }
            });
            break;
          case 422:
            this.setState({ response: res.errors });
            break;
        }
      });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={this.state.modal.open}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={this.state.modal.open}>
            <div className={classes.paper}>
              <form onSubmit={ (e) => this.handleClickUpdate(e) }>
                <FormInputs {...this.state.record} handleChange={this.handleChange} />
                <ButtonGroup>
                  <Button type="submit" color="primary">Update</Button>
                  <Button color="secondary" onClick={ (e) => this.handleClickCancel(e) }>Cancel</Button>
                </ButtonGroup>
              </form>
              <Loading loading={this.props.loading}>
                <Validation messages={this.state.response} />
              </Loading>
            </div>
          </Fade>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAll: () => dispatch(ApiRestaurantActions.fetchAll()),
    update: (id, record) => dispatch(ApiRestaurantActions.update(id, record))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(RestaurantEdit));
