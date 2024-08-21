import React from 'react'

export default function OrderContents() {
    return (
        <div>
            <h2 className='font-black text-4xl'>Consumo</h2>
            <div className='space-y-3 mt-10'>
                <div className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b">
                    <div>
                        <p className="text-lg">HOLA</p>
                        <p className="font-black">
                            Cantidad: -
                        </p>
                    </div>
                    <button
                        className="bg-red-600 h-8 w-8 rounded-full text-white">
                        X
                    </button>
                </div>
            </div>
        </div>
    )
}
