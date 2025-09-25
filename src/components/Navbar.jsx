import Link from 'next/link';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 sticky top-0 flex justify-between items-center">
      <div className="text-white text-lg">EvoX</div>
      <div className="flex space-x-4">
        <Link href="/" className="text-white">Home</Link>
        <Link href="/docs" className="text-white">Docs</Link>
        <Link href="https://github.com/EMI-Group/evox" className="text-white">GitHub</Link>
        <Link href="/install" className="text-white">Install</Link>
        <Link href="/community" className="text-white">Community</Link>
      </div>
    </nav>
  );
}

export default Navbar;
