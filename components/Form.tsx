import React, { useContext, useEffect } from 'react'
import Text from './Text'
import DropDown from './DropDown'
import { CalcCtx } from '../context/CalcValueContext'
import { GraphCtx } from '../context/GraphDataContext'
import { GraphItem } from '../types'
import Link from 'next/link'

export default function Form() {
  const [calcCtx, setCalcCtx] = useContext(CalcCtx)
  const [graphCtx, setGraphCtx] = useContext(GraphCtx)

  useEffect(() => {
    buildGraphData();
  }, [])

  const Rate = (
    interest: number,
    payment: number,
    compoundFrequency: number
  ): number => {
    return (
      Math.pow(1 + interest / compoundFrequency, compoundFrequency / payment) -
      1
    )
  }

  const nPer = (payment: number, years: number): number => {
    return payment * years
  }

  const FV = (
    initial: number,
    interest: number,
    nper: number,
    payment: number
  ): number => {
    return (
      initial * Math.pow(1 + interest, nper) +
      (payment * (Math.pow(1 + interest, nper) - 1)) / interest
    )
  }

  function* Calculate(): IterableIterator<GraphItem> {
    const frequencyMap = {
      monthly: 12,
      quarterly: 4,
      semiannual: 2,
      yearly: 1
    };

    const {
      initial,
      payment,
      years
    } = calcCtx;

    let {
      compoundFrequency,
      paymentFrequency,
      interest
    } = calcCtx;

    paymentFrequency = frequencyMap[paymentFrequency];
    compoundFrequency = frequencyMap[compoundFrequency];
    interest = interest / 100;

    const rate = Rate(interest, paymentFrequency, compoundFrequency);
    let fv = 0;

    for (let i = 1; i <= years; i++) {
      const nper = nPer(paymentFrequency, i);

      fv = FV(initial, rate, nper, payment);

      const totalPayments = payment * nper + initial;
      const totalInterest = fv - totalPayments;
      const graphItem: GraphItem = {
        year: i,
        totalPayment: totalPayments,
        totalInterest: totalInterest,
        totalMoney: fv
      };

      yield graphItem;
    }

    return fv
  }

  const buildGraphData = () => {
    const graph: GraphItem[] = []

    for (const amount of Calculate()) {
      graph.push(amount)
    }

    setGraphCtx({ values: graph })
  }

  return (
    <div className="relative bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8" id="form">

      <div className="relative max-w-7xl mx-auto">
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-4 lg:max-w-none">

          <div className='relative block border rounded-lg p-4 shadow col-span-1'>
            <span className='block text-lg mb-1 text-center'>Eu tenho</span>
            <div className="text-center">
              <Text
                defaultValue={{ name: 'initial', value: calcCtx.initial }}
                increment={1000}
                type='money'
                bounds={{ min: 0, max: 999999999 }}
              />
            </div>
            <span className='block text-lg mt-2 text-center'>para o investimento inicial</span>
          </div>

          <div className='relative block border rounded-lg p-4 shadow col-span-1'>
            <span className='block text-lg mb-1 text-center'>Irei investir mais</span>
            <div className="text-center">
              <Text
                defaultValue={{ name: 'payment', value: calcCtx.payment }}
                increment={1000}
                type='money'
                bounds={{ min: 0, max: 999999 }}
              />
            </div>
            <span className='block text-lg mt-2 text-center'>
              todo{' '}
              <DropDown
                text='mês'
                property='paymentFrequency'
                fields={[
                  { value: 'monthly', label: 'mês' },
                  { value: 'yearly', label: 'ano' }
                ]}
              />
            </span>
          </div>

          <div className='relative block border rounded-lg p-4 shadow col-span-1'>
            <span className='block text-lg mb-1 text-center'>Irei ganhar</span>
            <div className="text-center">
              <Text
                defaultValue={{ name: 'interest', value: calcCtx.interest }}
                increment={1}
                type='percent'
                showArrows={true}
                bounds={{ min: 0.01, max: 45 }}
              />
            </div>
            <span className='block text-lg mt-2 text-center'>
              com juros por{' '}
              <DropDown
                text='ano'
                property='compoundFrequency'
                fields={[
                  { value: 'monthly', label: 'mês' },
                  { value: 'quarterly', label: 'trimestre' },
                  { value: 'semiannual', label: 'semestre' },
                  { value: 'yearly', label: 'ano' }
                ]}
              />
            </span>
          </div>

          <div className='relative block border rounded-lg p-4 shadow col-span-1'>
            <span className='block text-lg mb-1 text-center'>Vou investir por</span>
            <div className="text-center">
              <Text
                defaultValue={{ name: 'years', value: calcCtx.years }}
                increment={1}
                type='year'
                showArrows={true}
                bounds={{ min: 1, max: 100 }}
              />
            </div>
            <span className='block text-lg mt-2 text-center'>
              anos meu dinheiro.
            </span>
          </div>

        </div>
      </div>

      <div className='text-center'>
        <Link href="#graph">
          <button
            onClick={buildGraphData}
            className='mt-4 sm:mt-12 inline-flex bg-blue-700 bg-origin-border px-6 py-3 font-bold text-lg rounded-3xl shadow-sm text-white hover:bg-blue-900 transition duration-700 ease-in-out'
          >
            <span>Calcular retorno</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 m-1'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
              />
            </svg>
          </button>
        </Link>
      </div>

    </div>
  )
}
