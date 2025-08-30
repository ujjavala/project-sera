import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CitizenshipStatistics } from '../types';
import { 
  ArrowLeft,
  Users,
  TrendingUp,
  BarChart3,
  Globe,
  Calendar,
  Award,
  Flag,
  Sparkles,
  Clock
} from 'lucide-react';

const CitizenshipStats: React.FC = () => {
  const navigate = useNavigate();
  const [selectedYear, setSelectedYear] = useState('2023-24');

  // Mock data based on the scraped information
  const citizenshipData: CitizenshipStatistics = {
    totalSince1949: 6100000,
    currentYear: {
      year: '2023-24',
      total: 192242,
      totalNationalities: 200
    },
    topNationalities: [
      { nationality: 'India', count: 28968, percentage: 15.1 },
      { nationality: 'New Zealand', count: 27826, percentage: 14.5 },
      { nationality: 'United Kingdom', count: 16503, percentage: 8.6 },
      { nationality: 'Philippines', count: 10449, percentage: 5.4 },
      { nationality: 'China', count: 7561, percentage: 3.9 },
      { nationality: 'Iraq', count: 7048, percentage: 3.7 },
      { nationality: 'Vietnam', count: 7013, percentage: 3.6 },
      { nationality: 'Afghanistan', count: 6515, percentage: 3.4 },
      { nationality: 'Pakistan', count: 5715, percentage: 3.0 },
      { nationality: 'South Africa', count: 4849, percentage: 2.5 }
    ],
    historicalData: [
      {
        year: '1949',
        total: 2493,
        topNationalities: [
          { nationality: 'Italy', count: 708 },
          { nationality: 'Poland', count: 597 },
          { nationality: 'Greece', count: 276 },
          { nationality: 'Germany', count: 225 },
          { nationality: 'Yugoslavia', count: 80 }
        ]
      },
      {
        year: '2023-24',
        total: 192242,
        topNationalities: [
          { nationality: 'India', count: 28968 },
          { nationality: 'New Zealand', count: 27826 },
          { nationality: 'United Kingdom', count: 16503 },
          { nationality: 'Philippines', count: 10449 },
          { nationality: 'China', count: 7561 }
        ]
      }
    ],
    processingTimes: {
      average: '18 months',
      current: '15-20 months'
    }
  };

  const getCountryFlag = (nationality: string): string => {
    const flagMap: { [key: string]: string } = {
      'India': '🇮🇳',
      'New Zealand': '🇳🇿',
      'United Kingdom': '🇬🇧',
      'Philippines': '🇵🇭',
      'China': '🇨🇳',
      'Iraq': '🇮🇶',
      'Vietnam': '🇻🇳',
      'Afghanistan': '🇦🇫',
      'Pakistan': '🇵🇰',
      'South Africa': '🇿🇦',
      'Italy': '🇮🇹',
      'Poland': '🇵🇱',
      'Greece': '🇬🇷',
      'Germany': '🇩🇪',
      'Yugoslavia': '🏁'
    };
    return flagMap[nationality] || '🌍';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-white via-primary-50 to-australian-white shadow-lg border-b border-primary-200">
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
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Australian Citizenship Statistics</h1>
                  <p className="text-xs text-primary-600 font-medium">Official Government Data</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Hero Stats */}
        <div className="bg-gradient-to-r from-primary-500 to-primary-700 rounded-xl p-8 mb-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Flag className="w-8 h-8 mr-2" />
                <span className="text-3xl">🇦🇺</span>
              </div>
              <div className="text-4xl font-bold mb-2">
                {(citizenshipData.totalSince1949 / 1000000).toFixed(1)}M+
              </div>
              <div className="text-primary-100">Citizens since 1949</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Users className="w-8 h-8 mr-2" />
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="text-4xl font-bold mb-2">
                {citizenshipData.currentYear.total.toLocaleString()}
              </div>
              <div className="text-primary-100">New citizens in {citizenshipData.currentYear.year}</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Globe className="w-8 h-8 mr-2" />
                <span className="text-2xl">🌍</span>
              </div>
              <div className="text-4xl font-bold mb-2">
                {citizenshipData.currentYear.totalNationalities}+
              </div>
              <div className="text-primary-100">Different nationalities</div>
            </div>
          </div>
        </div>

        {/* Processing Times */}
        {citizenshipData.processingTimes && (
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Clock className="w-6 h-6 mr-2 text-accent-500" />
              Processing Times
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-sm text-gray-600 mb-1">Average Processing Time</div>
                <div className="text-2xl font-bold text-gray-900">{citizenshipData.processingTimes.average}</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-sm text-gray-600 mb-1">Current Range</div>
                <div className="text-2xl font-bold text-gray-900">{citizenshipData.processingTimes.current}</div>
              </div>
            </div>
          </div>
        )}

        {/* Top Nationalities Current Year */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
            <TrendingUp className="w-6 h-6 mr-2 text-primary-500" />
            Top 10 Countries - {citizenshipData.currentYear.year}
          </h3>
          
          <div className="space-y-4">
            {citizenshipData.topNationalities.map((country, index) => (
              <div key={country.nationality} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center font-bold text-primary-600">
                    {index + 1}
                  </div>
                  <span className="text-2xl">{getCountryFlag(country.nationality)}</span>
                  <div>
                    <div className="font-semibold text-gray-900">{country.nationality}</div>
                    {country.percentage && (
                      <div className="text-sm text-gray-500">{country.percentage}% of total</div>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-primary-600">{country.count.toLocaleString()}</div>
                  <div className="text-sm text-gray-500">new citizens</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-primary-50 rounded-lg">
            <div className="text-sm text-primary-700">
              <strong>Note:</strong> All other nationalities combined accounted for {(citizenshipData.currentYear.total - citizenshipData.topNationalities.reduce((sum, country) => sum + country.count, 0)).toLocaleString()} people.
            </div>
          </div>
        </div>

        {/* Historical Comparison */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
            <Calendar className="w-6 h-6 mr-2 text-accent-500" />
            Historical Perspective: 1949 vs Today
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 1949 Data */}
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 mr-2 text-accent-500" />
                <h4 className="text-lg font-semibold text-gray-900">1949 - The Beginning</h4>
              </div>
              <div className="text-3xl font-bold text-accent-600 mb-2">2,493</div>
              <div className="text-sm text-gray-600 mb-4">First year of Australian citizenship</div>
              
              <div className="space-y-2">
                {citizenshipData.historicalData[0].topNationalities.map((country, index) => (
                  <div key={country.nationality} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span>{getCountryFlag(country.nationality)}</span>
                      <span className="text-sm font-medium">{country.nationality}</span>
                    </div>
                    <span className="text-sm text-gray-600">{country.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Current Year Data */}
            <div className="border border-primary-200 rounded-lg p-6 bg-primary-50">
              <div className="flex items-center mb-4">
                <Sparkles className="w-6 h-6 mr-2 text-primary-500" />
                <h4 className="text-lg font-semibold text-gray-900">2023-24 - Today</h4>
              </div>
              <div className="text-3xl font-bold text-primary-600 mb-2">
                {citizenshipData.currentYear.total.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600 mb-4">Latest full year data</div>
              
              <div className="space-y-2">
                {citizenshipData.historicalData[1].topNationalities.slice(0, 5).map((country, index) => (
                  <div key={country.nationality} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span>{getCountryFlag(country.nationality)}</span>
                      <span className="text-sm font-medium">{country.nationality}</span>
                    </div>
                    <span className="text-sm text-gray-600">{country.count.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg">
            <div className="text-center">
              <div className="text-lg font-semibold text-gray-900 mb-2">Growth Over 75 Years</div>
              <div className="text-3xl font-bold text-primary-600">
                {Math.round(citizenshipData.currentYear.total / citizenshipData.historicalData[0].total)}x
              </div>
              <div className="text-sm text-gray-600">increase in annual citizenship conferrals</div>
            </div>
          </div>
        </div>

        {/* Data Source */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            Data sourced from the{' '}
            <a 
              href="https://www.homeaffairs.gov.au/research-and-statistics/statistics/citizenship-statistics" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 underline"
            >
              Australian Department of Home Affairs
            </a>
          </p>
          <p className="mt-1">Last updated: 2024</p>
        </div>
      </div>
    </div>
  );
};

export default CitizenshipStats;