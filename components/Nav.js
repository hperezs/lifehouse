import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
const transition_styles = "transition-colors duration-300 ease"

export default function Nav() {
    const router = useRouter();

    return(
        <nav style={{maxWidth: "1200px", width: "100%"}} className="flex justify-between items-end text-xl border-b pb-5">
            <Link href="/">
                <a className="cursor-pointer "><img src="/logotransparent.png" width={300} /></a>
            </Link>
            <Link href="/application">
                <a className={"py-3 px-7 font-semibold cursor-pointer rounded " 
                    + transition_styles + (router.asPath == '/application' ? ' bg-blue-900 text-white bg-opacity-90' : ' hover:bg-gray-200')}
                >
                    Get Help
                </a>
            </Link>
            <Link href="/mission">
                <a className={"py-3 px-7 font-semibold cursor-pointer rounded " 
                    + transition_styles + (router.asPath == '/mission' ? ' bg-blue-900 text-white bg-opacity-90' : ' hover:bg-gray-200')}
                >
                Learn More
                </a>
            </Link>
            <Link href="/volunteer">
                <a className={"py-3 px-7 font-semibold cursor-pointer rounded " 
                    + transition_styles + (router.asPath == '/volunteer' ? ' bg-blue-900 text-white bg-opacity-90' : ' hover:bg-gray-200')}
                >
                    Volunteer
                </a>
            </Link>
            <a 
                target="_blank"
                href="https://www.paypal.com/donate?token=1R2Lidb7KVUCxuKa8_8J0-6Z3hN_2vUjBMkI5rLb6VJJU3gX4_lm0A8EQKl_zlbfEkGGwAF5Wa1j0Rqt" 
                className={"py-3 px-7 font-semibold cursor-pointer rounded-full tracking-wider bg-yellow-400 hover:bg-yellow-500 " + transition_styles}
            >
                Donate
            </a>
        </nav>
    )
}