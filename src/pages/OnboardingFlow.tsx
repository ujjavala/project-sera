import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { useUser } from '../contexts/UserContext';
import { User } from '../types';

const OnboardingFlow: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { setUser, setIsOnboarded } = useUser();
  
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    residencyStatus: searchParams.get('type') as 'citizen' | 'pr' | 'aspiring' || 'citizen',
    languages: [] as string[],
    accessibilityNeeds: '',
    story: '',
    priorities: [] as string[]
  });

  const priorities = [
    'Housing', 'Healthcare', 'Immigration', 
    'Welfare', 'Employment', 'Education'
  ];

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      const user: User = {
        id: Date.now().toString(),
        name: formData.name,
        residencyStatus: formData.residencyStatus,
        languages: formData.languages,
        accessibilityNeeds: formData.accessibilityNeeds,
        story: formData.story,
        priorities: formData.priorities,
        subscriptionTier: 'free'
      };
      setUser(user);
      setIsOnboarded(true);
      navigate('/dashboard');
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      navigate('/');
    }
  };

  const togglePriority = (priority: string) => {
    setFormData(prev => ({
      ...prev,
      priorities: prev.priorities.includes(priority)
        ? prev.priorities.filter(p => p !== priority)
        : [...prev.priorities, priority]
    }));
  };

  const toggleLanguage = (language: string) => {
    setFormData(prev => ({
      ...prev,
      languages: prev.languages.includes(language)
        ? prev.languages.filter(l => l !== language)
        : [...prev.languages, language]
    }));
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">About You</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Residency Status</label>
              <select
                value={formData.residencyStatus}
                onChange={(e) => setFormData(prev => ({ 
                  ...prev, 
                  residencyStatus: e.target.value as 'citizen' | 'pr' | 'aspiring'
                }))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="citizen">Citizen</option>
                <option value="pr">Permanent Resident</option>
                <option value="aspiring">Aspiring Citizen</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Languages</label>
              <div className="grid grid-cols-2 gap-2">
                {['English', 'Mandarin', 'Arabic', 'Vietnamese', 'Greek', 'Italian'].map(language => (
                  <button
                    key={language}
                    type="button"
                    onClick={() => toggleLanguage(language)}
                    className={`p-2 text-sm rounded-lg border-2 transition-colors ${
                      formData.languages.includes(language)
                        ? 'border-primary-500 bg-primary-50 text-primary-700'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {language}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Accessibility Needs (Optional)</label>
              <textarea
                value={formData.accessibilityNeeds}
                onChange={(e) => setFormData(prev => ({ ...prev, accessibilityNeeds: e.target.value }))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                rows={3}
                placeholder="Any accessibility needs or preferences..."
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Story</h2>
            <p className="text-gray-600 mb-4">Tell SERA about your challenges and goals.</p>

            <textarea
              value={formData.story}
              onChange={(e) => setFormData(prev => ({ ...prev, story: e.target.value }))}
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              rows={8}
              placeholder="Share your story: What challenges are you facing? What are your goals? What support do you need from government services?"
            />

            <div className="bg-primary-50 p-4 rounded-lg">
              <p className="text-sm text-primary-700">
                💡 <strong>Suggestions:</strong> Mention housing, healthcare, employment, immigration status, 
                benefits, education, or any government services you need help with.
              </p>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Advocacy Priorities</h2>
            <p className="text-gray-600 mb-4">Select the areas where you need the most help:</p>
            
            <div className="grid grid-cols-2 gap-3">
              {priorities.map(priority => (
                <button
                  key={priority}
                  type="button"
                  onClick={() => togglePriority(priority)}
                  className={`p-4 text-left rounded-lg border-2 transition-colors ${
                    formData.priorities.includes(priority)
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <div className={`w-4 h-4 rounded border-2 ${
                      formData.priorities.includes(priority)
                        ? 'border-primary-500 bg-primary-500'
                        : 'border-gray-300'
                    }`}>
                      {formData.priorities.includes(priority) && (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-sm"></div>
                        </div>
                      )}
                    </div>
                    <span className={`font-medium ${
                      formData.priorities.includes(priority) ? 'text-primary-700' : 'text-gray-700'
                    }`}>
                      {priority}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-accent-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-gray-800">Citizen SERA Setup</h1>
          </div>
          <div className="text-sm text-gray-500">Step {step} of 3</div>
        </div>

        <div className="mb-8">
          <div className="flex space-x-2">
            {[1, 2, 3].map(i => (
              <div
                key={i}
                className={`flex-1 h-2 rounded-full ${
                  i <= step ? 'bg-primary-500' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>

        {renderStep()}

        <div className="flex justify-between mt-8">
          <button
            onClick={handleBack}
            className="flex items-center space-x-2 px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back</span>
          </button>
          
          <button
            onClick={handleNext}
            disabled={step === 1 && !formData.name}
            className="flex items-center space-x-2 bg-primary-500 hover:bg-primary-600 disabled:bg-gray-300 text-white px-6 py-3 rounded-lg transition-colors"
          >
            <span>{step === 3 ? 'Finish Setup → Meet SERA' : 'Next'}</span>
            {step < 3 && <ChevronRight className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingFlow;