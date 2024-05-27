// src/context/DeviceWidthContext.tsx

import React, { createContext, useState, useEffect, ReactNode } from 'react';

interface DeviceWidthContextProps {
  isMobile: boolean;
}

const DeviceWidthContext = createContext<DeviceWidthContextProps | undefined>(undefined);

interface DeviceWidthProviderProps {
  children: ReactNode;
}

function DeviceWidthProvider({ children }: DeviceWidthProviderProps) {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 769);
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <DeviceWidthContext.Provider value={{ isMobile }}>
      {children}
    </DeviceWidthContext.Provider>
  );
}

export { DeviceWidthProvider, DeviceWidthContext };
