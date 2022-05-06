import Head from 'next/head'
import ToolsList from '../components/toolslist'


export default function Home() {
  return (
    <div>

      <Head>
        <title>Ferramentas Real Valorizado</title>
        <meta
          name='description'
          content='Uma complicação das melhores ferramentas para o mercado financeiro'
        />
        <meta property='og:type' content='article' />
        <meta
          property='og:title'
          content='Real Valorizado Ferramentas | Uma complicação das melhores ferramentas para o mercado financeiro'
        />
        <meta
          property='og:description'
          content='Uma complicação das melhores ferramentas para o mercado financeiro'
        />
        <meta property='og:url' content='https://ferramentas.realvalorizado.com.br' />
        <meta property='og:site_name' content='ferramentas.realvalorizado.com.br' />

      </Head>

      <main>
        <ToolsList />
      </main>

    </div>
  )
}


