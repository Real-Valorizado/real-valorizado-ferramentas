
import Head from "next/head"
import AdvanceRealTimeChart from "../components/advancetimechart"



export default function TradingView() {
    return (
        <div>
            <Head>
                <title>Calculadora de juros composto | ferramentas.realvalorizado.com.br</title>
                <meta
                    name='description'
                    content='Uma maneira fácil de calcular juros compostos para poupança de aposentadoria, amortizações de empréstimos. Coisas assim.'
                />
                <meta property='og:type' content='article' />
                <meta
                    property='og:title'
                    content='Calculadora de juros composto | ferramentas.realvalorizado.com.br'
                />
                <meta
                    property='og:description'
                    content='Uma maneira fácil de calcular juros compostos para poupança de aposentadoria, amortizações de empréstimos. Coisas assim.'
                />
                <meta property='og:url' content='https://ferramentas.realvalorizado.com.br/calculadora' />
                <meta property='og:site_name' content='ferramentas.realvalorizado.com.br' />

                <link rel='icon' href='/favicon.ico' />

            </Head>
            <main>
                <AdvanceRealTimeChart />
            </main>
        </div>
    )
}

