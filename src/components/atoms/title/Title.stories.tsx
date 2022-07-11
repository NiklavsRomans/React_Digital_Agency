import Title from './Title';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'Atoms/Text',
    component: Title,
} as ComponentMeta<typeof Title>

const Template: ComponentStory<typeof Title> = () => <Title />

export const HeroTitle = Template.bind({})

