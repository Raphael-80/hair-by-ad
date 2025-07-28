import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className='bg-white py-10 px-6 md:px-20 border-t border-gray-100'>
                <div className='flex flex-col md:flex-row justify-between items-start gap-10 max-w-6xl mx-auto'>

                    {/* LOGO */}
                    <div className="flex items-center gap-2">
                        <img src="/LOGO.png" alt="LOGO" className="h-15 w-auto" />
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold mb-2">Contact</h4>
                        <p className="text-sm text-gray-700">Info@Hair-ByAD.Com</p>
                        <p className="text-sm text-gray-700">Lekki, Lagos, Nigeria.</p>
                        <p className="text-sm text-gray-700">(+234) 123-123-12345</p>
                    </div>

                    {/* Working Hours */}
                    <div>
                        <h4 className="text-lg font-semibold mb-2">Working Hours</h4>
                        <p className="text-sm text-gray-700">Working Days: 9am - 9pm</p>
                        <p className="text-sm text-gray-700">Saturday: 10am - 8pm</p>
                        <p className="text-sm text-gray-700">Sunday : Closed</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer