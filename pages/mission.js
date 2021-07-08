import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer';
const transition_styles = "transition-colors duration-300 ease";

export default function Mission() {

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <Head>
                <title>Carlsbad LifeHouse Inc.</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
  
            <main style={{maxWidth: "1200px"}} className="flex flex-col items-center w-full flex-1 py-20 w-full">
                <Nav />
                <div  className="fade-in flex justify-between items-center mt-20 ">
                    <div style={{maxWidth: "650px", width: "100%"}} className="text-xl">
                        <h2 className="text-2xl w-full pb-4 border-b font-semibold border-blue-200 text-blue-900 mb-10 tracking-wider">Mission</h2>
                        <p className="">
                        At Carlsbad LifeHouse Inc., our mission is to help recovering addicts successfully transition from an intensive rehab program to a healthy, sustainable, sober life. We are a non-profit organization committed to serving the needs of our community. We believe that lives are changed through personal relationships with God and other people. Community support, along with faith, are central to the LifeHouse program. We provide a healthy environment, mentoring, and support to help recovering addicts transition to long-term sobriety and independent living.
                        </p>
                        <p className=" mt-5">The need is <span className="font-semibold">tremendous</span>.</p>

                        <ul className="mt-10 p-5 border rounded border-blue-200 shadow">
                            <li className="mb-3">• In 2014, 6.9% of people above the age of 12 in New Mexico reported abuse of, or dependence on alcohol! A reported 3% abused illicit drugs.</li>
                            <li className="mb-3">• 92.4% of people with alcohol dependence, and 87.7% of those with drug dependence do not receive treatment.</li>
                            <li className="mb-3">• Approximately 50% of people who receive treatment for their substance abuse are not successful in maintaining sobriety.</li>
                            <li className="mb-3">• New Mexico's funding of inpatient rehabs limits most to 30 days, but...</li>
                            <li className="mb-3">• 30 day rehabs have half the success rate of longer programs. (90+ days).</li>
                        </ul>
                    </div>
                    
                    <img 
                        width={450}
                        className="ml-12 invisible lg:visible" 
                        src="https://images.unsplash.com/photo-1541976844346-f18aeac57b06?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
                    />
                </div>
                
                <p className="text-center max-w-md italic font-semibold mt-10 text-xl">
                    One of the greatest dangers for relapse occurs in the transition from inpatient treatment to independent life.
                </p>

                <p className="text-center max-w-xl mt-10 text-xl">
                    If you, (or someone you know,) is interested in applying for our program, click the link below to download an application form. <br/>
                    <span className="italic">*Application forms will be provided closer to Date of Operation.</span>
                </p>

                <Link href="/application">
                    <a className={"text-lg py-2 px-5 border border-blue-600 text-blue-900 uppercase font-semibold tracking-wider mt-5" +
                    " cursor-pointer hover:bg-blue-900 hover:text-white hover:bg-opacity-90 " + transition_styles}>
                        Go to application
                    </a>
                </Link>
            </main>
  
            <Footer/>
        </div>
    )
}