import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Scale, 
  BookOpen, 
  CheckCircle, 
  Play, 
  Users,
  Globe,
  Building,
  Gavel,
  Shield,
  Flag,
  Clock,
  Award
} from 'lucide-react';

const RightsModule: React.FC = () => {
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState(0);
  const [completedSections, setCompletedSections] = useState<number[]>([]);

  const sections = [
    {
      title: 'Introduction to Your Rights',
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-900">Your Rights in Australia</h3>
          <div className="bg-primary-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Flag className="w-6 h-6 mr-2 text-primary-600" />
              <h4 className="font-semibold text-primary-900">Rights come from 5 key sources:</h4>
            </div>
            <div className="space-y-3">
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-3 text-orange-600" />
                <span><strong>Aboriginal & Torres Strait Islander Customary Law</strong> - 60,000+ years</span>
              </div>
              <div className="flex items-center">
                <Scale className="w-5 h-5 mr-3 text-blue-600" />
                <span><strong>Australian Constitution</strong> - 5 explicit rights since 1901</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-5 h-5 mr-3 text-green-600" />
                <span><strong>International Law</strong> - 7 UN treaties ratified</span>
              </div>
              <div className="flex items-center">
                <Building className="w-5 h-5 mr-3 text-purple-600" />
                <span><strong>Statute Law</strong> - 4 federal anti-discrimination acts</span>
              </div>
              <div className="flex items-center">
                <Gavel className="w-5 h-5 mr-3 text-red-600" />
                <span><strong>Common Law</strong> - Judicial decisions like Mabo (1992)</span>
              </div>
            </div>
          </div>
          <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-400">
            <p className="text-yellow-800">
              <strong>Important:</strong> Australia is the only democracy without a national Bill of Rights, 
              though ACT, Queensland, and Victoria have their own rights legislation.
            </p>
          </div>
        </div>
      )
    },
    {
      title: 'Your Constitutional Rights',
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-900">5 Constitutional Rights</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center mb-2">
                <span className="bg-primary-500 text-white text-xs font-bold px-2 py-1 rounded mr-2">s41</span>
                <h4 className="font-semibold">Right to Vote</h4>
              </div>
              <p className="text-sm text-gray-600">Right to vote in federal elections if you could vote in state elections</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center mb-2">
                <span className="bg-primary-500 text-white text-xs font-bold px-2 py-1 rounded mr-2">s51(xxxi)</span>
                <h4 className="font-semibold">Property Rights</h4>
              </div>
              <p className="text-sm text-gray-600">Property can only be acquired by Commonwealth on just terms</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center mb-2">
                <span className="bg-primary-500 text-white text-xs font-bold px-2 py-1 rounded mr-2">s80</span>
                <h4 className="font-semibold">Trial by Jury</h4>
              </div>
              <p className="text-sm text-gray-600">Right to jury trial for indictable federal offenses</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center mb-2">
                <span className="bg-primary-500 text-white text-xs font-bold px-2 py-1 rounded mr-2">s116</span>
                <h4 className="font-semibold">Religious Freedom</h4>
              </div>
              <p className="text-sm text-gray-600">No law establishing religion or prohibiting free exercise</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200 lg:col-span-2">
              <div className="flex items-center mb-2">
                <span className="bg-primary-500 text-white text-xs font-bold px-2 py-1 rounded mr-2">s117</span>
                <h4 className="font-semibold">Non-Discrimination</h4>
              </div>
              <p className="text-sm text-gray-600">No discrimination based on residence in another state</p>
            </div>
          </div>
          <div className="bg-blue-50 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-2">Implied Rights</h4>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Freedom of political communication (established 1990s)</li>
              <li>• Right to vote in genuinely democratic elections</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: 'Anti-Discrimination Protection',
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-900">Federal Anti-Discrimination Acts</h3>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-gray-900">Sex Discrimination Act</h4>
                <span className="bg-pink-100 text-pink-800 text-xs font-medium px-2 py-1 rounded">1984</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">Prohibits discrimination based on sex, marital status, pregnancy</p>
              <div className="text-xs text-gray-500">Covers: Employment, education, accommodation, goods & services</div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-gray-900">Racial Discrimination Act</h4>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">1975</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">Prohibits discrimination based on race, color, national origin</p>
              <div className="text-xs text-gray-500">Australia's first federal anti-discrimination law</div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-gray-900">Disability Discrimination Act</h4>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">1992</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">Prohibits discrimination against people with disabilities</p>
              <div className="text-xs text-gray-500">Includes physical, intellectual, psychiatric, sensory disabilities</div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-gray-900">Age Discrimination Act</h4>
                <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded">2004</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">Prohibits discrimination based on age</p>
              <div className="text-xs text-gray-500">Most recent federal anti-discrimination legislation</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Getting Help - AHRC & Legal Aid',
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-900">When Your Rights Are Violated</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-blue-600 mr-3" />
                <div>
                  <h4 className="font-semibold text-gray-900">Australian Human Rights Commission</h4>
                  <p className="text-sm text-gray-600">Established 1986</p>
                </div>
              </div>
              <ul className="text-sm text-gray-700 space-y-2 mb-4">
                <li>• Handles discrimination complaints</li>
                <li>• Provides recommendations</li>
                <li>• Free conciliation service</li>
                <li>• National human rights education</li>
              </ul>
              <button
                onClick={() => navigate('/chat')}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium"
              >
                File AHRC Complaint with AI Help
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <Gavel className="w-8 h-8 text-green-600 mr-3" />
                <div>
                  <h4 className="font-semibold text-gray-900">Legal Aid & Support</h4>
                  <p className="text-sm text-gray-600">Free & low-cost legal help</p>
                </div>
              </div>
              <ul className="text-sm text-gray-700 space-y-2 mb-4">
                <li>• Legal Aid Australia (means-tested)</li>
                <li>• Community Legal Centres</li>
                <li>• Aboriginal Legal Services</li>
                <li>• Pro bono lawyer programs</li>
              </ul>
              <button
                onClick={() => navigate('/chat')}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg text-sm font-medium"
              >
                Find Legal Help with AI
              </button>
            </div>
          </div>
          <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-400">
            <h4 className="font-semibold text-red-900 mb-2">Emergency Rights Violations</h4>
            <p className="text-red-800 text-sm">
              For urgent human rights violations, contact emergency services (000) or the nearest police station. 
              For immigration detention or deportation issues, contact a lawyer immediately.
            </p>
          </div>
        </div>
      )
    },
    {
      title: 'Rights Assessment Quiz',
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-900">Test Your Rights Knowledge</h3>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="space-y-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium mb-3">1. How many explicit rights are in the Australian Constitution?</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="radio" name="q1" className="mr-2" />
                    <span className="text-sm">3 rights</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="q1" className="mr-2" />
                    <span className="text-sm">5 rights ✓</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="q1" className="mr-2" />
                    <span className="text-sm">10 rights</span>
                  </label>
                </div>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium mb-3">2. Which act was Australia's first federal anti-discrimination law?</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="radio" name="q2" className="mr-2" />
                    <span className="text-sm">Sex Discrimination Act 1984</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="q2" className="mr-2" />
                    <span className="text-sm">Racial Discrimination Act 1975 ✓</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="q2" className="mr-2" />
                    <span className="text-sm">Disability Discrimination Act 1992</span>
                  </label>
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium mb-3">3. How many core UN human rights treaties has Australia ratified?</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="radio" name="q3" className="mr-2" />
                    <span className="text-sm">5 treaties</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="q3" className="mr-2" />
                    <span className="text-sm">7 treaties ✓</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="q3" className="mr-2" />
                    <span className="text-sm">12 treaties</span>
                  </label>
                </div>
              </div>
            </div>
            <button
              className="w-full mt-6 bg-primary-500 hover:bg-primary-600 text-white py-3 px-4 rounded-lg font-medium"
              onClick={() => {
                alert('Great job! You\'ve completed the Rights Assessment. Your knowledge score will be saved to your profile.');
                setCompletedSections([...completedSections, currentSection]);
              }}
            >
              Submit Assessment
            </button>
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
                  <Scale className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-gray-900">Your Rights as a Resident</h1>
                  <p className="text-xs text-primary-600">Interactive Learning Module</p>
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

export default RightsModule;