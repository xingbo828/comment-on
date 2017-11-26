import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import Tabs from '../../globalComponents/Tabs';
import Icon from '../../globalComponents/Icon';
const TabPanel = Tabs.TabPanel;


const BasicTabs = () => (
  <Tabs style={{ width: '800px'}} activeKey="tab-1" onTabChange={action('tab changed')}>
    <TabPanel panelKey="tab-1" header="Tab 1">
      <h2>This is Tab #1</h2>
      <p>This is body of Tab #1</p>
    </TabPanel>
    <TabPanel panelKey="tab-2" header="Tab 2">
      <h2>This is Tab #2</h2>
      <p>This is body of Tab #2</p>
    </TabPanel>
  </Tabs>
);

const TabsWithReactEleHeader = () => (
    <Tabs style={{ width: '800px'}} activeKey="tab-1" onTabChange={action('tab changed')}>
      <TabPanel panelKey="tab-1" header={<span><Icon icon="gear" /> Config</span>}>
        <h2>This is Tab #1</h2>
        <p>This is body of Tab #1</p>
      </TabPanel>
      <TabPanel panelKey="tab-2" header={<span><Icon icon="camera-retro" /> Camera</span>}>
        <h2>This is Tab #2</h2>
        <p>This is body of Tab #2</p>
      </TabPanel>
    </Tabs>
  );


const TabsStory = storiesOf('Global/Data Display/Tabs', module)
.add('basic tabs', withInfo('Basic Tabs')(BasicTabs))
.add('custom header link', withInfo('React element header links')(TabsWithReactEleHeader));

export default TabsStory;
