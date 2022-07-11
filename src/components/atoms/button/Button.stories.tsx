import Button from "./Button";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'Atoms/Button',
    component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Main = Template.bind({})

Main.args = {
    backgroundColor: '#5454D4',
    label: 'Our Services',
    size: 'medium',
}