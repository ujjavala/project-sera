import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import { 
  ArrowLeft,
  User,
  Mail,
  Phone,
  MapPin,
  Globe,
  Heart,
  Edit3,
  Save,
  X,
  Camera,
  Shield,
  Bell,
  Lock,
  Download,
  Trash2
} from 'lucide-react';

interface TabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 text-sm font-medium rounded-lg transition-all ${
      isActive
        ? 'bg-primary-500 text-white shadow-md'
        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
    }`}
  >
    {label}
  </button>
);

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUser();
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  
  const [editData, setEditData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: user?.address || '',
    languages: user?.languages || [],
    priorities: user?.priorities || [],
    bio: user?.bio || '',
    accessibilityNeeds: user?.accessibilityNeeds || ''
  });

  const [notifications, setNotifications] = useState({
    caseUpdates: true,
    newOpportunities: true,
    forumReplies: false,
    weeklyDigest: true,
    systemAlerts: true
  });

  const [privacy, setPrivacy] = useState({
    profileVisibility: 'public',
    showEmail: false,
    showPhone: false,
    dataSharing: true
  });

  const handleSave = () => {
    if (user) {
      setUser({
        ...user,
        ...editData
      });
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    if (user) {
      setEditData({
        name: user.name,
        email: user.email || '',
        phone: user.phone || '',
        address: user.address || '',
        languages: user.languages,
        priorities: user.priorities,
        bio: user.bio || '',
        accessibilityNeeds: user.accessibilityNeeds || ''
      });
    }
    setIsEditing(false);
  };

  const priorities = [
    'Housing', 'Healthcare', 'Immigration', 
    'Welfare', 'Employment', 'Education'
  ];

  const languages = [
    'English', 'Spanish', 'French', 'Mandarin', 'Arabic', 
    'Vietnamese', 'Greek', 'Italian', 'German', 'Portuguese'
  ];

  const togglePriority = (priority: string) => {
    setEditData(prev => ({
      ...prev,
      priorities: prev.priorities.includes(priority)
        ? prev.priorities.filter(p => p !== priority)
        : [...prev.priorities, priority]
    }));
  };

  const toggleLanguage = (language: string) => {
    setEditData(prev => ({
      ...prev,
      languages: prev.languages.includes(language)
        ? prev.languages.filter(l => l !== language)
        : [...prev.languages, language]
    }));
  };

  const renderProfileTab = () => (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="profile-card text-center">
        <div className="relative inline-block mb-6">
          {user?.avatar ? (
            <img
              src={user.avatar}
              alt={user.name}
              className="avatar avatar-xl"
            />
          ) : (
            <div className="avatar-xl bg-primary-100 flex items-center justify-center">
              <User className="w-8 h-8 text-primary-600" />
            </div>
          )}
          <button className="absolute -bottom-2 -right-2 icon-wrapper icon-sm bg-primary-500 text-white hover:bg-primary-600">
            <Camera className="w-4 h-4" />
          </button>
        </div>
        
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-gray-900">{user?.name}</h2>
          <p className="text-gray-600">{user?.email}</p>
          <div className="badge badge-primary">
            {user?.residencyStatus === 'citizen' ? 'Citizen' : 
             user?.residencyStatus === 'pr' ? 'Permanent Resident' : 
             'Aspiring Citizen'}
          </div>
        </div>
      </div>

      {/* Profile Information */}
      <div className="card-modern">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="btn btn-outline btn-sm"
            >
              <Edit3 className="w-4 h-4 mr-2" />
              Edit
            </button>
          ) : (
            <div className="flex space-x-2">
              <button
                onClick={handleSave}
                className="btn btn-success btn-sm"
              >
                <Save className="w-4 h-4 mr-2" />
                Save
              </button>
              <button
                onClick={handleCancel}
                className="btn btn-outline btn-sm"
              >
                <X className="w-4 h-4 mr-2" />
                Cancel
              </button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            {isEditing ? (
              <input
                type="text"
                value={editData.name}
                onChange={(e) => setEditData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full"
              />
            ) : (
              <p className="text-gray-900">{user?.name || 'Not provided'}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            {isEditing ? (
              <input
                type="email"
                value={editData.email}
                onChange={(e) => setEditData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full"
              />
            ) : (
              <p className="text-gray-900">{user?.email || 'Not provided'}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
            {isEditing ? (
              <input
                type="tel"
                value={editData.phone}
                onChange={(e) => setEditData(prev => ({ ...prev, phone: e.target.value }))}
                className="w-full"
                placeholder="(555) 123-4567"
              />
            ) : (
              <p className="text-gray-900">{editData.phone || 'Not provided'}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
            {isEditing ? (
              <input
                type="text"
                value={editData.address}
                onChange={(e) => setEditData(prev => ({ ...prev, address: e.target.value }))}
                className="w-full"
                placeholder="123 Main St, City, State"
              />
            ) : (
              <p className="text-gray-900">{editData.address || 'Not provided'}</p>
            )}
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
          {isEditing ? (
            <textarea
              value={editData.bio}
              onChange={(e) => setEditData(prev => ({ ...prev, bio: e.target.value }))}
              className="w-full"
              rows={3}
              placeholder="Tell us about yourself..."
            />
          ) : (
            <p className="text-gray-900">{editData.bio || 'No bio provided'}</p>
          )}
        </div>
      </div>

      {/* Languages */}
      <div className="card-modern">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Languages</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {languages.map(language => (
            <button
              key={language}
              type="button"
              onClick={() => isEditing && toggleLanguage(language)}
              disabled={!isEditing}
              className={`p-3 text-sm rounded-lg border-2 transition-all ${
                editData.languages.includes(language)
                  ? 'border-primary-500 bg-primary-50 text-primary-700'
                  : 'border-gray-200 text-gray-600 hover:border-gray-300'
              } ${!isEditing ? 'cursor-default' : 'cursor-pointer'}`}
            >
              {language}
            </button>
          ))}
        </div>
      </div>

      {/* Advocacy Priorities */}
      <div className="card-modern">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Advocacy Priorities</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {priorities.map(priority => (
            <button
              key={priority}
              type="button"
              onClick={() => isEditing && togglePriority(priority)}
              disabled={!isEditing}
              className={`p-3 text-sm rounded-lg border-2 transition-all ${
                editData.priorities.includes(priority)
                  ? 'border-accent-500 bg-accent-50 text-accent-700'
                  : 'border-gray-200 text-gray-600 hover:border-gray-300'
              } ${!isEditing ? 'cursor-default' : 'cursor-pointer'}`}
            >
              {priority}
            </button>
          ))}
        </div>
      </div>

      {/* Accessibility Needs */}
      <div className="card-modern">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Accessibility Needs</h3>
        {isEditing ? (
          <textarea
            value={editData.accessibilityNeeds}
            onChange={(e) => setEditData(prev => ({ ...prev, accessibilityNeeds: e.target.value }))}
            className="w-full"
            rows={3}
            placeholder="Describe any accessibility needs or preferences..."
          />
        ) : (
          <p className="text-gray-900">{editData.accessibilityNeeds || 'No specific needs provided'}</p>
        )}
      </div>
    </div>
  );

  const renderNotificationsTab = () => (
    <div className="card-modern">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Notification Preferences</h3>
      <div className="space-y-6">
        {Object.entries(notifications).map(([key, value]) => (
          <div key={key} className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900">
                {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
              </h4>
              <p className="text-sm text-gray-600">
                {key === 'caseUpdates' && 'Get notified about updates to your cases'}
                {key === 'newOpportunities' && 'Alerts for new benefits and opportunities'}
                {key === 'forumReplies' && 'Notifications for replies to your forum posts'}
                {key === 'weeklyDigest' && 'Weekly summary of your account activity'}
                {key === 'systemAlerts' && 'Important system and security notifications'}
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={value}
                onChange={(e) => setNotifications(prev => ({ ...prev, [key]: e.target.checked }))}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPrivacyTab = () => (
    <div className="space-y-6">
      <div className="card-modern">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Privacy Settings</h3>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Profile Visibility</label>
            <select
              value={privacy.profileVisibility}
              onChange={(e) => setPrivacy(prev => ({ ...prev, profileVisibility: e.target.value }))}
              className="w-full"
            >
              <option value="public">Public - Visible to all community members</option>
              <option value="limited">Limited - Only visible to SERA</option>
              <option value="private">Private - Not visible to anyone</option>
            </select>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900">Show Email in Profile</h4>
              <p className="text-sm text-gray-600">Allow other members to see your email address</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={privacy.showEmail}
                onChange={(e) => setPrivacy(prev => ({ ...prev, showEmail: e.target.checked }))}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900">Data Sharing for Insights</h4>
              <p className="text-sm text-gray-600">Help improve services with anonymized data</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={privacy.dataSharing}
                onChange={(e) => setPrivacy(prev => ({ ...prev, dataSharing: e.target.checked }))}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
            </label>
          </div>
        </div>
      </div>

      <div className="card-modern">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Data Management</h3>
        <div className="space-y-4">
          <button className="btn btn-outline w-full flex items-center justify-center">
            <Download className="w-4 h-4 mr-2" />
            Download My Data
          </button>
          <button 
            onClick={() => setShowDeleteModal(true)}
            className="btn w-full flex items-center justify-center bg-red-500 hover:bg-red-600 text-white"
          >
            <Trash2 className="w-4 h-4 mr-2" />
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h2>
          <p className="text-gray-600 mb-6">Please log in to view your profile</p>
          <button
            onClick={() => navigate('/login')}
            className="btn btn-primary"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

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
              <div className="icon-wrapper icon-primary icon-md">
                <User className="w-5 h-5" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">Profile Settings</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex space-x-1 mb-8 bg-gray-100 p-1 rounded-lg">
          <Tab
            label="Profile"
            isActive={activeTab === 'profile'}
            onClick={() => setActiveTab('profile')}
          />
          <Tab
            label="Notifications"
            isActive={activeTab === 'notifications'}
            onClick={() => setActiveTab('notifications')}
          />
          <Tab
            label="Privacy"
            isActive={activeTab === 'privacy'}
            onClick={() => setActiveTab('privacy')}
          />
        </div>

        {/* Tab Content */}
        <div className="animate-fadeIn">
          {activeTab === 'profile' && renderProfileTab()}
          {activeTab === 'notifications' && renderNotificationsTab()}
          {activeTab === 'privacy' && renderPrivacyTab()}
        </div>

        {/* Delete Account Modal */}
        {showDeleteModal && (
          <div className="modal-overlay">
            <div className="modal-content p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Delete Account</h3>
              <p className="text-gray-600 mb-6">
                Are you sure you want to delete your account? This action cannot be undone and will permanently remove all your data, cases, and forum posts.
              </p>
              <div className="flex space-x-3">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="btn btn-outline flex-1"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    // Handle account deletion
                    setShowDeleteModal(false);
                    // Navigate to goodbye page or home
                  }}
                  className="btn bg-red-500 hover:bg-red-600 text-white flex-1"
                >
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;