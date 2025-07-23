import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Header3 from './Header3.vue';

const meta: Meta<typeof Header3> = {
  title: 'Text/Header3',
  component: Header3,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A tertiary header component (h3) with pink color theming and dark mode support. Smallest header in the hierarchy for subsection organization.',
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
    default: 'Subsection Heading',
  },
};