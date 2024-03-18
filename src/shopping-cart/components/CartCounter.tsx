"use client"

import { useAppDispatch, useAppSelector } from '@/store'
import { addOne, substractOne } from '@/store/counter/counterSlice'
import {useState} from 'react'

interface Props {    
    value?: number
}

export const CartCounter = ({value=10}:Props) => {

    //const [count, setCounter] = useState(value)

    const count = useAppSelector(state => state. counter.count)
    const dispatch = useAppDispatch()

    const increment = () => {        
        dispatch(addOne())
    }
    const decrement = () => {
        if(count<1) return

        dispatch(substractOne())
        //setCounter(count - 1)
    }


  return (
    <>
    
    <span className="text-9xl">{count}</span>
      <div className="flex">
        <button onClick={increment}
            className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 
            transition-all w-[100px] mr-2 "
        >+1</button>

        <button onClick={decrement}
            className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 
            transition-all w-[100px] mr-2 "
        >-1</button>
      </div>
      </>
  )
}
