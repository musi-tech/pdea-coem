import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const ContactUs = () => {

  return (
    <>
    <Navbar />

    <div className="w-full mx-auto px-4 py-8 my-32">
    <div className=" mx-auto px-4 py-8 text-center">

  <h1 className="text-3xl font-bold mb-4 ">Contact for Admission Inquiry</h1>
  <hr className='my-5'/>

  <div className="flex flex-col space-y-2">
    <h2 className="text-xl font-bold">Pune District Education Association's</h2>
    <p className="text-gray-700">COLLEGE OF ENGINEERING, Manjari (Bk.)</p>
  </div>
  <div className="flex flex-col space-y-1 mt-5">
    <p className="text-gray-700">Near Vasantdada Sugar Institute, Hadapsar - Wagholi Road, Manjari (Bk),</p>
    <p className="text-gray-700">Taluka: Haveli, Dist: Pune - 412307</p>
  </div>
  <hr className='my-5'/>
  <div className=" flex flex-col justify-center space-y-2 my-5 m">
    <p className="text-gray-700"><span className="font-bold mr-2">Toll Free No.:</span> 1800 3000 6206</p>
    <p className="text-gray-700"><span className="font-bold mr-2">Mob. No.:</span> 8888776206</p>
    <p className="text-gray-700"><span className="font-bold mr-2">Office:</span> 020 - 26996275 Reception</p>
    <p className="text-gray-700"><span className="font-bold mr-2">Fax:</span> 020 - 26996275</p>
  </div>

  <h3 className="text-xl font-bold mt-8 mb-2">Admission Contact Information</h3>

  <table className="w-full table-auto text-left text-gray-700 text-center">
    <thead>
      <tr className="bg-gray-200 text-sm font-medium">
        <th className="px-4 py-2">Admission Type</th>
        <th className="px-4 py-2">Contact Numbers</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-b hover:bg-gray-100">
        <td className="px-4 py-2">F.E. Admission</td>
        <td className="px-4 py-2">
        9011077464, 9922886753, 9545941727, 9823244817, 8055894328, 8308037001, 9970922682
        </td>
      </tr>
      <tr className="border-b hover:bg-gray-100">
        <td className="px-4 py-2">D.S.E. Admission</td>
        <td className="px-4 py-2">8788929072, 7385584899, 8888776206</td>
      </tr>
      <tr className="border-b hover:bg-gray-100">
        <td className="px-4 py-2">MCA Admission</td>
        <td className="px-4 py-2">8788929072, 8308653258, 8898685400, 8830650704, 9762007282</td>
      </tr>
      <tr className="hover:bg-gray-100">
        <td className="px-4 py-2">MBA Admission</td>
        <td className="px-4 py-2">9067316635, 9860493060, 9960570216</td>
      </tr>
    </tbody>
  </table>

</div>
</div>

<Footer />
</>

    );
}
export default ContactUs;