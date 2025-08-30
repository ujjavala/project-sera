import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import { 
  ArrowLeft, 
  Send, 
  Bot, 
  User, 
  FileText, 
  Calendar,
  AlertCircle,
  CheckCircle,
  Heart,
  Paperclip,
  MoreVertical
} from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  actions?: Array<{
    label: string;
    action: string;
  }>;
}

const AIChat: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: `Hi ${user?.name || 'there'}! I noticed your PR renewal deadline is approaching in 30 days. Would you like me to prepare the documents now?`,
      timestamp: new Date(),
      actions: [
        { label: 'Prepare Docs', action: 'prepare_docs' },
        { label: 'Ask Question', action: 'ask_question' },
        { label: 'View Status', action: 'view_status' }
      ]
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Generate contextual AI response with rights knowledge
    setTimeout(() => {
      const rightsAwareResponses = [
        {
          content: "I understand you're asking about housing benefits. Based on Australian housing rights law and your profile, I can see you may qualify for additional support. Under the Racial Discrimination Act 1975, you're protected from housing discrimination. Let me check your eligibility against current programs.",
          actions: [
            { label: 'Check Eligibility', action: 'check_eligibility' },
            { label: 'Know Your Rights', action: 'housing_rights' },
            { label: 'File New Claim', action: 'file_claim' }
          ]
        },
        {
          content: "I've analyzed 847 policies and found 3 services you're missing. As someone with voting rights under s41 of the Constitution, you're entitled to equal access to government services. The Healthcare Subsidy could save you $1,200/year - this aligns with your economic rights under international treaties Australia has ratified.",
          actions: [
            { label: 'Apply Now', action: 'apply_healthcare' },
            { label: 'View Rights Info', action: 'economic_rights' },
            { label: 'See All Services', action: 'other_services' }
          ]
        },
        {
          content: "Excellent! I've prepared your PR renewal using my knowledge of immigration law and the 7 core UN treaties Australia has ratified. Your case strength is 95% based on similar profiles. I've ensured all constitutional property rights (s51(xxxi)) and non-discrimination protections (s117) are considered.",
          actions: [
            { label: 'Review Documents', action: 'review_docs' },
            { label: 'Legal Context', action: 'immigration_rights' },
            { label: 'Submit Application', action: 'submit_app' }
          ]
        },
        {
          content: "I notice you're asking about workplace issues. Under the Sex Discrimination Act 1984, Racial Discrimination Act 1975, Disability Discrimination Act 1992, and Age Discrimination Act 2004, you have strong protections. I can help you understand your rights and next steps, including connecting you with the Australian Human Rights Commission if needed.",
          actions: [
            { label: 'File AHRC Complaint', action: 'file_ahrc' },
            { label: 'Know Your Rights', action: 'workplace_rights' },
            { label: 'Legal Resources', action: 'legal_help' }
          ]
        },
        {
          content: "Based on the Mabo v Queensland (1992) landmark case and Native Title Act 1993, I can help you understand Indigenous land rights. Australia's rights framework includes 60,000+ years of Aboriginal and Torres Strait Islander customary law. Would you like specific information about native title or cultural heritage protections?",
          actions: [
            { label: 'Native Title Info', action: 'native_title' },
            { label: 'Cultural Rights', action: 'cultural_rights' },
            { label: 'Legal Support', action: 'indigenous_legal' }
          ]
        },
        {
          content: "I can help you understand your constitutional rights! Australia has 5 explicit rights: voting (s41), property on just terms (s51(xxxi)), jury trial (s80), religious freedom (s116), and non-state discrimination (s117). Plus implied rights like political communication. What specific area interests you?",
          actions: [
            { label: 'Constitutional Rights', action: 'constitution_info' },
            { label: 'Implied Rights', action: 'implied_rights' },
            { label: 'Compare Jurisdictions', action: 'jurisdictions' }
          ]
        },
        {
          content: "🗳️ **Voting Enrollment Help**: As a new Australian citizen, you must enroll and vote in all elections (federal, state, local). You can enroll from age 16 if you've lived at your address 1+ month. I can help you with the enrollment process using your driver's licence, passport, Medicare card, or citizenship certificate.",
          actions: [
            { label: 'Help Me Enroll', action: 'voting_enrollment' },
            { label: 'Voting Requirements', action: 'voting_info' },
            { label: 'AEC Contact Info', action: 'aec_contact' }
          ]
        }
      ];

      const randomResponse = rightsAwareResponses[Math.floor(Math.random() * rightsAwareResponses.length)];
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: randomResponse.content,
        timestamp: new Date(),
        actions: randomResponse.actions
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickAction = (action: string, label: string) => {
    const actionMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: label,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, actionMessage]);
    setIsTyping(true);

    // Enhanced AI response with rights context and agentic capabilities
    setTimeout(() => {
      let response = "I'm processing your request using my comprehensive knowledge of Australian rights law...";
      let additionalActions: Array<{label: string, action: string}> = [];
      
      switch (action) {
        case 'prepare_docs':
          response = "🔒 **Document Preparation**: I'm preparing your PR renewal documents while ensuring your constitutional property rights (s51(xxxi)) and non-discrimination protections (s117) are upheld. I've cross-referenced your case against the 7 UN treaties Australia has ratified. Estimated completion: 5 minutes.";
          additionalActions = [
            { label: 'Legal Protections', action: 'immigration_rights' },
            { label: 'Know Your Rights', action: 'constitutional_rights' }
          ];
          break;
          
        case 'check_eligibility':
          response = "✅ **Rights-Based Eligibility Check**: Based on your economic rights under international treaties and anti-discrimination laws, you qualify for: Housing Benefit ($800/month), Healthcare Subsidy ($1,200/year), Education Grant ($2,000). Your access to these is protected under the Sex/Racial/Disability/Age Discrimination Acts.";
          additionalActions = [
            { label: 'Apply for All', action: 'apply_all' },
            { label: 'Economic Rights', action: 'economic_rights' },
            { label: 'View Protections', action: 'discrimination_protection' }
          ];
          break;
          
        case 'apply_healthcare':
          response = "💊 **Healthcare Rights Application**: I'm processing your Healthcare Subsidy application ($1,200 annually) while ensuring compliance with your economic rights under UN treaties. If you face any discrimination during processing, I can help you file an AHRC complaint. Your application is protected under federal anti-discrimination law.";
          additionalActions = [
            { label: 'Track Application', action: 'track_health_app' },
            { label: 'Rights During Process', action: 'application_rights' }
          ];
          break;
          
        case 'housing_rights':
          response = "🏠 **Housing Rights Explained**: Under Australian law, you're protected by the Racial Discrimination Act 1975 and have constitutional non-discrimination rights (s117). You also have implied rights to adequate housing. If you've faced housing discrimination, I can help you file an AHRC complaint or connect you with legal aid.";
          additionalActions = [
            { label: 'File AHRC Complaint', action: 'file_ahrc' },
            { label: 'Legal Aid Resources', action: 'legal_help' },
            { label: 'Housing Programs', action: 'housing_programs' }
          ];
          break;
          
        case 'workplace_rights':
          response = "💼 **Workplace Rights Protection**: You're protected by 4 federal anti-discrimination acts: Sex (1984), Racial (1975), Disability (1992), Age (2004). You also have implied constitutional rights to fair treatment. I can help you understand your options including AHRC complaints, Fair Work assistance, or legal aid referrals.";
          additionalActions = [
            { label: 'File AHRC Complaint', action: 'file_ahrc' },
            { label: 'Fair Work Help', action: 'fair_work' },
            { label: 'Legal Resources', action: 'legal_help' }
          ];
          break;
          
        case 'constitutional_rights':
          response = "⚖️ **Your Constitutional Rights**: Australia's Constitution gives you 5 explicit rights: vote (s41), property on just terms (s51(xxxi)), jury trial (s80), religious freedom (s116), and non-state discrimination (s117). Plus implied rights like political communication established by High Court cases.";
          additionalActions = [
            { label: 'View Full Guide', action: 'constitution_info' },
            { label: 'Implied Rights', action: 'implied_rights' },
            { label: 'Compare States', action: 'jurisdictions' }
          ];
          break;
          
        case 'file_ahrc':
          response = "📋 **AHRC Complaint Process**: I'm preparing your Australian Human Rights Commission complaint form. The AHRC (established 1986) handles discrimination complaints and provides recommendations. I'll guide you through each step and ensure your rights are protected throughout the process.";
          additionalActions = [
            { label: 'Preview Form', action: 'preview_ahrc' },
            { label: 'Your Rights Info', action: 'ahrc_rights' }
          ];
          break;
          
        case 'voting_enrollment':
          response = "🗳️ **Voting Enrollment Assistance**: I'll help you enroll to vote online - it's the fastest method! You'll need one of these: driver's licence, passport, Medicare card, or citizenship certificate number. Plus you must have lived at your current address for 1+ month. Ready to get started?";
          additionalActions = [
            { label: 'Online Enrollment', action: 'enroll_online' },
            { label: 'Required Documents', action: 'enrollment_docs' },
            { label: 'Call AEC: 13 23 26', action: 'aec_contact' }
          ];
          break;
          
        case 'voting_info':
          response = "📊 **Your Voting Obligations**: As an Australian citizen, you must vote in ALL elections: federal, state/territory, and local council. You can enroll from 16 (vote at 18). Compulsory voting ensures everyone has a say in democracy. Need help understanding the preferential voting system?";
          additionalActions = [
            { label: 'How Voting Works', action: 'voting_system' },
            { label: 'Practice Voting', action: 'voting_practice' },
            { label: 'Accessibility Help', action: 'voting_accessibility' }
          ];
          break;
          
        case 'aec_contact':
          response = "📞 **Australian Electoral Commission Contact**: Main hotline 13 23 26. For accessibility: TTY 13 36 77→13 23 26, Speak & Listen 1300 555 727→13 23 26, Internet relay→13 23 26. Information available in multiple languages. Need help finding your local AEC office?";
          additionalActions = [
            { label: 'Find Local Office', action: 'local_aec' },
            { label: 'Accessibility Services', action: 'voting_accessibility' },
            { label: 'Translated Info', action: 'voting_languages' }
          ];
          break;
          
        default:
          response = "I'm using my comprehensive knowledge of Australian rights law to help you. This includes 60,000+ years of Indigenous customary law, constitutional rights, 7 UN treaties, 4 federal anti-discrimination acts, and landmark cases like Mabo (1992).";
          additionalActions = [
            { label: 'Learn More', action: 'constitution_info' },
            { label: 'My Rights', action: 'constitutional_rights' }
          ];
      }

      // Add navigation for rights-related actions
      if (['constitution_info', 'implied_rights', 'jurisdictions'].includes(action)) {
        setTimeout(() => navigate('/rights'), 2000);
      }
      
      const aiMessage: Message = {
        id: (Date.now() + 2).toString(),
        type: 'ai',
        content: response,
        timestamp: new Date(),
        actions: additionalActions.length > 0 ? additionalActions : undefined
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const suggestedQuestions = [
    "What benefits am I missing?",
    "Help me enroll to vote",
    "What are my constitutional rights?",
    "Help with housing discrimination",
    "File an AHRC complaint",
    "Check my case status",
    "Appeal a rejection"
  ];

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm border-b flex-shrink-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <button
                onClick={() => navigate('/dashboard')}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 mr-6"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back</span>
              </button>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-gray-900">Talk to SERA</h1>
                  <p className="text-xs text-green-600">Online • Ready to help</p>
                </div>
              </div>
            </div>
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto py-6">
          <div className="space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex space-x-3 max-w-xl ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.type === 'user' 
                      ? 'bg-primary-500' 
                      : 'bg-gray-100'
                  }`}>
                    {message.type === 'user' ? (
                      <User className="w-4 h-4 text-white" />
                    ) : (
                      <Bot className="w-4 h-4 text-primary-500" />
                    )}
                  </div>
                  <div>
                    <div className={`p-4 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-primary-500 text-white'
                        : 'bg-white border border-gray-200'
                    }`}>
                      <p className="text-sm">{message.content}</p>
                    </div>
                    <div className={`flex items-center space-x-2 mt-2 text-xs text-gray-500 ${
                      message.type === 'user' ? 'justify-end' : ''
                    }`}>
                      <span>{message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                    </div>
                    
                    {/* Quick Actions */}
                    {message.actions && message.type === 'ai' && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {message.actions.map((action, index) => (
                          <button
                            key={index}
                            onClick={() => handleQuickAction(action.action, action.label)}
                            className="px-3 py-1 bg-primary-50 hover:bg-primary-100 text-primary-700 text-xs font-medium rounded-full border border-primary-200 transition-colors"
                          >
                            {action.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex space-x-3 max-w-xl">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-primary-500" />
                  </div>
                  <div className="bg-white border border-gray-200 p-4 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Suggested Questions */}
      {messages.length <= 1 && (
        <div className="px-4 sm:px-6 lg:px-8 pb-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm text-gray-600 mb-3">Try asking:</p>
            <div className="flex flex-wrap gap-2">
              {suggestedQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => setInputMessage(question)}
                  className="px-3 py-2 bg-white border border-gray-300 hover:border-gray-400 text-gray-700 text-sm rounded-lg transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Input */}
      <div className="border-t bg-white px-4 sm:px-6 lg:px-8 py-4 flex-shrink-0">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-end space-x-3">
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <Paperclip className="w-5 h-5" />
            </button>
            <div className="flex-1 min-h-[44px] max-h-32 relative">
              <textarea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
                placeholder="Type your message..."
                className="w-full resize-none border border-gray-300 rounded-xl px-4 py-3 pr-12 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                rows={1}
                style={{ minHeight: '44px' }}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
                className="absolute right-2 bottom-2 p-2 text-primary-500 hover:text-primary-600 disabled:text-gray-400 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChat;