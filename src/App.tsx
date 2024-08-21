import { useState } from 'react'
import MenuItem from './components/MenuItem';
import OrderContents from './components/OrderContents';
import TipPercentageForm from './components/TipPercentageForm';
import OrderTotals from './components/OrderTotals';

function App() {

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de Propinas y Consumo</h1>
      </header>
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className='p-5'>
          <h2 className='font-black text-4xl'>Menu</h2>
          <div className='mt-10 space-y-3'>
            <MenuItem />
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          <OrderContents />
          <TipPercentageForm />
          <OrderTotals />
        </div>
      </main>
    </>
  )
}

export default App
