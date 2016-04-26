import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { FetchItems } from '../actions/index';


class App extends Component {

  renderAll() {
    console.log('fetchitems' , FetchItems);
    console.log('props: ', this.props.FetchItems)
    this.props.FetchItems()
  }

  render() {
    return (
      <div>
      <button onClick={this.renderAll.bind(this)}>render all</button>
      </div>

    );
  }
}

function mapStateToProps(state){
  console.log('inside mapstatetoprops');
  console.log('state', state.items);
  return {
    items: state.items
  }
}



export default connect(mapStateToProps, { FetchItems })(App);
