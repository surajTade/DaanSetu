

function Footer () {

    return (
        <div>
            <footer className="flex flex-row justify-between bg-black text-white p-4">
                <div className="flex flex-col justify-start items-start ml-[12vh] mb-[6vh] mt-11 ">
                    <p className="text-xl font-semibold mb-5">TERMS & CONDITIONS</p>
                    <ul className="flex flex-col text-base font-medium  ">
                        <li className="mb-4">Report Complain</li>
                        <li className="mb-4">Policy</li>
                        <li className="mb-4">Disclaimer</li>
                        <li>Mission</li>
                    </ul>
                </div>
                <div className="flex flex-col justify-start items-end mr-[12vh] mb-[6vh] mt-11 ">
                    <p className="text-xl font-semibold mb-5">OUR OFFICE</p>
                    <ul className="flex flex-col text-base items-end font-medium">
                        <li className="mb-1">Indore-Bhopal Highway, Kotri Kalan</li>
                        <li className="mb-1">Sehore, Madhya Pradesh</li>
                        <li>Zip: 466114</li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}

export default Footer;