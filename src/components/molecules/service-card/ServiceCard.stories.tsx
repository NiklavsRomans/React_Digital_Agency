import ServiceCard from './ServiceCard';
import development from '../../../assets/icons/development.png';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Molecules/ServiceCard',
  component: ServiceCard,
} as ComponentMeta<typeof ServiceCard>;

const Template: ComponentStory<typeof ServiceCard> = (args) => (
  <ServiceCard
    {...args}
  />
);

export const Card = Template.bind({});
Card.args = {
  icon: development,
  title: 'Web Development',
  description: 'Create a platform with the best and coolest quality from us.',
}