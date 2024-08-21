import React from 'react'

export default function MenuItem() {
    return (
        <button
            className='border-2 border-teal-400 hover:bg-teal-200 p-3 text-lg rounded-lg flex justify-between w-full'
        >
            <p>Nombre</p>
            <p className='font-black'>Precio</p>
        </button>
    )
}
