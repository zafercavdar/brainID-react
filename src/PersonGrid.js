import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import PersonCard from './PersonCard'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';
import data from './data.json';
const { roundAcc } = require('./utils')
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
      acc: 0,
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
    const IP = "172.20.52.187"
    const port = 3232
    const endpoint = `http://${IP}:${port}/result`
    const res = await axios.get(endpoint)
    const mapping = {
      "OZGE": "Ozge A.",
      "ZAFER": "Zafer C.",
      "ACOSGUN": "Abdullah C.",
      "SAMED": "Samed B."
    }
    const name = res.data.name
    const person = mapping[name] || ""
    const acc = roundAcc()
    if (person !== this.state.person) {
      this.setState({ acc })
    }
    console.log(person)
    this.setState({ person })
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          <Typography component="h6" variant="h4" style={{ fontWeight: 'bold' }} >
            Confidence: {this.state.acc}%
          </Typography>
        </div>
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
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles)(PersonGrid);
