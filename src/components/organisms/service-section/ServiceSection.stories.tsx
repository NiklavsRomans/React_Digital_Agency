import ServiceSection from './ServiceSection';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'Organisms/Sections',
    component: ServiceSection,
} as ComponentMeta<typeof ServiceSection>;

const Template: ComponentStory<typeof ServiceSection> = () => <ServiceSection />;

export const Service = Template.bind({});