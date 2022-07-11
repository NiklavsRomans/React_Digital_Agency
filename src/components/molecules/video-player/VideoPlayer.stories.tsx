import VideoPlayer from './VideoPlayer';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'Molecules/VideoPlayer',
    component: VideoPlayer,
} as ComponentMeta<typeof VideoPlayer>;

const Template: ComponentStory<typeof VideoPlayer> = () => <VideoPlayer />;

export const Player = Template.bind({});