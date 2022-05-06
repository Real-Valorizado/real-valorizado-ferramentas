import Link from 'next/link';
import React, { useContext } from 'react';
import { GraphCtx } from '../context/GraphDataContext';
import { formatMoney } from '../helpers';

export default function Table() {
  const [graphCtx, setGraphCtx] = useContext(GraphCtx);

  if (graphCtx.values.length === 0) return null;

  return (
    <div className="max-w-7xl mx-auto">
      <div className='mt-8'>
        <h2 className='text-base font-semibold tracking-wider text-blue-700 uppercase text-center'>
          Visão geral
        </h2>
        <p className='mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl text-center'>
          Seu rendimento ano a ano
        </p>
        <div className='flex flex-col mt-10 bg-gray-50 rounded-xl p-6'>
          <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
            <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
              <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
                <table className='min-w-full divide-y divide-gray-200'>
                  <thead className='bg-blue-100'>
                    <tr>
                      <th
                        scope='col'
                        className='px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider'
                      >
                        Ano
                      </th>
                      <th
                        scope='col'
                        className='px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider'
                      >
                        Investimento
                      </th>
                      <th
                        scope='col'
                        className='px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider'
                      >
                        Ganho com juros
                      </th>
                      <th
                        scope='col'
                        className='px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider'
                      >
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {graphCtx.values.map((item) => (
                      <tr
                        key={item.year}
                        className={
                          item.year % 2 === 0 ? 'bg-white' : 'bg-blue-50'
                        }
                      >
                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                          {item.year}
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                          {formatMoney(item.totalPayment.toFixed(2))}
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                          {formatMoney(item.totalInterest.toFixed(2))}
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                          {formatMoney(item.totalMoney.toFixed(2))}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center'>
        <Link href="#form">
          <button
            className='mt-4 sm:mt-12 inline-flex bg-blue-700 bg-origin-border px-6 py-3 font-bold text-lg rounded-3xl shadow-sm text-white hover:bg-blue-900 transition duration-700 ease-in-out'
          >
            <span>Calcular novamente</span>
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
