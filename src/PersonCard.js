import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
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
});


class PersonCard extends React.Component {
  constructor() {
    super();
    this.state = {
      identified: false
    }
  }


  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card} style={{ backgroundColor: this.state.identified ? "#00ff00" : "#ffffff" }} >
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h6" variant="h6" >
              {this.props.name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Student, {this.props.age}
            </Typography>
          </CardContent>
        </div>
        <CardMedia
          className={classes.cover}
          image={this.props.avatarURL}
          title=""
        />
      </ Card >
    )
  }
}

PersonCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles)(PersonCard)
