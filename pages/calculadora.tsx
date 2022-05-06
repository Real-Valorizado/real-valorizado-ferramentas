import React, { useState } from 'react'
import { CalcCtx } from '../context/CalcValueContext'
import { GraphCtx } from '../context/GraphDataContext'
import { CalcProps, GraphProps } from '../types'
import Head from 'next/head'
import Form from '../components/Form'
import Graph from '../components/Graph'
import Table from '../components/Table'



export default function Calculadora() {
    const initialCalcProps: CalcProps = {
        initial: 1000,
        payment: 1000,
        paymentFrequency: 'monthly',
        interest: 10,
        compoundFrequency: 'yearly',
        years: 10
    }

    const initialGraphProps: GraphProps = {
        values: []
    }

    const [calcCtx, setCalcCtx] = useState(initialCalcProps)
    const [graphCtx, setGraphCtx] = useState(initialGraphProps)

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
                <div className='mt-24 mb-12'>


                    <div className="text-center">
                        <h2 className="text-5xl tracking-tight font-extrabold text-blue-700 sm:text-4xl">Calculadora de juros composto</h2>
                        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                            Invista seu dinheiro e veja-o crescer ao longo do tempo. Falamos de juros sobre juros sobre juros.
                        </p>
                    </div>
                    <CalcCtx.Provider value={[calcCtx, setCalcCtx]}>
                        <GraphCtx.Provider value={[graphCtx, setGraphCtx]}>
                            <Form />
                            <Graph />
                            <Table />
                        </GraphCtx.Provider>
                    </CalcCtx.Provider>
                </div>


            </main>
        </div>
    )
}
