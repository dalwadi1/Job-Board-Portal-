import React from 'react'
import { useSelector } from 'react-redux'

const Jobs = () => {
    const { jobs, loading } = useSelector((state) => state.jobs || null)
    console.log(jobs, "ll");

    return (
        <div className='w-full h-full flex flex-col overflow-hidden'>
            <div className='flex flex-col gap-3 items-center justify-center bg-gradient-to-br from-[#6C47FF] to-[#FF6B9D] p-4'>
                <h4 className='text-white font-semibold text-2xl'>Find your perfect role</h4>
                <p className='text-sm text-gray-300'>Showing {jobs?.length} jobs across all categories</p>
            </div>

            <div className='flex flex-1 overflow-hidden min-h-0'>
                <div className='w-64 py-5 px-3 overflow-y-auto min-h-0 border-r'>
                    <div className='py-2'>
                        <h3 className="font-semibold mb-3">Job type</h3>
                        <div className="space-y-2 text-sm flex flex-col px-4">
                            <label><input type="checkbox" className="mr-2" /> Full Time</label>
                            <label><input type="checkbox" className="mr-2" /> Part Time</label>
                            <label><input type="checkbox" className="mr-2" /> Contract</label>
                        </div>
                    </div>
                    <div className='py-2'>
                        <h3 className="font-semibold mb-3">Job type</h3>
                        <div className="space-y-2 text-sm flex flex-col px-4">
                            <label><input type="checkbox" className="mr-2" /> Full Time</label>
                            <label><input type="checkbox" className="mr-2" /> Part Time</label>
                            <label><input type="checkbox" className="mr-2" /> Contract</label>
                        </div>
                    </div>
                    <div className='py-2'>
                        <h3 className="font-semibold mb-3">Job type</h3>
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
                    <div className='py-2'>
                        <h3 className="font-semibold mb-3">Category</h3>
                        <div className="space-y-2 text-sm flex flex-col px-4">
                            <label><input type="checkbox" className="mr-2" /> Full Time</label>
                            <label><input type="checkbox" className="mr-2" /> Part Time</label>
                            <label><input type="checkbox" className="mr-2" /> Contract</label>
                        </div>
                    </div>
                </div>

                <div className='flex-1 p-5 overflow-y-auto min-h-0 bg-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-2'>
                    {
                        jobs?.length === 0 ? <div></div> : jobs?.map((records) => <div key={records?.id} className='flex flex-col gap-3 outline rounded-2xl py-3 px-3'>
                            <div className='flex gap-3'>
                                <h3
                                    className={`p-2 px-5 text-center rounded-lg text-white bg-gray-200
                                        }`}
                                >
                                    {records?.companyLogo}
                                </h3>
                                <div className='flex flex-col items-center justify-center'>
                                    <h4 className='text-sm'>{records?.title}</h4>
                                    <p className='text-sm'>{records?.company} -{records?.location}</p>
                                </div>
                            </div>
                            <div className='flex gap-2'>
                                <span class="inline-flex items-center rounded-md bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-400 inset-ring inset-ring-indigo-400/30">{records?.type}</span>
                                {/* <span class="inline-flex items-center rounded-md bg-purple-400/10 px-2 py-1 text-xs font-medium text-purple-400 inset-ring inset-ring-purple-400/30">Remote</span>
                                <span class="inline-flex items-center rounded-md bg-pink-400/10 px-2 py-1 text-xs font-medium text-pink-400 inset-ring inset-ring-pink-400/20">Frontend</span> */}
                            </div>
                            <hr />
                            <div className='flex items-center justify-between'>
                                <h5>{records?.salary}</h5>
                                <button className="px-6 py-2 rounded-lg text-white font-medium bg-gradient-to-r from-[#6C47FF] to-[#FF6B9D] hover:opacity-90 transition duration-300">
                                    Apply Now
                                </button>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Jobs


