import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import { 
  FileText, 
  Lightbulb, 
  MessageCircle, 
  BarChart3, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  Heart,
  Menu,
  Bot,
  User,
  Settings,
  LogOut,
  Search,
  BookOpen,
  Calendar,
  Users,
  Crown,
  Shield,
  Building,
  Zap,
  ArrowLeft
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUser();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false);
      }
    };

    if (showUserMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showUserMenu]);

  const getSubscriptionIcon = (tier: string) => {
    switch (tier) {
      case 'free': return Zap;
      case 'premium': return Crown;
      case 'legal_aid': return Shield;
      case 'enterprise': return Building;
      default: return Zap;
    }
  };

  const getSubscriptionColor = (tier: string) => {
    switch (tier) {
      case 'free': return 'text-gray-600';
      case 'premium': return 'text-yellow-600';
      case 'legal_aid': return 'text-blue-600';
      case 'enterprise': return 'text-purple-600';
      default: return 'text-gray-600';
    }
  };


  const activeCases = [
    {
      id: '1',
      title: 'Housing Benefit Appeal',
      status: 'In Progress',
      lastUpdate: '2 days ago'
    },
    {
      id: '2',
      title: 'Citizenship Application',
      status: 'AI Preparing Docs',
      lastUpdate: '1 day ago'
    }
  ];

  const opportunities = [
    {
      title: 'Healthcare Subsidy Qualification',
      description: 'You qualify for Healthcare Subsidy. Shall I apply?',
      action: 'Apply Now'
    },
    {
      title: 'PR Renewal Reminder',
      description: 'Deadline for PR renewal in 30 days.',
      action: 'Prepare Docs'
    }
  ];

  const forumHighlights = [
    { category: 'Immigration Help', posts: 12 },
    { category: 'Housing Appeals Collective', members: 37 }
  ];

  const impact = {
    benefitsSecured: 2300,
    casesOverturned: 1
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-white via-primary-50 to-accent-50 shadow-lg border-b border-primary-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center shadow-lg">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                  Citizen SERA
                </h1>
                <p className="text-xs text-primary-600 font-medium">Because Your Rights Matter</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/chat')}
                className="btn-primary"
              >
                <Bot className="w-4 h-4 mr-2 text-white" />
                <span className="text-white">Talk to SERA</span>
              </button>
              
              {user ? (
                <div className="relative" ref={userMenuRef}>
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    {user.avatar ? (
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="avatar avatar-sm"
                      />
                    ) : (
                      <div className="icon-wrapper icon-sm bg-primary-100 text-primary-600">
                        <User className="w-4 h-4" />
                      </div>
                    )}
                    <div className="text-left hidden md:block">
                      <p className="text-sm font-medium text-gray-900">{user.name}</p>
                      <div className="flex items-center space-x-2">
                        <p className="text-xs text-gray-500">{user.email}</p>
                        {user.subscriptionTier && (
                          <div className={`flex items-center ${getSubscriptionColor(user.subscriptionTier)}`}>
                            {React.createElement(getSubscriptionIcon(user.subscriptionTier), { className: 'w-3 h-3' })}
                            <span className="text-xs ml-1 capitalize">{user.subscriptionTier}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                  
                  {showUserMenu && (
                    <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-[9999]">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="text-sm font-medium text-gray-900">{user.name}</p>
                        <p className="text-xs text-gray-500">{user.email}</p>
                        {user.subscriptionTier && (
                          <div className={`flex items-center mt-1 ${getSubscriptionColor(user.subscriptionTier)}`}>
                            {React.createElement(getSubscriptionIcon(user.subscriptionTier), { className: 'w-3 h-3' })}
                            <span className="text-xs ml-1 capitalize font-medium">{user.subscriptionTier} Plan</span>
                          </div>
                        )}
                      </div>
                      
                      <button
                        onClick={() => {
                          navigate('/profile');
                          setShowUserMenu(false);
                        }}
                        className="w-full flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        <User className="w-4 h-4 mr-3 text-gray-500" />
                        Profile
                      </button>
                      
                      <button
                        onClick={() => {
                          navigate('/profile');
                          setShowUserMenu(false);
                        }}
                        className="w-full flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        <Settings className="w-4 h-4 mr-3 text-gray-500" />
                        Settings
                      </button>
                      
                      <button
                        onClick={() => {
                          navigate('/pricing');
                          setShowUserMenu(false);
                        }}
                        className="w-full flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        {React.createElement(getSubscriptionIcon(user?.subscriptionTier || 'free'), { 
                          className: `w-4 h-4 mr-3 ${getSubscriptionColor(user?.subscriptionTier || 'free')}` 
                        })}
                        Subscription
                      </button>
                      
                      <div className="border-t border-gray-100 mt-1 pt-1">
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors"
                        >
                          <LogOut className="w-4 h-4 mr-3" />
                          Sign Out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => navigate('/login')}
                  className="btn btn-outline"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Welcome Message */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            👤 Welcome back, {user?.name || 'Friend'}
          </h2>
          <p className="text-gray-600">SERA is ready to help today.</p>
        </div>

        {/* Dashboard Grid */}
        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          <button
            onClick={() => navigate('/entitlements')}
            className="card-gradient p-6 text-left group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500"></div>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <Search className="w-6 h-6 text-white" />
              </div>
              <span className="ml-3 font-bold text-gray-900 text-lg">Find Benefits</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">Discover entitlements you qualify for</p>
            <div className="flex items-center text-green-600 text-sm font-medium">
              <span>Explore now</span>
              <ArrowLeft className="w-4 h-4 ml-2 rotate-180 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
          
          <button
            onClick={() => navigate('/civic-education')}
            className="card-gradient p-6 text-left group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="ml-3 font-bold text-gray-900 text-lg">Learn</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">Civic education and democracy basics</p>
            <div className="flex items-center text-blue-600 text-sm font-medium">
              <span>Start learning</span>
              <ArrowLeft className="w-4 h-4 ml-2 rotate-180 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
          
          <button
            onClick={() => navigate('/community-events')}
            className="card-gradient p-6 text-left group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <span className="ml-3 font-bold text-gray-900 text-lg">Events</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">Community meetings and volunteering</p>
            <div className="flex items-center text-purple-600 text-sm font-medium">
              <span>Join events</span>
              <ArrowLeft className="w-4 h-4 ml-2 rotate-180 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
          
          <button
            onClick={() => navigate('/forums')}
            className="card-gradient p-6 text-left group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
              <span className="ml-3 font-bold text-gray-900 text-lg">Connect</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">Join community discussions</p>
            <div className="flex items-center text-orange-600 text-sm font-medium">
              <span>Start discussing</span>
              <ArrowLeft className="w-4 h-4 ml-2 rotate-180 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
          
          <button
            onClick={() => navigate('/citizenship-stats')}
            className="card-gradient p-6 text-left group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-primary-700"></div>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-700 text-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <span className="ml-3 font-bold text-gray-900 text-lg">Stats</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">Australian citizenship data</p>
            <div className="flex items-center text-primary-600 text-sm font-medium">
              <span>View statistics</span>
              <ArrowLeft className="w-4 h-4 ml-2 rotate-180 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Active Cases Tile */}
          <div className="card-modern">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                  <FileText className="w-4 h-4 text-white" />
                </div>
                Active Cases
              </h3>
              <span className="bg-gradient-to-r from-primary-500 to-blue-500 text-white text-sm font-medium px-3 py-1 rounded-full shadow-lg">
                {activeCases.length}
              </span>
            </div>
            <div className="space-y-3">
              {activeCases.map(case_ => (
                <div
                  key={case_.id}
                  onClick={() => navigate(`/case/${case_.id}`)}
                  className="p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl cursor-pointer hover:from-blue-50 hover:to-primary-50 transition-all border border-gray-200 hover:border-primary-300 group"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 group-hover:text-primary-700 transition-colors">{case_.title}</h4>
                      <p className="text-sm text-gray-600 flex items-center mt-2">
                        <Clock className="w-3 h-3 mr-1 text-gray-400" />
                        {case_.lastUpdate}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mr-2 shadow-sm"></div>
                      <span className="text-sm font-medium text-gray-700">{case_.status}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="link-primary w-full mt-6 font-semibold text-left flex items-center justify-between group">
              <span>View All Cases</span>
              <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* New Opportunities Tile */}
          <div className="card-modern">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-accent-500 to-yellow-500 rounded-lg flex items-center justify-center mr-3">
                  <Lightbulb className="w-4 h-4 text-white" />
                </div>
                AI Discovered Benefits
              </h3>
              <span className="bg-gradient-to-r from-accent-500 to-yellow-500 text-white text-sm font-medium px-3 py-1 rounded-full shadow-lg">
                {opportunities.length}
              </span>
            </div>
            <div className="space-y-4">
              {opportunities.map((opp, index) => (
                <div key={index} className="p-4 bg-gradient-to-r from-accent-50 to-yellow-50 rounded-xl border border-accent-200 hover:border-accent-300 transition-all group">
                  <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-accent-700 transition-colors">{opp.title}</h4>
                  <p className="text-sm text-gray-600 mb-4">{opp.description}</p>
                  <button
                    onClick={() => navigate('/entitlements')}
                    className="bg-gradient-to-r from-accent-500 to-yellow-500 hover:from-accent-600 hover:to-yellow-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-all shadow-lg hover:shadow-xl"
                  >
                    {opp.action}
                  </button>
                </div>
              ))}
            </div>
            <button
              onClick={() => navigate('/entitlements')}
              className="link-primary w-full mt-6 font-semibold text-left flex items-center justify-between group"
            >
              <span>View All Benefits</span>
              <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Forums Tile */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <MessageCircle className="w-5 h-5 mr-2 text-green-500" />
                Forums
              </h3>
            </div>
            <div className="space-y-3">
              {forumHighlights.map((forum, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">{forum.category}</span>
                  <span className="text-sm text-gray-600">
                    {'posts' in forum ? `${forum.posts} new posts` : `${forum.members} members active`}
                  </span>
                </div>
              ))}
            </div>
            <button
              onClick={() => navigate('/forums')}
              className="w-full mt-4 text-green-600 hover:text-green-700 font-medium text-sm"
            >
              Join Community →
            </button>
          </div>

          {/* Impact Summary Tile */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-purple-500" />
                Impact Summary
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Benefits secured</span>
                </div>
                <span className="font-bold text-green-600">${impact.benefitsSecured.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <AlertCircle className="w-5 h-5 text-blue-500 mr-3" />
                  <span className="text-gray-700">Cases overturned</span>
                </div>
                <span className="font-bold text-blue-600">{impact.casesOverturned}</span>
              </div>
            </div>
            <button
              onClick={() => navigate('/impact')}
              className="w-full mt-4 text-purple-600 hover:text-purple-700 font-medium text-sm"
            >
              View Full Impact Report →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;