import { MdMoreVert } from 'react-icons/md';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconMenu } from './IconMenu';

const meta: Meta<typeof IconMenu> = {
  title: 'Base/IconMenu',
  component: IconMenu,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof IconMenu>;

export const Default: Story = {
  args: {
    title: 'Actions',
    menuItems: [
      { displayName: 'Edit', click: () => undefined },
      { displayName: 'Delete', click: () => undefined },
      { displayName: 'Share', click: () => undefined },
    ],
  },
  render: (args) => <IconMenu {...args} icon={<MdMoreVert />} />,
};