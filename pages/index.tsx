import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navigation from '../components/Navigation';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home :: Caffe Next.js</title>
      </Head>
      <Navigation />
      <div className="container">
        <h1>Caffe Next.js</h1>
        <p>온라인으로 메뉴를 확인하고 주문해보세요.</p>
      </div>



    </div >
  )
}

export default Home
