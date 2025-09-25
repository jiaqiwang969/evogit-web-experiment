import { useState } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { BeakerIcon } from '@heroicons/react/solid';
import Navbar from './src/components/Navbar';
import HeroSection from './src/components/HeroSection';
import KeyFeatures from './src/components/KeyFeatures';
import CodeExample from './src/components/CodeExample';
import CommunitySection from './src/components/CommunitySection';
import Footer from './src/components/Footer';

function MainPage() {
  return (
    <div>
      <div className="bg-blue-600 text-white text-center p-2">
        <p>🚀 EvoX v1.2.1 release is now available, featuring the new Mujoco Playground and an official tutorial!</p>
      </div>
      <Navbar />
      <HeroSection />
      <KeyFeatures />
      <CodeExample />
      <CommunitySection />
      <Footer />
    </div>
  );
}

export default MainPage;
