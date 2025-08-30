import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Shield, Users } from 'lucide-react';

const WelcomeScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-accent-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="mb-8">
          <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary-600 via-purple-600 to-accent-600 bg-clip-text text-transparent mb-3">
            Citizen SERA
          </h1>
          <p className="text-lg font-medium text-gray-700 mb-2">System for Empathetic Rights Advocacy</p>
          <p className="text-lg font-semibold text-primary-600 mb-3">
            "Because Your Rights Matter"
          </p>
          <p className="text-sm text-gray-600">
            AI-powered advocacy platform empowering every citizen to access their rights and benefits.
          </p>
        </div>

        <div className="space-y-4 mb-8">
          <div className="flex items-center space-x-3 text-left">
            <Shield className="w-6 h-6 text-primary-500 flex-shrink-0" />
            <span className="text-gray-700">Active advocacy for your rights</span>
          </div>
          <div className="flex items-center space-x-3 text-left">
            <Users className="w-6 h-6 text-primary-500 flex-shrink-0" />
            <span className="text-gray-700">Personalized representation</span>
          </div>
          <div className="flex items-center space-x-3 text-left">
            <Heart className="w-6 h-6 text-primary-500 flex-shrink-0" />
            <span className="text-gray-700">Never gives up on your case</span>
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => navigate('/signup')}
            className="btn btn-primary w-full animate-fadeIn"
          >
            Create Account
          </button>
          <button
            onClick={() => navigate('/login')}
            className="btn btn-outline w-full animate-fadeIn"
          >
            Sign In
          </button>
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or</span>
            </div>
          </div>
          <button
            onClick={() => navigate('/dashboard')}
            className="btn btn-ghost w-full text-gray-600 hover:text-gray-800 animate-fadeIn"
          >
            Continue as Guest → Preview App
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;