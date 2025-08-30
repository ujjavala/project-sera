import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Building, 
  CheckCircle, 
  Users,
  MapPin,
  Crown,
  Scale,
  Vote,
  Award,
  Layers,
  FileText,
  Globe
} from 'lucide-react';

const DemocracyModule: React.FC = () => {
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState(0);
  const [completedSections, setCompletedSections] = useState<number[]>([]);

  const sections = [
    {
      title: 'Three Levels of Government',
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-900">How Government Works in Australia</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border-2 border-blue-200">
              <div className="flex items-center mb-4">
                <Building className="w-8 h-8 mr-3 text-blue-600" />
                <h4 className="font-bold text-blue-900">Federal Government</h4>
              </div>
              <div className="space-y-3">
                <div className="text-sm">
                  <strong>Location:</strong> Canberra (Parliament House)
                </div>
                <div className="text-sm">
                  <strong>Responsibilities:</strong>
                  <ul className="mt-2 space-y-1 ml-4">
                    <li>• Immigration & citizenship</li>
                    <li>• Defence & foreign affairs</li>
                    <li>• Social security</li>
                    <li>• Medicare & healthcare policy</li>
                    <li>• Taxation</li>
                    <li>• Trade & commerce</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-3 rounded text-sm text-blue-800">
                  <strong>Structure:</strong> Prime Minister + Cabinet, House of Representatives (151 seats), Senate (76 seats)
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border-2 border-green-200">
              <div className="flex items-center mb-4">
                <MapPin className="w-8 h-8 mr-3 text-green-600" />
                <h4 className="font-bold text-green-900">State/Territory</h4>
              </div>
              <div className="space-y-3">
                <div className="text-sm">
                  <strong>6 States + 2 Territories</strong>
                </div>
                <div className="text-sm">
                  <strong>Responsibilities:</strong>
                  <ul className="mt-2 space-y-1 ml-4">
                    <li>• Education (schools)</li>
                    <li>• Health services</li>
                    <li>• Police & emergency services</li>
                    <li>• Public transport</li>
                    <li>• Housing</li>
                    <li>• Environment</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-3 rounded text-sm text-green-800">
                  <strong>Structure:</strong> Premier/Chief Minister + Parliament (varies by state)
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border-2 border-orange-200">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 mr-3 text-orange-600" />
                <h4 className="font-bold text-orange-900">Local Council</h4>
              </div>
              <div className="space-y-3">
                <div className="text-sm">
                  <strong>Your Local Area</strong>
                </div>
                <div className="text-sm">
                  <strong>Responsibilities:</strong>
                  <ul className="mt-2 space-y-1 ml-4">
                    <li>• Local roads & footpaths</li>
                    <li>• Rubbish collection</li>
                    <li>• Parks & recreation</li>
                    <li>• Building approvals</li>
                    <li>• Local planning</li>
                    <li>• Community facilities</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-3 rounded text-sm text-orange-800">
                  <strong>Structure:</strong> Mayor + Councillors (number varies by area)
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Westminster System',
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-900">Australia's Parliamentary System</h3>
          <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-400">
            <div className="flex items-center mb-4">
              <Crown className="w-6 h-6 mr-2 text-purple-600" />
              <h4 className="font-semibold text-purple-900">Westminster System from Britain</h4>
            </div>
            <p className="text-purple-800 mb-4">
              Australia inherited the Westminster system from Britain, adapted for our federal structure and Constitution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <Vote className="w-6 h-6 mr-2 text-blue-600" />
                <h4 className="font-semibold text-gray-900">Executive Power</h4>
              </div>
              <div className="space-y-3 text-sm">
                <div><strong>Governor-General:</strong> Queen's representative, ceremonial role</div>
                <div><strong>Prime Minister:</strong> Head of government, leads party with majority</div>
                <div><strong>Cabinet:</strong> Senior ministers make major decisions</div>
                <div><strong>Public Service:</strong> Implements government policies</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <Building className="w-6 h-6 mr-2 text-green-600" />
                <h4 className="font-semibold text-gray-900">Legislative Power</h4>
              </div>
              <div className="space-y-3 text-sm">
                <div><strong>House of Representatives:</strong> 151 members, government formed here</div>
                <div><strong>Senate:</strong> 76 members, "states' house", reviews laws</div>
                <div><strong>Both Houses:</strong> Must pass laws (except money bills)</div>
                <div><strong>Committees:</strong> Detailed examination of issues</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <Scale className="w-6 h-6 mr-2 text-red-600" />
                <h4 className="font-semibold text-gray-900">Judicial Power</h4>
              </div>
              <div className="space-y-3 text-sm">
                <div><strong>High Court:</strong> Final court of appeal, interprets Constitution</div>
                <div><strong>Federal Courts:</strong> Federal law matters</div>
                <div><strong>State Courts:</strong> Most criminal and civil matters</div>
                <div><strong>Independence:</strong> Judges appointed for life (until 70)</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 mr-2 text-orange-600" />
                <h4 className="font-semibold text-gray-900">Responsible Government</h4>
              </div>
              <div className="space-y-3 text-sm">
                <div><strong>Ministers:</strong> Must be members of Parliament</div>
                <div><strong>Question Time:</strong> Ministers answer to Parliament daily</div>
                <div><strong>No Confidence:</strong> Government falls if loses majority</div>
                <div><strong>Elections:</strong> At least every 3 years (House)</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Federation & Constitution',
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-900">Federation of Australia (1901)</h3>
          <div className="bg-blue-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Layers className="w-6 h-6 mr-2 text-blue-600" />
              <h4 className="font-semibold text-blue-900">Why Federation?</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium text-blue-800 mb-2">Before 1901:</h5>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• 6 separate British colonies</li>
                  <li>• Different laws, currencies, railways</li>
                  <li>• Tariffs between colonies</li>
                  <li>• No unified defence</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-blue-800 mb-2">After 1901:</h5>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• One nation with shared defence</li>
                  <li>• Free trade between states</li>
                  <li>• Common currency & immigration</li>
                  <li>• States kept many powers</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex items-center mb-4">
              <FileText className="w-6 h-6 mr-2 text-green-600" />
              <h4 className="font-semibold text-gray-900">The Constitution</h4>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-gray-800 mb-2">What it does:</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Divides power between federal & state governments</li>
                    <li>• Establishes Parliament, courts, executive</li>
                    <li>• Protects some individual rights (5 explicit)</li>
                    <li>• Sets rules for changing the Constitution</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800 mb-2">Key Features:</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Federal system (not unitary)</li>
                    <li>• Separation of powers</li>
                    <li>• Rule of law</li>
                    <li>• Representative democracy</li>
                  </ul>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-medium text-gray-800 mb-2">Changing the Constitution:</h5>
                <p className="text-sm text-gray-700">
                  Requires a <strong>referendum</strong> - majority of voters nationally AND majority of states (4/6) must vote "Yes". Only 8 of 44 referendums have succeeded since 1901.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'How Laws Are Made',
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-900">From Idea to Law</h3>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">Idea Stage</h4>
                  <p className="text-sm text-gray-600">Ideas come from government policy, public pressure, election promises, or parliamentary committees</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">Bill Drafted</h4>
                  <p className="text-sm text-gray-600">Parliamentary drafters write the bill (proposed law) with legal language</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">First Reading</h4>
                  <p className="text-sm text-gray-600">Bill introduced to Parliament, title read out, no debate</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">Second Reading</h4>
                  <p className="text-sm text-gray-600">Main debate on principles of the bill, MPs vote on whether to continue</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">5</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">Committee Stage</h4>
                  <p className="text-sm text-gray-600">Detailed examination, amendments can be made line-by-line</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-sm">6</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">Third Reading</h4>
                  <p className="text-sm text-gray-600">Final vote in first house (usually House of Representatives)</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm">7</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">Senate Process</h4>
                  <p className="text-sm text-gray-600">Same three-reading process in Senate, can amend and send back</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center text-white font-bold text-sm">8</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">Royal Assent</h4>
                  <p className="text-sm text-gray-600">Governor-General signs bill into law on behalf of the Queen</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-400">
            <h4 className="font-semibold text-yellow-900 mb-2">Public Participation</h4>
            <ul className="text-sm text-yellow-800 space-y-1">
              <li>• <strong>Parliamentary committees</strong> often hold public inquiries</li>
              <li>• <strong>Petition Parliament</strong> about issues you care about</li>
              <li>• <strong>Contact your MP</strong> to influence their vote</li>
              <li>• <strong>Senate inquiries</strong> are often open to public submissions</li>
            </ul>
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
                  <Building className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-gray-900">How Australian Democracy Works</h1>
                  <p className="text-xs text-primary-600">Government Structure & Law Making</p>
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

export default DemocracyModule;