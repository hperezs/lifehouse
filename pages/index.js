import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Link from 'next/link'

const transition_styles = "transition-colors duration-300 ease";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Carlsbad LifeHouse Inc.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{maxWidth: "1200px"}} className="flex flex-col items-center w-full flex-1 py-20 w-full">
        <Nav />
        <div className="fade-in w-full">
          <div style={{width: "100%", height: "500px"}} className="welcome-img mt-10 flex justify-center items-center">
              <h1 className="text-white p-12 bg-black bg-opacity-60 text-3xl max-w-xl">Achieve a healthy, sustainable, sober life through mentoring, faith and community support.</h1>
          </div>
          <div className="flex justify-center mt-10">
            <Link href="/application">
              <a className={"text-lg py-2 px-5 border border-blue-600 text-blue-900 uppercase font-semibold tracking-wider mt-5" +
              " cursor-pointer hover:bg-blue-900 hover:text-white hover:bg-opacity-90 " + transition_styles}>
                  Go to application
              </a>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
