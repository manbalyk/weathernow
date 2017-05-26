import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './../../actions/actionCreators';
import Main from './../Main/Main';

const mapStateToProps = (state) => {
	const { location, temperature, weatherDescription, weatherIcon, pageBackground, editMode, loading, loadingError, locationIsChanged } = state;
	return {
		location,
		temperature,
		weatherDescription,
		weatherIcon,
		pageBackground,
		editMode,
		loading,
		loadingError,
		locationIsChanged
	}
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actionCreators, dispatch);
};

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main)

export default MainContainer;