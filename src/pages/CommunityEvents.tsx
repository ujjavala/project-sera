import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import { CommunityEvent } from '../types';
import { 
  ArrowLeft,
  Heart,
  Calendar,
  MapPin,
  Users,
  Clock,
  Filter,
  Search,
  Plus,
  Star,
  HandHeart,
  UserPlus,
  BookOpen,
  Megaphone,
  CheckCircle
} from 'lucide-react';

const CommunityEvents: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [showMyEvents, setShowMyEvents] = useState(false);

  const eventTypes = [
    { id: 'all', label: 'All Events', icon: Calendar },
    { id: 'volunteering', label: 'Volunteering', icon: HandHeart },
    { id: 'meeting', label: 'Meetings', icon: Users },
    { id: 'education', label: 'Education', icon: BookOpen },
    { id: 'advocacy', label: 'Advocacy', icon: Megaphone }
  ];

  const mockEvents: CommunityEvent[] = [
    {
      id: '1',
      title: 'Community Garden Volunteer Day',
      description: 'Help maintain our local community garden and learn about sustainable living. All skill levels welcome!',
      type: 'volunteering',
      date: '2024-04-15',
      location: 'Greenfield Community Garden, Melbourne',
      organizer: 'Melbourne Sustainable Living',
      attendees: 23,
      maxAttendees: 30
    },
    {
      id: '2',
      title: 'Local Council Public Forum',
      description: 'Discuss upcoming developments and budget allocations. Your voice matters in local decision-making.',
      type: 'meeting',
      date: '2024-04-18',
      location: 'City Hall, Main Auditorium',
      organizer: 'Melbourne City Council',
      attendees: 45,
      maxAttendees: 100
    },
    {
      id: '3',
      title: 'Digital Literacy Workshop',
      description: 'Free workshop on online safety, digital banking, and accessing government services online.',
      type: 'education',
      date: '2024-04-20',
      location: 'Central Library, Computer Lab',
      organizer: 'Community Tech Alliance',
      attendees: 12,
      maxAttendees: 20
    },
    {
      id: '4',
      title: 'Housing Rights Advocacy Meeting',
      description: 'Join fellow residents to discuss tenant rights and organize collective action for fair housing.',
      type: 'advocacy',
      date: '2024-04-22',
      location: 'Community Center, Room 3B',
      organizer: 'Housing Justice Coalition',
      attendees: 18,
      maxAttendees: 25
    },
    {
      id: '5',
      title: 'Neighbourhood Clean-up Drive',
      description: 'Make our streets cleaner and meet your neighbours. Equipment provided, just bring enthusiasm!',
      type: 'volunteering',
      date: '2024-04-25',
      location: 'Richmond Station Car Park',
      organizer: 'Richmond Residents Association',
      attendees: 34,
      maxAttendees: 50
    },
    {
      id: '6',
      title: 'Know Your Rights Workshop',
      description: 'Interactive session on understanding your rights as a resident, with practical scenarios.',
      type: 'education',
      date: '2024-04-28',
      location: 'South Melbourne Community Hub',
      organizer: 'Legal Aid Victoria',
      attendees: 8,
      maxAttendees: 15
    },
    {
      id: '7',
      title: 'Climate Action Planning Session',
      description: 'Help shape our suburb\'s climate action plan and join local environmental initiatives.',
      type: 'advocacy',
      date: '2024-05-02',
      location: 'Fitzroy Town Hall',
      organizer: 'Climate Action Network',
      attendees: 27,
      maxAttendees: 40
    },
    {
      id: '8',
      title: 'Seniors Social Connection Lunch',
      description: 'Monthly gathering for seniors to connect, share experiences, and build community bonds.',
      type: 'meeting',
      date: '2024-05-05',
      location: 'Community Kitchen, Preston',
      organizer: 'Age Friendly Melbourne',
      attendees: 15,
      maxAttendees: 30
    }
  ];

  // Mock user's registered events
  const myEvents = ['2', '6', '7'];

  const filteredEvents = mockEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === 'all' || event.type === selectedType;
    const matchesMyEvents = !showMyEvents || myEvents.includes(event.id);
    
    return matchesSearch && matchesType && matchesMyEvents;
  });

  const getTypeIcon = (type: string) => {
    const eventType = eventTypes.find(t => t.id === type);
    return eventType ? eventType.icon : Calendar;
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'volunteering': return 'bg-green-100 text-green-800';
      case 'meeting': return 'bg-blue-100 text-blue-800';
      case 'education': return 'bg-purple-100 text-purple-800';
      case 'advocacy': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      day: date.getDate(),
      month: date.toLocaleDateString('en-AU', { month: 'short' }),
      dayName: date.toLocaleDateString('en-AU', { weekday: 'short' })
    };
  };

  const handleJoinEvent = (eventId: string) => {
    // In a real app, this would register the user for the event
    console.log('Joining event:', eventId);
  };

  const handleCreateEvent = () => {
    // In a real app, this would navigate to event creation form
    console.log('Creating new event');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-white via-purple-50 to-pink-50 shadow-lg border-b border-purple-200">
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
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Community Events</h1>
                  <p className="text-xs text-purple-600 font-medium">Connect & engage locally</p>
                </div>
              </div>
            </div>
            <button
              onClick={handleCreateEvent}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-xl font-medium transition-all shadow-lg flex items-center"
            >
              <Plus className="w-4 h-4 mr-2" />
              Create Event
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Stats Overview */}
        <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-xl p-6 mb-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Calendar className="w-8 h-8" />
              </div>
              <div className="text-2xl font-bold">{mockEvents.length}</div>
              <div className="text-green-100 text-sm">Upcoming Events</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-8 h-8" />
              </div>
              <div className="text-2xl font-bold">{mockEvents.reduce((sum, event) => sum + event.attendees, 0)}</div>
              <div className="text-green-100 text-sm">Community Members</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <HandHeart className="w-8 h-8" />
              </div>
              <div className="text-2xl font-bold">{mockEvents.filter(e => e.type === 'volunteering').length}</div>
              <div className="text-green-100 text-sm">Volunteer Opportunities</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div className="text-2xl font-bold">{myEvents.length}</div>
              <div className="text-green-100 text-sm">My Registered Events</div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search events by title, description, or location..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            
            <div className="flex gap-4">
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                {eventTypes.map(type => (
                  <option key={type.id} value={type.id}>{type.label}</option>
                ))}
              </select>
              
              <button
                onClick={() => setShowMyEvents(!showMyEvents)}
                className={`px-4 py-2 rounded-lg border transition-colors ${
                  showMyEvents 
                    ? 'border-primary-500 bg-primary-50 text-primary-700' 
                    : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                My Events
              </button>
            </div>
          </div>

          {/* Event Type Filters */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {eventTypes.map((type) => {
              const Icon = type.icon;
              const isActive = selectedType === type.id;
              return (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`p-3 rounded-lg border transition-all hover:scale-105 ${
                    isActive
                      ? 'border-primary-500 bg-primary-50 text-primary-700'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-5 h-5 mx-auto mb-1" />
                  <div className="text-xs font-medium">{type.label}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredEvents.map((event) => {
            const dateInfo = formatDate(event.date);
            const TypeIcon = getTypeIcon(event.type);
            const isRegistered = myEvents.includes(event.id);
            
            return (
              <div key={event.id} className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4">
                    {/* Date Block */}
                    <div className="text-center bg-primary-50 rounded-lg p-3 min-w-[60px]">
                      <div className="text-xs text-primary-600 font-medium">{dateInfo.month}</div>
                      <div className="text-xl font-bold text-primary-800">{dateInfo.day}</div>
                      <div className="text-xs text-primary-600">{dateInfo.dayName}</div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{event.description}</p>
                    </div>
                  </div>
                  
                  <div className={`px-2 py-1 rounded-full text-xs font-medium flex items-center ${getTypeColor(event.type)}`}>
                    <TypeIcon className="w-3 h-3 mr-1" />
                    <span className="capitalize">{event.type}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-2 text-gray-400" />
                    {event.attendees} attending
                    {event.maxAttendees && ` • ${event.maxAttendees - event.attendees} spots left`}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Star className="w-4 h-4 mr-2 text-gray-400" />
                    Organized by {event.organizer}
                  </div>
                </div>

                {event.maxAttendees && (
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-gray-500">Attendance</span>
                      <span className="text-xs text-gray-500">
                        {event.attendees}/{event.maxAttendees}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-primary-500 h-2 rounded-full"
                        style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                <div className="flex space-x-3">
                  {isRegistered ? (
                    <button className="flex-1 bg-green-500 text-white px-4 py-2 rounded-lg font-medium flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Registered
                    </button>
                  ) : (
                    <button
                      onClick={() => handleJoinEvent(event.id)}
                      className="flex-1 bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center"
                      disabled={!!(event.maxAttendees && event.attendees >= event.maxAttendees)}
                    >
                      <UserPlus className="w-4 h-4 mr-2" />
                      {event.maxAttendees && event.attendees >= event.maxAttendees ? 'Full' : 'Join Event'}
                    </button>
                  )}
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No events found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="bg-white rounded-xl shadow-sm p-6 mt-8 border border-gray-200 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Don't see what you're looking for?</h3>
          <p className="text-gray-600 mb-4">
            Create your own community event and bring people together around causes you care about.
          </p>
          <button
            onClick={handleCreateEvent}
            className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center mx-auto"
          >
            <Plus className="w-4 h-4 mr-2" />
            Start Your Own Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunityEvents;