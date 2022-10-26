export interface INFTCard {
  nftName: string
  imageUrl: string
}

const NFTCard: React.FC<INFTCard> = ({ nftName, imageUrl }) => {
  return (
    <div className="flex h-60 w-44 flex-col overflow-hidden rounded shadow">
      <img className="h-40 object-cover" src={imageUrl} alt="NFT Image" />
      <div className="flex h-20 justify-between py-2 pr-1 pl-4">
        <p className="text-base font-medium">{nftName}</p>
        <span className="material-icons md-18 text-black text-opacity-50 hover:cursor-pointer">
          more_vert
        </span>
      </div>
    </div>
  )
}

export default NFTCard
