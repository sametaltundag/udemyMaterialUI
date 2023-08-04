import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export const LessonTabs = () => {
  return (
    <Tabs defaultValue={0}>
      <TabList>
        <Tab>First</Tab>
        <Tab>Second</Tab>
        <Tab>Third</Tab>
      </TabList>
      <TabPanel value={0}>First</TabPanel>
      <TabPanel value={1}>Second</TabPanel>
      <TabPanel value={2}>Third</TabPanel>
    </Tabs>
  );
};
