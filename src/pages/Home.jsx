import React, { useEffect } from 'react'
import Hero from './Hero'
import { Component, MonitorCheck, Settings, TabletSmartphone } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { getJobs } from '../features/actions/jobs.action'

const Home = () => {

    return (
        <div className=''>
            <Hero />
            <div className='max-w-[91vw] mx-auto py-2'>
                <h2 className='font-semibold'>Browse by category</h2>

                <div className='py-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
                    <div className='flex hover:outline-2 hover:outline-indigo-400 outline-2 outline-gray-400 flex-col items-center justify-center gap-2 text-center outline rounded-2xl py-2 cursor-pointer'>
                        <MonitorCheck size={25} />
                        <h4 className='text-sm'>Frontend</h4>
                        <p className='text-gray-300'>320 jobs</p>
                    </div>

                    <div className='flex flex-col hover:outline-2 hover:outline-indigo-400 outline-2 outline-gray-400 items-center gap-2 text-center outline rounded-2xl py-2 justify-center cursor-pointer'>
                        <Settings size={25} />
                        <h4 className='text-sm'>Backend</h4>
                        <p className='text-gray-300'>100 jobs</p>
                    </div>

                    <div className='flex flex-col hover:outline-2 hover:outline-indigo-400 outline-2 outline-gray-400 items-center gap-2 text-center outline rounded-2xl py-2 justify-center cursor-pointer'>
                        <TabletSmartphone size={25} />
                        <h4 className='text-sm'>Mobile</h4>
                        <p className='text-gray-300'>280 jobs</p>
                    </div>

                    <div className='flex flex-col hover:outline-2 hover:outline-indigo-400 outline-2 outline-gray-400 items-center gap-2 text-center outline rounded-2xl py-5 cursor-pointer'>
                        <Component size={25} />
                        <h4 className='text-sm'>Design</h4>
                        <p className='text-gray-300'>140 jobs</p>
                    </div>

                </div>

                <h2 className='font-semibold'>Featured jobs</h2>

                <div className='py-2 grid grid-cols-1 sm:grid-cols-2 gap-3'>
                    <div className='flex flex-col gap-3 outline rounded-2xl py-3 px-3'>
                        <div className='flex gap-3'>
                            <h3 className='p-2 px-5 text-center rounded-lg bg-[#00C2CB]'>G</h3>
                            <div className='flex flex-col items-center justify-center'>
                                <h4 className='text-sm'>React Developer</h4>
                                <p className='text-sm'>Google -Remote</p>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <span class="inline-flex items-center rounded-md bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-400 inset-ring inset-ring-indigo-400/30">Full-time</span>
                            <span class="inline-flex items-center rounded-md bg-purple-400/10 px-2 py-1 text-xs font-medium text-purple-400 inset-ring inset-ring-purple-400/30">Remote</span>
                            <span class="inline-flex items-center rounded-md bg-pink-400/10 px-2 py-1 text-xs font-medium text-pink-400 inset-ring inset-ring-pink-400/20">Frontend</span>
                        </div>
                        <hr />
                        <div className='flex items-center justify-between'>
                            <h5>15 LPA</h5>
                            <button className="px-6 cursor-pointer py-2 rounded-lg text-white font-medium bg-gradient-to-r from-[#6C47FF] to-[#FF6B9D] hover:opacity-90 transition duration-300">
                                Apply Now
                            </button>
                        </div>
                    </div>

                    <div className='flex flex-col gap-3 outline rounded-2xl py-3 px-3'>
                        <div className='flex gap-3'>
                            <h3 className='p-2 px-5 text-center rounded-lg bg-[#00C2CB]'>F</h3>
                            <div className='flex flex-col items-center justify-center'>
                                <h4 className='text-sm'>Node.js Engineer</h4>
                                <p className='text-sm'>Flipcart -Banglore</p>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <span class="inline-flex items-center rounded-md bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-400 inset-ring inset-ring-indigo-400/30">Full-time</span>
                            <span class="inline-flex items-center rounded-md bg-purple-400/10 px-2 py-1 text-xs font-medium text-purple-400 inset-ring inset-ring-purple-400/30">Backend</span>
                        </div>
                        <hr />
                        <div className='flex items-center justify-between'>
                            <h5>15 LPA</h5>
                            <button className="px-6 py-2 cursor-pointer rounded-lg text-white font-medium bg-gradient-to-r from-[#6C47FF] to-[#FF6B9D] hover:opacity-90 transition duration-300">
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
