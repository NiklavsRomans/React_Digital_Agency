import ImageSlider from './ImageSlider';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'Molecules/ImageSlider',
    component: ImageSlider,
} as ComponentMeta<typeof ImageSlider>;

const Template: ComponentStory<typeof ImageSlider> = () => <ImageSlider />;

export const ImageSlideshow = Template.bind({});