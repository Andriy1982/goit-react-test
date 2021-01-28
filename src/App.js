import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar';
import TodosView from './views/TodosView';
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import Container from './components/Container';
// import { authOperations } from './redux/auth';
import { connect } from 'react-redux';

class App extends Component {
  // componentDidMount() {
  //   this.props.onGetCurretnUser();
  // }

  render() {
    return (
      <Container>
        <AppBar />

        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/register" component={RegisterView} />
          <Route path="/login" component={LoginView} />
          <Route path="/todos" component={TodosView} />
        </Switch>
      </Container>
    );
  }
}

// const mapDispatchToProps = {
//   onGetCurretnUser: authOperations.getCurrentUser,
// };

// export default connect(null, mapDispatchToProps)(App);
export default App;

// import React from 'react';
// import { Switch, Route, Link } from 'react-router-dom';
// import TodosView from './views/TodosView';
// import CounterView from './views/CounterView';

// const App = () => (
//   <>
//     <ul>
//       <li>
//         <Link to="/counter">Счётчик</Link>
//       </li>
//       <li>
//         <Link to="/todos">Заметки</Link>
//       </li>
//     </ul>

//     <Switch>
//       <Route path="/counter">
//         <CounterView />
//       </Route>

//       <Route path="/todos">
//         <TodosView />
//       </Route>
//     </Switch>
//   </>
// );

// export default App;
