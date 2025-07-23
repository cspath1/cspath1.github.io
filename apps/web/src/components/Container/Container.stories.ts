import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Container from './Container.vue';

const meta: Meta<typeof Container> = {
  title: 'Components/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A flexible container component with full width/height, flex layout, rounded corners, and dark mode border support. Perfect for wrapping content and creating layout structures.',
      },
    },
  },
  argTypes: {
    class: {
      control: 'text',
      description: 'Additional CSS classes to apply to the container (required prop)',
    },
    default: {
      control: 'text',
      description: 'The content to be wrapped inside the container',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    class: 'p-6 border',
    default: 'This is the default container with padding and border.',
  },
};

export const WithCustomPadding: Story = {
  args: {
    class: 'p-8 border bg-gray-50 dark:bg-gray-800 text-black dark:text-white',
    default: 'Container with larger padding and background color.',
  },
};

export const FlexColumn: Story = {
  args: {
    class: 'p-6 border flex-col gap-4',
  },
  render: (args) => ({
    components: { Container },
    setup() {
      return { args };
    },
    template: `
      <Container :class="args.class">
        <div class="bg-blue-100 dark:bg-blue-900 text-black dark:text-white p-4 rounded">Item 1</div>
        <div class="bg-green-100 dark:bg-green-900 text-black dark:text-white p-4 rounded">Item 2</div>
        <div class="bg-purple-100 dark:bg-purple-900 text-black dark:text-white p-4 rounded">Item 3</div>
      </Container>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Container with flex-col layout and gap between items.',
      },
    },
  },
};

export const FlexRow: Story = {
  args: {
    class: 'p-6 border flex-row gap-4',
  },
  render: (args) => ({
    components: { Container },
    setup() {
      return { args };
    },
    template: `
      <Container :class="args.class">
        <div class="bg-red-100 dark:bg-red-900 text-black dark:text-white p-4 rounded flex-1">Column 1</div>
        <div class="bg-yellow-100 dark:bg-yellow-900 text-black dark:text-white p-4 rounded flex-1">Column 2</div>
        <div class="bg-indigo-100 dark:bg-indigo-900 text-black dark:text-white p-4 rounded flex-1">Column 3</div>
      </Container>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Container with flex-row layout creating equal-width columns.',
      },
    },
  },
};

export const CenteredContent: Story = {
  args: {
    class: 'border justify-center items-center min-h-64',
    default: 'Centered content inside the container.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Container with content centered both horizontally and vertically.',
      },
    },
  },
};

export const CardLayout: Story = {
  args: {
    class: 'p-6 border shadow-lg bg-white dark:bg-gray-800 text-black dark:text-white',
  },
  render: (args) => ({
    components: { Container },
    setup() {
      return { args };
    },
    template: `
      <Container :class="args.class">
        <div class="flex-col space-y-4">
          <h2 class="text-xl font-bold text-black dark:text-white">Card Title</h2>
          <p class="text-black dark:text-white">This is a card-like container with shadow and background color. Perfect for displaying content in a visually separated section.</p>
          <div class="flex gap-2">
            <button class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Action</button>
            <button class="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 dark:hover:bg-gray-700">Cancel</button>
          </div>
        </div>
      </Container>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Container styled as a card with shadow, background, and content.',
      },
    },
  },
};

export const DashboardGrid: Story = {
  args: {
    class: 'p-6 border grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
  },
  render: (args) => ({
    components: { Container },
    setup() {
      return { args };
    },
    template: `
      <Container :class="args.class">
        <div class="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-lg text-black dark:text-white">
          <h3 class="text-lg font-semibold mb-2">Users</h3>
          <p class="text-3xl font-bold">1,234</p>
        </div>
        <div class="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-lg text-black dark:text-white">
          <h3 class="text-lg font-semibold mb-2">Revenue</h3>
          <p class="text-3xl font-bold">$45,678</p>
        </div>
        <div class="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-lg text-black dark:text-white">
          <h3 class="text-lg font-semibold mb-2">Orders</h3>
          <p class="text-3xl font-bold">89</p>
        </div>
        <div class="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-lg text-black dark:text-white">
          <h3 class="text-lg font-semibold mb-2">Products</h3>
          <p class="text-3xl font-bold">456</p>
        </div>
        <div class="bg-gradient-to-br from-pink-500 to-pink-600 p-6 rounded-lg text-black dark:text-white">
          <h3 class="text-lg font-semibold mb-2">Reviews</h3>
          <p class="text-3xl font-bold">2,341</p>
        </div>
        <div class="bg-gradient-to-br from-indigo-500 to-indigo-600 p-6 rounded-lg text-black dark:text-white">
          <h3 class="text-lg font-semibold mb-2">Sessions</h3>
          <p class="text-3xl font-bold">12,789</p>
        </div>
      </Container>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Container used as a dashboard grid with responsive columns and metric cards.',
      },
    },
  },
};

