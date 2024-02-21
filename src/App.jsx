import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Router>
      <Main />
    </Router>
  );
};

const Main = () => {
  

  return (
    <div className="app-container">
      <div className="left-sidebar">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <div className="center-content">
        <Routes>
          <Route path="/home" element={<HomeContent />} />
          <Route path="/about" element={<AboutContent />} />
          <Route path="/contact" element={<ContactContent />} />
        </Routes>
      </div>

    </div>
  );
};

const HomeContent = () => {
  return <div className="mainContent"> <div className="homecontent"><h1>Home content</h1>
  <p>Hello there </p>
  <p>Hello there </p>
  <p>Hello there </p>
  <p>Hello there </p>
  <p>Hello there </p>
  <p>Hello there </p>
  <p>Hello there </p>
  <p>Hello there </p>
  <p>Hello there </p>
  <p>Hello there </p>
  <p>Hello there </p>
  <p>Hello there </p>
  <p>Hello there </p>
  <p>Hello there </p>
  <p>Hello there </p>
  <p>Hello there </p>
  <p>Hello there </p>
  <p>Hello there </p>
  <p>Hello there </p>
  <p>Hello there </p>
  <p>Hello there </p>
  <p>Hello there </p>
  <p>Hello there </p>
  <p>Hello there </p>
  </div> <div className="right-panel">
 <h2>Right Panel</h2>

 <p>Hi from right panel</p>
</div></div>;
};

const AboutContent = () => {
  return <div className="content">About Content</div>;
};

const ContactContent = () => {
  return <div className="content">Contact Content</div>;
};

export default App;
