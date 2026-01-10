
import React from 'react';
import { TabTypes } from '@/types';

interface TabSwitcherProps {
  activeTab: TabTypes;
  onTabChange: (tab: TabTypes) => void;
}

const TabSwitcher: React.FC<TabSwitcherProps> = ({ activeTab, onTabChange }) => {
  const tabs: TabTypes[] = ['Centres', 'Meetings', 'Stakeholders'];

  return (
    <div className="inline-flex p-1 bg-gray-100 rounded-full">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
            activeTab === tab
              ? 'bg-black text-white shadow-md'
              : 'text-gray-600 hover:text-black'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabSwitcher;
