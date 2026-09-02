import type { Meta, StoryObj } from '@storybook/react-vite';
import { ImageDisplay, type ImageCenter } from './ImageDisplay';

const meta: Meta<typeof ImageDisplay> = {
  title: 'Base/ImageDisplay',
  component: ImageDisplay,
  tags: ['autodocs'],
  argTypes: {
    center: { control: false },
  },
};

export default meta;

type DefaultArgs = {
  alt: string;
  centerX: ImageCenter[0];
  centerY: ImageCenter[1];
  imageWidth: number;
  imageHeight: number;
  imageUrl: string;
};

export const Default: StoryObj<DefaultArgs> = {
  argTypes: {
    centerX: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    centerY: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    imageWidth: { control: { type: 'range', min: 100, max: 1000, step: 10 } },
    imageHeight: { control: { type: 'range', min: 100, max: 1000, step: 10 } },
  },
  args: {
    alt: 'A sample image',
    centerX: 50,
    centerY: 50,
    imageWidth: 400,
    imageHeight: 300,
    imageUrl: 'https://picsum.photos/seed/example/800/600',
  },
  render: ({ centerX, centerY, imageUrl, alt }) => (
    <ImageDisplay center={[centerX, centerY]} imageUrl={imageUrl} alt={alt} />
  ),
  decorators: [
    (Story, { args }) => (
      <div style={{ width: `${args.imageWidth}px`, height: `${args.imageHeight}px` }}>
        <Story />
      </div>
    ),
  ],
};