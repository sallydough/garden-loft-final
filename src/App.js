import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import HelpButton from './components/HelpButton/HelpButton';
import VideoCall from './components/VideoCall/VideoCall';
import Entertainment from './components/Entertainment/Entertainment';
import Lights from './components/Lights/Lights';
import Activities from './components/Activities/Activities';
import TV from './components/TV/TV';
import Contacts from './components/Contacts/Contacts';

function App() {
  return (
    <>
    <Router>
      <HelpButton />
      <Nav />
      <Contacts />
    <Routes>
      {/* <Route path="/" element={<Nav />} /> */}
      <Route path="/call-help" element={<HelpButton />} />
      <Route path="/video-call" element={<VideoCall />} />
      <Route path="/entertainment" element={<Entertainment />} />
      <Route path="/lights" element={<Lights />} />
      <Route path="/activities" element={<Activities/>} />
      <Route path="/watch-tv" element={<TV/>} />
      <Route path="/contacts" element={<Contacts/>} />
    </Routes>
  </Router>
  </>
  );
}

export default App;
