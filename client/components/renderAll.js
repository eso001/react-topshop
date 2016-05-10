import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { FetchItems } from '../actions/index';



class renderAll extends Component {
	componentWillMount() {
		console.log(this.props.FetchItems);
		console.log('this is props: ', this.props);
		this.props.FetchItems();
		console.log("FETCHED")
	}



	render(){

		return (
			  <div>renderAll
			  </div>
			)
	}
}

function mapStateToProps (state) {
	console.log('mapStateToProps ',state);
	// or maybe state.items.all
	return { items: state.items }
}


export default connect (mapStateToProps, { FetchItems })(renderAll);