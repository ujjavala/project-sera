# API Design Document: Citizen SERA
## Agentic AI-Focused API Architecture

### 1. API Overview

The Citizen SERA API is built around an agentic AI architecture that provides intelligent, conversational interfaces for civic advocacy. The API follows RESTful principles with GraphQL endpoints for complex queries and real-time WebSocket connections for agent interactions.

### 2. Base Configuration

**Base URL:** `https://api.citizensera.com/v1`

**Authentication:** Bearer token (JWT) with refresh tokens

**Content Type:** `application/json`

**Rate Limiting:** 1000 requests/hour for authenticated users, 100/hour for anonymous

### 3. Authentication Endpoints

#### 3.1 User Registration
```http
POST /auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securePassword123",
  "firstName": "John",
  "lastName": "Doe",
  "residencyStatus": "citizen|pr|aspiring",
  "acceptedTerms": true
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "uuid",
      "email": "user@example.com",
      "firstName": "John",
      "lastName": "Doe",
      "residencyStatus": "pr",
      "subscriptionTier": "free",
      "createdAt": "2024-01-15T00:00:00Z"
    },
    "tokens": {
      "accessToken": "jwt-access-token",
      "refreshToken": "jwt-refresh-token",
      "expiresIn": 3600
    }
  }
}
```

#### 3.2 User Login
```http
POST /auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securePassword123"
}
```

### 4. AI Agent Interaction Endpoints

#### 4.1 Start Agent Conversation
```http
POST /agents/conversations
Authorization: Bearer {token}

{
  "agentType": "advocacy|policy|document|appeal|community",
  "initialMessage": "I need help finding housing benefits",
  "context": {
    "caseId": "uuid-optional",
    "priority": "medium",
    "language": "en"
  }
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "conversationId": "uuid",
    "agentId": "advocacy-agent-001",
    "sessionId": "uuid",
    "initialResponse": {
      "message": "I understand you're looking for housing benefits. Let me help you find what you might be eligible for. Can you tell me about your current living situation?",
      "suggestedActions": [
        {
          "type": "eligibility_check",
          "label": "Check Housing Benefits Eligibility",
          "payload": {"category": "housing"}
        }
      ],
      "emotionalTone": "empathetic",
      "confidence": 0.95
    }
  }
}
```

#### 4.2 Send Message to Agent
```http
POST /agents/conversations/{conversationId}/messages
Authorization: Bearer {token}

{
  "message": "I'm currently renting and struggling with high costs",
  "attachments": [
    {
      "type": "document",
      "url": "https://storage.com/lease-document.pdf",
      "description": "Current lease agreement"
    }
  ]
}
```

#### 4.3 Get Agent Capabilities
```http
GET /agents/types
Authorization: Bearer {token}
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "type": "advocacy",
      "name": "Advocacy Agent",
      "description": "Primary assistant for case management and general advocacy",
      "capabilities": [
        "case_assessment",
        "benefit_discovery",
        "document_guidance",
        "emotional_support"
      ],
      "languages": ["en", "zh", "ar", "vi"],
      "averageResponseTime": "2.5s"
    },
    {
      "type": "policy",
      "name": "Policy Analyst",
      "description": "Specialized in policy interpretation and eligibility analysis",
      "capabilities": [
        "policy_interpretation",
        "eligibility_calculation",
        "deadline_tracking",
        "requirement_analysis"
      ],
      "specializations": ["centrelink", "medicare", "immigration", "taxation"]
    }
  ]
}
```

### 5. Case Management Endpoints

#### 5.1 Create New Case
```http
POST /cases
Authorization: Bearer {token}

{
  "title": "Housing Assistance Application",
  "category": "housing",
  "priority": "medium",
  "description": "Need help applying for rental assistance",
  "aiAssessmentRequested": true
}
```

#### 5.2 Get Case with AI Insights
```http
GET /cases/{caseId}
Authorization: Bearer {token}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "title": "Housing Assistance Application",
    "status": "in_progress",
    "category": "housing",
    "createdAt": "2024-01-15T00:00:00Z",
    "timeline": [
      {
        "id": "uuid",
        "date": "2024-01-15T00:00:00Z",
        "description": "Case created and initial assessment completed",
        "type": "milestone",
        "aiGenerated": true
      }
    ],
    "aiInsights": {
      "successProbability": 0.78,
      "estimatedTimeframe": "4-6 weeks",
      "nextSteps": [
        "Gather income documentation",
        "Complete rental assistance application",
        "Schedule appointment with housing service"
      ],
      "riskFactors": [
        "Missing recent payslips",
        "Application deadline in 2 weeks"
      ],
      "recommendedActions": [
        {
          "type": "document_upload",
          "priority": "high",
          "description": "Upload last 3 months of payslips",
          "dueDate": "2024-01-20T00:00:00Z"
        }
      ]
    },
    "assignedAgents": [
      {
        "type": "advocacy",
        "id": "advocacy-agent-001",
        "assignedAt": "2024-01-15T00:00:00Z",
        "lastInteraction": "2024-01-16T10:30:00Z"
      }
    ]
  }
}
```

