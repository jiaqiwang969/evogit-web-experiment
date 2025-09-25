import React from 'react';
import { HomeIcon, BookOpenIcon, CodeIcon, UserGroupIcon } from '@heroicons/react/outline';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';

function NewsUpdates() {
  return (
    <div className="bg-blue-600 text-white text-center p-2">
      <p>🚀 EvoX v1.2.1 release is now available, featuring the new Mujoco Playground and an official tutorial!</p>
    </div>
  );
}

function NavigationBar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image src="/logo.png" alt="EvoX Logo" width={40} height={40} />
          <span className="text-xl font-semibold">EvoX</span>
        </div>
        <div className="space-x-4">
          <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Docs</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">GitHub</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Install</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Community</a>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <div className="bg-gray-100 py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">EvoX: Evolutionary Computation Reimagined</h1>
      <p className="text-lg mb-8">
        A powerful, flexible distributed and GPU-accelerated framework for evolutionary algorithms in modern AI workflows.
      </p>
      <div className="space-x-4">
        <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded">Get Started</a>
        <a href="#" className="bg-gray-700 text-white px-4 py-2 rounded">GitHub Repo</a>
        <span className="bg-gray-200 text-gray-800 px-4 py-2 rounded">pip install evox</span>
      </div>
    </div>
  );
}

function KeyFeatures() {
  return (
    <div className="container mx-auto py-20">
      <h2 className="text-3xl font-bold text-center mb-10">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <HomeIcon className="w-12 h-12 mx-auto text-blue-600" />
          <h3 className="text-xl font-semibold mt-4">Ultra Performance</h3>
          <p>Supports acceleration on heterogeneous hardware, achieving over 100x speedups.</p>
        </div>
        <div className="text-center">
          <BookOpenIcon className="w-12 h-12 mx-auto text-blue-600" />
          <h3 className="text-xl font-semibold mt-4">All-in-One Solution</h3>
          <p>Includes 50+ algorithms for various use cases, supporting single- and multi-objective optimization.</p>
        </div>
        <div className="text-center">
          <CodeIcon className="w-12 h-12 mx-auto text-blue-600" />
          <h3 className="text-xl font-semibold mt-4">Easy-to-Use Design</h3>
          <p>Fully compatible with PyTorch, simplifying algorithmic development.</p>
        </div>
      </div>
    </div>
  );
}

function CodeExample() {
  const codeString = `
import torch
from evox.algorithms import PSO
from evox.problems.numerical import Ackley
from evox.workflows import StdWorkflow, EvalMonitor

algorithm = PSO(pop_size=100, lb=-32 * torch.ones(10), ub=32 * torch.ones(10))
problem = Ackley()
monitor = EvalMonitor()
workflow = StdWorkflow(algorithm, problem, monitor)
workflow.init_step()
for i in range(100):
    workflow.step()

monitor.plot()`;

  return (
    <div className="bg-gray-100 py-20">
      <h2 className="text-3xl font-bold text-center mb-10">Code Example</h2>
      <div className="container mx-auto">
        <SyntaxHighlighter language="python" style={atomDark} className="rounded-lg">
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

function CommunityEcosystem() {
  return (
    <div className="container mx-auto py-20">
      <h2 className="text-3xl font-bold text-center mb-10">Community & Ecosystem</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="text-center">
          <UserGroupIcon className="w-12 h-12 mx-auto text-blue-600" />
          <h3 className="text-xl font-semibold mt-4">Join Our Community</h3>
          <p>Connect with us on Discord and GitHub for support and collaboration.</p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold mt-4">Sister Projects</h3>
          <p>Explore related projects like EvoRL, EvoGP, and more.</p>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-semibold mb-2">Docs</h4>
          <ul>
            <li><a href="#" className="hover:underline">Documentation</a></li>
            <li><a href="#" className="hover:underline">Install</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">GitHub</h4>
          <ul>
            <li><a href="#" className="hover:underline">GitHub Repo</a></li>
            <li><a href="#" className="hover:underline">Contribute</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">License</h4>
          <ul>
            <li><a href="#" className="hover:underline">License</a></li>
            <li><a href="#" className="hover:underline">Acknowledgments</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function HomePage() {
  return (
    <div>
      <NewsUpdates />
      <NavigationBar />
      <HeroSection />
      <KeyFeatures />
      <CodeExample />
      <CommunityEcosystem />
      <Footer />
    </div>
  );
}

export default HomePage;
