import { useParams, useNavigate } from 'react-router-dom';

function withParams(Component) {
	return (props) => <Component {...props} match={{ params: useParams() }} navigate={useNavigate()} />;
}

export default withParams;
