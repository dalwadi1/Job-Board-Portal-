import { Search } from 'lucide-react'
import React from 'react'

const Companies = () => {
    return (
        <div className='w-full h-full flex flex-col'>
            <div className='flex flex-col gap-3 items-center justify-center bg-gradient-to-br from-[#6C47FF] to-[#FF6B9D] p-2'>
                <h3 className='text-2xl text-white font-bold'>Explore top companies</h3>
                <p className='text-gray-300'>Find the company that matches your culture and goals</p>

                <div className="relative w-full sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[30%]">

                    <input
                        type="text"
                        placeholder="job title, company, skills"
                        className="w-full bg-white px-10 py-2 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#6C47FF]"
                    />

                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />

                </div>
            </div>

            <div className='flex flex-1 min-h-0'>
                <div className='w-64 py-5 px-3 overflow-y-auto'>
                    <div className='py-2'>
                        <h3 className="font-semibold mb-3">Industry</h3>
                        <div className="space-y-2 text-sm flex flex-col px-4">
                            <label><input type="checkbox" className="mr-2" /> Full Time</label>
                            <label><input type="checkbox" className="mr-2" /> Part Time</label>
                            <label><input type="checkbox" className="mr-2" /> Contract</label>
                        </div>
                    </div>
                    <div className='py-2'>
                        <h3 className="font-semibold mb-3">Company size</h3>
                        <div className="space-y-2 text-sm flex flex-col px-4">
                            <label><input type="checkbox" className="mr-2" /> Full Time</label>
                            <label><input type="checkbox" className="mr-2" /> Part Time</label>
                            <label><input type="checkbox" className="mr-2" /> Contract</label>
                        </div>
                    </div>
                    <div className='py-2'>
                        <h3 className="font-semibold mb-3">Location</h3>
                        <div className="space-y-2 text-sm flex flex-col px-4">
                            <label><input type="checkbox" className="mr-2" /> Full Time</label>
                            <label><input type="checkbox" className="mr-2" /> Part Time</label>
                            <label><input type="checkbox" className="mr-2" /> Contract</label>
                        </div>
                    </div>
                </div>

                <div className='bg-gray-300 w-full flex-1 py-5 overflow-y-auto'>
                    <div className='py-2 grid grid-cols-1 sm:grid-cols-3 gap-3 px-3'>
                        <div className='flex flex-col gap-3 outline rounded-2xl py-3 px-3 cursor-pointer'>
                            <div className='flex gap-3'>
                                <h3 className='p-2 px-5 text-center rounded-lg bg-[#00C2CB]'>G</h3>
                                <div className='flex flex-col items-start justify-center'>
                                    <h4 className='text-sm'>Google</h4>
                                    <p className='text-sm'>tech -Banglore</p>
                                </div>
                            </div>
                            <hr />
                            <div className='flex items-center justify-between px-5'>
                                <div className='text-center'>
                                    <h5>10K+</h5>
                                    <p>Employees</p>
                                </div>
                                <div className='text-center'>
                                    <h5>1998</h5>
                                    <p>Founded</p>
                                </div>
                                <div className='text-center'>
                                    <span class="inline-flex items-center rounded-md bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-400 inset-ring inset-ring-indigo-400/30">12 jobs</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-3 outline rounded-2xl py-3 px-3 cursor-pointer'>
                            <div className='flex gap-3'>
                                <h3 className='p-2 px-5 text-center rounded-lg bg-[#00C2CB]'>G</h3>
                                <div className='flex flex-col items-start justify-center'>
                                    <h4 className='text-sm'>Google</h4>
                                    <p className='text-sm'>tech -Banglore</p>
                                </div>
                            </div>
                            <hr />
                            <div className='flex items-center justify-between px-5'>
                                <div className='text-center'>
                                    <h5>10K+</h5>
                                    <p>Employees</p>
                                </div>
                                <div className='text-center'>
                                    <h5>1998</h5>
                                    <p>Founded</p>
                                </div>
                                <div className='text-center'>
                                    <span class="inline-flex items-center rounded-md bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-400 inset-ring inset-ring-indigo-400/30">12 jobs</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Companies
