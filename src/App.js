import {
	HashRouter as Router,
	Redirect,
	Switch,
	Route,
} from 'react-router-dom';
import Portfolio from './containers/Portfolio/Portfolio';
import Resume from './containers/Resume/Resume';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Portfolio} />
				<Route exact path="/resume" component={Resume} />
				<Redirect to="/" />
			</Switch>
		</Router>
	);
}

export default App;
