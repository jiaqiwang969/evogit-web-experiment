import React from 'react';
import { HomeIcon, BookOpenIcon, CodeIcon, UsersIcon } from '@heroicons/react/outline';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Image from 'next/image';

function NewsBanner() {
  return (
    <div className="bg-blue-500 text-white text-center py-2">
      <p>🔥 Released EvoX 1.2.1 - New Mujoco Playground and official tutorial available!</p>
    </div>
  );
}

function NavBar() {
  return (
    <nav className="sticky top-0 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="text-2xl font-bold">EvoX</div>
        <div className="space-x-4">
          <a href="#home" className="text-gray-700">Home</a>
          <a href="#docs" className="text-gray-700">Docs</a>
          <a href="#github" className="text-gray-700">GitHub</a>
          <a href="#install" className="text-gray-700">Install</a>
          <a href="#community" className="text-gray-700">Community</a>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <div className="text-center py-20 bg-gray-100">
      <h1 className="text-5xl font-bold">EvoX: Evolutionary Computation Reimagined</h1>
      <p className="mt-4 text-xl">A powerful, flexible distributed and GPU-accelerated framework for evolutionary algorithms in modern AI workflows.</p>
      <div className="mt-6">
        <a href="#docs" className="bg-blue-500 text-white px-6 py-3 rounded-lg mr-4">Get Started</a>
        <a href="#github" className="bg-gray-800 text-white px-6 py-3 rounded-lg">GitHub Repo</a>
      </div>
      <p className="mt-4 text-gray-600">Install with: <code className="bg-gray-200 p-1 rounded">pip install evox</code></p>
    </div>
  );
}

function KeyFeatures() {
  return (
    <div className="py-20">
      <h2 className="text-3xl font-bold text-center">Key Features</h2>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <HomeIcon className="w-12 h-12 mx-auto text-blue-500" />
          <h3 className="text-xl font-semibold mt-4">Ultra Performance</h3>
          <p className="mt-2 text-gray-600">Supports acceleration on heterogeneous hardware, including both CPUs and GPUs, achieving over 100x speedups.</p>
        </div>
        <div className="text-center">
          <BookOpenIcon className="w-12 h-12 mx-auto text-blue-500" />
          <h3 className="text-xl font-semibold mt-4">All-in-One Solution</h3>
          <p className="mt-2 text-gray-600">Includes 50+ algorithms for a wide range of use cases, fully supporting single- and multi-objective optimization.</p>
        </div>
        <div className="text-center">
          <CodeIcon className="w-12 h-12 mx-auto text-blue-500" />
          <h3 className="text-xl font-semibold mt-4">Easy-to-Use Design</h3>
          <p className="mt-2 text-gray-600">Fully compatible with PyTorch and its ecosystem, simplifying algorithmic development with a tailored programming model.</p>
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

monitor.plot()
`;

  return (
    <div className="py-20 bg-gray-100">
      <h2 className="text-3xl font-bold text-center">Code Example</h2>
      <div className="mt-10 max-w-4xl mx-auto">
        <SyntaxHighlighter language="python" style={vscDarkPlus} className="rounded-lg">
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

function CommunitySection() {
  return (
    <div className="py-20">
      <h2 className="text-3xl font-bold text-center">Community & Ecosystem</h2>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <UsersIcon className="w-12 h-12 mx-auto text-blue-500" />
          <h3 className="text-xl font-semibold mt-4">Join Our Discord</h3>
          <p className="mt-2 text-gray-600">Become a part of our community and contribute to EvoX development.</p>
        </div>
        <div className="text-center">
          <Image src="/github.png" alt="GitHub" width={48} height={48} className="mx-auto" />
          <h3 className="text-xl font-semibold mt-4">GitHub</h3>
          <p className="mt-2 text-gray-600">Star our repository and check out the latest issues and pull requests.</p>
        </div>
        <div className="text-center">
          <Image src="/blog.png" alt="Blog" width={48} height={48} className="mx-auto" />
          <h3 className="text-xl font-semibold mt-4">Read Our Blog</h3>
          <p className="mt-2 text-gray-600">Stay updated with the latest tutorials and insights from the EvoX team.</p>
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
          <h3 className="font-semibold">Docs</h3>
          <ul className="mt-2 space-y-1">
            <li><a href="#docs" className="hover:underline">Documentation</a></li>
            <li><a href="#install" className="hover:underline">Install</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">GitHub</h3>
          <ul className="mt-2 space-y-1">
            <li><a href="#github" className="hover:underline">Repository</a></li>
            <li><a href="#contribute" className="hover:underline">Contribute</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">License</h3>
          <ul className="mt-2 space-y-1">
            <li><a href="#license" className="hover:underline">License Info</a></li>
            <li><a href="#acknowledgments" className="hover:underline">Acknowledgments</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function HomePage() {
  return (
    <div>
      <NewsBanner />
      <NavBar />
      <HeroSection />
      <KeyFeatures />
      <CodeExample />
      <CommunitySection />
      <Footer />
    </div>
  );
}

export default HomePage;
