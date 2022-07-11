import PlayButton from './PlayButton';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'Atoms/Button',
    component: PlayButton,
} as ComponentMeta<typeof PlayButton>

const Template: ComponentStory<typeof PlayButton> = () => <PlayButton />

export const Play = Template.bind({})

