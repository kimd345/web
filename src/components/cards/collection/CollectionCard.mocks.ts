// Mock data / props to test component in Storybook / App
import { ICollectionCard } from './CollectionCard'

const base: ICollectionCard = {
  collectionName: 'Lorem Ipsum',
  createdAt: '01/01/2022',
  totalNfts: 30,
  imageUrl: '/time-cat.jpg',
}

export const mockCollectionCardProps = {
  base,
}
