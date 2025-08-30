import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import WelcomeScreen from './pages/WelcomeScreen';
import Login from './pages/Login';
import Signup from './pages/Signup';
import OnboardingFlow from './pages/OnboardingFlow';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import CaseDetail from './pages/CaseDetail';
import Forums from './pages/Forums';
import Impact from './pages/Impact';
import AIChat from './pages/AIChat';
import EntitlementFinder from './pages/EntitlementFinder';
import CivicEducation from './pages/CivicEducation';
import CommunityEvents from './pages/CommunityEvents';
import Pricing from './pages/Pricing';
import CitizenshipStats from './pages/CitizenshipStats';
import AustralianRights from './pages/AustralianRights';
import RightsModule from './pages/modules/RightsModule';
import VotingModule from './pages/modules/VotingModule';
import DemocracyModule from './pages/modules/DemocracyModule';

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/" element={<WelcomeScreen />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/onboarding" element={<OnboardingFlow />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/case/:id" element={<CaseDetail />} />
            <Route path="/forums" element={<Forums />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/chat" element={<AIChat />} />
            <Route path="/entitlements" element={<EntitlementFinder />} />
            <Route path="/civic-education" element={<CivicEducation />} />
            <Route path="/community-events" element={<CommunityEvents />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/citizenship-stats" element={<CitizenshipStats />} />
            <Route path="/rights" element={<AustralianRights />} />
            <Route path="/civic-education/rights" element={<RightsModule />} />
            <Route path="/civic-education/democracy" element={<DemocracyModule />} />
            <Route path="/civic-education/services" element={<RightsModule />} />
            <Route path="/civic-education/representatives" element={<RightsModule />} />
            <Route path="/civic-education/community" element={<RightsModule />} />
            <Route path="/civic-education/voting" element={<VotingModule />} />
            <Route path="/civic-education/legal-aid" element={<RightsModule />} />
            <Route path="/civic-education/responsibilities" element={<RightsModule />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
