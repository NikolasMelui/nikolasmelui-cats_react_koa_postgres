import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import RetinaImage from 'react-retina-image';

const style = {
	maxWidth: 345,
};

class App extends Component {
	render() {
		return (
			<Card style={style}>
				<CardMedia>
					<RetinaImage src={'/images/' + this.props.image} style={style} alt={this.props.title} />
				</CardMedia>
				<CardContent>
					<Typography type="headline" component="h2">
						{this.props.title}
					</Typography>
					<Typography component="p">{this.props.content}</Typography>
				</CardContent>
				<CardActions>
					<Button dense color="primary" onClick={this.props.onClickLearn}>
						Показать ещё котов!
					</Button>
				</CardActions>
			</Card>
		);
	}
}

const mapStateToProps = state => ({
	title: state.get('title'),
	content: state.get('content'),
	image: state.get('image'),
});

const mapDispatchToProps = dispatch => ({
	onClickLearn: () => dispatch({ type: 'LEARN MORE' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
