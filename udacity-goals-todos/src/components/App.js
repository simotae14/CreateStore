import React from 'react';
import ConnectedTodos from './Todos';
import ConnectedGoals from './Goals';
import { connect } from 'react-redux';
import {
  handleInitialData
} from '../actions/shared';

class App extends React.Component {
  // uso il lifecycle method per il subscribe
  componentDidMount () {
      const { dispatch } = this.props;

      // action creator per il recupero dei dati iniziali
      dispatch(handleInitialData());
  }
  render() {

      // se c'è il loading mostro messaggio caricamento
      if (this.props.loading) {
          return(
              <h3>Loading</h3>
          )
      }

      return (
          <div>
              <ConnectedTodos />
              <ConnectedGoals />
          </div>
      );
  }
}

export default connect((state) => ({
  loading: state.loading
}))(App);

