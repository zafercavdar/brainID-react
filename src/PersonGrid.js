import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import PersonCard from './PersonCard'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import data from './data.json';
const axios = require('axios');

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1400,
    height: 800,
  },
});

class PersonGrid extends React.Component {

  constructor() {
    super()
    this.state = {
      person: "",
      started: false
    }

    this.fetchIdentified = this.fetchIdentified.bind(this)
  }

  componentDidMount() {
    var intervalId = setInterval(this.fetchIdentified, 1000 * 2);
    this.setState({ intervalId: intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.person);
  }

  fetchIdentified = async () => {
    const endpoint = "http://172.20.104.221:3232/result"
    const res = await axios.get(endpoint)
    const person = res.data.name
    this.setState({ person })
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <GridList cellHeight={151} className={classes.gridList} cols={4}>
          {data.sort((a, b) => {
            return a.name < b.name ? -1 : 1
          }).map(tile => (
            <GridListTile key={tile.name} cols={1}>
              <PersonCard age={tile.age} name={tile.name} avatarURL={tile.avatarURL} identified={this.state.person === tile.name}></PersonCard>
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

PersonGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PersonGrid);
