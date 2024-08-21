import Header from '../components/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <footer>푸터입니다.</footer>
    </>
  )
}

export default MyApp
