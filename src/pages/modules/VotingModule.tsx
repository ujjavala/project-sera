import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Vote, 
  CheckCircle, 
  Users,
  MapPin,
  Clock,
  Shield,
  Phone,
  Globe,
  FileText,
  AlertTriangle,
  Award,
  ExternalLink,
  CreditCard,
  BookOpen,
  HeadphonesIcon
} from 'lucide-react';

const VotingModule: React.FC = () => {
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState(0);
  const [completedSections, setCompletedSections] = useState<number[]>([]);

  const sections = [
    {
      title: 'Your Voting Obligations',
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-900">Compulsory Voting in Australia</h3>
          <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-400">
            <div className="flex items-center mb-4">
              <Vote className="w-6 h-6 mr-2 text-blue-600" />
              <h4 className="font-semibold text-blue-900">Constitutional Right & Civic Duty</h4>
            </div>
            <p className="text-blue-800 mb-4">
              <strong>New Australian citizens must enroll and vote</strong> in all elections:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-600" />
                  <span><strong>Federal elections</strong> (House & Senate)</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-600" />
                  <span><strong>State elections</strong> (your state/territory)</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-600" />
                  <span><strong>Territory elections</strong> (if applicable)</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-600" />
                  <span><strong>Local council elections</strong></span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-400">
            <div className="flex items-center mb-2">
              <AlertTriangle className="w-5 h-5 mr-2 text-yellow-600" />
              <h4 className="font-semibold text-yellow-900">Important Timeline</h4>
            </div>
            <ul className="text-yellow-800 space-y-1">
              <li>• <strong>Enroll from age 16</strong> (if citizen & lived at address 1+ month)</li>
              <li>• <strong>Vote from age 18</strong> (compulsory once enrolled)</li>
              <li>• <strong>Must update enrollment</strong> when you move address</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: 'How to Enroll to Vote',
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-900">Enrollment Process & Requirements</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <FileText className="w-6 h-6 mr-2 text-primary-600" />
                <h4 className="font-semibold text-gray-900">Required Information</h4>
              </div>
              <div className="space-y-3">
                <div>
                  <h5 className="font-medium text-gray-800 mb-2">Identity Documents (choose one):</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <CreditCard className="w-4 h-4 mr-2 text-blue-500" />
                      <span>Australian driver's licence</span>
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="w-4 h-4 mr-2 text-green-500" />
                      <span>Australian passport</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="w-4 h-4 mr-2 text-red-500" />
                      <span>Medicare card</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="w-4 h-4 mr-2 text-purple-500" />
                      <span>Australian citizenship certificate number</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-orange-500" />
                      <span>Verification from enrolled person who knows you</span>
                    </div>
                  </div>
                </div>
                <div className="pt-3 border-t">
                  <p className="text-sm text-gray-600">
                    <strong>Address requirement:</strong> Must have lived at current address for 1+ month
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <Globe className="w-6 h-6 mr-2 text-green-600" />
                <h4 className="font-semibold text-gray-900">Enrollment Methods</h4>
              </div>
              <div className="space-y-4">
                <div className="p-3 bg-green-50 rounded-lg">
                  <h5 className="font-medium text-green-900 mb-2">Online (Recommended)</h5>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>• Fastest method - instant confirmation</li>
                    <li>• Get receipt number for tracking</li>
                    <li>• Available 24/7</li>
                    <li>• Automatic updates when you move</li>
                  </ul>
                  <button 
                    onClick={() => navigate('/chat')}
                    className="mt-3 w-full bg-green-500 hover:bg-green-600 text-white py-2 px-3 rounded text-sm font-medium"
                  >
                    Get Help Enrolling Online
                  </button>
                </div>
                
                <div className="p-3 bg-blue-50 rounded-lg">
                  <h5 className="font-medium text-blue-900 mb-2">Paper Forms</h5>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Available at AEC offices</li>
                    <li>• Post offices and some libraries</li>
                    <li>• Takes longer to process</li>
                    <li>• Good for complex situations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Accessibility & Support',
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-900">Support Services & Accessibility</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <HeadphonesIcon className="w-6 h-6 mr-2 text-blue-600" />
                <h4 className="font-semibold text-gray-900">National Relay Service</h4>
              </div>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <h5 className="font-medium text-blue-900 mb-2">TTY (Text Telephone)</h5>
                  <p className="text-blue-800">Call <strong>13 36 77</strong> then ask for <strong>13 23 26</strong></p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <h5 className="font-medium text-green-900 mb-2">Speak & Listen</h5>
                  <p className="text-green-800">Call <strong>1300 555 727</strong> then ask for <strong>13 23 26</strong></p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <h5 className="font-medium text-purple-900 mb-2">Internet Relay</h5>
                  <p className="text-purple-800">Online relay service → <strong>13 23 26</strong></p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <Globe className="w-6 h-6 mr-2 text-green-600" />
                <h4 className="font-semibold text-gray-900">Language & Special Needs</h4>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <h5 className="font-medium text-gray-900 mb-2">Translated Information</h5>
                  <p className="text-sm text-gray-700">
                    Voting information available in multiple languages including Arabic, Chinese, Greek, Italian, Vietnamese, and more.
                  </p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <h5 className="font-medium text-gray-900 mb-2">Special Circumstances</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>Silent electors:</strong> Address protection</li>
                    <li>• <strong>Travelers:</strong> Postal vote applications</li>
                    <li>• <strong>No fixed address:</strong> Alternative arrangements</li>
                    <li>• <strong>Disability support:</strong> Assistance at polling places</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-400">
            <div className="flex items-center mb-2">
              <Phone className="w-5 h-5 mr-2 text-yellow-600" />
              <h4 className="font-semibold text-yellow-900">Need Help?</h4>
            </div>
            <p className="text-yellow-800 text-sm">
              Australian Electoral Commission (AEC) hotline: <strong>13 23 26</strong><br />
              Or get personalized help with our AI assistant for enrollment guidance.
            </p>
            <button 
              onClick={() => navigate('/chat')}
              className="mt-3 bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded text-sm font-medium"
            >
              Get AI Enrollment Help
            </button>
          </div>
        </div>
      )
    },
    {
      title: 'Understanding Elections',
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-900">Australian Electoral System</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <Vote className="w-6 h-6 mr-2 text-blue-600" />
                <h4 className="font-semibold text-gray-900">How Voting Works</h4>
              </div>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-gray-800 mb-2">Preferential Voting (House of Representatives)</h5>
                  <p className="text-sm text-gray-600 mb-2">Number candidates 1, 2, 3... in order of preference</p>
                  <div className="bg-blue-50 p-3 rounded text-sm text-blue-800">
                    <strong>Example:</strong> If your first choice doesn't win, your vote goes to your second choice, and so on.
                  </div>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800 mb-2">Proportional Voting (Senate)</h5>
                  <p className="text-sm text-gray-600 mb-2">Vote either above or below the line</p>
                  <div className="bg-green-50 p-3 rounded text-sm text-green-800">
                    <strong>Above the line:</strong> Number at least 6 boxes<br />
                    <strong>Below the line:</strong> Number at least 12 boxes
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 mr-2 text-green-600" />
                <h4 className="font-semibold text-gray-900">Practice & Preparation</h4>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-green-50 rounded-lg">
                  <h5 className="font-medium text-green-900 mb-2">Practice Voting</h5>
                  <p className="text-sm text-green-800">
                    AEC provides practice voting tools online to help you understand the process before election day.
                  </p>
                </div>
                <div className="p-3 bg-red-50 rounded-lg">
                  <h5 className="font-medium text-red-900 mb-2">Avoiding False Information</h5>
                  <p className="text-sm text-red-800">
                    Always verify election information from official sources. The AEC is the only authoritative source for federal elections.
                  </p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <h5 className="font-medium text-purple-900 mb-2">Get Involved</h5>
                  <p className="text-sm text-purple-800">
                    Consider election work opportunities - from polling officials to vote counting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Voting Quiz & Resources',
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-900">Test Your Voting Knowledge</h3>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="space-y-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium mb-3">1. At what age can Australian citizens enroll to vote?</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="radio" name="q1" className="mr-2" />
                    <span className="text-sm">16 years old ✓</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="q1" className="mr-2" />
                    <span className="text-sm">18 years old</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="q1" className="mr-2" />
                    <span className="text-sm">21 years old</span>
                  </label>
                </div>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium mb-3">2. How long must you live at an address before you can enroll?</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="radio" name="q2" className="mr-2" />
                    <span className="text-sm">1 week</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="q2" className="mr-2" />
                    <span className="text-sm">1 month ✓</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="q2" className="mr-2" />
                    <span className="text-sm">3 months</span>
                  </label>
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium mb-3">3. What is the AEC hotline number?</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="radio" name="q3" className="mr-2" />
                    <span className="text-sm">13 11 14</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="q3" className="mr-2" />
                    <span className="text-sm">13 23 26 ✓</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="q3" className="mr-2" />
                    <span className="text-sm">1800 803 772</span>
                  </label>
                </div>
              </div>
            </div>
            <button
              className="w-full mt-6 bg-primary-500 hover:bg-primary-600 text-white py-3 px-4 rounded-lg font-medium"
              onClick={() => {
                alert('Excellent! You\'re ready to enroll and vote. Your knowledge will help you participate fully in Australian democracy.');
                setCompletedSections([...completedSections, currentSection]);
              }}
            >
              Complete Voting Assessment
            </button>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-6">
            <h4 className="font-semibold text-blue-900 mb-4 flex items-center">
              <ExternalLink className="w-5 h-5 mr-2" />
              Quick Action Resources
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <button 
                onClick={() => navigate('/chat')}
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded font-medium text-sm"
              >
                🤖 Get AI Enrollment Help
              </button>
              <button 
                onClick={() => navigate('/chat')}
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded font-medium text-sm"
              >
                📞 Find Local AEC Office
              </button>
              <button 
                onClick={() => navigate('/chat')}
                className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded font-medium text-sm"
              >
                🗳️ Practice Voting
              </button>
              <button 
                onClick={() => navigate('/rights')}
                className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded font-medium text-sm"
              >
                ⚖️ Your Voting Rights
              </button>
            </div>
          </div>
        </div>
      )
    }
  ];

  const completeSection = () => {
    if (!completedSections.includes(currentSection)) {
      setCompletedSections([...completedSections, currentSection]);
    }
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const progress = Math.round(((completedSections.length) / sections.length) * 100);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-white via-primary-50 to-accent-50 shadow-lg border-b border-primary-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <button
                onClick={() => navigate('/civic-education')}
                className="flex items-center space-x-2 text-primary-600 hover:text-primary-800 mr-6"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Back to Modules</span>
              </button>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                  <Vote className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-gray-900">Voting & Electoral Enrollment</h1>
                  <p className="text-xs text-primary-600">Your Civic Duty & Rights</p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-gray-900">{progress}% Complete</div>
              <div className="w-24 h-2 bg-gray-200 rounded-full mt-1">
                <div 
                  className="h-2 bg-primary-500 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Navigation */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6 p-4">
          <div className="flex items-center space-x-4 overflow-x-auto">
            {sections.map((section, index) => (
              <button
                key={index}
                onClick={() => setCurrentSection(index)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                  index === currentSection
                    ? 'bg-primary-500 text-white'
                    : completedSections.includes(index)
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {completedSections.includes(index) ? (
                  <CheckCircle className="w-4 h-4" />
                ) : (
                  <span className="w-4 h-4 rounded-full bg-current opacity-50 text-xs flex items-center justify-center font-bold">
                    {index + 1}
                  </span>
                )}
                <span className="text-sm font-medium">{section.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-6">
          {sections[currentSection].content}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
            disabled={currentSection === 0}
            className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <div className="flex space-x-3">
            {currentSection < sections.length - 1 ? (
              <>
                <button
                  onClick={completeSection}
                  className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-lg font-medium"
                >
                  Complete & Continue
                </button>
                <button
                  onClick={() => setCurrentSection(currentSection + 1)}
                  className="border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-2 rounded-lg font-medium"
                >
                  Skip to Next
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  completeSection();
                  navigate('/civic-education');
                }}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium flex items-center space-x-2"
              >
                <Award className="w-4 h-4" />
                <span>Complete Module</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VotingModule;