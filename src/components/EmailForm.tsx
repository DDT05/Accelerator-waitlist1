import React, { useState } from 'react';
import { Mail, CheckCircle, Clock, Users, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface EmailFormProps {
  title?: string;
  subtitle?: string;
  className?: string;
  showUrgency?: boolean;
  source?: string;
}

export const EmailForm: React.FC<EmailFormProps> = ({ 
  title = "🚀 Reserve Your Spot Now!",
  subtitle = "227 entrepreneurs have already secured their place - don't get left behind!",
  className = "",
  showUrgency = true,
  source = "unknown"
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setError(null);

    try {
      const { error: submitError } = await supabase
        .from('waitlist_submissions')
        .insert({
          email: email.toLowerCase().trim(),
          source,
          user_agent: navigator.userAgent,
        });

      if (submitError) {
        if (submitError.code === '23505') {
          // Unique constraint violation - email already exists
          setError('This email is already registered!');
        } else {
          setError('Something went wrong. Please try again.');
        }
      } else {
        setIsSubmitted(true);
        setEmail('');
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className={`bg-gray-800 p-8 rounded-lg max-w-2xl mx-auto ${className}`}>
        <div className="text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">🎉 You're In!</h3>
          <p className="text-gray-300 text-lg mb-4">
            Your spot has been reserved successfully!
          </p>
          <p className="text-gray-400 text-sm">
            We'll notify you as soon as the HEBED Accelerator launches.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-gray-800 p-8 rounded-lg max-w-2xl mx-auto ${className}`}>
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{subtitle}</p>
        
        {showUrgency && (
          <div className="bg-red-600 text-white p-4 rounded-lg mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock className="w-5 h-5" />
              <span className="font-bold text-lg">URGENT: Limited Spots Available!</span>
            </div>
            <div className="flex items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>227 reservations already made</span>
              </div>
              <div className="bg-white text-red-600 px-3 py-1 rounded-full font-bold">
                Only 33 spots left!
              </div>
            </div>
          </div>
        )}
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-3">
          <div className="relative flex-1">
            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full pl-12 pr-4 py-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              required
            />
          </div>
          
          <button
            type="submit"
            disabled={isLoading || !email}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-lg transition-all duration-200 flex items-center justify-center whitespace-nowrap"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              'Reserve Spot'
            )}
          </button>
        </div>
        
        {error && (
          <div className="flex items-center gap-2 text-red-400 bg-red-900/20 p-3 rounded-lg">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm">{error}</span>
          </div>
        )}
      </form>
      
      <div className="text-center mt-4">
        <p className="text-xs text-gray-400">
          🔥 Don't miss out - spots are filling up fast!
        </p>
        <p className="text-xs text-gray-500 mt-2">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
};