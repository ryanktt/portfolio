import {
	BrowserRouter as Router,
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
				<Route exact path="/portfolio" component={Portfolio} />
				<Route exact path="/resume" component={Resume} />
				<Redirect to="/portfolio" />
			</Switch>
		</Router>
	);
}

export default App;
