import PortofolioSection from './PortofolioSection';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'Organisms/Sections',
    component: PortofolioSection,
} as ComponentMeta<typeof PortofolioSection>;

const Template: ComponentStory<typeof PortofolioSection> = () => <PortofolioSection />;

export const Portofolio = Template.bind({});