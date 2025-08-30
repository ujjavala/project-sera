import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import { Entitlement } from '../types';
import { 
  Search,
  Filter,
  Heart,
  DollarSign,
  Calendar,
  CheckCircle,
  Clock,
  AlertTriangle,
  FileText,
  ArrowLeft,
  Bot,
  Sparkles,
  TrendingUp
} from 'lucide-react';

const EntitlementFinder: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'match' | 'value' | 'deadline'>('match');
  const [aiApplications, setAiApplications] = useState<{[key: string]: {status: 'processing' | 'documents_needed' | 'submitted' | 'approved' | 'rejected', progress: number, nextStep?: string, documents?: string[]}}>({}); 
  const [showApplicationModal, setShowApplicationModal] = useState<{show: boolean, entitlement?: Entitlement}>({show: false});

  const categories = [
    { id: 'all', label: 'All Benefits' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'housing', label: 'Housing' },
    { id: 'employment', label: 'Employment' },
    { id: 'education', label: 'Education' },
    { id: 'welfare', label: 'Welfare' },
    { id: 'immigration', label: 'Immigration' }
  ];

  const mockEntitlements: Entitlement[] = [
    {
      id: '1',
      title: 'Healthcare Subsidy',
      description: 'Subsidised healthcare for low-income residents - protected under your economic rights from UN treaties Australia ratified',
      category: 'healthcare',
      eligibilityMatch: 95,
      estimatedValue: 2800,
      deadline: '2024-12-31',
      status: 'eligible',
      requirements: ['Residency proof', 'Income statement', 'Medicare card'],
      documents: ['Bank statements (3 months)', 'Tax return', 'Rent receipt']
    },
    {
      id: '2',
      title: 'First Home Buyer Grant',
      description: 'Financial assistance for first-time home buyers',
      category: 'housing',
      eligibilityMatch: 88,
      estimatedValue: 15000,
      deadline: '2024-06-30',
      status: 'eligible',
      requirements: ['First-time buyer', 'Property value under $600k', 'Australian citizen/PR'],
      documents: ['Property contract', 'ID documents', 'Financial statements']
    },
    {
      id: '3',
      title: 'Job Training Allowance',
      description: 'Support for skills development and retraining',
      category: 'employment',
      eligibilityMatch: 92,
      estimatedValue: 1200,
      status: 'eligible',
      requirements: ['Unemployed for 6+ months', 'Enrolled in approved course'],
      documents: ['Unemployment certificate', 'Course enrollment']
    },
    {
      id: '4',
      title: 'Childcare Benefit',
      description: 'Subsidised childcare for working families',
      category: 'welfare',
      eligibilityMatch: 75,
      estimatedValue: 4500,
      status: 'eligible',
      requirements: ['Working parent', 'Child under 12', 'Income threshold'],
      documents: ['Work certificate', 'Birth certificate', 'Income proof']
    },
    {
      id: '5',
      title: 'PR Renewal Fee Waiver',
      description: 'Fee waiver for permanent residency renewal',
      category: 'immigration',
      eligibilityMatch: 98,
      estimatedValue: 405,
      deadline: '2024-09-15',
      status: 'applied',
      requirements: ['Financial hardship', 'Valid PR', 'Australian tax resident'],
      documents: ['PR card', 'Tax documents', 'Hardship evidence']
    }
  ];

  const filteredEntitlements = mockEntitlements
    .filter(ent => {
      const matchesSearch = ent.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           ent.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || ent.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'value':
          return (b.estimatedValue || 0) - (a.estimatedValue || 0);
        case 'deadline':
          if (!a.deadline && !b.deadline) return 0;
          if (!a.deadline) return 1;
          if (!b.deadline) return -1;
          return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
        default:
          return b.eligibilityMatch - a.eligibilityMatch;
      }
    });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'eligible': return 'bg-green-100 text-green-800';
      case 'applied': return 'bg-blue-100 text-blue-800';
      case 'approved': return 'bg-purple-100 text-purple-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'eligible': return <CheckCircle className="w-4 h-4" />;
      case 'applied': return <Clock className="w-4 h-4" />;
      case 'approved': return <CheckCircle className="w-4 h-4" />;
      case 'rejected': return <AlertTriangle className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  const handleApply = (entitlement: Entitlement) => {
    setShowApplicationModal({show: true, entitlement});
  };

  const startAiApplication = (entitlement: Entitlement) => {
    // Initialize AI application process
    setAiApplications(prev => ({
      ...prev,
      [entitlement.id]: {
        status: 'processing',
        progress: 0,
        nextStep: 'Analyzing eligibility and requirements...'
      }
    }));
    setShowApplicationModal({show: false});

    // Simulate AI application process with mock progression
    setTimeout(() => {
      setAiApplications(prev => ({
        ...prev,
        [entitlement.id]: {
          ...prev[entitlement.id],
          progress: 25,
          nextStep: 'Gathering user profile data...'
        }
      }));
    }, 1000);

    setTimeout(() => {
      setAiApplications(prev => ({
        ...prev,
        [entitlement.id]: {
          ...prev[entitlement.id],
          progress: 50,
          nextStep: 'Pre-filling application forms...'
        }
      }));
    }, 2500);

    setTimeout(() => {
      setAiApplications(prev => ({
        ...prev,
        [entitlement.id]: {
          ...prev[entitlement.id],
          progress: 75,
          nextStep: 'Checking document requirements...'
        }
      }));
    }, 4000);

    setTimeout(() => {
      const needsDocuments = Math.random() > 0.3; // 70% chance of needing documents
      setAiApplications(prev => ({
        ...prev,
        [entitlement.id]: {
          status: needsDocuments ? 'documents_needed' : 'submitted',
          progress: needsDocuments ? 85 : 100,
          nextStep: needsDocuments ? 'Documents required for final submission' : 'Application submitted successfully!',
          documents: needsDocuments ? entitlement.documents?.slice(0, 2) : undefined
        }
      }));
    }, 5500);
  };

  const uploadDocuments = (entitlementId: string) => {
    setAiApplications(prev => ({
      ...prev,
      [entitlementId]: {
        ...prev[entitlementId],
        status: 'submitted',
        progress: 100,
        nextStep: 'Application submitted successfully!'
      }
    }));

    // Simulate final approval/rejection after submission
    setTimeout(() => {
      const approved = Math.random() > 0.2; // 80% approval rate
      setAiApplications(prev => ({
        ...prev,
        [entitlementId]: {
          ...prev[entitlementId],
          status: approved ? 'approved' : 'rejected',
          nextStep: approved ? 'Congratulations! Your application has been approved.' : 'Application needs review. Check requirements and resubmit.'
        }
      }));
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-white via-green-50 to-accent-50 shadow-lg border-b border-green-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/dashboard')}
                className="p-2 hover:bg-white rounded-xl transition-all shadow-sm border border-gray-200"
              >
                <ArrowLeft className="w-5 h-5 text-primary-600" />
              </button>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-accent-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Search className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Rights & Entitlement Finder</h1>
                  <p className="text-xs text-green-600 font-medium">Discover benefits you qualify for</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* AI Scanning Banner */}
        <div className="bg-gradient-to-r from-accent-500 to-primary-500 rounded-xl p-6 mb-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center mb-2">
                <Bot className="w-6 h-6 mr-2" />
                <h2 className="text-xl font-bold">AI Benefit Scanner</h2>
              </div>
              <p className="text-accent-100 mb-4">
                Our AI has scanned 847 policies and found {filteredEntitlements.length} benefits you may qualify for based on your profile.
              </p>
              <div className="bg-white-opacity-20 rounded-lg p-3 mb-4">
                <p className="text-sm mb-2">
                  📊 <strong>Context:</strong> In 2023-24, 192K+ people from 200+ countries became Australian citizens.
                  <button 
                    onClick={() => navigate('/citizenship-stats')}
                    className="ml-2 underline hover:no-underline text-white font-medium"
                  >
                    View statistics →
                  </button>
                </p>
                <p className="text-sm">
                  ⚖️ <strong>Your Rights:</strong> Access to benefits is protected under 4 federal anti-discrimination acts and 7 UN treaties.
                  <button 
                    onClick={() => navigate('/rights')}
                    className="ml-2 underline hover:no-underline text-white font-medium"
                  >
                    Know your rights →
                  </button>
                </p>
              </div>
              <div className="flex items-center text-sm text-accent-100">
                <Sparkles className="w-4 h-4 mr-2" />
                <span>Last updated: 2 hours ago</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">${filteredEntitlements.reduce((sum, ent) => sum + (ent.estimatedValue || 0), 0).toLocaleString()}</div>
              <div className="text-accent-100">Total potential value</div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search benefits and entitlements..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            
            <div className="flex gap-4">
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.label}</option>
                ))}
              </select>
              
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'match' | 'value' | 'deadline')}
              >
                <option value="match">Sort by Match</option>
                <option value="value">Sort by Value</option>
                <option value="deadline">Sort by Deadline</option>
              </select>
            </div>
          </div>
        </div>

        {/* Entitlements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredEntitlements.map((entitlement) => {
            const aiApplication = aiApplications[entitlement.id];
            return (
            <div key={entitlement.id} className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{entitlement.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{entitlement.description}</p>
                </div>
                <div className={`px-2 py-1 rounded-full text-xs font-medium flex items-center ${getStatusColor(entitlement.status)}`}>
                  {getStatusIcon(entitlement.status)}
                  <span className="ml-1 capitalize">{entitlement.status}</span>
                </div>
              </div>

              {/* AI Application Progress */}
              {aiApplication && (
                <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-blue-900">🤖 AI Application</span>
                    <span className="text-xs text-blue-600">{aiApplication.progress}%</span>
                  </div>
                  <div className="w-full bg-blue-200 rounded-full h-2 mb-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${aiApplication.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-blue-800">{aiApplication.nextStep}</p>
                  
                  {aiApplication.status === 'documents_needed' && aiApplication.documents && (
                    <div className="mt-3">
                      <p className="text-xs font-medium text-blue-900 mb-2">Required Documents:</p>
                      <div className="space-y-1">
                        {aiApplication.documents.map((doc, index) => (
                          <div key={index} className="flex items-center text-xs text-blue-800">
                            <FileText className="w-3 h-3 mr-1" />
                            {doc}
                          </div>
                        ))}
                      </div>
                      <button
                        onClick={() => uploadDocuments(entitlement.id)}
                        className="mt-2 px-3 py-1 bg-blue-600 text-white text-xs rounded-md hover:bg-blue-700 transition-colors"
                      >
                        Upload Documents
                      </button>
                    </div>
                  )}
                  
                  {aiApplication.status === 'approved' && (
                    <div className="mt-2 flex items-center text-green-700">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      <span className="text-xs font-medium">Application Approved!</span>
                    </div>
                  )}
                  
                  {aiApplication.status === 'rejected' && (
                    <div className="mt-2 flex items-center text-red-700">
                      <AlertTriangle className="w-4 h-4 mr-1" />
                      <span className="text-xs font-medium">Needs Review</span>
                    </div>
                  )}
                </div>
              )}

              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                  </div>
                  <div className="text-2xl font-bold text-green-600">{entitlement.eligibilityMatch}%</div>
                  <div className="text-xs text-gray-500">Match</div>
                </div>
                
                {entitlement.estimatedValue && (
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <DollarSign className="w-4 h-4 text-blue-500" />
                    </div>
                    <div className="text-2xl font-bold text-blue-600">${entitlement.estimatedValue.toLocaleString()}</div>
                    <div className="text-xs text-gray-500">Value</div>
                  </div>
                )}
                
                {entitlement.deadline && (
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Calendar className="w-4 h-4 text-orange-500" />
                    </div>
                    <div className="text-sm font-medium text-orange-600">
                      {new Date(entitlement.deadline).toLocaleDateString()}
                    </div>
                    <div className="text-xs text-gray-500">Deadline</div>
                  </div>
                )}
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Requirements:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {entitlement.requirements.slice(0, 2).map((req, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                      {req}
                    </li>
                  ))}
                  {entitlement.requirements.length > 2 && (
                    <li className="text-gray-500 text-xs">
                      +{entitlement.requirements.length - 2} more requirements
                    </li>
                  )}
                </ul>
              </div>

              <div className="flex space-x-3">
                {entitlement.status === 'eligible' && !aiApplication && (
                  <button
                    onClick={() => handleApply(entitlement)}
                    className="flex-1 bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center"
                  >
                    <Bot className="w-4 h-4 mr-2" />
                    Apply with AI
                  </button>
                )}
                
                {aiApplication && aiApplication.status === 'processing' && (
                  <button
                    disabled
                    className="flex-1 bg-blue-400 text-white px-4 py-2 rounded-lg font-medium flex items-center justify-center opacity-75"
                  >
                    <div className="animate-spin mr-2 w-4 h-4 border-2 border-white border-t-transparent rounded-full"></div>
                    Processing...
                  </button>
                )}
                
                {aiApplication && aiApplication.status === 'approved' && (
                  <button
                    disabled
                    className="flex-1 bg-green-500 text-white px-4 py-2 rounded-lg font-medium flex items-center justify-center"
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Approved
                  </button>
                )}
                
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            );
          })}
        </div>

        {filteredEntitlements.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No benefits found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or category filter.</p>
          </div>
        )}
      </div>

      {/* AI Application Confirmation Modal */}
      {showApplicationModal.show && showApplicationModal.entitlement && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mr-4">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">AI Application Assistant</h3>
                <p className="text-sm text-gray-600">Ready to apply with AI?</p>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-medium text-gray-900 mb-2">{showApplicationModal.entitlement.title}</h4>
              <p className="text-sm text-gray-600 mb-4">{showApplicationModal.entitlement.description}</p>
              
              <div className="bg-blue-50 rounded-lg p-4">
                <h5 className="text-sm font-medium text-blue-900 mb-2">🤖 AI will help you:</h5>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Analyze your eligibility automatically</li>
                  <li>• Pre-fill application forms with your profile</li>
                  <li>• Guide you through document requirements</li>
                  <li>• Submit your application when ready</li>
                </ul>
              </div>
              
              <div className="mt-4 flex items-center text-sm text-green-600">
                <CheckCircle className="w-4 h-4 mr-1" />
                <span>Eligibility match: {showApplicationModal.entitlement.eligibilityMatch}%</span>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <button
                onClick={() => setShowApplicationModal({show: false})}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => startAiApplication(showApplicationModal.entitlement!)}
                className="flex-1 bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Start AI Application
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EntitlementFinder;