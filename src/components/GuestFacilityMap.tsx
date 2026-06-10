import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { Shield, ShieldAlert, Crosshair, Layers, MapPin, Zap } from 'lucide-react';

interface GuestFacilityMapProps {
  activeCrisis?: any;
}

const GuestFacilityMap: React.FC<GuestFacilityMapProps> = ({ activeCrisis }) => {
  return (
    <div className="flex flex-col items-center w-full h-full gap-6 max-w-7xl mx-auto">
      {/* Status Banner */}
      {activeCrisis ? (
        <div className="w-full bg-error text-on-error rounded-xl p-4 md:p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="bg-white/20 p-3 rounded-full flex-shrink-0 animate-pulse">
              <ShieldAlert className="w-8 h-8 fill-white/20" />
            </div>
            <div>
              <h1 className="font-headline font-black text-2xl tracking-tight uppercase">Evacuate Immediately</h1>
              <p className="font-body text-sm font-medium text-white/90">Follow the marked route to the nearest exit.</p>
            </div>
          </div>
          <div className="flex items-center gap-6 w-full md:w-auto justify-around md:justify-end bg-black/10 px-6 py-3 rounded-lg">
            <div className="flex flex-col items-center">
              <span className="font-headline font-bold text-xl">150 ft</span>
              <span className="font-label text-xs uppercase tracking-wider text-white/80">Distance</span>
            </div>
            <div className="h-8 w-px bg-white/20"></div>
            <div className="flex flex-col items-center">
              <span className="font-headline font-bold text-xl">45 sec</span>
              <span className="font-label text-xs uppercase tracking-wider text-white/80">Est. Time</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full bg-slate-900 text-white rounded-xl p-4 md:p-6 shadow-sm flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="bg-emerald-500/10 p-3 rounded-full flex-shrink-0 text-emerald-500">
              <Shield className="w-8 h-8" />
            </div>
            <div>
              <h1 className="font-headline font-black text-2xl tracking-tight uppercase italic text-emerald-500">Secure Status</h1>
              <p className="font-body text-sm font-medium text-slate-400">All sectors are normal. Enjoy your stay.</p>
            </div>
          </div>
        </div>
      )}
      
      {/* Map Container */}
      <div className="w-full flex-1 bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col relative min-h-[400px]">
        {/* Contextual Map Tools */}
        <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
          <button className="bg-surface/90 backdrop-blur-md text-on-surface p-3 rounded-full shadow-sm hover:bg-surface-container-low transition-colors outline outline-1 outline-outline-variant/20">
            <Crosshair className="w-5 h-5" />
          </button>
          <button className="bg-surface/90 backdrop-blur-md text-on-surface p-3 rounded-full shadow-sm hover:bg-surface-container-low transition-colors outline outline-1 outline-outline-variant/20">
            <Layers className="w-5 h-5" />
          </button>
        </div>
        
        {/* The Map Graphic */}
        <div className="flex-grow w-full relative bg-surface-container-high h-full min-h-[300px]">
          <img 
            alt="Floor plan map" 
            className="w-full h-full object-cover opacity-60 mix-blend-multiply" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7iOPzgNv53IGH1PiloPqEI2yQhMg4cGQJVi8DwskW0aWcvJmfQut1MlriKvxUDCC8B9QrzLYMCgisBcfJGuLSQwvnnid8A_de2WkC4mFXG47ZSeiF8MhetHaxyMjWHwYaoRee64dEhO05R3bvZfx92-pky_Y_aS54gB0STYsbuRsoIX-OKmG_uUPMDPZeOJapf2Xs0J0gJU0_jD1NFr8oLngJfPHrYuJor_gnMIy7Rgm6kY_QT-epYtqQ81eJrhuVEyZGhRSrTWzA" 
          />
          
          {/* Simulated Route Overlay */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
            {activeCrisis && (
              <>
                {/* Path */}
                <path className="animate-[dash_2s_linear_infinite]" d="M 20 80 L 20 50 L 60 50 L 60 20 L 80 20" fill="none" stroke="#ba1a1a" strokeDasharray="3,3" strokeWidth="2"></path>
                {/* Exit Node */}
                <circle cx="80" cy="20" fill="#4edea3" r="3"></circle>
                <path d="M 78 18 L 82 22 M 82 18 L 78 22" stroke="#ffffff" strokeWidth="0.5"></path>
              </>
            )}
            {/* Current Location Node */}
            <circle cx="20" cy="80" fill="#0b1c30" r="2.5" stroke="#ffffff" strokeWidth="0.5"></circle>
            <circle className="animate-ping" cx="20" cy="80" fill="none" r="4" stroke="#0b1c30" strokeWidth="0.5"></circle>
          </svg>
        </div>
        
        {/* Map Legend/Key */}
        <div className="bg-surface px-6 py-4 flex flex-wrap items-center justify-center gap-4 text-center shrink-0 border-t border-outline-variant/10">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-on-surface border-2 border-white"></div>
            <span className="font-label text-[10px] uppercase tracking-wider text-on-surface-variant font-bold">You Are Here</span>
          </div>
          {activeCrisis && (
            <>
              <div className="flex items-center gap-2">
                <div className="w-8 h-1 bg-error border-y border-dashed border-white/50"></div>
                <span className="font-label text-[10px] uppercase tracking-wider text-on-surface-variant font-bold">Evacuation Route</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-tertiary-fixed-dim flex items-center justify-center text-on-tertiary-fixed-variant text-[10px] font-bold">X</div>
                <span className="font-label text-[10px] uppercase tracking-wider text-on-surface-variant font-bold">Nearest Exit</span>
              </div>
            </>
          )}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes dash {
          to { stroke-dashoffset: -12; }
        }
      `}} />
    </div>
  );
};

export default GuestFacilityMap;
