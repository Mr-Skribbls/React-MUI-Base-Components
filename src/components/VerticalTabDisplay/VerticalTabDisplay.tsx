import type { ReactNode, SyntheticEvent } from 'react';
import { Box, Stack, Tab, Tabs } from '@mui/material';
import { useImducer, ActionType } from '../../hooks/useImducer';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';

export interface VerticalTab {
  displayName: string;
  content: ReactNode;
  disabled?: boolean;
}

export interface VerticalTabDisplayProps {
  tabs: VerticalTab[];
  ariaLabel?: string;
}

const tabProps = (key: number) => ({
  id: `vertical-tab-${key}`,
  'aria-controls': `vertical-tabpanel-${key}`,
});

export const VerticalTabDisplay = ({
  tabs,
  ariaLabel,
}: VerticalTabDisplayProps) => {
  const [selectedTab, setSelectedTab] = useImducer(0);
  const { width: screenWidth } = useWindowDimensions();

  const selectTab = (_e: SyntheticEvent, newTab: number) => {
    setSelectedTab({
      value: newTab,
      type: ActionType.SET,
    });
  }

  return (
    <Stack direction={screenWidth < 600 ? 'column': 'row'} sx={{ minHeight: 0}}>
      <Tabs
        orientation={screenWidth < 600 ? 'horizontal' : 'vertical'}
        variant='scrollable'
        value={selectedTab}
        onChange={selectTab}
        aria-label={ariaLabel}>
        { tabs.map((tab, key) => (
          <Tab disabled={tab.disabled} key={key} label={tab.displayName} {...tabProps(key)} />
        )) }
      </Tabs>
      <Stack
        sx={{ flexGrow: 1, minWidth: '150px' }}
        height={'100%'}
        paddingTop={1}
        paddingLeft={1}
        overflow='auto'>
        { tabs.map((tab, key) => (
          <Box
            key={key}
            role='tabpanel'
            hidden={selectedTab !== key}
            id={`vertical-tabpanel-${key}`}
            aria-labelledby={`vertical-tab-${key}`}
            sx={{ flexGrow: 1 }}>
            { tab.content }
          </Box>
        )) }
      </Stack>
    </Stack>
  );
};

export default VerticalTabDisplay;