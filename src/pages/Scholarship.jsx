import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const Scholarship = () => {

return (
    <>
        <Navbar />

        <div className="w-full mx-auto px-4 py-8 my-32">
            <div className=" mx-auto px-4 py-8 text-center">

                <h1 className="text-3xl font-bold mb-4 ">Scholarship Notice :</h1>
                
                <span className='text-lg font-semibold text-blue-900'><a href="https://mahadbt.maharashtra.gov.in/login/login" className='hover:text-blue-500 hover:underline' target="_blank" rel="noopener noreferrer">
                ☛ For all types of Scholarships Visit portal</a></span>
                <hr className='my-5'/>

                <h3 className="text-xl font-bold mt-8 mb-2">Admission Scholarship Information</h3>

                <table className="w-full table-auto text-left text-gray-700 ">
                    <thead>
                        <tr className="bg-gray-200 text-sm font-medium">
                            <th className="px-4 py-2">Sr. No</th>
                            <th className="px-4 py-2">Notice (Click to download document)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b hover:bg-gray-100">
                            <td className="px-4 py-2">1</td>
                            <td className="px-4 py-2">
                                <a href="https://example.com/document1.pdf" className='hover:text-blue-500 hover:underline' target="_blank" rel="noopener noreferrer">
                                    Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Yojna (EBC).
                                </a>
                            </td>
                        </tr>
                        <tr className="border-b hover:bg-gray-100">
                            <td className="px-4 py-2">2</td>
                            <td className="px-4 py-2">
                                <a href="https://example.com/document2.pdf" className='hover:text-blue-500 hover:underline' target="_blank" rel="noopener noreferrer">
                                    Post Matric Scholarship to OBC Students.
                                </a>
                            </td>
                        </tr>
                        <tr className="border-b hover:bg-gray-100">
                            <td className="px-4 py-2">3</td>
                            <td className="px-4 py-2">
                            <a href="https://example.com/document2.pdf" className='hover:text-blue-500 hover:underline' target="_blank" rel="noopener noreferrer">
                            Name of scholarship and eligibility
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>

        <Footer />
    </>
);
}
export default Scholarship;