export const SidebarLayout: Story = {
  args: {
    class: 'border min-h-96',
  },
  render: (args) => ({
    components: { Container },
    setup() {
      return { args };
    },
    template: `
      <Container :class="args.class">
        <div class="w-64 bg-gray-100 dark:bg-gray-800 p-4 border-r dark:border-gray-600 text-black dark:text-white">
          <h3 class="font-semibold text-black dark:text-white mb-4">Navigation</h3>
          <ul class="space-y-2">
            <li><a href="#" class="text-blue-600 hover:text-blue-700">Dashboard</a></li>
            <li><a href="#" class="text-gray-600 dark:text-gray-300 hover:text-blue-600">Users</a></li>
            <li><a href="#" class="text-gray-600 dark:text-gray-300 hover:text-blue-600">Settings</a></li>
            <li><a href="#" class="text-gray-600 dark:text-gray-300 hover:text-blue-600">Reports</a></li>
          </ul>
        </div>
        <div class="flex-1 p-6">
          <h1 class="text-2xl font-bold text-black dark:text-white mb-4">Main Content</h1>
          <p class="text-black dark:text-white">This is the main content area in a sidebar layout. The container handles the flex layout automatically.</p>
        </div>
      </Container>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Container used to create a sidebar layout with navigation and main content.',
      },
    },
  },
};

export const BorderVariants: Story = {
  render: () => ({
    components: { Container },
    template: `
      <div class="space-y-6">
        <Container class="p-4 border dark:border-gray-700 dark:bg-gray-900">
          <span class="text-black dark:text-white">Default Border</span>
        </Container>
        <Container class="p-4 border-2 border-blue-500 dark:border-blue-500 dark:bg-blue-900">
          <span class="text-black dark:text-white">Blue Border</span>
        </Container>
        <Container class="p-4 border-dashed border-green-500 dark:border-gray-200 dark:bg-green-900">
          <span class="text-black dark:text-white">Dashed Green Border</span>
        </Container>
        <Container class="p-4 border-4 border-red-500 dark:border-red-500 dark:bg-red-900 rounded-2xl">
          <span class="text-black dark:text-white">Thick Red Border with Large Radius</span>
        </Container>
        <Container class="p-4 shadow-lg border-0 bg-white dark:bg-gray-800">
          <span class="text-black dark:text-white">No Border with Shadow</span>
        </Container>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Examples of different border styles and variations.',
      },
    },
  },
};

export const BackgroundVariants: Story = {
  render: () => ({
    components: { Container },
    template: `
      <div class="space-y-4">
        <Container class="p-4 border bg-white dark:bg-gray-900 text-black dark:text-white">
          <span class="text-black dark:text-white">White/Dark Background</span>
        </Container>
        <Container class="p-4 border bg-blue-50 dark:bg-blue-900/20 text-black dark:text-white">
          <span class="text-blue-900 dark:text-blue-900">Blue Tinted Background</span>
        </Container>
        <Container class="p-4 border bg-gradient-to-r from-purple-500 to-pink-500 text-black dark:text-white">
          <span class="text-white font-semibold">Gradient Background</span>
        </Container>
        <Container class="p-4 border bg-gray-100 dark:bg-gray-700 text-black dark:text-white">
          <span class="text-black dark:text-white">Gray Background</span>
        </Container>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Examples of containers with different background colors and styles.',
      },
    },
  },
};

export const SizeVariants: Story = {
  render: () => ({
    components: { Container },
    template: `
      <div class="space-y-4">
        <Container class="p-2 border h-16 bg-white dark:bg-gray-900 text-black dark:text-white">
          <span>Small Container (h-16)</span>
        </Container>
        <Container class="p-4 border h-32 bg-white dark:bg-gray-900 text-black dark:text-white">
          <span>Medium Container (h-32)</span>
        </Container>
        <Container class="p-6 border h-48 bg-white dark:bg-gray-900 text-black dark:text-white">
          <span>Large Container (h-48)</span>
        </Container>
        <Container class="p-8 border h-64 bg-white dark:bg-gray-900 text-black dark:text-white">
          <span>Extra Large Container (h-64)</span>
        </Container>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Examples of containers with different heights and padding sizes.',
      },
    },
  },
};

export const ResponsiveExample: Story = {
  args: {
    class: 'p-2 sm:p-4 md:p-6 lg:p-8 border flex-col sm:flex-row gap-4',
  },
  render: (args) => ({
    components: { Container },
    setup() {
      return { args };
    },
    template: `
      <Container :class="args.class">
        <div class="bg-blue-100 dark:bg-blue-900 text-black dark:text-white p-4 rounded flex-1">
          <h3 class="font-semibold mb-2">Responsive Item 1</h3>
          <p class="text-sm">Stacks on mobile, side-by-side on larger screens.</p>
        </div>
        <div class="bg-green-100 dark:bg-green-900 text-black dark:text-white p-4 rounded flex-1">
          <h3 class="font-semibold mb-2">Responsive Item 2</h3>
          <p class="text-sm">Padding increases with screen size.</p>
        </div>
      </Container>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Container with responsive padding and layout that adapts to screen size.',
      },
    },
  },
};