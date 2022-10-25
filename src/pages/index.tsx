import CatCard from 'components/cards/cat/CatCard'
import { mockCatCardProps } from 'components/cards/cat/CatCard.mocks'
import PrimaryLayout from 'components/layouts/primary/PrimaryLayout'
import styles from '../styles/Home.module.css'
import { NextPageWithLayout } from './page'

const Home: NextPageWithLayout = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <CatCard {...mockCatCardProps.base} />
    </main>
  )
}

export default Home

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>
}
