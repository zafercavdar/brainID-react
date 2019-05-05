import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import PersonGrid from './PersonGrid'
import './App.css';


const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  }
});

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      identified: null,
      completed: 0,
    }
  }

  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Human Identification Using Recurrent Neural Networks
          </p>
          <Button variant="contained" color="primary">
            Start Recording
          </Button>
          <CircularProgress
            className={classes.progress}
            variant="determinate"
            value={this.state.completed}
          />
          <PersonGrid></PersonGrid>
        </header>
      </div >
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
