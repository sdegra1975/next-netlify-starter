import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Infonuagix</title>
        <link rel="icon" href="/logo1500_Puv_icon.ico" />
      </Head>

      <main>
        <img src="/logo1500.png" alt="Logo d'Infonuagix" width="1200"/>
        <h1>
          La boîte de développement de logiciels infonuagiques faits-sur-mesure!
        </h1>
        <h1>
          The custom cloud-native software development shop!
        </h1>
        <p className="description">
          <h2>sebastien.degrandpre@infonuagix.com</h2>
          <h2>514.942.4431</h2>
          <h2>870 de la Bruyère</h2>
          <h2>St-Rémi (Québec)</h2>
          <h2>J0L 2L0</h2>
        </p>
      </main>

      <Footer/>
    </div>
  )
}
