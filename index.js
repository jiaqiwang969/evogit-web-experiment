import React from 'react';
import { useRouter } from 'next/router';
import { HomeIcon, BookOpenIcon, CodeIcon, UserGroupIcon } from '@heroicons/react/solid';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Image from 'next/image';

const NavigationBar = () => {
  const router = useRouter();
  return (
    <nav className="sticky top-0 bg-white shadow-md flex justify-between items-center p-4">
      <div className="flex items-center">
        <Image src="/logo.png" alt="EvoX Logo" width={40} height={40} />
        <span className="ml-2 font-bold text-xl">EvoX</span>
      </div>
      <div className="flex space-x-4">
        <button onClick={() => router.push('/')} className="flex items-center">
          <HomeIcon className="h-5 w-5 mr-1" />
          Home
        </button>
        <button onClick={() => router.push('/docs')} className="flex items-center">
          <BookOpenIcon className="h-5 w-5 mr-1" />
          Docs
        </button>
        <button onClick={() => window.open('https://github.com/EMI-Group/evox', '_blank')} className="flex items-center">
          <CodeIcon className="h-5 w-5 mr-1" />
          GitHub
        </button>
        <button onClick={() => router.push('/community')} className="flex items-center">
          <UserGroupIcon className="h-5 w-5 mr-1" />
          Community
        </button>
      </div>
    </nav>
  );
};

const HeroSection = () => (
  <section className="text-center py-20 bg-gray-100">
    <h1 className="text-4xl font-bold mb-4">EvoX: Evolutionary Computation Reimagined</h1>
    <p className="text-lg mb-8">
      A powerful, flexible distributed and GPU-accelerated framework for evolutionary algorithms in modern AI workflows.
    </p>
    <div className="flex justify-center space-x-4">
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => window.open('/docs', '_self')}>
        Get Started
      </button>
      <button className="bg-gray-800 text-white px-4 py-2 rounded" onClick={() => window.open('https://github.com/EMI-Group/evox', '_blank')}>
        GitHub Repo
      </button>
      <code className="bg-gray-200 text-gray-800 px-4 py-2 rounded">pip install evox</code>
    </div>
  </section>
);

const KeyFeaturesSection = () => (
  <section className="py-20">
    <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="p-4 border rounded">
        <h3 className="font-bold mb-2">🚀 Ultra Performance</h3>
        <p>Supports acceleration on heterogeneous hardware, including both CPUs and GPUs, achieving over 100x speedups.</p>
      </div>
      <div className="p-4 border rounded">
        <h3 className="font-bold mb-2">🌐 All-in-One Solution</h3>
        <p>Includes 50+ algorithms for a wide range of use cases, fully supporting single- and multi-objective optimization.</p>
      </div>
      <div className="p-4 border rounded">
        <h3 className="font-bold mb-2">🛠️ Easy-to-Use Design</h3>
        <p>Fully compatible with PyTorch and its ecosystem, simplifying algorithmic development with a tailored programming model.</p>
      </div>
    </div>
  </section>
);

const CodeExampleSection = () => (
  <section className="py-20 bg-gray-100">
    <h2 className="text-3xl font-bold text-center mb-8">Code Example</h2>
    <div className="max-w-4xl mx-auto">
      <SyntaxHighlighter language="python" style={docco}>
        {`import torch
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

monitor.plot()`}
      </SyntaxHighlighter>
    </div>
  </section>
);

const CommunitySection = () => (
  <section className="py-20">
    <h2 className="text-3xl font-bold text-center mb-8">Community & Ecosystem</h2>
    <div className="flex justify-center space-x-4">
      <button className="bg-gray-800 text-white px-4 py-2 rounded" onClick={() => window.open('https://github.com/EMI-Group/evox', '_blank')}>
        GitHub
      </button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => window.open('https://discord.gg/Vbtgcpy7G4', '_blank')}>
        Discord Community
      </button>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="font-bold mb-2">Docs</h3>
        <ul>
          <li><a href="/docs" className="hover:underline">Documentation</a></li>
          <li><a href="/install" className="hover:underline">Install</a></li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold mb-2">GitHub</h3>
        <ul>
          <li><a href="https://github.com/EMI-Group/evox" className="hover:underline">GitHub Repo</a></li>
          <li><a href="/contribute" className="hover:underline">Contribute</a></li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold mb-2">License</h3>
        <ul>
          <li><a href="/license" className="hover:underline">License</a></li>
          <li><a href="/acknowledgments" className="hover:underline">Acknowledgments</a></li>
        </ul>
      </div>
    </div>
  </footer>
);

const HomePage = () => (
  <div>
    <NavigationBar />
    <HeroSection />
    <KeyFeaturesSection />
    <CodeExampleSection />
    <CommunitySection />
    <Footer />
  </div>
);

export default HomePage;
