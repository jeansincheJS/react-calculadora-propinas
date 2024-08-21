import React from 'react'

export default function OrderTotals() {
    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totales y Propina</h2>
                <p>Subtotal a pagar: {''}
                    <span className="font-bold">0.00</span>
                </p>
                <p>Propina: {''}
                    <span className="font-bold">0.00</span>
                </p>
                <p>Total a Pagar: {''}
                    <span className='font-bold'>0.00</span>
                </p>
            </div>
            <button
                className='w-full bg-black text-white p-3 uppercase font-bold mt-10 disabled:opacity-10'>
                Guardar Orden
            </button>
        </>
    )
}