#### 5.3 Update Case Status
```http
PATCH /cases/{caseId}
Authorization: Bearer {token}

{
  "status": "completed",
  "outcome": "approved",
  "notes": "Application approved for $400/month rental assistance"
}
```

### 6. Entitlement Discovery Endpoints

#### 6.1 AI-Powered Benefit Search
```http
POST /entitlements/discover
Authorization: Bearer {token}

{
  "userProfile": {
    "age": 35,
    "residencyStatus": "pr",
    "employmentStatus": "unemployed",
    "hasChildren": true,
    "childrenAges": [8, 12],
    "annualIncome": 25000,
    "location": "Melbourne, VIC",
    "hasDisability": false,
    "studyStatus": "not_studying"
  },
  "priorityCategories": ["housing", "employment", "healthcare"]
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "totalFound": 23,
    "highProbability": [
      {
        "id": "uuid",
        "title": "JobSeeker Payment",
        "category": "employment",
        "description": "Fortnightly payment for unemployed people looking for work",
        "eligibilityScore": 0.95,
        "estimatedValue": 1200,
        "valueFrequency": "fortnightly",
        "processingTime": "2-3 weeks",
        "nextSteps": [
          "Complete online claim",
          "Attend appointment at Centrelink",
          "Provide employment history"
        ],
        "deadline": "2024-02-15T00:00:00Z",
        "aiAnalysis": {
          "matchReasons": [
            "Meets age requirement (18-65)",
            "Currently unemployed",
            "Permanent resident status",
            "Income below threshold"
          ],
          "potentialIssues": [],
          "confidenceLevel": "high"
        }
      }
    ],
    "mediumProbability": [...],
    "requiresMoreInfo": [...]
  }
}
```

#### 6.2 Get Entitlement Details with AI Guidance
```http
GET /entitlements/{entitlementId}/guidance
Authorization: Bearer {token}
```

### 7. Document Processing Endpoints

#### 7.1 AI Document Analysis
```http
POST /documents/analyze
Authorization: Bearer {token}
Content-Type: multipart/form-data

file: [binary file data]
context: "centrelink-application"
```

**Response:**
```json
{
  "success": true,
  "data": {
    "documentType": "income_statement",
    "confidence": 0.92,
    "extractedData": {
      "employerName": "ABC Company Pty Ltd",
      "grossIncome": 3500,
      "taxDeductions": 350,
      "netIncome": 3150,
      "payPeriod": "monthly"
    },
    "suggestedUse": [
      "JobSeeker application income verification",
      "Rental assistance income proof"
    ],
    "aiRecommendations": [
      "Document appears complete and valid",
      "Consider uploading 2 additional months for stronger application"
    ]
  }
}
```

#### 7.2 Auto-Fill Form Generation
```http
POST /documents/auto-fill
Authorization: Bearer {token}

{
  "formType": "centrelink-jobseeker",
  "userProfile": "auto-populate",
  "additionalData": {
    "bankDetails": {
      "bsb": "123456",
      "accountNumber": "987654321"
    }
  }
}
```

### 8. Community Features Endpoints

#### 8.1 Get Forum Posts with AI Moderation
```http
GET /forums/posts?category=housing&moderationLevel=ai-filtered
Authorization: Bearer {token}
```

#### 8.2 Create Forum Post with AI Review
```http
POST /forums/posts
Authorization: Bearer {token}

{
  "title": "Housing assistance application rejected - need advice",
  "content": "My application was rejected because...",
  "category": "housing",
  "tags": ["centrelink", "appeal"],
  "aiReviewRequested": true
}
```

### 9. AI Analytics & Insights Endpoints

#### 9.1 Personal Impact Dashboard
```http
GET /analytics/impact
Authorization: Bearer {token}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "personalWins": {
      "benefitsSecured": {
        "count": 3,
        "totalValue": 15600,
        "breakdown": [
          {"name": "JobSeeker Payment", "value": 12000, "frequency": "yearly"},
          {"name": "Rental Assistance", "value": 2400, "frequency": "yearly"},
          {"name": "Healthcare Card", "value": 1200, "frequency": "yearly"}
        ]
      },
      "casesResolved": 5,
      "averageResolutionTime": "18 days",
      "successRate": 0.83
    },
    "wellbeingMetrics": {
      "stressReduction": 0.65,
      "confidenceIncrease": 0.78,
      "timeStaved": "23 hours"
    },
    "aiAssistanceStats": {
      "conversationsHad": 47,
      "documentsProcessed": 23,
      "automatedTasks": 15
    }
  }
}
```

### 10. Real-Time WebSocket API

