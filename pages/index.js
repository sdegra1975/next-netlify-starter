import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Infonuagix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img src="/logo1500.png" alt="Logo d'Infonuagix" width="600">
        <p className="description">
          La boîte de développement logiciel infonuagique fait-sur-mesure!
        </p>
        <p className="description">
          The custom cloud-native software development shop!
        </p>
      </main>

      <Footer>
      </Footer>
    </div>
  )
}
