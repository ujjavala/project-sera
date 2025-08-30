import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import { SubscriptionTier } from '../types';
import { 
  ArrowLeft,
  Heart,
  Check,
  Zap,
  Crown,
  Shield,
  Building,
  Star,
  Users,
  Bot,
  FileText,
  Phone,
  Gavel
} from 'lucide-react';

const Pricing: React.FC = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUser();

  const subscriptionTiers: SubscriptionTier[] = [
    {
      id: 'free',
      name: 'Free Tier',
      description: 'SERA for basic info, reminders, and entitlement lookups',
      priceRange: 'Free',
      features: [
        'Basic AI information assistant',
        'Entitlement lookup and discovery',
        'Simple reminders and notifications',
        'Access to community forums',
        'Basic civic education modules',
        'Limited case tracking (2 active cases)'
      ],
      limitations: [
        'No active advocacy',
        'No appeal management',
        'Limited AI responses per day',
        'No priority support'
      ]
    },
    {
      id: 'premium',
      name: 'Citizen Advocate Plan',
      description: 'Active advocacy and comprehensive appeal management',
      priceRange: '$50–$500/month',
      features: [
        'Full AI advocate with active case management',
        'Automated application submissions',
        'Appeal preparation and management',
        'Document generation and review',
        'Priority support and response times',
        'Unlimited case tracking',
        'Advanced entitlement scanning',
        'Personalized advocacy strategies',
        'Legal document assistance',
        'Government portal integration'
      ]
    },
    {
      id: 'legal_aid',
      name: 'Legal Aid Sponsored',
      description: 'Citizens get AI advocate via government/NGO partnerships',
      priceRange: 'Sponsored',
      features: [
        'Full premium features at no cost',
        'Sponsored by government agencies',
        'NGO partnership programs',
        'Specialized support for vulnerable populations',
        'Enhanced privacy protections',
        'Direct legal aid connections',
        'Case worker integration',
        'Community advocate support'
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise/Gov Contracts',
      description: 'API integration with government portals for direct submissions',
      priceRange: 'Custom pricing',
      features: [
        'Full API access and integration',
        'Direct government portal connections',
        'Bulk case processing',
        'White-label solutions',
        'Advanced analytics and reporting',
        'Custom workflow development',
        'Dedicated account management',
        'SLA guarantees',
        'Advanced security compliance',
        'Training and onboarding support'
      ]
    }
  ];

  const getTierIcon = (tierId: string) => {
    switch (tierId) {
      case 'free': return Zap;
      case 'premium': return Crown;
      case 'legal_aid': return Shield;
      case 'enterprise': return Building;
      default: return Zap;
    }
  };

  const getTierColor = (tierId: string) => {
    switch (tierId) {
      case 'free': return {
        bg: 'bg-gray-50',
        border: 'border-gray-200',
        text: 'text-gray-600',
        button: 'bg-gray-500 hover:bg-gray-600'
      };
      case 'premium': return {
        bg: 'bg-yellow-50',
        border: 'border-yellow-300',
        text: 'text-yellow-600',
        button: 'bg-yellow-500 hover:bg-yellow-600'
      };
      case 'legal_aid': return {
        bg: 'bg-blue-50',
        border: 'border-blue-300',
        text: 'text-blue-600',
        button: 'bg-blue-500 hover:bg-blue-600'
      };
      case 'enterprise': return {
        bg: 'bg-purple-50',
        border: 'border-purple-300',
        text: 'text-purple-600',
        button: 'bg-purple-500 hover:bg-purple-600'
      };
      default: return {
        bg: 'bg-gray-50',
        border: 'border-gray-200',
        text: 'text-gray-600',
        button: 'bg-gray-500 hover:bg-gray-600'
      };
    }
  };

  const isCurrentPlan = (tierId: string) => {
    return user?.subscriptionTier === tierId;
  };

  const handleSelectPlan = (tier: SubscriptionTier) => {
    if (user) {
      setUser({ ...user, subscriptionTier: tier.id });
      navigate('/dashboard');
    }
  };

  const getCallToAction = (tier: SubscriptionTier) => {
    switch (tier.id) {
      case 'free':
        return isCurrentPlan(tier.id) ? 'Current Plan' : 'Get Started';
      case 'premium':
        return isCurrentPlan(tier.id) ? 'Current Plan' : 'Upgrade Now';
      case 'legal_aid':
        return isCurrentPlan(tier.id) ? 'Current Plan' : 'Check Eligibility';
      case 'enterprise':
        return isCurrentPlan(tier.id) ? 'Current Plan' : 'Contact Sales';
      default:
        return 'Select Plan';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-white via-yellow-50 to-orange-50 shadow-lg border-b border-yellow-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4">
            <button
              onClick={() => navigate('/dashboard')}
              className="flex items-center space-x-2 text-primary-600 hover:text-primary-800 mr-6 p-2 hover:bg-white rounded-xl transition-all shadow-sm border border-gray-200"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Dashboard</span>
            </button>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                <Crown className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Subscription Plans</h1>
                <p className="text-xs text-yellow-600 font-medium">Choose your advocacy level</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Choose Your Advocacy Level
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From basic information assistance to full AI-powered advocacy, we have a plan that fits your needs and budget.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
          {subscriptionTiers.map((tier) => {
            const Icon = getTierIcon(tier.id);
            const colors = getTierColor(tier.id);
            const isCurrent = isCurrentPlan(tier.id);
            const isPopular = tier.id === 'premium';

            return (
              <div
                key={tier.id}
                className={`relative rounded-xl p-6 border-2 transition-all hover:shadow-lg ${
                  isPopular
                    ? 'border-primary-300 bg-primary-50 transform scale-105'
                    : `${colors.border} ${colors.bg}`
                } ${isCurrent ? 'ring-2 ring-primary-500' : ''}`}
              >
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}

                {isCurrent && (
                  <div className="absolute -top-3 right-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Current Plan
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${colors.bg} border ${colors.border}`}>
                    <Icon className={`w-8 h-8 ${colors.text}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{tier.description}</p>
                  <div className="text-3xl font-bold text-gray-900">{tier.priceRange}</div>
                </div>

                <div className="space-y-3 mb-6">
                  {tier.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {tier.limitations && (
                  <div className="border-t pt-4 mb-6">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Limitations:</h4>
                    <div className="space-y-2">
                      {tier.limitations.map((limitation, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                            <div className="w-1 h-1 bg-gray-400 rounded-full mx-auto mt-2"></div>
                          </div>
                          <span className="text-sm text-gray-500">{limitation}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <button
                  onClick={() => handleSelectPlan(tier)}
                  disabled={isCurrent}
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                    isCurrent
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : `${colors.button} text-white hover:scale-105 transform transition-transform`
                  }`}
                >
                  {getCallToAction(tier)}
                </button>
              </div>
            );
          })}
        </div>

        {/* Feature Comparison */}
        <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Feature Comparison</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">AI Assistant</h4>
              <p className="text-sm text-gray-600">Basic info and reminders in Free, full advocacy in Premium+</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <FileText className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Case Management</h4>
              <p className="text-sm text-gray-600">Limited in Free, unlimited active cases in Premium+</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Support</h4>
              <p className="text-sm text-gray-600">Community support in Free, priority support in Premium+</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Gavel className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Legal Aid</h4>
              <p className="text-sm text-gray-600">Available through sponsorship programs and premium plans</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200 mt-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Who is eligible for Legal Aid Sponsored accounts?</h4>
              <p className="text-gray-600">Legal Aid sponsored accounts are available through partnerships with government agencies and NGOs. Eligibility typically includes low-income individuals, vulnerable populations, and those referred by social service organizations.</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">How does the Premium plan pricing work?</h4>
              <p className="text-gray-600">Premium pricing scales based on case complexity and frequency of use. Simple cases start at $50/month, while complex immigration or benefits appeals may cost up to $500/month. We provide transparent pricing estimates before you commit.</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">What makes Enterprise different?</h4>
              <p className="text-gray-600">Enterprise plans offer API integration directly with government portals, allowing for streamlined bulk processing and automated submissions. Perfect for legal aid organizations, government agencies, and advocacy groups.</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Can I change plans at any time?</h4>
              <p className="text-gray-600">Yes! You can upgrade or downgrade your plan at any time. When upgrading, you'll gain immediate access to new features. When downgrading, changes take effect at your next billing cycle.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;