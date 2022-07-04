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
    <br/>    
    <h1>
          La boîte de développement de logiciels infonuagiques faits-sur-mesure!
        </h1>
        <h1>
          The custom cloud-native software development shop!
        </h1>
        <p className="description">
          <h3>sebastien.degrandpre@infonuagix.com</h3>
          <h3>514.942.4431</h3>
          <h3>870 de la Bruyère, St-Rémi (Québec), J0L 2L0</h3>
        </p>
      </main>

      <Footer/>
    </div>
  )
}
