import type { NextPage } from "next"
import Head from "next/head"
import Parent from "../modules/parent/Parent"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>NFT Dashboard</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Parent />
    </div>
  )
}

export default Home
