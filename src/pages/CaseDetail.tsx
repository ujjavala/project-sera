import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { 
  ArrowLeft, 
  Clock, 
  FileText, 
  Upload, 
  CheckCircle, 
  AlertTriangle,
  Heart,
  Lightbulb
} from 'lucide-react';

const CaseDetail: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const caseData = {
    id: '1',
    title: 'Housing Benefit Appeal',
    status: 'Challenging unfair rejection',
    category: 'Housing & Benefits',
    timeline: [
      {
        id: '1',
        date: '12 Aug',
        description: 'Initial claim denied',
        type: 'response' as const
      },
      {
        id: '2',
        date: '14 Aug',
        description: 'AI filed appeal',
        type: 'action' as const
      },
      {
        id: '3',
        date: '18 Aug',
        description: 'Awaiting Gov Response',
        type: 'milestone' as const
      }
    ],
    nextStep: 'Prepare Supporting Docs',
    aiSuggestion: 'Submit landlord statement for stronger appeal.',
    documents: [
      { name: 'Original Application.pdf', size: '2.3 MB', uploaded: '12 Aug' },
      { name: 'Appeal Letter.pdf', size: '1.8 MB', uploaded: '14 Aug' }
    ]
  };

  const getTimelineIcon = (type: 'action' | 'response' | 'milestone') => {
    switch (type) {
      case 'action':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'response':
        return <AlertTriangle className="w-4 h-4 text-red-500" />;
      case 'milestone':
        return <Clock className="w-4 h-4 text-blue-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4">
            <button
              onClick={() => navigate('/dashboard')}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 mr-6"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Dashboard</span>
            </button>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">Case Details</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Case Header */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 mb-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{caseData.title}</h2>
              <div className="flex items-center space-x-4">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  {caseData.category}
                </span>
                <div className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                  <span className="text-sm">{caseData.status}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-blue-500" />
                Timeline
              </h3>
              <div className="space-y-4">
                {caseData.timeline.map((event, index) => (
                  <div key={event.id} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      {getTimelineIcon(event.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-gray-900">{event.description}</p>
                        <span className="text-sm text-gray-500">{event.date}</span>
                      </div>
                      {index < caseData.timeline.length - 1 && (
                        <div className="w-px h-4 bg-gray-200 ml-2 mt-2"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Lightbulb className="w-5 h-5 mr-2 text-accent-500" />
                Next Steps
              </h3>
              <div className="bg-accent-50 p-4 rounded-lg mb-4">
                <h4 className="font-medium text-gray-900 mb-2">{caseData.nextStep}</h4>
                <p className="text-sm text-gray-600 mb-3">
                  <strong>AI Suggestion:</strong> "{caseData.aiSuggestion}"
                </p>
                <button className="bg-accent-500 hover:bg-accent-600 text-white font-medium px-4 py-2 rounded-lg transition-colors">
                  Upload Document
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Documents */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-gray-500" />
                Documents
              </h3>
              <div className="space-y-3">
                {caseData.documents.map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900 text-sm">{doc.name}</p>
                      <p className="text-xs text-gray-500">{doc.size} • {doc.uploaded}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 flex items-center justify-center space-x-2 border-2 border-dashed border-gray-300 hover:border-gray-400 text-gray-600 py-3 rounded-lg transition-colors">
                <Upload className="w-4 h-4" />
                <span className="text-sm font-medium">Upload Document</span>
              </button>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                  Contact SERA
                </button>
                <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                  View Similar Cases
                </button>
                <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                  Share in Forums
                </button>
                <button className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                  Pause Case
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseDetail;