import { HomeIcon, DocumentTextIcon, CodeIcon, UsersIcon } from '@heroicons/react/outline';

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="EvoX Logo" className="h-8" />
          <span className="font-bold text-lg">EvoX</span>
        </div>
        <div className="flex space-x-6">
          <a href="#home" className="flex items-center space-x-1">
            <HomeIcon className="h-5 w-5" />
            <span>Home</span>
          </a>
          <a href="#docs" className="flex items-center space-x-1">
            <DocumentTextIcon className="h-5 w-5" />
            <span>Docs</span>
          </a>
          <a href="#github" className="flex items-center space-x-1">
            <CodeIcon className="h-5 w-5" />
            <span>GitHub</span>
          </a>
          <a href="#community" className="flex items-center space-x-1">
            <UsersIcon className="h-5 w-5" />
            <span>Community</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
