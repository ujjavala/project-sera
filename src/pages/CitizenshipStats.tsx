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
  Baby,
  Heart,
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
        year2011: 6083337,
        year2024: 6443689
      },
      populationDensity: {
        year2011: 1102.6,
        year2024: 1166.9,
        unit: 'persons/km²'
      },
      genderDistribution: {
        males: {
          year2011: 3024887,
          year2024: 3142979
        },
        females: {
          year2011: 3063450,
          year2024: 3181746
        }
      },
      medianAge: {
        males: {
          year2011: 35.6,
          year2024: 36.5
        },
        females: {
          year2011: 37.3,
          year2024: 38.3
        },
        overall: {
          year2011: 36.5,
          year2024: 37.4
        }
      },
      workingAgePopulation: {
        percentage: {
          year2011: 66.0,
          year2024: 66.8
        },
        total: {
          year2011: 4036425,
          year2024: 4206694
        }
      },
      birthsAndDeaths: {
        births: {
          year2011: 83830,
          year2024: 69881
        },
        deaths: {
          year2011: 35199,
          year2024: 42634
        },
        fertilityRate: {
          year2011: 1.72,
          year2024: 1.58
        },
        deathRate: 5.1
      },
      aboriginalTorresStraitIslander: {
        population: 164433,
        medianAge: 23.5,
        workingAgePercentage: 61.6,
        employmentRate: {
          min: 52,
          max: 58
        },
        healthConditionsPercentage: 71.9,
        homeOwnership: {
          min: 42,
          max: 43
        },
        renters: {
          min: 55,
          max: 56
        },
        homelessness: 1284,
        educationAttainment: {
          min: 43,
          max: 58
        },
        employmentEngagement: {
          min: 62,
          max: 64
        }
      },
      healthIndicators: {
        alcoholRiskCompliance: 78,
        smokingStatus: 71,
        excellentVeryGoodHealth: 49
      },
      governmentSupport: {
        agePensions: 344,
        servicePensions: 11710,
        incomeSupportSupplements: 3880
      },
      landArea: 552190.6
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
                Australian Population Demographics (2011-2024) - NSW
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg p-4">
                  <div className="text-sm text-primary-700 mb-1">Total Population</div>
                  <div className="text-2xl font-bold text-primary-800">
                    {(citizenshipData.populationDemographics.totalPopulation.year2024 / 1000000).toFixed(1)}M
                  </div>
                  <div className="text-xs text-primary-600">
                    +{(citizenshipData.populationDemographics.totalPopulation.year2024 - citizenshipData.populationDemographics.totalPopulation.year2011).toLocaleString()} since 2011
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-accent-50 to-accent-100 rounded-lg p-4">
                  <div className="text-sm text-accent-700 mb-1">Population Density</div>
                  <div className="text-2xl font-bold text-accent-800">
                    {citizenshipData.populationDemographics.populationDensity.year2024}
                  </div>
                  <div className="text-xs text-accent-600">{citizenshipData.populationDemographics.populationDensity.unit}</div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4">
                  <div className="text-sm text-blue-700 mb-1">Median Age</div>
                  <div className="text-2xl font-bold text-blue-800">
                    {citizenshipData.populationDemographics.medianAge.overall.year2024} years
                  </div>
                  <div className="text-xs text-blue-600">
                    +{(citizenshipData.populationDemographics.medianAge.overall.year2024 - citizenshipData.populationDemographics.medianAge.overall.year2011).toFixed(1)} since 2011
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4">
                  <div className="text-sm text-green-700 mb-1">Working Age</div>
                  <div className="text-2xl font-bold text-green-800">
                    {citizenshipData.populationDemographics.workingAgePopulation.percentage.year2024}%
                  </div>
                  <div className="text-xs text-green-600">15-64 years</div>
                </div>
              </div>
              
              {/* Gender Distribution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-blue-500" />
                    Gender Distribution (2024)
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Males</span>
                      <span className="text-sm font-semibold text-gray-900">
                        {citizenshipData.populationDemographics.genderDistribution.males.year2024.toLocaleString()} 
                        ({(citizenshipData.populationDemographics.genderDistribution.males.year2024 / citizenshipData.populationDemographics.totalPopulation.year2024 * 100).toFixed(1)}%)
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Females</span>
                      <span className="text-sm font-semibold text-gray-900">
                        {citizenshipData.populationDemographics.genderDistribution.females.year2024.toLocaleString()}
                        ({(citizenshipData.populationDemographics.genderDistribution.females.year2024 / citizenshipData.populationDemographics.totalPopulation.year2024 * 100).toFixed(1)}%)
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Baby className="w-5 h-5 mr-2 text-pink-500" />
                    Birth & Fertility Trends
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Births (2024)</span>
                      <span className="text-sm font-semibold text-gray-900">
                        {citizenshipData.populationDemographics.birthsAndDeaths.births.year2024.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Fertility Rate</span>
                      <span className="text-sm font-semibold text-gray-900">
                        {citizenshipData.populationDemographics.birthsAndDeaths.fertilityRate.year2024}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 mt-2">
                      Decline of {(citizenshipData.populationDemographics.birthsAndDeaths.births.year2011 - citizenshipData.populationDemographics.birthsAndDeaths.births.year2024).toLocaleString()} births since 2011
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Health and Wellbeing */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Heart className="w-6 h-6 mr-2 text-red-500" />
                Health & Wellbeing Indicators - NSW
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {citizenshipData.populationDemographics.healthIndicators.alcoholRiskCompliance}%
                  </div>
                  <div className="text-sm text-green-800">Do not exceed lifetime alcohol risk guidelines</div>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {citizenshipData.populationDemographics.healthIndicators.smokingStatus}%
                  </div>
                  <div className="text-sm text-blue-800">Ex-smokers or never smoked</div>
                </div>
                
                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    {citizenshipData.populationDemographics.healthIndicators.excellentVeryGoodHealth}%
                  </div>
                  <div className="text-sm text-purple-800">Report excellent or very good health</div>
                </div>
              </div>
            </div>

            {/* Aboriginal and Torres Strait Islander Statistics */}
            <div className="bg-gradient-to-r from-red-50 via-yellow-50 to-black-50 rounded-xl shadow-sm p-6 border-2 border-yellow-300 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                <Flag className="w-6 h-6 mr-2 text-red-600" />
                Aboriginal and Torres Strait Islander Australians - NSW
              </h3>
              <p className="text-sm text-gray-600 mb-6">Highlighting the unique characteristics and challenges of Australia's First Peoples</p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Column - Demographics */}
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border border-yellow-200">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <Users className="w-5 h-5 mr-2 text-red-500" />
                      Population Overview
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-2xl font-bold text-red-600">
                          {citizenshipData.populationDemographics.aboriginalTorresStraitIslander.population.toLocaleString()}
                        </div>
                        <div className="text-xs text-gray-600">Total Population</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-red-600">
                          {citizenshipData.populationDemographics.aboriginalTorresStraitIslander.medianAge}
                        </div>
                        <div className="text-xs text-gray-600">Median Age (years)</div>
                      </div>
                    </div>
                    <div className="mt-3 p-2 bg-yellow-50 rounded text-xs text-gray-700">
                      <strong>Note:</strong> Significantly younger than general population (37.4 years)
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-yellow-200">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <Briefcase className="w-5 h-5 mr-2 text-blue-500" />
                      Employment & Education
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Working Age</span>
                        <span className="text-sm font-semibold text-gray-900">
                          {citizenshipData.populationDemographics.aboriginalTorresStraitIslander.workingAgePercentage}%
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Employment Rate</span>
                        <span className="text-sm font-semibold text-gray-900">
                          {citizenshipData.populationDemographics.aboriginalTorresStraitIslander.employmentRate.min}%-{citizenshipData.populationDemographics.aboriginalTorresStraitIslander.employmentRate.max}%
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Employment Engagement (15-64)</span>
                        <span className="text-sm font-semibold text-gray-900">
                          {citizenshipData.populationDemographics.aboriginalTorresStraitIslander.employmentEngagement.min}%-{citizenshipData.populationDemographics.aboriginalTorresStraitIslander.employmentEngagement.max}%
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Education Attainment (20-34)</span>
                        <span className="text-sm font-semibold text-gray-900">
                          {citizenshipData.populationDemographics.aboriginalTorresStraitIslander.educationAttainment.min}%-{citizenshipData.populationDemographics.aboriginalTorresStraitIslander.educationAttainment.max}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Health & Housing */}
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border border-yellow-200">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <Heart className="w-5 h-5 mr-2 text-purple-500" />
                      Health Outcomes
                    </h4>
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-purple-600 mb-1">
                        {citizenshipData.populationDemographics.aboriginalTorresStraitIslander.healthConditionsPercentage}%
                      </div>
                      <div className="text-sm text-purple-700">Report one or more long-term health conditions</div>
                    </div>
                    <div className="text-xs text-gray-600 bg-purple-50 p-2 rounded">
                      This is significantly higher than the national average, highlighting ongoing health disparities
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-yellow-200">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <Home className="w-5 h-5 mr-2 text-green-500" />
                      Housing Situation
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Home Ownership</span>
                        <span className="text-sm font-semibold text-gray-900">
                          {citizenshipData.populationDemographics.aboriginalTorresStraitIslander.homeOwnership.min}%-{citizenshipData.populationDemographics.aboriginalTorresStraitIslander.homeOwnership.max}%
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Renters</span>
                        <span className="text-sm font-semibold text-gray-900">
                          {citizenshipData.populationDemographics.aboriginalTorresStraitIslander.renters.min}%-{citizenshipData.populationDemographics.aboriginalTorresStraitIslander.renters.max}%
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Homelessness</span>
                        <span className="text-sm font-semibold text-gray-900">
                          {citizenshipData.populationDemographics.aboriginalTorresStraitIslander.homelessness.toLocaleString()} individuals
                        </span>
                      </div>
                    </div>
                    <div className="mt-3 text-xs text-gray-600 bg-orange-50 p-2 rounded">
                      Housing stress remains a critical issue requiring targeted policy intervention
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-red-100 via-yellow-100 to-black-100 rounded-lg border border-yellow-300">
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Key Disparities</h4>
                  <p className="text-sm text-gray-700">
                    These statistics highlight persistent disparities in age structure, employment, health, education, and housing 
                    compared with the broader Australian population. Addressing these gaps remains a critical priority for 
                    achieving equality and justice for Australia's First Peoples.
                  </p>
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