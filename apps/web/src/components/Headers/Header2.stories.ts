import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Header2 from './Header2.vue';

const meta: Meta<typeof Header2> = {
  title: 'Text/Header2',
  component: Header2,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A secondary header component (h2) with pink color theming and dark mode support. Smaller than Header for hierarchical content organization.',
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
    default: 'Section Heading',
  },
};