#### 10.1 Agent Communication WebSocket
```javascript
// Connection
const ws = new WebSocket('wss://api.citizensera.com/v1/agents/ws');

// Authentication
ws.send(JSON.stringify({
  type: 'auth',
  token: 'jwt-token'
}));

// Start conversation
ws.send(JSON.stringify({
  type: 'start_conversation',
  data: {
    agentType: 'advocacy',
    message: 'Hello, I need help with my case'
  }
}));

// Receive agent response
ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  if (data.type === 'agent_response') {
    console.log('Agent says:', data.message);
    console.log('Confidence:', data.confidence);
    console.log('Suggested actions:', data.suggestedActions);
  }
};
```

### 11. GraphQL API (Complex Queries)

#### 11.1 GraphQL Endpoint
```
POST /graphql
Authorization: Bearer {token}
Content-Type: application/json
```

#### 11.2 Complex Query Example
```graphql
query GetUserDashboard($userId: ID!) {
  user(id: $userId) {
    id
    profile {
      name
      subscriptionTier
      residencyStatus
    }
    cases(status: [IN_PROGRESS, PENDING]) {
      id
      title
      status
      aiInsights {
        successProbability
        nextSteps
        riskFactors
      }
      timeline {
        date
        description
        type
      }
    }
    entitlements(eligibilityScore: { min: 0.7 }) {
      id
      title
      eligibilityScore
      estimatedValue
      processingTime
    }
    recentConversations(limit: 5) {
      id
      agentType
      lastMessage {
        content
        timestamp
      }
    }
  }
}
```

### 12. Error Handling

#### 12.1 Standard Error Response
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input provided",
    "details": {
      "field": "email",
      "reason": "Email format is invalid"
    },
    "timestamp": "2024-01-15T10:30:00Z",
    "requestId": "uuid"
  }
}
```

#### 12.2 Common Error Codes
- `AUTH_REQUIRED`: Authentication token required
- `AUTH_INVALID`: Invalid or expired token
- `RATE_LIMIT_EXCEEDED`: Too many requests
- `VALIDATION_ERROR`: Input validation failed
- `RESOURCE_NOT_FOUND`: Requested resource not found
- `AGENT_UNAVAILABLE`: AI agent temporarily unavailable
- `PROCESSING_ERROR`: Error in AI processing
- `INTEGRATION_ERROR`: External service integration failed

### 13. Rate Limiting & Quotas

#### 13.1 Rate Limits by Tier
- **Free Tier**: 1000 requests/hour, 50 AI conversations/day
- **Premium Tier**: 10000 requests/hour, unlimited conversations
- **Legal Aid**: 5000 requests/hour, unlimited conversations
- **Enterprise**: Custom limits based on contract

#### 13.2 Rate Limit Headers
```http
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 847
X-RateLimit-Reset: 1642284000
X-RateLimit-Type: hourly
```

### 14. Webhooks

#### 14.1 Case Status Updates
```http
POST {your-webhook-url}
Content-Type: application/json
X-Webhook-Signature: sha256=...

{
  "event": "case.status_changed",
  "data": {
    "caseId": "uuid",
    "oldStatus": "in_progress",
    "newStatus": "completed",
    "changedBy": "ai-agent",
    "timestamp": "2024-01-15T10:30:00Z"
  }
}
```

### 15. SDK Examples

#### 15.1 JavaScript SDK
```javascript
import { CitizenSeraAPI } from '@citizensera/api-sdk';

const api = new CitizenSeraAPI({
  apiKey: 'your-api-key',
  environment: 'production'
});

// Start AI conversation
const conversation = await api.agents.startConversation({
  agentType: 'advocacy',
  message: 'I need help with housing benefits'
});

// Get AI-powered case insights
const caseInsights = await api.cases.getInsights(caseId);
```

#### 15.2 Python SDK
```python
from citizensera import CitizenSeraAPI

api = CitizenSeraAPI(api_key='your-api-key')

# Discover entitlements
entitlements = api.entitlements.discover(
    user_profile={
        'age': 35,
        'residency_status': 'pr',
        'employment_status': 'unemployed'
    }
)
```

### 16. API Versioning

**Version Strategy:** URL-based versioning (`/v1`, `/v2`)

**Backward Compatibility:** Maintained for minimum 12 months

**Deprecation Process:** 
1. 6-month deprecation notice
2. Sunset headers in responses  
3. Migration guides and tools provided

### 17. Monitoring & Analytics

#### 17.1 API Metrics
- Request/response times
- Error rates by endpoint
- AI agent performance metrics
- User engagement tracking

#### 17.2 Health Check Endpoint
```http
GET /health
```

**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2024-01-15T10:30:00Z",
  "services": {
    "database": "healthy",
    "ai_agents": "healthy",
    "government_apis": "degraded",
    "cache": "healthy"
  },
  "version": "1.2.3"
}
```