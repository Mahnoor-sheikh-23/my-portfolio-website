import React from 'react';

interface TabButtonProps {
    active: boolean;
    selectTab: () => void;
    children: React.ReactNode;  
  }

const TabButton : React.FC<TabButtonProps> = ({ active, selectTab, children }) => {
    const buttonclasses = active ? "text-white border-b border-primary-500 " : " text-[#ADB7BE]"
    return (
        <div>
            <button onClick={selectTab}>
                <p className={`mr-3  font-semibold hover:text-white ${buttonclasses} `}>
                    { children}
                </p>
            </button>
        </div>
    )
}

export default TabButton
