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
  Clock,
  User,
  Home,
  GraduationCap,
  Briefcase,
  Activity
} from 'lucide-react';

const CitizenshipStats: React.FC = () => {
  const navigate = useNavigate();
  const [selectedYear, setSelectedYear] = useState('2023-24');

  // Data based on official Australian government statistics
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
    },
    populationDemographics: {
      totalPopulation: {
        year2024: 27194369
      },
      workingAgePopulation: {
        percentage2023: 64.9
      },
      aboriginalTorresStraitIslander: {
        population2021: 983709,
        languageSpeakersPercentage: 10
      },
      overseasBorn: {
        total2021: 7029262
      },
      employment: {
        totalJobs2021: 20797175
      },
      education: {
        preschoolEnrollment2023: 337305
      },
      housing: {
        medianHousePrice2023: 730000,
        medianWeeklyRent2021: 375,
        medianMonthlyMortgage2021: 1863
      },
      income: {
        medianTotalIncome2022: 55062
      },
      business: {
        totalBusinesses2024: 2662998
      },
      landArea: {
        total2021: 768809493.8,
        protectedLand2022: 169668198,
        unit: 'hectares'
      }
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

        {/* Population Demographics */}
        {citizenshipData.populationDemographics && (
          <>
            {/* Population Overview */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <User className="w-6 h-6 mr-2 text-primary-500" />
                Australian Population Demographics (2024)
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg p-4">
                  <div className="text-sm text-primary-700 mb-1">Total Population</div>
                  <div className="text-2xl font-bold text-primary-800">
                    {(citizenshipData.populationDemographics.totalPopulation.year2024 / 1000000).toFixed(1)}M
                  </div>
                  <div className="text-xs text-primary-600">2024 estimate</div>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4">
                  <div className="text-sm text-green-700 mb-1">Working Age (15-64)</div>
                  <div className="text-2xl font-bold text-green-800">
                    {citizenshipData.populationDemographics.workingAgePopulation.percentage2023}%
                  </div>
                  <div className="text-xs text-green-600">2023 data</div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4">
                  <div className="text-sm text-blue-700 mb-1">Born Overseas</div>
                  <div className="text-2xl font-bold text-blue-800">
                    {(citizenshipData.populationDemographics.overseasBorn.total2021 / 1000000).toFixed(1)}M
                  </div>
                  <div className="text-xs text-blue-600">
                    {(citizenshipData.populationDemographics.overseasBorn.total2021 / citizenshipData.populationDemographics.totalPopulation.year2024 * 100).toFixed(1)}% of population
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-4">
                  <div className="text-sm text-purple-700 mb-1">Total Jobs</div>
                  <div className="text-2xl font-bold text-purple-800">
                    {(citizenshipData.populationDemographics.employment.totalJobs2021 / 1000000).toFixed(1)}M
                  </div>
                  <div className="text-xs text-purple-600">2021 data</div>
                </div>
              </div>
            </div>

            {/* Economic Indicators */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Briefcase className="w-6 h-6 mr-2 text-green-500" />
                Economic & Business Indicators
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    ${citizenshipData.populationDemographics.income.medianTotalIncome2022.toLocaleString()}
                  </div>
                  <div className="text-sm text-green-800">Median Total Income (2022)</div>
                  <div className="text-xs text-green-600 mt-1">Excluding government pensions</div>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {(citizenshipData.populationDemographics.business.totalBusinesses2024 / 1000000).toFixed(2)}M
                  </div>
                  <div className="text-sm text-blue-800">Total Businesses (2024)</div>
                </div>
                
                <div className="bg-orange-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    {citizenshipData.populationDemographics.education.preschoolEnrollment2023.toLocaleString()}
                  </div>
                  <div className="text-sm text-orange-800">Preschool Enrollment (2023)</div>
                </div>
              </div>
            </div>

            {/* Housing Market */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Home className="w-6 h-6 mr-2 text-red-500" />
                Housing Market Indicators
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-red-50 rounded-lg p-4">
                  <div className="text-center mb-3">
                    <div className="text-3xl font-bold text-red-600">
                      ${(citizenshipData.populationDemographics.housing.medianHousePrice2023 / 1000).toFixed(0)}k
                    </div>
                    <div className="text-sm text-red-800">Median House Price (2023)</div>
                  </div>
                </div>
                
                <div className="bg-yellow-50 rounded-lg p-4">
                  <div className="text-center mb-3">
                    <div className="text-3xl font-bold text-yellow-600">
                      ${citizenshipData.populationDemographics.housing.medianWeeklyRent2021}
                    </div>
                    <div className="text-sm text-yellow-800">Median Weekly Rent (2021)</div>
                  </div>
                  <div className="text-xs text-yellow-700 text-center">
                    ${(citizenshipData.populationDemographics.housing.medianWeeklyRent2021 * 52).toLocaleString()}/year
                  </div>
                </div>
                
                <div className="bg-indigo-50 rounded-lg p-4">
                  <div className="text-center mb-3">
                    <div className="text-3xl font-bold text-indigo-600">
                      ${citizenshipData.populationDemographics.housing.medianMonthlyMortgage2021.toLocaleString()}
                    </div>
                    <div className="text-sm text-indigo-800">Median Monthly Mortgage (2021)</div>
                  </div>
                  <div className="text-xs text-indigo-700 text-center">
                    ${(citizenshipData.populationDemographics.housing.medianMonthlyMortgage2021 * 12).toLocaleString()}/year
                  </div>
                </div>
              </div>
            </div>

            {/* Aboriginal and Torres Strait Islander Statistics */}
            <div className="bg-gradient-to-r from-red-50 via-yellow-50 to-black-50 rounded-xl shadow-sm p-6 border-2 border-yellow-300 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                <Flag className="w-6 h-6 mr-2 text-red-600" />
                Aboriginal and Torres Strait Islander Australians
              </h3>
              <p className="text-sm text-gray-600 mb-6">National statistics for Australia's First Peoples (2021 Census)</p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-4 border border-yellow-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-red-500" />
                    Population Overview
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-red-600">
                        {(citizenshipData.populationDemographics.aboriginalTorresStraitIslander.population2021 / 1000).toFixed(0)}k
                      </div>
                      <div className="text-xs text-gray-600">Total Population (2021)</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-red-600">
                        {(citizenshipData.populationDemographics.aboriginalTorresStraitIslander.population2021 / citizenshipData.populationDemographics.totalPopulation.year2024 * 100).toFixed(1)}%
                      </div>
                      <div className="text-xs text-gray-600">Of Total Population</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border border-yellow-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <GraduationCap className="w-5 h-5 mr-2 text-blue-500" />
                    Language & Culture
                  </h4>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">
                      {citizenshipData.populationDemographics.aboriginalTorresStraitIslander.languageSpeakersPercentage}%
                    </div>
                    <div className="text-sm text-blue-700">Speak an Aboriginal or Torres Strait Islander language</div>
                  </div>
                  <div className="text-xs text-gray-600 bg-blue-50 p-2 rounded mt-3">
                    Approximately {Math.round(citizenshipData.populationDemographics.aboriginalTorresStraitIslander.population2021 * citizenshipData.populationDemographics.aboriginalTorresStraitIslander.languageSpeakersPercentage / 100).toLocaleString()} people maintain traditional languages
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-red-100 via-yellow-100 to-black-100 rounded-lg border border-yellow-300">
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Cultural Heritage</h4>
                  <p className="text-sm text-gray-700">
                    Australia's Aboriginal and Torres Strait Islander peoples represent the world's oldest continuous cultures, 
                    with over 65,000 years of history. The preservation of traditional languages and cultural practices 
                    remains vital for maintaining this rich heritage.
                  </p>
                </div>
              </div>
            </div>

            {/* Land Area Statistics */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Activity className="w-6 h-6 mr-2 text-green-500" />
                Land & Environment
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {(citizenshipData.populationDemographics.landArea.total2021 / 1000000).toFixed(0)}M
                  </div>
                  <div className="text-sm text-green-800">Total Land Area</div>
                  <div className="text-xs text-green-600 mt-1">
                    {citizenshipData.populationDemographics.landArea.total2021.toLocaleString()} {citizenshipData.populationDemographics.landArea.unit}
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {(citizenshipData.populationDemographics.landArea.protectedLand2022 / citizenshipData.populationDemographics.landArea.total2021 * 100).toFixed(1)}%
                  </div>
                  <div className="text-sm text-blue-800">Protected Land (2022)</div>
                  <div className="text-xs text-blue-600 mt-1">
                    {(citizenshipData.populationDemographics.landArea.protectedLand2022 / 1000000).toFixed(0)}M {citizenshipData.populationDemographics.landArea.unit}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

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