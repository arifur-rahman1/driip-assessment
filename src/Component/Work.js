import React, { useEffect, useState } from 'react';
import add from '../Component/Assets/add.png'
import facebook from '../Component/Assets/facebook.png'
import instagram from '../Component/Assets/instagram.png'
import linkedin from '../Component/Assets/linkedin.png'
import twitter from '../Component/Assets/twitter.png'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const Work = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [inputList, setInputList] = useState([]);
    // for image preview
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    }



    const newItem = <>
        <div className=''>
            <div className='grid grid-cols-2 items-center mt-5 mb-12' >
                <div className='flex '> <input type="checkbox" className="checkbox-info mr-3" />
                    <p> I'm currently employed here </p></div>

            </div>
            <div className='grid grid-cols-2 gap-10 '>
                <input type="text" placeholder="Name of organization" className="input input-bordered input-info input-sm max-w-xs" />
                <select type="text" placeholder="Type of industry" className="input input-bordered input-info input-sm w-full max-w-xs" >
                    <option value=" ">Type of industry</option>
                    <option value="Savings Accounts">Banking</option>
                    <option value="Checking Account">IT</option>
                    <option value="Checking Account">Apparel Manufacturing</option>
                    <option value="Checking Account">Other</option>
                </select>
                <input type="text" placeholder="Position" className="input input-bordered input-info input-sm max-w-xs" />
                <select type="text" placeholder="Employment type" className="input input-bordered input-info input-sm w-full max-w-xs" >
                    <option value=" ">Employment type</option>
                    <option value="Savings Accounts">Permanent</option>
                    <option value="Checking Account">Contractual</option>
                    <option value="Checking Account">Other</option>
                </select>
                <div className='grid grid-cols-2 gap-4'>

                    <label className='ml-3'>
                        <span >From</span>
                    </label>
                    <label className='ml-3'>
                        <span>To</span>
                    </label>

                    <DatePicker className="input input-bordered input-info input-sm w-28" placeholder="Start" selected={startDate} onChange={(date) => setStartDate(date)} />

                    <DatePicker className="input input-bordered input-info input-sm w-28" placeholder="Start" selected={endDate} onChange={(date) => setEndDate(date)} />


                </div>
            </div>

        </div>

    </>
    const handleNewItems = () => {
        setInputList(inputList.concat(newItem))
    }



    return (
        <div className='lg:mx-96 my-14'>
            <div className=''>
                <div>
                    <h1 className='font-bold text-2xl mb-8 '>Work experience</h1>
                </div>
                <div className='grid grid-cols-2 gap-10 '>
                    <input type="text" placeholder="Name of organization" className="input input-bordered input-info input-sm max-w-xs" />
                    <select type="text" placeholder="Type of industry" className="input input-bordered input-info input-sm w-full max-w-xs" >
                        <option value=" ">Type of industry</option>
                        <option value="Savings Accounts">Banking</option>
                        <option value="Checking Account">IT</option>
                        <option value="Checking Account">Apparel Manufacturing</option>
                        <option value="Checking Account">Other</option>
                    </select>
                    <input type="text" placeholder="Position" className="input input-bordered input-info input-sm max-w-xs" />
                    <select type="text" placeholder="Employment type" className="input input-bordered input-info input-sm w-full max-w-xs" >
                        <option value=" ">Employment type</option>
                        <option value="Savings Accounts">Permanent</option>
                        <option value="Checking Account">Contractual</option>
                        <option value="Checking Account">Other</option>
                    </select>
                    <div className='grid grid-cols-2 gap-4'>

                        <label className='ml-3'>
                            <span >From</span>
                        </label>
                        <label className='ml-3'>
                            <span>To</span>
                        </label>

                        <DatePicker className="input input-bordered input-info input-sm w-28" placeholder="Start" selected={startDate} onChange={(date) => setStartDate(date)} />

                        <DatePicker className="input input-bordered input-info input-sm w-28" placeholder="Start" selected={endDate} onChange={(date) => setEndDate(date)} />


                    </div>
                </div>
                {inputList}
                <div className='grid grid-cols-2 items-center mt-5' >
                    <div className='flex '> <input type="checkbox" className="checkbox-info mr-3" />
                        <p> I'm currently employed here </p></div>
                    <div className=' flex justify-end '>
                        <button onClick={handleNewItems} className="btn btn-sm btn-info ">
                            <img className='mr-2' src={add} alt="" />
                            <h1 className='font-bold text-white '>Add</h1></button>
                    </div>
                </div>

                {/* first part end */}
                <div>
                    <h1 className='font-bold text-2xl my-16 '>Upload Photo</h1>
                </div>
                <div className='flex items-center'>
                    <div className="avatar">
                        <div className="w-24 rounded bg-base-200">

                            {selectedFile && <img src={preview} alt="" />}
                        </div>
                    </div>
                    <div className='ml-8'>
                        <label class="block">
                            <span class="stone-50"></span>
                            <input type="file" onChange={onSelectFile}
                                className="block w-full text-sm text-stone-50 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-800 file:text-stone-50 " />
                        </label>
                    </div>
                </div>
                {/* last part start */}
                <div>
                    <h1 className='font-extrabold text-center mt-28'>ii</h1>
                    <h1 className='font-bold text-2xl my-6 text-center '>Contact</h1>
                    <p className='text-center mb-12'>For all business and collabaration opportunities</p>
                    <div className='flex justify-center gap-5 mb-16'>
                        <img src={facebook} alt="" />
                        <img src={instagram} alt="" />
                        <img src={twitter} alt="" />
                        <img src={linkedin} alt="" />
                    </div>
                    <p className='text-center'>
                        <small>© 2022 Driip.All rights reserved</small>
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Work;