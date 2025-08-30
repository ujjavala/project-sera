import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  BarChart3, 
  TrendingUp, 
  Users, 
  CheckCircle, 
  AlertTriangle,
  Heart,
  DollarSign,
  Award,
  Calendar,
  MessageSquare,
  Share2
} from 'lucide-react';

const Impact: React.FC = () => {
  const navigate = useNavigate();
  const [timeframe, setTimeframe] = useState('all');
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  const personalImpact = {
    benefitsSecured: 2300,
    casesWon: 1,
    unfairRejectionsOverturned: 1,
    timelineEvents: [
      { date: 'Aug 2024', event: 'First case won', amount: 800 },
      { date: 'Jul 2024', event: 'Benefits secured', amount: 1500 }
    ]
  };

  const systemicImpact = {
    communityWins: 142,
    policyChanges: 4,
    totalBenefitsSecured: 186400,
    casesWonThisMonth: 89
  };

  const wellbeingData = {
    stressBefore: 8,
    stressAfter: 4,
    confidenceBefore: 3,
    confidenceAfter: 8,
    satisfactionScore: 9
  };

  const achievements = [
    {
      title: 'First Victory',
      description: 'Won your first case appeal',
      icon: Award,
      color: 'yellow',
      earned: true
    },
    {
      title: 'Community Helper',
      description: 'Helped 5 community members',
      icon: Users,
      color: 'blue',
      earned: false
    },
    {
      title: 'Benefits Champion',
      description: 'Secured over $2000 in benefits',
      icon: DollarSign,
      color: 'green',
      earned: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <button
                onClick={() => navigate('/dashboard')}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 mr-6"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Dashboard</span>
              </button>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 text-white" />
                </div>
                <h1 className="text-xl font-bold text-gray-900">Your Advocacy Impact</h1>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <select
                value={timeframe}
                onChange={(e) => setTimeframe(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
              >
                <option value="all">All Time</option>
                <option value="year">This Year</option>
                <option value="month">This Month</option>
              </select>
              <button className="flex items-center space-x-2 text-primary-600 hover:text-primary-700">
                <Share2 className="w-4 h-4" />
                <span className="text-sm">Share</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Personal Wins */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Wins</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <DollarSign className="w-8 h-8 text-green-500" />
                <span className="text-sm text-gray-500">Benefits Secured</span>
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">
                ${personalImpact.benefitsSecured.toLocaleString()}
              </div>
              <div className="flex items-center text-sm text-green-600">
                <TrendingUp className="w-4 h-4 mr-1" />
                <span>+$800 this month</span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <CheckCircle className="w-8 h-8 text-blue-500" />
                <span className="text-sm text-gray-500">Cases Won</span>
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {personalImpact.casesWon}
              </div>
              <div className="text-sm text-gray-600">
                Housing benefit appeal
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <AlertTriangle className="w-8 h-8 text-purple-500" />
                <span className="text-sm text-gray-500">Unfair Rejections Overturned</span>
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {personalImpact.unfairRejectionsOverturned}
              </div>
              <div className="text-sm text-gray-600">
                Successfully challenged
              </div>
            </div>
          </div>
        </div>

        {/* Systemic Impact */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Systemic Impact (Community Level)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="text-center">
                <Users className="w-8 h-8 text-indigo-500 mx-auto mb-3" />
                <div className="text-2xl font-bold text-indigo-600 mb-1">
                  {systemicImpact.communityWins}
                </div>
                <div className="text-sm text-gray-600">Citizens won housing appeals this month</div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="text-center">
                <Award className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
                <div className="text-2xl font-bold text-yellow-600 mb-1">
                  {systemicImpact.policyChanges}
                </div>
                <div className="text-sm text-gray-600">Policy changes flagged by AdvocateAI</div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="text-center">
                <DollarSign className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <div className="text-2xl font-bold text-green-600 mb-1">
                  ${systemicImpact.totalBenefitsSecured.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">Total community benefits secured</div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="text-center">
                <CheckCircle className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                <div className="text-2xl font-bold text-blue-600 mb-1">
                  {systemicImpact.casesWonThisMonth}
                </div>
                <div className="text-sm text-gray-600">Cases won this month</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Wellbeing Tracker */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <Heart className="w-6 h-6 mr-2 text-red-500" />
              Wellbeing Tracker
            </h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Stress Level</span>
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="text-red-600">Before: {wellbeingData.stressBefore}/10</span>
                    <span className="text-gray-400">→</span>
                    <span className="text-green-600">After: {wellbeingData.stressAfter}/10</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full" 
                    style={{ width: `${((10 - wellbeingData.stressAfter) / 10) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Confidence Level</span>
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="text-red-600">Before: {wellbeingData.confidenceBefore}/10</span>
                    <span className="text-gray-400">→</span>
                    <span className="text-green-600">After: {wellbeingData.confidenceAfter}/10</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full" 
                    style={{ width: `${(wellbeingData.confidenceAfter / 10) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <button
                  onClick={() => setShowFeedbackForm(!showFeedbackForm)}
                  className="flex items-center space-x-2 text-primary-600 hover:text-primary-700"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span className="text-sm font-medium">Share Feedback</span>
                </button>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Achievements</h3>
            
            <div className="space-y-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div
                    key={index}
                    className={`flex items-center space-x-4 p-4 rounded-lg border ${
                      achievement.earned
                        ? `bg-${achievement.color}-50 border-${achievement.color}-200`
                        : 'bg-gray-50 border-gray-200'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      achievement.earned
                        ? `bg-${achievement.color}-100`
                        : 'bg-gray-100'
                    }`}>
                      <Icon className={`w-5 h-5 ${
                        achievement.earned
                          ? `text-${achievement.color}-600`
                          : 'text-gray-400'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-medium ${
                        achievement.earned ? 'text-gray-900' : 'text-gray-500'
                      }`}>
                        {achievement.title}
                      </h4>
                      <p className={`text-sm ${
                        achievement.earned ? 'text-gray-600' : 'text-gray-400'
                      }`}>
                        {achievement.description}
                      </p>
                    </div>
                    {achievement.earned && (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Feedback Form */}
        {showFeedbackForm && (
          <div className="mt-8 bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Share Your Experience</h3>
            <textarea
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              rows={4}
              placeholder="How has AdvocateAI helped you? Share your story to inspire others..."
            />
            <div className="flex justify-end mt-4 space-x-3">
              <button
                onClick={() => setShowFeedbackForm(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg">
                Submit Feedback
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Impact;