import React from 'react';
const items = [
  { name: 'Overview', icon: '📊' },
  { name: 'Projects', icon: '📁' },
  { name: 'Analytics', icon: '📈' },
  { name: 'Messages', icon: '✉️' },
  { name: 'Settings', icon: '⚙️' },
];

export default function Sidebar() {
  return (
    <aside className="w-60 bg-white dark:bg-gray-800 border-r dark:border-gray-700 flex flex-col">
      <div className="px-6 py-4 text-2xl font-bold border-b dark:border-gray-700">
        Logo
      </div>
      <nav className="flex-1 overflow-auto px-2 py-4">
        {items.map(i => (
          <a
            key={i.name}
            href="#"
            className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition mb-1"
          >
            <span>{i.icon}</span>
            <span className="font-medium">{i.name}</span>
          </a>
        ))}
      </nav>
      <div className="px-6 py-4 border-t dark:border-gray-700 text-sm">
        Signed in as <strong>User</strong>
      </div>
    </aside>
  );
}
