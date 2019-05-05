import React from 'react';
import logo from './logo.svg';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './App.css';


const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
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
    const { classes, theme } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Human Identification Using Recurrent Neural Networks
          </p>
          <Card className={classes.card}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  Samed B.
          </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Koç University Student, 24
          </Typography>
              </CardContent>
            </div>
            <CardMedia
              className={classes.cover}
              image="https://pbs.twimg.com/media/CjlZ_l6WkAAkiQv.jpg"
              title=""
            />
          </Card>
          <br>
          </br>
          <Card className={classes.card}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  Esin H.
          </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Koç University Student, 21
          </Typography>
              </CardContent>
            </div>
            <CardMedia
              className={classes.cover}
              image="https://irp-cdn.multiscreensite.com/6e895a0a/dms3rep/multi/desktop/f1f3cd2b-7d1e-44ff-a15a-24f17ce7d9bb.png"
              title=""
            />
          </Card>
          <br>
          </br>
          <CircularProgress
            className={classes.progress}
            variant="determinate"
            value={this.state.completed}
          />
          <Button variant="contained" color="primary">
            Scan
          </Button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </header>
      </div >
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(App);
