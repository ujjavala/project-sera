import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AustralianRights } from '../types';
import { 
  ArrowLeft,
  Scale,
  BookOpen,
  Globe,
  Gavel,
  Users,
  Shield,
  Building,
  Calendar,
  CheckCircle,
  Clock,
  AlertTriangle,
  Scroll,
  Flag,
  Heart,
  Vote,
  Home,
  GraduationCap
} from 'lucide-react';

const AustralianRightsPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('overview');

  // Comprehensive rights data based on the provided information
  const rightsData: AustralianRights = {
    sources: [
      {
        id: 'customary',
        name: 'Aboriginal and Torres Strait Islander Customary Law',
        description: 'Traditional legal systems governing community responsibilities and practices',
        duration: '60,000+ years',
        examples: ['Land rights', 'Cultural practices', 'Community governance', 'Sacred site protection']
      },
      {
        id: 'constitution',
        name: 'Australian Constitution',
        description: 'Limited explicit rights with some implied rights',
        duration: 'Since 1901',
        examples: ['Voting rights', 'Religious freedom', 'Property rights', 'Trial by jury']
      },
      {
        id: 'international',
        name: 'International Law',
        description: 'UN treaties and declarations (require domestic legislation)',
        duration: 'Since 1945',
        examples: ['UDHR', 'Core UN treaties', 'International conventions']
      },
      {
        id: 'statute',
        name: 'Statute Law',
        description: 'Federal and state legislation protecting specific rights',
        duration: 'Ongoing',
        examples: ['Anti-discrimination acts', 'Privacy laws', 'Human rights acts']
      },
      {
        id: 'common',
        name: 'Common Law',
        description: 'Judicial decisions establishing rights through case precedents',
        duration: 'Ongoing',
        examples: ['Mabo decision', 'Implied rights', 'Natural justice principles']
      }
    ],
    constitutionalRights: [
      { section: '41', right: 'Right to Vote', description: 'Right to vote in federal elections for those who could vote in state elections' },
      { section: '51(xxxi)', right: 'Property Rights', description: 'Property can only be acquired by the Commonwealth on just terms' },
      { section: '80', right: 'Trial by Jury', description: 'Trial by jury for indictable federal offenses' },
      { section: '116', right: 'Religious Freedom', description: 'No law establishing religion or prohibiting free exercise of religion' },
      { section: '117', right: 'Non-Discrimination', description: 'No discrimination based on residence in another state' }
    ],
    impliedRights: [
      { name: 'Political Communication', description: 'Freedom to communicate on political matters', established: 'High Court cases 1990s' },
      { name: 'Voting Rights', description: 'Right to vote in genuinely democratic elections', established: 'Various cases' }
    ],
    internationalTreaties: [
      { name: 'Universal Declaration of Human Rights (UDHR)', year: '1948', status: 'ratified', description: '30 articles of fundamental human rights', articles: 30 },
      { name: 'International Covenant on Civil and Political Rights', year: '1980', status: 'ratified', description: 'Core civil and political rights treaty' },
      { name: 'International Covenant on Economic, Social and Cultural Rights', year: '1975', status: 'ratified', description: 'Economic, social and cultural rights' },
      { name: 'Convention on Elimination of Racial Discrimination', year: '1975', status: 'ratified', description: 'Anti-racial discrimination treaty' },
      { name: 'Convention on Elimination of Discrimination Against Women', year: '1983', status: 'ratified', description: 'Women\'s rights treaty' },
      { name: 'Convention Against Torture', year: '1989', status: 'ratified', description: 'Prohibition of torture and cruel treatment' },
      { name: 'Convention on the Rights of the Child', year: '1990', status: 'ratified', description: 'Children\'s rights protection' }
    ],
    statuteLaws: [
      { name: 'Sex Discrimination Act', year: '1984', focus: 'Gender equality', description: 'Prohibits discrimination based on sex, marital status, pregnancy' },
      { name: 'Racial Discrimination Act', year: '1975', focus: 'Racial equality', description: 'Prohibits discrimination based on race, color, national origin' },
      { name: 'Disability Discrimination Act', year: '1992', focus: 'Disability rights', description: 'Prohibits discrimination against people with disabilities' },
      { name: 'Age Discrimination Act', year: '2004', focus: 'Age equality', description: 'Prohibits discrimination based on age' }
    ],
    landmarkCases: [
      { name: 'Mabo v Queensland', year: '1992', impact: 'Native Title Recognition', description: 'Recognized Indigenous land rights, overturning terra nullius' },
      { name: 'Australian Capital Television v Commonwealth', year: '1992', impact: 'Political Communication', description: 'Established implied freedom of political communication' },
      { name: 'Nationwide News v Wills', year: '1992', impact: 'Press Freedom', description: 'Freedom of political communication extends to media' }
    ],
    institutions: [
      { name: 'Australian Human Rights Commission (AHRC)', established: '1986', role: 'Rights Protection', description: 'Handles discrimination complaints and promotes human rights' },
      { name: 'Parliamentary Joint Committee on Human Rights', established: '2011', role: 'Legislative Review', description: 'Reviews bills against 7 core international treaties' },
      { name: 'Federal Court of Australia', established: '1976', role: 'Rights Enforcement', description: 'Hears human rights and discrimination cases' }
    ],
    jurisdictionalRights: [
      { jurisdiction: 'Australian Capital Territory', hasRights: true, year: '2004', name: 'Human Rights Act 2004' },
      { jurisdiction: 'Queensland', hasRights: true, year: '2019', name: 'Human Rights Act 2019' },
      { jurisdiction: 'Victoria', hasRights: true, year: '2006', name: 'Charter of Human Rights and Responsibilities Act 2006' },
      { jurisdiction: 'Commonwealth', hasRights: false },
      { jurisdiction: 'New South Wales', hasRights: false },
      { jurisdiction: 'South Australia', hasRights: false },
      { jurisdiction: 'Western Australia', hasRights: false },
      { jurisdiction: 'Tasmania', hasRights: false },
      { jurisdiction: 'Northern Territory', hasRights: false }
    ]
  };

  const categories = [
    { id: 'overview', label: 'Overview', icon: Scale },
    { id: 'sources', label: 'Sources', icon: BookOpen },
    { id: 'constitutional', label: 'Constitutional', icon: Scroll },
    { id: 'international', label: 'International', icon: Globe },
    { id: 'legislation', label: 'Legislation', icon: Building },
    { id: 'cases', label: 'Landmark Cases', icon: Gavel },
    { id: 'institutions', label: 'Institutions', icon: Shield },
    { id: 'jurisdictions', label: 'Jurisdictions', icon: Flag }
  ];

  const getRightsIcon = (category: string) => {
    switch (category) {
      case 'customary': return Users;
      case 'constitution': return Scroll;
      case 'international': return Globe;
      case 'statute': return Building;
      case 'common': return Gavel;
      default: return Scale;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ratified': return 'text-green-600 bg-green-50';
      case 'signed': return 'text-yellow-600 bg-yellow-50';
      case 'not_signed': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-white via-primary-50 to-accent-50 shadow-lg border-b border-primary-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <button
                onClick={() => navigate('/dashboard')}
                className="flex items-center space-x-2 text-primary-600 hover:text-primary-800 mr-6 p-2 hover:bg-white rounded-xl transition-all shadow-sm border border-gray-200"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Back to Dashboard</span>
              </button>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Scale className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Rights in Australia</h1>
                  <p className="text-xs text-primary-600 font-medium">Your Complete Rights Guide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-primary-500 to-primary-700 rounded-xl p-8 mb-8 text-white">
          <div className="flex items-center mb-6">
            <Flag className="w-8 h-8 mr-3" />
            <div>
              <h2 className="text-3xl font-bold mb-2">Rights in Australia</h2>
              <p className="text-primary-100">Understanding your rights from 5 key sources spanning 60,000+ years</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white-opacity-20 rounded-lg p-4 text-center">
              <Users className="w-6 h-6 mx-auto mb-2" />
              <div className="text-2xl font-bold">60,000+</div>
              <div className="text-sm text-primary-100">Years of Indigenous Law</div>
            </div>
            <div className="bg-white-opacity-20 rounded-lg p-4 text-center">
              <Scroll className="w-6 h-6 mx-auto mb-2" />
              <div className="text-2xl font-bold">5</div>
              <div className="text-sm text-primary-100">Constitutional Rights</div>
            </div>
            <div className="bg-white-opacity-20 rounded-lg p-4 text-center">
              <Globe className="w-6 h-6 mx-auto mb-2" />
              <div className="text-2xl font-bold">7</div>
              <div className="text-sm text-primary-100">UN Treaties Ratified</div>
            </div>
            <div className="bg-white-opacity-20 rounded-lg p-4 text-center">
              <Building className="w-6 h-6 mx-auto mb-2" />
              <div className="text-2xl font-bold">4</div>
              <div className="text-sm text-primary-100">Federal Anti-Discrimination Acts</div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-white-opacity-20 rounded-lg">
            <p className="text-sm font-medium mb-2">🏛️ Unique Status</p>
            <p className="text-primary-100 text-sm">
              Australia is the only democracy without a national Bill of Rights, though ACT, Queensland, and Victoria have their own rights legislation.
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
          <div className="flex overflow-x-auto p-1">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-colors whitespace-nowrap min-w-fit ${
                    selectedCategory === category.id
                      ? 'bg-primary-500 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{category.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content based on selected category */}
        {selectedCategory === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Heart className="w-6 h-6 mr-2 text-accent-500" />
                Types of Rights
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Users className="w-5 h-5 mr-2 text-blue-600" />
                    <h4 className="font-semibold text-blue-900">Civil & Political Rights</h4>
                  </div>
                  <p className="text-sm text-blue-700">Freedom of movement, speech, protest, religion, voting rights</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Home className="w-5 h-5 mr-2 text-green-600" />
                    <h4 className="font-semibold text-green-900">Social & Economic Rights</h4>
                  </div>
                  <p className="text-sm text-green-700">Access to housing, healthcare, education, social services</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <AlertTriangle className="w-6 h-6 mr-2 text-yellow-500" />
                Key Challenge
              </h3>
              <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                <h4 className="font-semibold text-yellow-900 mb-2">No National Bill of Rights</h4>
                <p className="text-sm text-yellow-800 mb-3">
                  Australia is unique among democracies for lacking comprehensive national rights legislation.
                </p>
                <div className="text-xs text-yellow-700">
                  <p><strong>With rights laws:</strong> ACT (2004), Victoria (2006), Queensland (2019)</p>
                  <p><strong>Without:</strong> Commonwealth, NSW, SA, WA, TAS, NT</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedCategory === 'sources' && (
          <div className="space-y-6">
            {rightsData.sources.map((source) => {
              const Icon = getRightsIcon(source.id);
              return (
                <div key={source.id} className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold text-gray-900">{source.name}</h3>
                        <span className="text-sm text-primary-600 font-medium">{source.duration}</span>
                      </div>
                      <p className="text-gray-600 mb-4">{source.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {source.examples.map((example, index) => (
                          <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {selectedCategory === 'constitutional' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Scroll className="w-6 h-6 mr-2 text-primary-500" />
                Constitutional Rights (5 Explicit Rights)
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {rightsData.constitutionalRights.map((right) => (
                  <div key={right.section} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center mb-2">
                      <span className="bg-primary-500 text-white text-xs font-bold px-2 py-1 rounded">
                        s{right.section}
                      </span>
                      <h4 className="font-semibold text-gray-900 ml-2">{right.right}</h4>
                    </div>
                    <p className="text-sm text-gray-600">{right.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-blue-500" />
                Implied Rights
              </h3>
              <div className="space-y-3">
                {rightsData.impliedRights.map((right, index) => (
                  <div key={index} className="p-3 bg-blue-50 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-blue-900">{right.name}</h4>
                        <p className="text-sm text-blue-700">{right.description}</p>
                      </div>
                      <span className="text-xs text-blue-600 font-medium">{right.established}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {selectedCategory === 'international' && (
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900 flex items-center">
                <Globe className="w-6 h-6 mr-2 text-blue-500" />
                International Treaties (7 Core Treaties Ratified)
              </h3>
              <div className="text-sm text-gray-600">
                <span className="font-medium">Note:</span> Require domestic legislation to apply
              </div>
            </div>
            
            <div className="mb-6 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center mb-2">
                <CheckCircle className="w-5 h-5 mr-2 text-blue-600" />
                <h4 className="font-semibold text-blue-900">Universal Declaration of Human Rights (1948)</h4>
              </div>
              <p className="text-sm text-blue-700 mb-2">
                Adopted with Dr H.V. Evatt as UN General Assembly President
              </p>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                30 Articles
              </span>
            </div>

            <div className="space-y-3">
              {rightsData.internationalTreaties.filter(t => t.name !== 'Universal Declaration of Human Rights (UDHR)').map((treaty) => (
                <div key={treaty.name} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">{treaty.name}</h4>
                    <p className="text-sm text-gray-600">{treaty.description}</p>
                  </div>
                  <div className="text-right">
                    <span className={`text-xs font-medium px-2 py-1 rounded ${getStatusColor(treaty.status)}`}>
                      {treaty.status === 'ratified' ? `Ratified ${treaty.year}` : treaty.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedCategory === 'legislation' && (
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <Building className="w-6 h-6 mr-2 text-green-500" />
              Federal Anti-Discrimination Acts
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {rightsData.statuteLaws.map((law) => (
                <div key={law.name} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-gray-900">{law.name}</h4>
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                      {law.year}
                    </span>
                  </div>
                  <div className="mb-2">
                    <span className="text-sm font-medium text-green-600">{law.focus}</span>
                  </div>
                  <p className="text-sm text-gray-600">{law.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedCategory === 'cases' && (
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <Gavel className="w-6 h-6 mr-2 text-purple-500" />
              Landmark Cases
            </h3>
            <div className="space-y-4">
              {rightsData.landmarkCases.map((case_) => (
                <div key={case_.name} className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-purple-900">{case_.name}</h4>
                    <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded">
                      {case_.year}
                    </span>
                  </div>
                  <div className="mb-2">
                    <span className="text-sm font-medium text-purple-600">{case_.impact}</span>
                  </div>
                  <p className="text-sm text-purple-700">{case_.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedCategory === 'institutions' && (
          <div className="space-y-6">
            {rightsData.institutions.map((institution) => (
              <div key={institution.name} className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-accent-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-gray-900">{institution.name}</h3>
                      <span className="text-sm text-accent-600 font-medium">Est. {institution.established}</span>
                    </div>
                    <div className="mb-2">
                      <span className="bg-accent-100 text-accent-800 text-sm font-medium px-3 py-1 rounded-full">
                        {institution.role}
                      </span>
                    </div>
                    <p className="text-gray-600">{institution.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedCategory === 'jurisdictions' && (
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <Flag className="w-6 h-6 mr-2 text-blue-500" />
              Rights Legislation by Jurisdiction
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {rightsData.jurisdictionalRights.map((jurisdiction) => (
                <div key={jurisdiction.jurisdiction} className={`p-4 rounded-lg border ${
                  jurisdiction.hasRights ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-gray-50'
                }`}>
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-gray-900">{jurisdiction.jurisdiction}</h4>
                    {jurisdiction.hasRights ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : (
                      <AlertTriangle className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                  {jurisdiction.hasRights && jurisdiction.name && (
                    <div className="mt-2">
                      <p className="text-sm font-medium text-green-700">{jurisdiction.name}</p>
                      <p className="text-xs text-green-600">Enacted {jurisdiction.year}</p>
                    </div>
                  )}
                  {!jurisdiction.hasRights && (
                    <p className="text-sm text-gray-600 mt-1">No specific rights legislation</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Data Source */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            Information sourced from the{' '}
            <a 
              href="https://peo.gov.au/understand-our-parliament/how-parliament-works/system-of-government/rights-in-australia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 underline"
            >
              Parliament of Australia - Parliamentary Education Office
            </a>
          </p>
          <p className="mt-1">Comprehensive rights framework covering 60,000+ years of Australian legal history</p>
        </div>
      </div>
    </div>
  );
};

export default AustralianRightsPage;