import styles from './CollectionCard.module.css'

export interface ICollectionCard {
  sampleTextProp: string
}

const CollectionCard: React.FC<ICollectionCard> = ({ sampleTextProp }) => {
  return <div className={styles.container}>{sampleTextProp}</div>
}

export default CollectionCard
