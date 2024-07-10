import { fn } from '@storybook/test';
import { DropdownMenu } from './DropdownMenu';
import { options } from './DropdownMenu/options';

export default {
    title: 'Components/Dropdown',
    component: DropdownMenu,
    parameters: {
      layout: 'fullscreen',
    },
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
    //   backgroundColor: { control: 'color' },
    },
    // args: { onClick: fn() },
  };

  export const Default = {
    args: {
      withSearch: true,
      outlined: true,
      multiple: true,
      options: options,
    },
  };