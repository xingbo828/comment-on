import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import {Table, Tr, Td} from '../../globalComponents/Table';
import Icon from '../../globalComponents/Icon';


const BasicTable = () => (
  <Table>
    <Tr>
      <Td>1</Td>
      <Td>2</Td>
      <Td>3</Td>
    </Tr>
    <Tr>
      <Td>1</Td>
      <Td>2</Td>
      <Td>3</Td>
    </Tr>
  </Table>
);

const TableStory = storiesOf('Global/Table', module)
.add('basic table', withInfo('Basic Table')(BasicTable))

export default TableStory;
