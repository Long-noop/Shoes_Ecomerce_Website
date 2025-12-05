// hooks/useLayoutCSS.js
import { useEffect, useState } from 'react';

export const useLayoutCSS = (cssPath, layoutName) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    let linkElement = null;

    const loadCSS = () => {
      return new Promise((resolve, reject) => {
        // Check if already loaded
        const existing = document.querySelector(`link[data-layout="${layoutName}"]`);
        if (existing) {
          resolve();
          return;
        }

        // Remove other layout CSS
        const otherLayouts = document.querySelectorAll('link[data-layout]');
        otherLayouts.forEach(link => link.remove());

        // Create new link
        linkElement = document.createElement('link');
        linkElement.rel = 'stylesheet';
        linkElement.href = cssPath;
        linkElement.setAttribute('data-layout', layoutName);
        
        linkElement.onload = () => {
          setTimeout(() => resolve(), 100);
        };
        
        linkElement.onerror = () => reject(new Error(`Failed to load ${layoutName} CSS`));

        document.head.appendChild(linkElement);
      });
    };

    const init = async () => {
      try {
        await loadCSS();
        if (isMounted) setLoading(false);
      } catch (error) {
        console.error('CSS loading error:', error);
        if (isMounted) setLoading(false);
      }
    };

    init();

    return () => {
      isMounted = false;
    };
  }, [cssPath, layoutName]);

  return loading;
};