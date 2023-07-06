import type { Meta, StoryObj } from '@storybook/react';

import { MainLoadingUiComponent } from '../components/ui/MainLoadingUiComponent';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof MainLoadingUiComponent> = {
  title: 'Example/MainLoadingUiComponent',
  component: MainLoadingUiComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MainLoadingUiComponent>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const isLoading: Story = {
  args: {
    loading: true,
  },
};

export const isNotLoading: Story = {
  args: {
    loading: false,
  },
};
