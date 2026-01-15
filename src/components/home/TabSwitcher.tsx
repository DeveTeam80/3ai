import React from 'react';
import { TabTypes } from '@/types';

interface TabSwitcherProps {
  activeTab: TabTypes;
  onTabChange: (tab: TabTypes) => void;
}

const TabSwitcher: React.FC<TabSwitcherProps> = ({ activeTab, onTabChange }) => {
  // Updated to match the data keys from the 3AI links
  const tabs: TabTypes[] = ['Summits', 'Roundtables', 'Mixers'];

  return (
    <div className="inline-flex p-1 bg-gray-100 dark:bg-zinc-900 rounded-full transition-colors">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
            activeTab === tab
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
              : 'text-gray-600 dark:text-zinc-400 hover:text-black dark:hover:text-white'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabSwitcher;