export interface User {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  address?: string;
  avatar?: string;
  bio?: string;
  residencyStatus: 'citizen' | 'pr' | 'aspiring';
  languages: string[];
  accessibilityNeeds?: string;
  priorities: string[];
  story?: string;
  createdAt?: string;
  lastActive?: string;
  subscriptionTier: 'free' | 'premium' | 'legal_aid' | 'enterprise';
  subscriptionAmount?: number;
}

export interface Case {
  id: string;
  title: string;
  status: 'pending' | 'in_progress' | 'completed' | 'rejected';
  category: string;
  timeline: TimelineEvent[];
  nextStep?: string;
  aiSuggestion?: string;
  documents?: Document[];
}

export interface TimelineEvent {
  id: string;
  date: string;
  description: string;
  type: 'action' | 'response' | 'milestone';
}

export interface ForumPost {
  id: string;
  title: string;
  author: string;
  category: string;
  replies: number;
  content: string;
  timestamp: string;
}

export interface ImpactMetrics {
  personalWins: {
    benefitsSecured: number;
    casesWon: number;
    unfairRejectionsOverturned: number;
  };
  systemicImpact: {
    communityWins: number;
    policyChanges: number;
  };
  wellbeingTracker: {
    stressBefore: number;
    stressAfter: number;
  };
}

export interface Entitlement {
  id: string;
  title: string;
  description: string;
  category: 'healthcare' | 'housing' | 'employment' | 'education' | 'welfare' | 'immigration';
  eligibilityMatch: number;
  estimatedValue?: number;
  deadline?: string;
  status: 'eligible' | 'applied' | 'approved' | 'rejected';
  requirements: string[];
  documents: string[];
}

export interface CivicEducationModule {
  id: string;
  title: string;
  description: string;
  category: 'democracy' | 'rights' | 'services' | 'community' | 'representatives';
  duration: string;
  completed: boolean;
  progress: number;
  interactive: boolean;
}

export interface CommunityEvent {
  id: string;
  title: string;
  description: string;
  type: 'volunteering' | 'meeting' | 'education' | 'advocacy';
  date: string;
  location: string;
  organizer: string;
  attendees: number;
  maxAttendees?: number;
}

export interface SubscriptionTier {
  id: 'free' | 'premium' | 'legal_aid' | 'enterprise';
  name: string;
  description: string;
  priceRange: string;
  features: string[];
  limitations?: string[];
}

export interface CitizenshipStatistics {
  totalSince1949: number;
  currentYear: {
    year: string;
    total: number;
    totalNationalities: number;
  };
  topNationalities: {
    nationality: string;
    count: number;
    percentage?: number;
  }[];
  historicalData: {
    year: string;
    total: number;
    topNationalities: {
      nationality: string;
      count: number;
    }[];
  }[];
  processingTimes?: {
    average: string;
    current: string;
  };
  populationDemographics?: {
    totalPopulation: {
      year2024: number;
    };
    workingAgePopulation: {
      percentage2023: number;
    };
    aboriginalTorresStraitIslander: {
      population2021: number;
      languageSpeakersPercentage: number;
    };
    overseasBorn: {
      total2021: number;
    };
    employment: {
      totalJobs2021: number;
    };
    education: {
      preschoolEnrollment2023: number;
    };
    housing: {
      medianHousePrice2023: number;
      medianWeeklyRent2021: number;
      medianMonthlyMortgage2021: number;
    };
    income: {
      medianTotalIncome2022: number;
    };
    business: {
      totalBusinesses2024: number;
    };
    landArea: {
      total2021: number;
      protectedLand2022: number;
      unit: string;
    };
  };
}

export interface AustralianRights {
  sources: {
    id: string;
    name: string;
    description: string;
    duration: string;
    examples: string[];
  }[];
  constitutionalRights: {
    section: string;
    right: string;
    description: string;
  }[];
  impliedRights: {
    name: string;
    description: string;
    established: string;
  }[];
  internationalTreaties: {
    name: string;
    year: string;
    status: 'ratified' | 'signed' | 'not_signed';
    description: string;
    articles?: number;
  }[];
  statuteLaws: {
    name: string;
    year: string;
    focus: string;
    description: string;
  }[];
  landmarkCases: {
    name: string;
    year: string;
    impact: string;
    description: string;
  }[];
  institutions: {
    name: string;
    established: string;
    role: string;
    description: string;
  }[];
  jurisdictionalRights: {
    jurisdiction: string;
    hasRights: boolean;
    year?: string;
    name?: string;
  }[];
}