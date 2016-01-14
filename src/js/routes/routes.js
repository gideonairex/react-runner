import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Template from '../templates/app-template';
import Dashboard from '../components/dashboard/app-dashboard';
import Machine from '../components/machine/app-machine';
import TestCase from '../components/test-case/app-test-case';
import LogItem from '../components/log-file/app-log';

export default () => {
	return (
		<Router>
			<Route path="/" component={ Template }>
				<IndexRoute component={ Dashboard } />
				<Route path="machines/:machine" component={ Machine } />
				<Route path="machines/:machine/test-cases/:testCases" component={ TestCase } />
				<Route path="machines/:machine/test-cases/:testCases/:logId" component={ LogItem } />
			</Route>
		</Router>
	)
}
