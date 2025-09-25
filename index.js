import React from 'react';
import { HeroIcon } from '@heroicons/react/outline';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import NavigationBar from './src/components/NavigationBar';
import HeroSection from './src/components/HeroSection';
import KeyFeaturesSection from './src/components/KeyFeaturesSection';
import CodeExampleSection from './src/components/CodeExampleSection';
import CommunitySection from './src/components/CommunitySection';
import Footer from './src/components/Footer';

function EvoXHomePage() {
  return (
    <div>
      <div className="bg-blue-500 text-white text-center py-2">
        <p>🔥 Released EvoX 1.2.1 - New Mujoco Playground and Tutorial!</p>
      </div>
      <NavigationBar />
      <HeroSection />
      <KeyFeaturesSection />
      <CodeExampleSection />
      <CommunitySection />
      <Footer />
    </div>
  );
}

export default EvoXHomePage;
