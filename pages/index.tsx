import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import ToolsList from '../components/toolslist'


const Home: NextPage = () => {
  return (
    <div>

      <main>
        <ToolsList />
      </main>

    </div>
  )
}

export default Home
