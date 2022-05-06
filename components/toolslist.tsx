import Image from "next/image"
import Link from "next/link"

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

                    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <div className="flex-shrink-0">
                            <div className="h-64 w-full relative">
                                <Image
                                    src="/tools/chainlist.jpg"
                                    layout="fill"
                                    objectFit="cover"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                            <div className="flex-1">
                                <Link href='https://chainlist.realvalorizado.com.br/'>
                                    <a target="_blank" className="block mt-2">
                                        <p className="text-2xl font-bold text-blue-700">Chainlist</p>
                                        <p className="mt-3 text-base text-gray-500">Adicione facilmente uma rede RPC em sua Carteira. Chainlist é uma lista de blockchains EVM os usuários podem usar os links para conectar suas carteiras web3.</p>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <div className="flex-shrink-0">
                            <div className="h-64 w-full relative">
                                <Image
                                    src="/tools/calculadora.jpg"
                                    layout="fill"
                                    objectFit="cover"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                            <div className="flex-1">
                                <Link href='/calculadora'>
                                    <a className="block mt-2">
                                        <p className="text-2xl font-bold text-blue-700">Calculadora de juros</p>
                                        <p className="mt-3 text-base text-gray-500">Uma maneira fácil de calcular juros compostos para investimentos, poupança de aposentadoria, amortizações de empréstimos. Coisas assim.</p>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <div className="flex-shrink-0">
                            <div className="h-64 w-full relative">
                                <Image
                                    src="/tools/trading-valorizado.jpg"
                                    layout="fill"
                                    objectFit="cover"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                            <div className="flex-1">
                                <Link href='/tradingvalorizado'>
                                    <a className="block mt-2">
                                        <p className="text-2xl font-bold text-blue-700">Trading Valorizado</p>
                                        <p className="mt-3 text-base text-gray-500">Acompanhe o preço em tempo real de diversos ativos do mercado, como ações, criptomoedas, forex e commodietes, em um gráfico intuitivo e completo.</p>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}