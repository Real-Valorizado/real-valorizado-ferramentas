
import '../styles/globals.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import GtmBody from '../components/googlegtm'
import Cookies from '../components/cookies'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <body>
        <GtmBody />
        <Component {...pageProps} />
      </body>
      <Footer />
      <Cookies />
    </>
  )
}

export default MyApp
