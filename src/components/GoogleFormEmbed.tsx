import React from 'react';
import { Clock, Users } from 'lucide-react';

interface GoogleFormEmbedProps {
  title?: string;
  subtitle?: string;
  className?: string;
  showUrgency?: boolean;
}

export const GoogleFormEmbed: React.FC<GoogleFormEmbedProps> = ({ 
  title = "Secure Your Spot Now", 
  subtitle = "Limited availability - Act fast!",
  className = "",
  showUrgency = true
}) => {
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
      
      <div className="bg-white rounded-lg overflow-hidden">
        <iframe 
          src="https://forms.gle/JwoteRg3Lv5gWmTG8" 
          width="100%" 
          height="500" 
          frameBorder="0" 
          marginHeight={0} 
          marginWidth={0}
          className="w-full"
        >
          Loading…
        </iframe>
      </div>
      
      <div className="text-center mt-4">
        <p className="text-xs text-gray-400">
          🔥 Don't miss out - spots are filling up fast!
        </p>
      </div>
    </div>
  );
};