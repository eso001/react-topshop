import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { addItem } from '../actions/index'
import { Link } from 'react-router'
// import action
// import link from react-router


class addItemForm extends Component {
	static contextTypes = {
		router: PropTypes.object
	}

	onSubmit(props){
		this.props.addItem(props)
		  .then(() => {

		  	console.log("ITEM ADDED!")
				this.context.router.push('/')
		  })
	}
	render(){

		const { fields: { name, price, description, condition, image}, handleSubmit } = this.props;
		return (
			  <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
			    <h3>Sell Some Clothes</h3>
			    <div className={`form-group ${name.touched && name.invalid ? 'has-danger' : ""}`}>
			      <label>Name</label>
			      <input type="text" className="form-control" {...name} />
			      <div className="text-help">
			        {name.touched ? name.error : "" }
			    </div>
			    </div>
				 <div className={`form-group ${price.touched && price.invalid ? 'has-danger' : ""}`}>
			      <label>Price</label>
			      <input type="text" className="form-control" {...price} />
			      <div className="text-help">
			        {price.touched ? price.error : "" }
			    </div>
			    </div>
			    <div className={`form-group ${description.touched && description.invalid ? 'has-danger' : ""}`}>
			      <label>Description</label>
			      <input type="text" className="form-control" {...description} />
			      <div className="text-help">
			        {description.touched ? description.error : "" }
			    </div>
			    </div>
			    <div className={`form-group ${condition.touched && condition.invalid ? 'has-danger' : ""}`}>
			      <label>Condition</label>
			      <input type="text" className="form-control" {...condition} />
			      <div className="text-help">
			        {condition.touched ? condition.error : "" }
			    </div>
			    </div>
				<div className={`form-group ${image.touched && image.invalid ? 'has-danger' : ""}`}>
			      <label>Image</label>
			      <input type="text" className="form-control" {...image} />
			      <div className="text-help">
			        {image.touched ? image.error : "" }
			    </div>
			    </div>
			    <button type="submit" className="btn btn-primary">Submit</button>

				<Link to="/" className="btn btn-danger">Cancel</Link>
				</form>


			)
	}
}

function validate(values){
	const errors = {};

	if(!values.name) {
		errors.name = "Enter item name";
	}
	if(!values.price){
		errors.price = "Enter a price";
	}
	if(!values.description){
		errors.description = "Enter a description";
	}
	if(!values.condition) {
		errors.condition = "Enter a condition";
	}
	if(!values.image){
		errors.image = "Enter a image";
	}

	return errors;
}

export default reduxForm({
	form: "AddItemForm",
	fields: ['name', 'price', 'description', 'condition', 'image'],
	validate
}, null, {addItem})(addItemForm)





