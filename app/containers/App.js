import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

const mapStateToProps = state => ({
  formula: state.calculate.formula,
  total: state.calculate.total,
  currentEntry: state.calculate.currentEntry,
  showEntry: state.calculate.showEntry,
});

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
