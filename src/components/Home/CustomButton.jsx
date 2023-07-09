import React from 'react'

const CustomButton = ({ onClick, title, type, size }) => {
    if (type == 'sub') {
        return (
            <button
                className={`px-4 py-2.5 bg-white rounded-lg shadow border border-gray-300 justify-center items-center gap-2 flex ${size == 'expand' ? 'flex-auto' : ''} hover:bg-gray-100 transition`}
                type='button'
                onClick={onClick}
            >
                <span className='text-zinc-900 text-opacity-80 text-[14px] font-semibold leading-tight'>
                    {title}
                </span>
            </button>
        )
    }
    return (
        <button
            className={`px-4 py-2.5 bg-violet-500 rounded-lg shadow border border-violet-500 justify-center items-center gap-2 flex ${size == 'expand' ? 'flex-auto' : ''} hover:bg-violet-600 transition`}
            type='button'
            onClick={onClick}
        >
            <span className='text-white text-[14px] font-semibold leading-tight'>
                {title}
            </span>
        </button>
    )
}

export default CustomButton