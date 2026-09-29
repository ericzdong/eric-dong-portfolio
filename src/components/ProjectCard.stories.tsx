import type { Meta, StoryObj } from '@storybook/react-vite'
import { ProjectCard } from './ProjectCard'

const meta = {
  title: 'Portfolio/ProjectCard',
  component: ProjectCard,
  parameters: { layout: 'centered' },
  decorators: [(Story) => <div className="w-[620px] max-w-[calc(100vw-48px)] overflow-hidden bg-[#f7f8fc] p-6"><Story /></div>],
  tags: ['autodocs'],
} satisfies Meta<typeof ProjectCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    index: 0,
    project: {
      title: 'Northstar Finance',
      category: 'Product design · Fintech',
      description: 'A calmer, clearer way for first-time investors to understand their money.',
      tags: ['Strategy', 'UX/UI', 'Design system'],
      href: '#',
      accent: '#4f46e5',
      surface: '#e6e8ff',
    },
  },
}
