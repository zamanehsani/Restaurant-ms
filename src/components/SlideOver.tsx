import { Fragment, useContext } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon,ChevronDoubleUpIcon,ChevronDoubleDownIcon} from '@heroicons/react/24/outline'
import { context } from './context/Context'
import { itemType } from '../menu-list'

const calTotal =(items:itemType[]):number=>{
  let total  = 0;
  items.map(itm=>{
    total += (itm.price * itm.quantity)
  })
  // return total with two decimal places
  return Math.round((total + Number.EPSILON) * 100) / 100
}


export default function SlideOver(a:{open:boolean, click:any}) {
    const {items,dispatch} = useContext(context)
    const total = calTotal(items)

    const handleIncrement = (id:number)=>{
      dispatch({ type: 'increment', payload: id });
    }

    const handleDecrement = (id:number)=>{
        dispatch({ type: 'decrement', payload:id });
    }
    const handleRemove = (id:number)=>{
        dispatch({ type: 'remove', payload: id });
    }
  return (
    <Transition.Root show={a.open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={a.click}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-[30%]">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                      {/* <button
                        type="button"
                        className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={a.click}
                      >
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button> */}
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl font-serif">
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className="text-lg font-medium text-gray-900">Choosen Items</Dialog.Title>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      {/* Replace with your content */}
                      <div className="absolute inset-0 px-4 sm:px-6">
                        
                        {/* <div className="h-full border-2 border-dashed border-gray-200" aria-hidden="true" /> */}
                       
                       <ul className="h-[95%] p-2 overflow-y-auto border-2 mb-2 border-dashed border-gray-200">
                          <li className=' container grid grid-cols-3'>
                              <p className=''>Name</p>
                              <p className=''>Price</p>
                              <p className=''>Quantity</p>
                          </li>
                        {items.map((i,key)=> (
                          <li 
                          className='container grid grid-cols-3 border border-dark p-2 my-2' 
                          key={key}>
                            <p>{i.name}</p> 
                            <p>{i.price}</p> 
                            <div className="flex justify-center">
                              <span onClick={()=>handleIncrement(i.id)}
                              className="bg-blue-600 text-white font-bold p-2 pt-3"> 
                                  <ChevronDoubleUpIcon className="h-4 w-4" />
                              </span>
                              <span className=" bg-white p-2 ">{i.quantity}</span>
                              <span  onClick={()=>handleDecrement(i.id)}
                              className="bg-red-600  text-white font-bold p-2  pt-3"> 
                                  <ChevronDoubleDownIcon className="h-4 w-4 " />
                              </span>
                              <span className='bg-red-600 text-white ml-1 font-bold p-2 pt-3'>
                                  <XMarkIcon onClick={()=>handleRemove(i.id)}
                                  className="h-4 w-4 " />
                              </span>
                          </div>
                          </li>
                        ))}
                       </ul>
                       <span className='font-bold'>Total: {total}</span>
                       <button className='px-6 py-2 bg-blue-500 text-white float-right'>Next</button>
                      </div>
                      {/* /End replace */}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
