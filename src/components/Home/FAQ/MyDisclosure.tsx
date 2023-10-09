'use client'
import React from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import {BiPlus} from 'react-icons/bi'

const MyDisclosure = () => {
  return (
    <Disclosure >
      {({ open }) => (
        <>
         <Disclosure.Button className={`w-full   ${ open ? 'border-b-none' : 'border-borderline2 border-b pb-[0.56rem]' } transition-all duration-75 ease-in flex items-end justify-between gap-x-4 `}>
         <h4 className='text-left font-primary text-xs'>Can I work on a project i started before the hackathon?</h4>
         <BiPlus className='text-highlighttxt text-xl' />
         </Disclosure.Button>
         <Transition 
            enter='transition duration-500 ease-out'
            enterFrom='h-0 opacity-0'
            enterTo='h-auto opacity-1'
         >
          <Disclosure.Panel className={`font-primary text-xs pl-4 border-b border-b-borderline2 pb-2 o `}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptatibus, voluptates harum at officia, consectetur quaerat inventore cupiditate amet, autem et placeat doloribus a molestiae iusto debitis optio quis maiores!
          </Disclosure.Panel>
         </Transition>
         
        </>
      )}
      
    </Disclosure>
  )
}

export default MyDisclosure