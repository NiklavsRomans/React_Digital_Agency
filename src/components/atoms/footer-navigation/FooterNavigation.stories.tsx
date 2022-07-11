import FooterNavigation from './FooterNavigation';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'Atoms/Navigation',
    component: FooterNavigation,
} as ComponentMeta<typeof FooterNavigation>;

const Template: ComponentStory<typeof FooterNavigation> = () => <FooterNavigation />;

export const FooterButtons = Template.bind({});