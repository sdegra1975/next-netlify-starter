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
          La boîte de développement logiciel infonuagique fait-sur-mesure!
        </h1>
        <h1>
          The custom cloud-native software development shop!
        </h1>
        <p className="description">
          sebastien.degrandpre@infonuagix.com <br/>
          514.942.4431 <br/>
          870 de la Bruyère <br/>
          St-Rémi (Québec) <br/>
          J0L 2L0
        </p>
      </main>

      <Footer/>
    </div>
  )
}
