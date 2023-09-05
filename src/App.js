import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Navbar from './components/navbar';
import Home from './components/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChallengeDetails from './components/challengeDetails';
import HomeDetails from './components/homeDetails';

function App() {
  return (
    <ChakraProvider theme={theme}>

      <Router>
        {/* <Nav /> */}
        <Routes>
          <Route Route path="/" element={<Home />} />
          <Route
            Route
            path="/challengeDetails"
            element={<ChallengeDetails />}
          />
          {/* <Route Route path="/Contacts" element={<Contacts />} /> */}
        </Routes>
      </Router>

    </ChakraProvider>
  );
}

export default App;
