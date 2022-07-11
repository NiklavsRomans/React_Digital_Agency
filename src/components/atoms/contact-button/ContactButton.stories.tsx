import ContactButton from './ContactButton';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'Atoms/Button',
    component: ContactButton,
} as ComponentMeta<typeof ContactButton>;

const Template: ComponentStory<typeof ContactButton> = () => <ContactButton/>;

export const Contact = Template.bind({});