import VideoSection from './VideoSection';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'Organisms/Sections',
    component: VideoSection,
} as ComponentMeta<typeof VideoSection>;

const Template: ComponentStory<typeof VideoSection> = () => <VideoSection />;

export const Video = Template.bind({});