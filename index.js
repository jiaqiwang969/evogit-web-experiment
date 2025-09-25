import { useState } from 'react';
import { HomeIcon, BookOpenIcon, CodeIcon, UsersIcon } from '@heroicons/react/solid';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Image from 'next/image';

function EvoXHomepage() {
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

function NewsUpdates() {
  return (
    <div className="bg-blue-100 text-blue-800 p-2 text-center">
      <p>🔥 [2025-05-13] Released EvoX 1.2.1 - New Mujoco Playground and official tutorial!</p>
    </div>
  );
}

function NavigationBar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/logo.png" alt="EvoX Logo" width={40} height={40} />
          <span className="ml-2 font-bold text-xl">EvoX</span>
        </div>
        <div className="space-x-4">
          <a href="#home" className="hover:text-blue-500">Home</a>
          <a href="#docs" className="hover:text-blue-500">Docs</a>
          <a href="https://github.com/EMI-Group/evox" className="hover:text-blue-500">GitHub</a>
          <a href="#install" className="hover:text-blue-500">Install</a>
          <a href="#community" className="hover:text-blue-500">Community</a>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="bg-gray-50 py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">EvoX: Evolutionary Computation Reimagined</h1>
      <p className="text-lg mb-6">
        A powerful, flexible distributed and GPU-accelerated framework for evolutionary algorithms in modern AI workflows.
      </p>
      <div className="flex justify-center space-x-4">
        <a href="#docs" className="bg-blue-500 text-white px-4 py-2 rounded">Get Started</a>
        <a href="https://github.com/EMI-Group/evox" className="bg-gray-200 px-4 py-2 rounded">GitHub Repo</a>
        <div className="bg-gray-200 px-4 py-2 rounded">pip install evox</div>
      </div>
    </section>
  );
}

function KeyFeatures() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard icon={<HomeIcon className="h-8 w-8 text-blue-500" />} title="Ultra Performance" description="Supports acceleration on heterogeneous hardware, achieving over 100x speedups." />
          <FeatureCard icon={<BookOpenIcon className="h-8 w-8 text-blue-500" />} title="All-in-One Solution" description="Includes 50+ algorithms for a wide range of use cases." />
          <FeatureCard icon={<CodeIcon className="h-8 w-8 text-blue-500" />} title="Easy-to-Use Design" description="Fully compatible with PyTorch, simplifying algorithmic development." />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-6 border rounded-lg shadow-md">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Code Example</h2>
        <SyntaxHighlighter language="python" style={solarizedlight}>
          {codeString}
        </SyntaxHighlighter>
      </div>
    </section>
  );
}

function CommunityEcosystem() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Community & Ecosystem</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CommunityLink title="GitHub" url="https://github.com/EMI-Group/evox" />
          <CommunityLink title="Discord" url="https://discord.gg/Vbtgcpy7G4" />
          <CommunityLink title="Blog" url="#blog" />
          <CommunityLink title="Sister Projects" url="#sister-projects" />
        </div>
      </div>
    </section>
  );
}

function CommunityLink({ title, url }) {
  return (
    <a href={url} className="block p-6 border rounded-lg shadow-md hover:bg-gray-100">
      <h3 className="text-xl font-bold">{title}</h3>
    </a>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <FooterColumn title="Docs" links={['Documentation', 'API Reference']} />
        <FooterColumn title="GitHub" links={['Repo', 'Issues']} />
        <FooterColumn title="License" links={['MIT License']} />
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h4 className="font-bold mb-4">{title}</h4>
      <ul>
        {links.map(link => (
          <li key={link} className="mb-2">{link}</li>
        ))}
      </ul>
    </div>
  );
}

export default EvoXHomepage;
