import { ComponentMeta, ComponentStory } from '@storybook/react'
import CollectionCard, { ICollectionCard } from './CollectionCard'
import { mockCollectionCardProps } from './CollectionCard.mocks'

export default {
  title: 'cards/CollectionCard',
  component: CollectionCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CollectionCard>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CollectionCard> = (args) => (
  <CollectionCard {...args} />
)

export const Base = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockCollectionCardProps.base,
} as ICollectionCard
