import Slider from './Slider';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'Atoms/Slider',
    component: Slider,
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = () => <Slider />;

export const SliderCircles = Template.bind({});