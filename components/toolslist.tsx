import Image from "next/image"
import Link from "next/link"

/* This example requires Tailwind CSS v2.0+ */
const posts = [
    {
        title: 'Chainlist',
        href: 'https://chainlist-real-valorizado.vercel.app/',
        description:
            'Adicione facilmente uma rede RPC em sua Wallet. Chainlist é uma lista de redes EVM (Virtual Machines do Ethereum). Os usuários podem usar os links para conectar suas carteiras Web3 como a Metamask.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        imageUrl: '/chainlist.jpg',
    },
    {
        title: 'DeFi Valorizado',
        href: '#',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
        date: 'Mar 10, 2020',
        datetime: '2020-03-10',
        imageUrl: '/trading-valorizado.jpg',
    },
    {
        title: 'Trading Valorizado',
        href: '/tradingvalorizado',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
        date: 'Feb 12, 2020',
        datetime: '2020-02-12',
        imageUrl: '/trading-valorizado.jpg',
    },
]

export default function ToolsList() {
    return (
        <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            <div className="absolute inset-0">
                <div className="bg-white h-1/3 sm:h-2/3" />
            </div>
            <div className="relative max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Ferramentas Financeiras</h2>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                        Ferramentas analiticas para acompanhar o mercado de forma profissional.
                    </p>
                </div>
                <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                    {posts.map((post) => (

                        <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden group">
                            <>
                                <div className="flex-shrink-0">
                                    <div className="h-64 w-full relative">
                                        <Image
                                            src={post.imageUrl}
                                            layout="fill"
                                            objectFit="cover"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                    <div className="flex-1">
                                        <Link href={post.href}>
                                            <a target="_blank" className="block mt-2">
                                                <p className="text-2xl font-bold text-blue-700">{post.title}</p>
                                                <p className="mt-3 text-base text-gray-500">{post.description}</p>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}