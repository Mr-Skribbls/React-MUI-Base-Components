import { renderHook } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';

import useDevice from './useDevice';

const setUserAgent = (userAgent: string) => {
  Object.defineProperty(navigator, 'userAgent', {
    configurable: true,
    value: userAgent,
  });
};

const setMaxTouchPoints = (maxTouchPoints: number) => {
  Object.defineProperty(navigator, 'maxTouchPoints', {
    configurable: true,
    value: maxTouchPoints,
  });
};

const setUserAgentData = (userAgentData?: { mobile: boolean }) => {
  Object.defineProperty(navigator, 'userAgentData', {
    configurable: true,
    value: userAgentData,
  });
};

const mockMatchMedia = (matches: boolean) => {
  window.matchMedia = (query: string) =>
    ({
      matches,
      media: query,
      onchange: null,
      addEventListener: () => undefined,
      removeEventListener: () => undefined,
      addListener: () => undefined,
      removeListener: () => undefined,
      dispatchEvent: () => false,
    }) as MediaQueryList;
};

const DESKTOP_USER_AGENT =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
const IPHONE_USER_AGENT =
  'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1';
const MAC_USER_AGENT =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15';

describe('useDevice', () => {
  beforeEach(() => {
    mockMatchMedia(false);
    setMaxTouchPoints(0);
    setUserAgent(DESKTOP_USER_AGENT);
    setUserAgentData(undefined);
  });

  it('detects a desktop device as non-mobile', () => {
    const { result } = renderHook(() => useDevice());

    expect(result.current.isMobile).toBe(false);
    expect(result.current.isApple).toBe(false);
  });

  it('detects an iPhone as mobile and Apple', () => {
    setUserAgent(IPHONE_USER_AGENT);
    setMaxTouchPoints(5);
    mockMatchMedia(true);

    const { result } = renderHook(() => useDevice());

    expect(result.current.isMobile).toBe(true);
    expect(result.current.isApple).toBe(true);
  });

  it('detects a Mac as Apple but not mobile', () => {
    setUserAgent(MAC_USER_AGENT);

    const { result } = renderHook(() => useDevice());

    expect(result.current.isMobile).toBe(false);
    expect(result.current.isApple).toBe(true);
  });

  it('detects a mobile device via Client Hints alone', () => {
    setUserAgentData({ mobile: true });

    const { result } = renderHook(() => useDevice());

    expect(result.current.isMobile).toBe(true);
  });

  it('does not treat touch + narrow screen alone as mobile', () => {
    setMaxTouchPoints(10);
    mockMatchMedia(true);

    const { result } = renderHook(() => useDevice());

    expect(result.current.isMobile).toBe(false);
  });
});