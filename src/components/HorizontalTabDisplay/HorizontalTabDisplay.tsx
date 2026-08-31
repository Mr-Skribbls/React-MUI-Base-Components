import type { ReactNode, SyntheticEvent } from 'react';
import { Box, Stack, Tab, Tabs } from '@mui/material';
import { useImducer, ActionType } from '../../hooks/useImducer';

export interface HorizontalTab {
  displayName: string;
  content: ReactNode;
  disabled?: boolean;
}

export interface HorizontalTabDisplayProps {
  tabs: HorizontalTab[];
  ariaLabel?: string;
}

const tabProps = (key: number) => ({
  id: `horizontal-tab-${key}`,
  'aria-controls': `horizontal-tabpanel-${key}`,
});

export const HorizontalTabDisplay = ({
  tabs,
  ariaLabel,
}: HorizontalTabDisplayProps) => {
  const [ selectedTab, setSelectedTab ] = useImducer(0);

  const selectTab = (_e: SyntheticEvent, newTab: number) => {
    setSelectedTab({
      value: newTab,
      type: ActionType.SET,
    });
  }

  return (
    <Stack direction='column' sx={{
      minHeight: 0,
      flexGrow: 1,
    }}>
      <Tabs
        orientation='horizontal'
        variant='scrollable'
        value={selectedTab}
        onChange={selectTab}
        aria-label={ariaLabel}
      >
        { tabs.map((tab, key) => (
          <Tab
            disabled={tab.disabled}
            key={key}
            label={tab.displayName}
            { ...tabProps(key) } />
        )) }
      </Tabs>
      <Stack
        sx={{
          flexGrow: 1,
          minWidth: '150px',
        }}
        height={'100%'}
        paddingTop={1}
        paddingLeft={1}
        overflow={'auto'}
      >
        { tabs.map((tab, key) => (
          <Box
            key={key}
            role='tabpanel'
            hidden={selectedTab !== key}
            id={`horizontal-tabpanel-${key}`}
            aria-labelledby={`horizontal-tab-${key}`}
            sx={{
              flexGrow: 1,
            }}
          >
            { tab.content }
          </Box>
        )) }
      </Stack>
    </Stack>
  );
};

export default HorizontalTabDisplay;