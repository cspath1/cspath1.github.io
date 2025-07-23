import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Paragraph from './Paragraph.vue';

const meta: Meta<typeof Paragraph> = {
  title: 'Text/Paragraph',
  component: Paragraph,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile paragraph component with dark mode support and customizable styling.',
      },
    },
  },
  argTypes: {
    class: {
      control: 'text',
      description: 'Additional CSS classes to apply to the paragraph',
    },
    default: {
      control: 'text',
      description: 'The content of the paragraph',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    default: 'This is a default paragraph with standard styling.',
  },
};