import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { HomeIcon, DocumentTextIcon, CodeIcon, UsersIcon } from '@heroicons/react/outline';
import Header from './src/components/Header';
import HeroSection from './src/components/HeroSection';
import KeyFeatures from './src/components/KeyFeatures';
import CodeExample from './src/components/CodeExample';
import Community from './src/components/Community';
import Footer from './src/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <NewsUpdates />
        <HeroSection />
        <KeyFeatures />
        <CodeExample />
        <Community />
      </main>
      <Footer />
    </div>
  );
}

function NewsUpdates() {
  return (
    <div className="bg-blue-100 p-4 text-center">
      <p>🔥 Released <strong>EvoX 1.2.1</strong> - 🚀 EvoX v1.2.1 release is now available, featuring the new Mujoco Playground and an official tutorial!</p>
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
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-4">Code Example</h2>
      <SyntaxHighlighter language="python" style={dracula}>
        {codeString}
      </SyntaxHighlighter>
    </section>
  );
}
