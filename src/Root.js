import './Root.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from 'Form';
import { Provider } from 'react-redux';
import { store } from 'redux/index';

function Root() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Form />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default Root;
