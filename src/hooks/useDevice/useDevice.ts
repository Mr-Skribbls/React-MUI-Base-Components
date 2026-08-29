import { forEach, isNil } from 'lodash';
import { useMemo } from 'react';

interface NavigatorUAData {
  mobile: boolean;
}

export interface DeviceInfo {
  isMobile: boolean;
  isApple: boolean;
}

export const useDevice = (): DeviceInfo => {
  const isMobile = useMemo(() => {
    const userAgentSniffing = (): boolean => {
      const regex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      return regex.test(navigator.userAgent);
    };

    const featureDetection = (): boolean => {
      return navigator.maxTouchPoints > 0;
    };

    const screenWidthDetection = (): boolean => {
      return window.matchMedia('(max-width: 768px)').matches;
    };

    const clientHints = (): boolean => {
      const userAgentData = (navigator as Navigator & {
        userAgentData?: NavigatorUAData;
      }).userAgentData;
      if (!isNil(userAgentData)) {
        return userAgentData.mobile;
      }
      return false;
    };

    const checks = [
      {
        fn: clientHints,
        confidence: 100,
      },
      {
        fn: userAgentSniffing,
        confidence: 60,
      },
      {
        fn: featureDetection,
        confidence: 20,
      },
      {
        fn: screenWidthDetection,
        confidence: 20,
      },
    ];

    let confidence = 0;
    forEach(checks, (check) => {
      confidence += check.fn() ? check.confidence : 0;
    });

    return confidence >= 100;
  }, []);

  const isApple = useMemo(() => {
    const regex = /iPad|iPhone|iPod|Macintosh/;
    return regex.test(navigator.userAgent);
  }, []);

  return {
    isMobile,
    isApple,
  };
};

export default useDevice;