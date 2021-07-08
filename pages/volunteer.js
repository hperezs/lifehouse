import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer';

const transition_styles = "transition-colors duration-300 ease";

export default function Volunteer() {

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <Head>
                <title>Carlsbad LifeHouse Inc.</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
  
            <main style={{maxWidth: "1200px"}} className="flex flex-col items-center w-full flex-1 py-20 w-full">
                <Nav />
                <div className="w-full mt-20 fade-in">
                    <div className="flex flex-col items-center w-full text-xl">
                        <h2 className="text-2xl w-full pb-4 border-b font-semibold border-blue-200 text-blue-900 mb-10 tracking-wider">Volunteer / Opportunities</h2>
                        <p style={{maxWidth: "800px"}} className="text-center">
                            Listed below are various opportunities we could use your help to support the LifeHouse program. Whether you would like to contribute your time, or make a monetary donation, we welcome your support.
                        </p>
                        <p className="font-semibold mt-5 text-center italic">Thank you for making a difference in our community!</p>

                        <div className="text-center text-blue-900 p-6 mt-5 border border-blue-200 shadow max-w-md">
                            <p>
                                Please download the PDF below, complete the form, and send to:
                            </p>
                            <p className="font-semibold my-3 text-center text-blue-900">PO Box 3141, Carlsbad, NM 88221</p>
                            <p>Or email to: </p>
                            <p className="font-semibold mt-3 text-center text-blue-900">carlsbadlifehouse@gmail.com</p>
                            <hr className="my-5"/>
                            <div className="flex justify-evenly">
                                <a
                                    target="_blank"
                                    href="/forms/volunteer-interest.pdf" 
                                    className="flex flex-col items-center mx-4"
                                >
                                    <img src="https://static.wixstatic.com/media/40d80b8089c8418a961cb75d96d491f7.png"/>
                                    <p className="text-gray-800 font-light text-lg text-center mt-2">Volunteer Interest Form</p>
                                </a>
                                <a
                                    target="_blank"
                                    href="/forms/background-consent.pdf" 
                                    className="flex flex-col items-center mx-4"
                                >
                                    <img src="https://static.wixstatic.com/media/40d80b8089c8418a961cb75d96d491f7.png"/>
                                    <p className="text-gray-800 font-light text-lg text-center mt-2">Background Consent Form</p>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-20 text-xl">
                        <div className="">
                            <h4 className="font-semibold text-2xl mb-3 text-gray-700">Financial Gift</h4>
                            <p>
                                We have big plans for 2020 and we need your help to fulfill the vision that God has given us. We are working to expand the services we offer to the children in the house for women with children. We will also be rolling out a major expansion to increase our capacity and provide better services. We can make difference in the substance abuse epidemic one life at a time with your support. $1,000 can get a resident into the program, and on the path to sustainable recovery. If you would like to contribute financially, please download the PDF below, or click on the 'Donate' link in the menu.
                            </p>
                        </div>
                        <div className="mt-10 pt-10 border-t">
                            <h4 className="font-semibold text-2xl mb-3 text-gray-700">Services / How You Can Help</h4>
                            <p>
                                Our facilities and our residents require help in a variety of ways. Our building will require maintenance and improvements. You, or your business, may be able to provide the required services. Our residents may need professional assistance in a variety of areas, and you may be able to assist them. These services could include legal, financial, medical, etc. Services are listed below:
                            </p>
                        </div>
                        <div className="mx-7 mt-10 bg-gray-200 p-4 px-7">
                            <div className="p-10 border rounded bg-white shadow my-4">
                                <h4 className="font-semibold text-2xl mb-3 text-gray-700">Mentoring</h4>
                                <p>
                                Each resident will be assigned a mentor to demonstrate how to live a healthy life. Each mentor will only be assigned to one resident. Mentors will go through a training process, and need to spend at least 1 hour each week with the assigned resident. If you would like to become a mentor, please download the PDF below.
                                </p>
                            </div>
                            <div className="p-10 border rounded bg-white shadow my-4">
                                <h4 className="font-semibold text-2xl mb-3 text-gray-700">Volunteer Instructor</h4>
                                <p>
                                Our program gives residents necessary tools to function well in many areas. We will offer instruction in life skills, (relationships, parenting, hygiene, cooking, shopping, etc.), financial skills, job skills, and spirituality. If you would like to teach residents the skills listed above, please download the PDF below.
                                </p>
                            </div>
                            <div className="p-10 border rounded bg-white shadow my-4">
                                <h4 className="font-semibold text-2xl mb-3 text-gray-700">Volunteer Work Days</h4>
                                <p>
                                Periodically, we may need help with a project at the houses, or in conjunction with the program. This could include getting a house ready for residents, assisting with fundraising, or raising awareness. If you would like to participate, please download the PDF below.
                                </p>
                            </div>
                            <div className="p-10 border rounded bg-white shadow my-4">
                                <h4 className="font-semibold text-2xl mb-3 text-gray-700">Business Partners For Employment</h4>
                                <p>
                                To help our residents gain employment quickly and sustainably, we are creating partnerships with local businesses. If your business would like to partner with LifeHouse, please contact us, or download the PDF below.
                                </p>
                            </div>
                            <div className="p-10 border rounded bg-white shadow my-4">
                                <h4 className="font-semibold text-2xl mb-3 text-gray-700">Other</h4>
                                <p>
                                If you have other ideas about how you would like to support our program, let us know on the back of the PDF form, located at the bottom of this page.
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-center mt-10">
                            <a
                                target="_blank"
                                href="/forms/volunteer-interest.pdf" 
                                className="flex flex-col items-center mx-4"
                            >
                                <img src="https://static.wixstatic.com/media/40d80b8089c8418a961cb75d96d491f7.png"/>
                                <p className="text-gray-800 font-light text-lg text-center mt-2">Volunteer Interest Form</p>
                            </a>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}