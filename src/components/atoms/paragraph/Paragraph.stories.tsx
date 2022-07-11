import Pharagraph from './Paragraph';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'Atoms/Text',
    component: Pharagraph,
} as ComponentMeta<typeof Pharagraph>;

const Template: ComponentStory<typeof Pharagraph> = () => <Pharagraph />;

export const HeroParagraph = Template.bind({});