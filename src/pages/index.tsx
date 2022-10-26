import CollectionCard from 'components/cards/collection/CollectionCard'
import { mockCollectionCardProps } from 'components/cards/collection/CollectionCard.mocks'
import NFTCard from 'components/cards/nft/NFTCard'
import { mockNFTCardProps } from 'components/cards/nft/NFTCard.mocks'
import PrimaryLayout from 'components/layouts/primary/PrimaryLayout'
import { NextPageWithLayout } from './page'

const Home: NextPageWithLayout = () => {
  return (
    <section>
      <CollectionCard {...mockCollectionCardProps.base} />
      <NFTCard {...mockNFTCardProps.base} />
    </section>
  )
}

export default Home

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>
}
