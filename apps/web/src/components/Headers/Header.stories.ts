import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Header from './Header.vue';

const meta: Meta<typeof Header> = {
  title: 'Text/Header',
  component: Header,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A header component with pink color theming and dark mode support. Renders as an h1 element with customizable styling.',
      },
    },
  },
  argTypes: {
    class: {
      control: 'text',
      description: 'Additional CSS classes to apply to the header',
    },
    default: {
      control: 'text',
      description: 'The content of the header',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    default: 'Welcome to Boostpoint',
  },
};
