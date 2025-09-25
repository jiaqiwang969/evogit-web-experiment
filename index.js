import React from 'react';
import { useState } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { ArrowRightIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import Image from 'next/image';

function HomePage() {
  return (
    <div className="font-sans text-gray-900">
      <NewsUpdates />
      <NavigationBar />
      <HeroSection />
      <KeyFeaturesSection />
      <CodeExampleSection />
      <CommunitySection />
      <Footer />
    </div>
  );
}

function NewsUpdates() {
  return (
    <div className="bg-blue-100 text-blue-800 p-2 text-center">
      <p>🔥 Released EvoX 1.2.1 - New Mujoco Playground and official tutorial available!</p>
    </div>
  );
}

function NavigationBar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Image src="/logo.png" alt="EvoX Logo" width={50} height={50} />
            <Link href="/" className="text-2xl font-bold ml-3">EvoX</Link>
          </div>
          <div className="flex space-x-4">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <Link href="/docs" className="hover:text-blue-600">Docs</Link>
            <Link href="https://github.com/EMI-Group/evox" className="hover:text-blue-600">GitHub</Link>
            <Link href="/install" className="hover:text-blue-600">Install</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-900">
          EvoX: Evolutionary Computation Reimagined
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          A powerful, flexible distributed and GPU-accelerated framework for evolutionary algorithms in modern AI workflows.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <Link href="/docs" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Get Started
          </Link>
          <Link href="https://github.com/EMI-Group/evox" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900">
            GitHub Repo
          </Link>
          <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded">
            pip install evox
          </div>
        </div>
      </div>
    </div>
  );
}

function KeyFeaturesSection() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Key Features</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<ArrowRightIcon className="h-6 w-6 text-blue-600" />}
            title="Ultra Performance"
            description="Supports acceleration on heterogeneous hardware, achieving over 100x speedups."
          />
          <FeatureCard
            icon={<ArrowRightIcon className="h-6 w-6 text-blue-600" />}
            title="All-in-One Solution"
            description="Includes 50+ algorithms for a wide range of use cases."
          />
          <FeatureCard
            icon={<ArrowRightIcon className="h-6 w-6 text-blue-600" />}
            title="Easy-to-Use Design"
            description="Fully compatible with PyTorch, simplifying algorithmic development."
          />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0">
        {icon}
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function CodeExampleSection() {
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
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Code Example</h2>
        <div className="mt-8">
          <SyntaxHighlighter language="python" style={docco}>
            {codeString}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}

function CommunitySection() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Community & Ecosystem</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <CommunityLink
            title="GitHub"
            url="https://github.com/EMI-Group/evox"
            description="Star us on GitHub and check out our issues."
          />
          <CommunityLink
            title="Discord"
            url="https://discord.gg/Vbtgcpy7G4"
            description="Join our Discord community to connect with other users."
          />
        </div>
      </div>
    </div>
  );
}

function CommunityLink({ title, url, description }) {
  return (
    <div>
      <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
      <Link href={url} className="text-blue-600 hover:underline">Learn more</Link>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FooterColumn title="Docs" links={["Docs", "Install"]} />
          <FooterColumn title="GitHub" links={["GitHub", "Contribute"]} />
          <FooterColumn title="License" links={["License", "Acknowledgments"]} />
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h4 className="font-bold">{title}</h4>
      <ul className="mt-2 space-y-1">
        {links.map(link => (
          <li key={link}>
            <Link href="/" className="hover:underline">{link}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
