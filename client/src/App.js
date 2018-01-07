import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import CatPicture from './catImage.jpg';

const style = {
  maxWidth: 345
};

class App extends Component {
  render() {
    return (
      <Card style={style}>
        <CardMedia>
          <img src={CatPicture} style={style} alt="Cat"/>
        </CardMedia>
        <CardContent>
          <Typography type="headline" component="h2">
            {this.props.title} 
          </Typography>
          <Typography component="p">
            {this.props.content}
          </Typography>
        </CardContent>
        <CardActions>
          <Button dense color="primary">
            Share
          </Button>
          <Button dense color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    ); 
  }
}

const mapStateToProps = state => ({
  title: state.get('title'),
  content: state.get('content')
});

export default connect(mapStateToProps)(App);