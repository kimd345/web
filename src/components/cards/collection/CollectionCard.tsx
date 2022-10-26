export interface ICollectionCard {
  collectionName: string
  createdAt: string
  totalNfts: number
  imageUrl: string
}

const CollectionCard: React.FC<ICollectionCard> = ({
  collectionName,
  createdAt,
  totalNfts,
  imageUrl,
}) => {
  return (
    <div className="relative flex h-72 w-64 flex-col overflow-hidden rounded shadow">
      <span className="material-icons md-18 absolute right-2 top-2 text-white text-opacity-80 hover:cursor-pointer">
        info
      </span>
      <img className="h-40 object-cover" src={imageUrl} alt="NFT Image" />
      <div className="h-32 px-6 py-5">
        <p className="bg-gradient-to-r from-blue to-purple-light bg-clip-text font-sans text-lg font-bold text-transparent">
          {collectionName}
        </p>
        <p className="mb-7 text-sm font-medium">{createdAt}</p>
        <p className="text-sm font-medium text-black text-opacity-60">
          {totalNfts} NFTs
        </p>
      </div>
    </div>
  )
}

export default CollectionCard
