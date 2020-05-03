import ApiReviewActions from 'actions/api/ReviewActions';
import { Backdrop, Button, ButtonGroup, Fade, InputLabel, MenuItem, Modal, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Loading from 'components/Loading';
import { Range } from 'react-range';
import React from 'react';
import ReviewState from 'states/ReviewState';
import Validation from 'components/Validation';

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

const initialState = Object.assign({}, ReviewState.initial(), {
  response: [],
  modal: {
    open: false
  }
});

class ReviewCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleClickCancel = this.handleClickCancel.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.ReviewReducer.restaurants !== this.props.ReviewReducer.restaurants) {
      this.setState({
        ...this.props.ReviewReducer,
        modal: {
          open: true
        }
      });
    }
  }

  handleChange = e => {
    let record = {...this.state.record};
    switch (e.target.name) {
      case 'restaurant':
        record.restaurant.id = e.target.value;
        break;
      default:
        record[e.target.id] = e.target.value;
        break;
    }
    this.setState({record});
  }

  handleClickCancel(e) {
    e.preventDefault();
    this.setState(initialState);
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
              <form onSubmit={ (e) => this.handleSubmitForm(e) }>
                <TextField
                  select
                  required
                  fullWidth
                  id="restaurant"
                  label="Select a restaurant"
                  name="restaurant"
                  margin="normal"
                  value={this.state.record.restaurant.id}
                  onChange={this.handleChange}
                >
                  {this.state.restaurants.map((item, i) => (
                    <MenuItem key={i} value={item.id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </TextField>
                <InputLabel>Slide the square sincerely:</InputLabel>
                <Range
                  step={1}
                  min={1}
                  max={5}
                  values={this.state.record.points}
                  onChange={values => {
                    let newState = Object.assign({}, this.state);
                    newState.record.points = values;
                    this.setState(newState);
                  }}
                  renderTrack={({ props, children }) => (
                    <div
                      {...props}
                      style={{
                        ...props.style,
                        height: '6px',
                        width: '100%',
                        backgroundColor: '#ccc'
                      }}
                    >
                      {children}
                    </div>
                  )}
                  renderThumb={({ props }) => (
                    <div
                      {...props}
                      style={{
                        ...props.style,
                        height: '25px',
                        width: '25px',
                        backgroundColor: '#999'
                      }}
                    />
                  )}
                />
                <TextField
                  multiline
                  fullWidth
                  id="comment"
                  label="Tell us about your opinion"
                  name="comment"
                  margin="normal"
                  rows={4}
                  value={this.state.record.comment}
                  onChange={this.handleChange}
                />
                <ButtonGroup>
                  <Button type="submit" color="primary">Accept</Button>
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
    create: (record) => dispatch(ApiReviewActions.create(record)),
    fetchAll: () => dispatch(ApiReviewActions.fetchAll())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ReviewCreate));
