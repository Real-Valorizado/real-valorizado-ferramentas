import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const navigation = [
    { name: 'Chainlist', href: 'https://chainlist.realvalorizado.com.br/' },
    { name: 'Simulador de Juros', href: '/simulador' },
    { name: 'Trading Valorizado', href: '/tradingvalorizado' },
]

export default function Navbar() {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.png" />

                <script dangerouslySetInnerHTML={{
                    __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                            })(window,document,'script','dataLayer','GTM-PFLF854');`}}>
                </script>

                <meta name="facebook-domain-verification" content="arl1msjfciwvbgn882b41tjw8l62my" />

            </Head>
            <header className="bg-blue-700">
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
                    <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
                        <div className="flex items-center">
                            <Link href="./">
                                <a>
                                    <span className="sr-only">Real Valorizado</span>
                                    <Image
                                        className="w-auto"
                                        src="/real-valorizado-logo.png"
                                        alt="Real Valorizado"
                                        width="156"
                                        height="50"
                                    />
                                </a>
                            </Link>
                            <div className="hidden ml-10 space-x-8 lg:block">
                                {navigation.map((link) => (
                                    <Link key={link.name} href={link.href} >
                                        <a className="text-base font-medium text-white hover:text-indigo-50">
                                            {link.name}
                                        </a>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="ml-10 space-x-4">
                            <Link href="https://realvalorizado.com.br">
                                <a target="_blank" className="inline-block bg-slate-800 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75">
                                    Site principal
                                </a>
                            </Link>
                            <Link href="https://realvalorizado.com.br/noticias">
                                <a target="_blank" className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50">
                                    Notícias
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
                        {navigation.map((link) => (
                            <Link key={link.name} href={link.href}>
                                <a className="text-base font-medium text-white hover:text-indigo-50">
                                    {link.name}
                                </a>
                            </Link>
                        ))}
                    </div>
                </nav>
            </header>
        </div>
    )
}