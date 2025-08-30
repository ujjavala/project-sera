import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  MessageCircle, 
  Users, 
  Plus, 
  Search,
  Heart,
  Clock,
  TrendingUp,
  Shield
} from 'lucide-react';

const Forums: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', icon: MessageCircle, color: 'gray' },
    { id: 'immigration', name: 'Immigration Help', icon: Shield, color: 'blue' },
    { id: 'housing', name: 'Housing & Benefits', icon: Users, color: 'green' },
    { id: 'healthcare', name: 'Healthcare Access', icon: Heart, color: 'red' }
  ];

  const posts = [
    {
      id: '1',
      title: 'AI helped me reapply after rejection',
      author: 'Sarah_M',
      category: 'immigration',
      replies: 32,
      views: 245,
      timestamp: '2 hours ago',
      isCollective: false,
      excerpt: 'My visa application was rejected but SERA found errors in the original decision...'
    },
    {
      id: '2',
      title: 'Collective appeal for rent relief unfair rejections',
      author: 'CommunityAdvocate',
      category: 'housing',
      replies: 18,
      views: 156,
      timestamp: '4 hours ago',
      isCollective: true,
      members: 42,
      excerpt: 'We\'re organizing a collective appeal for those who had rent relief applications unfairly rejected...'
    },
    {
      id: '3',
      title: 'Visa status tracker question',
      author: 'Alex_K',
      category: 'immigration',
      replies: 12,
      views: 89,
      timestamp: '6 hours ago',
      isCollective: false,
      excerpt: 'Has anyone successfully used the SERA to track visa application status?'
    },
    {
      id: '4',
      title: 'SERA found I qualified for X subsidy',
      author: 'Maria_L',
      category: 'healthcare',
      replies: 17,
      views: 203,
      timestamp: '1 day ago',
      isCollective: false,
      excerpt: 'Just wanted to share my success story - the AI discovered I was eligible for healthcare subsidies...'
    },
    {
      id: '5',
      title: 'Medicare claims with AI assistance',
      author: 'David_W',
      category: 'healthcare',
      replies: 8,
      views: 67,
      timestamp: '2 days ago',
      isCollective: false,
      excerpt: 'Tips and tricks for using SERA to navigate Medicare claims process...'
    }
  ];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryInfo = (categoryId: string) => {
    return categories.find(cat => cat.id === categoryId) || categories[0];
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
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">Community Forums</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Search and Actions */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search discussions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-input pl-10"
            />
          </div>
          <button className="btn-primary flex items-center">
            <Plus className="w-4 h-4 mr-2" />
            <span>Start New Discussion</span>
          </button>
        </div>

        {/* Categories Filter - Horizontal on larger screens */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6 border border-gray-200">
          <h3 className="text-sm font-medium text-gray-900 mb-3">Filter by Category</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => {
              const Icon = category.icon;
              const isSelected = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isSelected
                      ? 'bg-primary-50 text-primary-700 border border-primary-200'
                      : 'hover:bg-gray-100 text-gray-700 border border-gray-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Posts List - Full Width */}
        <div>
            <div className="space-y-4">
              {filteredPosts.map(post => {
                const categoryInfo = getCategoryInfo(post.category);
                const Icon = categoryInfo.icon;
                
                return (
                  <div key={post.id} className="card-modern cursor-pointer">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-start space-x-4 flex-1">
                        <div className={`w-10 h-10 bg-${categoryInfo.color}-100 rounded-full flex items-center justify-center`}>
                          <Icon className={`w-5 h-5 text-${categoryInfo.color}-600`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="text-lg font-semibold text-gray-900 flex-1 pr-2 line-clamp-2 leading-tight">{post.title}</h4>
                            {post.isCollective && (
                              <span className="bg-accent-100 text-accent-800 text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                                Collective
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mb-3 line-clamp-2 leading-relaxed">{post.excerpt}</p>
                          <div className="flex items-center space-x-4 text-xs text-gray-500">
                            <span>by {post.author}</span>
                            <div className="flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              {post.timestamp}
                            </div>
                            <span className={`bg-${categoryInfo.color}-100 text-${categoryInfo.color}-800 px-2 py-1 rounded`}>
                              {categoryInfo.name}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end space-y-1 text-sm text-gray-500 ml-4">
                        <div className="flex items-center">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          <span>{post.replies}</span>
                        </div>
                        {post.isCollective && 'members' in post && (
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            <span>{post.members}</span>
                          </div>
                        )}
                        <div className="flex items-center">
                          <TrendingUp className="w-4 h-4 mr-1" />
                          <span>{post.views}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <MessageCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No discussions found</h3>
                <p className="text-gray-600">Try adjusting your search or browse different categories.</p>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default Forums;