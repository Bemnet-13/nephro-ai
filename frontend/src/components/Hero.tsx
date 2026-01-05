import React from 'react';
import StartIcon from '@mui/icons-material/Start';
import NephroAiLogo from '../assets/nephroai_logo.svg';
import heroIllustration from '../assets/hero_illustration.svg'
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <>
    <div className="text-center mb-12 md:mb-16">
          <div className="flex animate-fade-in justify-center md:justify-start">   
              <img src={NephroAiLogo} alt="NephroAI Logo" className="w-16 h-16 md:w-24 md:h-24" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 space-y-6 md:space-y-8 animate-slide-in-left text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-urbanist font-bold text-gray-800 leading-tight">
              <span className="text-blue-600 block md:inline">
                NephroAI :
              </span>
              <span className="block md:inline"> Your AI Health Ally</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-arsenal max-w-2xl mx-auto md:mx-0">
                Harness the power of AI for early detection and proactive health management. Get instant, accurate predictions to protect your kidney health!
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <Link to="/auth" className="bg-blue-600 text-white px-10 md:px-16 py-3 rounded-md font-semibold flex items-center gap-2 hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Get Started
                <StartIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/2 animate-slide-in-right flex justify-center">
            <div className="relative w-full max-w-md md:max-w-none">
              <img
                src={heroIllustration}
                alt="Medical professional with patient"
                className="relative rounded-xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
    </>
  )
}

export default Hero