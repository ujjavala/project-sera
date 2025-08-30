import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import { 
  Heart, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff,
  ArrowLeft
} from 'lucide-react';

interface SocialButtonProps {
  provider: string;
  icon: React.ReactNode;
  onClick: () => void;
  className?: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ provider, icon, onClick, className }) => (
  <button
    onClick={onClick}
    className={`btn-social w-full ${className}`}
  >
    {icon}
    Continue with {provider}
  </button>
);

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { setUser, setIsOnboarded } = useUser();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const handleSocialLogin = async (provider: string) => {
    setIsLoading(true);
    // Simulate social login
    setTimeout(() => {
      const mockUser = {
        id: Date.now().toString(),
        name: `User from ${provider}`,
        email: `user@${provider.toLowerCase()}.com`,
        residencyStatus: 'citizen' as const,
        languages: ['English'],
        priorities: ['Housing', 'Healthcare'],
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${provider}`,
        subscriptionTier: 'free' as const
      };
      setUser(mockUser);
      setIsOnboarded(true);
      setIsLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: {[key: string]: string} = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsLoading(true);
      // Simulate login
      setTimeout(() => {
        const mockUser = {
          id: Date.now().toString(),
          name: 'John Doe',
          email: formData.email,
          residencyStatus: 'citizen' as const,
          languages: ['English'],
          priorities: ['Housing', 'Healthcare'],
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=johndoe',
          subscriptionTier: 'free' as const
        };
        setUser(mockUser);
        setIsOnboarded(true);
        setIsLoading(false);
        navigate('/dashboard');
      }, 1500);
    }
  };

  const googleIcon = (
    <svg className="w-5 h-5" viewBox="0 0 24 24">
      <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );

  const facebookIcon = (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br flex items-center justify-center p-4 animate-fadeIn">
      <div className="max-w-md w-full">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center space-x-2 text-white hover:text-gray-200 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Home</span>
        </button>

        {/* Login Card */}
        <div className="card-modern p-8">
          <div className="text-center mb-8">
            <div className="icon-wrapper icon-primary icon-2xl mx-auto mb-4">
              <Heart className="w-8 h-8" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
            <p className="text-gray-600">Sign in to your Citizen SERA account</p>
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-3 mb-6">
            <SocialButton
              provider="Google"
              icon={googleIcon}
              onClick={() => handleSocialLogin('Google')}
              className="btn-google"
            />
            <SocialButton
              provider="Facebook"
              icon={facebookIcon}
              onClick={() => handleSocialLogin('Facebook')}
              className="btn-facebook"
            />
          </div>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with email</span>
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className={`pl-10 ${errors.email ? 'input-error' : ''}`}
                  placeholder="john@example.com"
                />
              </div>
              {errors.email && <div className="form-error">{errors.email}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={formData.password}
                  onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                  className={`pl-10 pr-12 ${errors.password ? 'input-error' : ''}`}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && <div className="form-error">{errors.password}</div>}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="checkbox"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                  Remember me
                </label>
              </div>
              <Link
                to="/forgot-password"
                className="text-sm text-primary-600 hover:text-primary-700"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`btn btn-primary w-full ${isLoading ? 'loading' : ''}`}
            >
              {isLoading ? (
                <>
                  <div className="spinner mr-2" />
                  Signing In...
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="text-center mt-6 pt-6 border-t border-gray-200">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link
                to="/signup"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Sign up for free
              </Link>
            </p>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-6 text-white/80">
          <p className="text-sm">
            🔒 Your data is encrypted and secure
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;