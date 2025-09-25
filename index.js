import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { HomeIcon, BookOpenIcon, CodeIcon, ChatIcon } from '@heroicons/react/outline';

function EvoXHomepage() {
  return (
    <>
      <Head>
        <title>EvoX: Evolutionary Computation Reimagined</title>
        <meta name="description" content="EvoX: A powerful, flexible distributed and GPU-accelerated framework for evolutionary algorithms in modern AI workflows." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-gray-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Image src="/logo.png" alt="EvoX Logo" width={50} height={50} />
          <nav className="flex space-x-4">
            <a href="#home" className="hover:underline">Home</a>
            <a href="#docs" className="hover:underline">Docs</a>
            <a href="https://github.com/EMI-Group/evox" className="hover:underline">GitHub</a>
            <a href="#install" className="hover:underline">Install</a>
            <a href="#community" className="hover:underline">Community</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <section id="news" className="bg-blue-100 p-4 rounded mb-4">
          <p>🔥 [2025-05-13] Released <strong>EvoX 1.2.1</strong> - 🚀 EvoX v1.2.1 release is now available, featuring the new Mujoco Playground and an official tutorial! <a href="https://evox.group/index.php?m=home&c=View&a=index&aid=157" className="text-blue-500 underline">Details</a></p>
        </section>

        <section id="hero" className="text-center py-16 bg-gray-100">
          <h1 className="text-4xl font-bold mb-4">EvoX: Evolutionary Computation Reimagined</h1>
          <p className="text-xl mb-8">A powerful, flexible distributed and GPU-accelerated framework for evolutionary algorithms in modern AI workflows.</p>
          <div className="flex justify-center space-x-4">
            <a href="#docs" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Get Started</a>
            <a href="https://github.com/EMI-Group/evox" className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800">GitHub Repo</a>
            <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded">pip install evox</span>
          </div>
        </section>

        <section id="features" className="py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-bold mb-2">🚀 Ultra Performance</h3>
              <p>Supports acceleration on heterogeneous hardware, including both CPUs and GPUs, achieving over 100x speedups.</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-bold mb-2">🌐 All-in-One Solution</h3>
              <p>Includes 50+ algorithms for a wide range of use cases, fully supporting single- and multi-objective optimization.</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-bold mb-2">🛠️ Easy-to-Use Design</h3>
              <p>Fully compatible with PyTorch and its ecosystem, simplifying algorithmic development with a tailored programming model.</p>
            </div>
          </div>
        </section>

        <section id="code-example" className="py-16 bg-gray-100">
          <h2 className="text-3xl font-bold mb-8 text-center">Code Example</h2>
          <SyntaxHighlighter language="python" style={dracula}>
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
        </section>

        <section id="community" className="py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Community & Ecosystem</h2>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/EMI-Group/evox" className="flex items-center space-x-2">
              <CodeIcon className="h-6 w-6" />
              <span>GitHub</span>
            </a>
            <a href="https://discord.gg/Vbtgcpy7G4" className="flex items-center space-x-2">
              <ChatIcon className="h-6 w-6" />
              <span>Discord Community</span>
            </a>
            <a href="#blog" className="flex items-center space-x-2">
              <BookOpenIcon className="h-6 w-6" />
              <span>Blog / Tutorials</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white p-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h4 className="font-bold">Docs</h4>
            <ul>
              <li><a href="#docs" className="hover:underline">Documentation</a></li>
              <li><a href="#install" className="hover:underline">Install</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold">GitHub</h4>
            <ul>
              <li><a href="https://github.com/EMI-Group/evox" className="hover:underline">GitHub Repo</a></li>
              <li><a href="#contribute" className="hover:underline">Contribute</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold">License</h4>
            <ul>
              <li><a href="#license" className="hover:underline">License</a></li>
              <li><a href="#acknowledgments" className="hover:underline">Acknowledgments</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default EvoXHomepage;
