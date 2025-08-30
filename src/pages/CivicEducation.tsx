import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import { CivicEducationModule } from '../types';
import { 
  ArrowLeft,
  Heart,
  BookOpen,
  Users,
  MapPin,
  Vote,
  Scale,
  Play,
  CheckCircle,
  Clock,
  Award,
  BarChart3 as Progress,
  Zap,
  Target,
  Globe
} from 'lucide-react';

const CivicEducation: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Modules', icon: Globe },
    { id: 'democracy', label: 'Democracy', icon: Vote },
    { id: 'rights', label: 'Rights', icon: Scale },
    { id: 'services', label: 'Public Services', icon: MapPin },
    { id: 'community', label: 'Community', icon: Users },
    { id: 'representatives', label: 'Representatives', icon: Target }
  ];

  const mockModules: CivicEducationModule[] = [
    {
      id: '1',
      title: 'How Australian Democracy Works',
      description: 'Learn about the three levels of government and how decisions are made that affect your daily life.',
      category: 'democracy',
      duration: '45 minutes',
      completed: true,
      progress: 100,
      interactive: true
    },
    {
      id: '2',
      title: 'Your Rights as a Resident',
      description: 'Understand your fundamental rights and how to protect them in Australia.',
      category: 'rights',
      duration: '30 minutes',
      completed: true,
      progress: 100,
      interactive: true
    },
    {
      id: '3',
      title: 'Accessing Public Services',
      description: 'Navigate healthcare, education, and social services with confidence.',
      category: 'services',
      duration: '60 minutes',
      completed: false,
      progress: 65,
      interactive: true
    },
    {
      id: '4',
      title: 'Know Your Local Representatives',
      description: 'Learn how to contact and engage with your local, state, and federal representatives.',
      category: 'representatives',
      duration: '25 minutes',
      completed: false,
      progress: 0,
      interactive: true
    },
    {
      id: '5',
      title: 'Community Decision-Making',
      description: 'Participate in local councils, community meetings, and civic forums.',
      category: 'community',
      duration: '40 minutes',
      completed: false,
      progress: 20,
      interactive: true
    },
    {
      id: '6',
      title: 'Understanding Voting Systems',
      description: 'Master preferential voting, senate elections, and referendum processes.',
      category: 'democracy',
      duration: '35 minutes',
      completed: false,
      progress: 0,
      interactive: true
    },
    {
      id: '7',
      title: 'Legal Aid and Support',
      description: 'Know where to get help when your rights are violated or you need legal assistance.',
      category: 'rights',
      duration: '50 minutes',
      completed: false,
      progress: 0,
      interactive: true
    },
    {
      id: '8',
      title: 'Civic Responsibilities',
      description: 'Learn about jury duty, tax obligations, and community service opportunities.',
      category: 'community',
      duration: '30 minutes',
      completed: false,
      progress: 0,
      interactive: false
    }
  ];

  const filteredModules = mockModules.filter(module => 
    selectedCategory === 'all' || module.category === selectedCategory
  );

  const totalProgress = Math.round(
    mockModules.reduce((sum, module) => sum + module.progress, 0) / mockModules.length
  );

  const completedCount = mockModules.filter(m => m.completed).length;

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.icon : BookOpen;
  };

  const startModule = (module: CivicEducationModule) => {
    // Navigate to specific module pages
    switch (module.id) {
      case '1':
        navigate('/civic-education/democracy');
        break;
      case '2':
        navigate('/civic-education/rights');
        break;
      case '3':
        navigate('/civic-education/services');
        break;
      case '4':
        navigate('/civic-education/representatives');
        break;
      case '5':
        navigate('/civic-education/community');
        break;
      case '6':
        navigate('/civic-education/voting');
        break;
      case '7':
        navigate('/civic-education/legal-aid');
        break;
      case '8':
        navigate('/civic-education/responsibilities');
        break;
      default:
        navigate('/rights'); // Fallback to rights guide
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-white via-blue-50 to-purple-50 shadow-lg border-b border-blue-200">
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
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Civic Education</h1>
                  <p className="text-xs text-blue-600 font-medium">Learn democracy & civic engagement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Progress Overview */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 mb-8 text-white">
          {/* Citizenship Stats Highlight */}
          <div className="bg-white-opacity-20 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-lg font-semibold mb-2">🇦🇺 Did You Know?</h4>
                <p className="text-sm opacity-90 mb-2">
                  In 2023-24, <strong>192,242</strong> people from <strong>200+</strong> countries became Australian citizens.
                </p>
                <p className="text-xs opacity-80">
                  Top countries: India, New Zealand, UK, Philippines, and China
                </p>
                <p className="text-xs opacity-90 mt-2">
                  ⚖️ <strong>Rights:</strong> Australia has 5 constitutional rights + 4 anti-discrimination acts
                </p>
              </div>
              <div className="space-y-2">
                <button
                  onClick={() => navigate('/citizenship-stats')}
                  className="block w-full bg-white-opacity-30 hover:bg-white-opacity-40 text-white px-3 py-2 rounded-lg text-sm font-medium transition-all"
                >
                  View Stats
                </button>
                <button
                  onClick={() => navigate('/rights')}
                  className="block w-full bg-white-opacity-30 hover:bg-white-opacity-40 text-white px-3 py-2 rounded-lg text-sm font-medium transition-all"
                >
                  Your Rights
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold mb-2">Your Civic Education Journey</h2>
              <p className="text-blue-100">
                Build your understanding of Australian democracy and become an empowered citizen.
              </p>
            </div>
            <div className="text-right">
              <div className="flex items-center justify-center w-20 h-20 bg-white-opacity-20 rounded-full mb-2">
                <span className="text-2xl font-bold">{totalProgress}%</span>
              </div>
              <div className="text-blue-100 text-sm">Overall Progress</div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div className="text-2xl font-bold">{completedCount}</div>
              <div className="text-blue-100 text-sm">Completed Modules</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Clock className="w-8 h-8" />
              </div>
              <div className="text-2xl font-bold">{mockModules.length - completedCount}</div>
              <div className="text-blue-100 text-sm">Remaining</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Award className="w-8 h-8" />
              </div>
              <div className="text-2xl font-bold">3</div>
              <div className="text-blue-100 text-sm">Certificates Earned</div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Browse by Category</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`p-4 rounded-lg border-2 transition-all hover:scale-105 ${
                    isActive
                      ? 'border-primary-500 bg-primary-50 text-primary-700'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-6 h-6 mx-auto mb-2" />
                  <div className="text-sm font-medium">{category.label}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredModules.map((module) => {
            const CategoryIcon = getCategoryIcon(module.category);
            return (
              <div
                key={module.id}
                className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CategoryIcon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{module.title}</h3>
                      <p className="text-gray-600 text-sm">{module.description}</p>
                    </div>
                  </div>
                  
                  {module.completed && (
                    <div className="bg-green-100 text-green-800 p-2 rounded-full">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {module.duration}
                  </div>
                  {module.interactive && (
                    <div className="flex items-center">
                      <Zap className="w-4 h-4 mr-1" />
                      Interactive
                    </div>
                  )}
                </div>

                {module.progress > 0 && (
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Progress</span>
                      <span className="text-sm font-medium text-gray-900">{module.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-primary-500 h-2 rounded-full transition-all"
                        style={{ width: `${module.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                <div className="flex space-x-3">
                  <button
                    onClick={() => startModule(module)}
                    className="flex-1 bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    {module.progress > 0 ? 'Continue' : 'Start Module'}
                  </button>
                  
                  {module.completed && (
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                      Review
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {filteredModules.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No modules found</h3>
            <p className="text-gray-600">Try selecting a different category.</p>
          </div>
        )}

        {/* Achievement Section */}
        {completedCount > 0 && (
          <div className="bg-white rounded-xl shadow-sm p-6 mt-8 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Award className="w-5 h-5 mr-2 text-yellow-500" />
              Your Achievements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <Award className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                <div className="font-medium text-gray-900">Democracy Basics</div>
                <div className="text-sm text-gray-600">Completed foundational modules</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                <Scale className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <div className="font-medium text-gray-900">Rights Advocate</div>
                <div className="text-sm text-gray-600">Mastered your rights</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                <Users className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <div className="font-medium text-gray-900">Community Ready</div>
                <div className="text-sm text-gray-600">Ready to engage locally</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CivicEducation;