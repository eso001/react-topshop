import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import addItem from './components/addItem';
import renderAll from './components/renderAll';

export default (
		<Route path='/' component={App} >
			<IndexRoute component={renderAll} />
			<Route path="item/new" component={addItem} />
		</Route>
	)