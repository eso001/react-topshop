import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { FetchItems } from '../actions/index';



class renderAll extends Component {
	componentWillMount() {
		this.props.FetchItems();
		console.log(this.props.FetchItems);
		console.log("FETCHED")
		console.log('this is props: ', this.props);

	}

renderItems() {
	return this.props.items.map(item => {
		return (
				<li key={item._id}>
				  <span>{item.name}</span>
				  <ul>
				  <li>Price: {item.price}</li>
				  <li>Description: {item.description}</li>
				  <li>Condition: {item.condition}</li>
				  <li>Item: {item.image}</li>
				  </ul>
				 </li>

			)

	})
}
	render(){

		return (
			<div>
			  <div>
			  all items
			  </div>
			  <ul className="list-group">
			  {this.renderItems()}
			  </ul>
			  </div>
			)
	}
}

function mapStateToProps (state) {
	console.log('mapStateToProps ',state);
	// or maybe state.items.all
	return { items: state.items.all }
}


export default connect (mapStateToProps, { FetchItems })(renderAll);