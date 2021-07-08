import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer';

const transition_styles = "transition-colors duration-300 ease";

export default function Application() {

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <Head>
                <title>Carlsbad LifeHouse Inc.</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
  
            <main style={{maxWidth: "1200px"}} className="flex flex-col items-center w-full flex-1 py-20 w-full">
                <Nav />
                <div className="w-full mt-20 fade-in">
                    <div className="w-full text-xl">
                        <h2 className="text-2xl w-full pb-4 border-b font-semibold border-blue-200 text-blue-900 mb-10 tracking-wider">Application</h2>
                        <p style={{maxWidth: "1200px"}} className="text-center">
                            If you would like to apply to our program at LifeHouse, please download the applicable PDF below, read the accompanying information, complete the application, and return to:
                        </p>
                        <p className="font-semibold mt-5 text-center text-blue-900">carlsbadlifehouse@gmail.com</p>
                        <p className="text-center my-7">Or you can mail it to:</p>
                        <p className="font-semibold mt-5 text-center text-blue-900">
                            Carlsbad LifeHouse<br/>
                            P.O. Box 3141 <br/>
                            Carlsbad NM, 88221<br/>
                        </p>
                    </div>
                    <div className="flex justify-evenly mt-10 pt-10 border-t">
                        <div>
                            <h3 className="text-xl text-center font-gray-700 mb-4 font-semibold">Sober Living Application</h3>
                            <div className="flex justify-evenly">
                                <a 
                                    target="_blank"
                                    href="/forms/application-guidelines.pdf"
                                    className="flex flex-col items-center mx-4"
                                >
                                    <img src="https://static.wixstatic.com/media/40d80b8089c8418a961cb75d96d491f7.png"/>
                                    <p className="text-gray-800 font-light text-lg text-center mt-2">Application Guidelines</p>
                                </a>
                                <a 
                                    target="_blank"
                                    href="/forms/application.pdf"
                                    className="flex flex-col items-center mx-4"
                                >
                                    <img src="https://static.wixstatic.com/media/40d80b8089c8418a961cb75d96d491f7.png"/>
                                    <p className="text-gray-800 font-light text-lg text-center mt-2">Application</p>
                                </a>
                                <a 
                                    target="_blank"
                                    href="/forms/rules-expectations.pdf"
                                    className="flex flex-col items-center mx-4"
                                >
                                    <img src="https://static.wixstatic.com/media/40d80b8089c8418a961cb75d96d491f7.png"/>
                                    <p className="text-gray-800 font-light text-lg text-center mt-2">Rules and Expectations</p>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl text-center font-gray-700 mb-4 font-semibold">Counseling Application</h3>
                            <div className="flex justify-evenly">
                                <a 
                                    target="_blank"
                                    href="/forms/adult-counseling.pdf"
                                    className="flex flex-col items-center mx-4"
                                >
                                    <img src="https://static.wixstatic.com/media/40d80b8089c8418a961cb75d96d491f7.png"/>
                                    <p className="text-gray-800 font-light text-lg text-center mt-2">Adult Counseling</p>
                                </a>
                                <a 
                                    target="_blank"
                                    href="/forms/child-counseling.pdf"
                                    className="flex flex-col items-center mx-4"
                                >
                                    <img src="https://static.wixstatic.com/media/40d80b8089c8418a961cb75d96d491f7.png"/>
                                    <p className="text-gray-800 font-light text-lg text-center mt-2">Child Counseling</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}