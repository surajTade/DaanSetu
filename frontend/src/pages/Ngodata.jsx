import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { fetchNgoData } from "../db/ngoManager";

const Ngodata = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const location = useLocation();

  const ngo = location.state?.ngoData || null;

  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelect = (index) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(index)) {
        return prevSelectedItems.filter((item) => item !== index);
      } else {
        return [...prevSelectedItems, index];
      }
    });
  };

  return ngo == null ? (
    <div>No NGO Data Found</div>
  ) : (
    <div>
      <div className="flex flex-row justify-start p-6 font-sans bg-gray-100 min-h-screen">
        {/* About Section */}
        <div className="w-[70%] bg-white p-[2vh] mb-[10vh] mr-[4vh] rounded-md shadow-md">
          <img
            src={ngo.ngo_image_url}
            alt={ngo.ngo_image_url}
            className="w-full h-[35vh] mb-[4vh] object-cover rounded-md"
          />
          <h1 className="text-5xl font-bold mr-[6vh] mb-[3vh] text-black">
            {ngo.ngoType}
          </h1>
          <p className="text-2xl  mr-[10vh] mb-[5vh] text-gray-700 ">
            {ngo.ngo_description}
          </p>

          <div className="flex flex-row items-center text-xl mr-[3vh]  mb-[3vh]">
            <div className="w-7 ">
              <img
                width="96"
                height="96"
                src="https://img.icons8.com/pulsar-line/96/human-resources.png"
                alt="human-resources"
              />
            </div>
            <strong className="ml-3 ">Type of NGO:&nbsp;</strong>{" "}
            <span>{ngo.ngoType}</span>
          </div>

          <div className="flex flex-row items-center text-xl mr-[3vh]  mb-[3vh]">
            <div className="w-7 ">
              <img
                width="96"
                height="96"
                src="https://img.icons8.com/pulsar-line/96/calendar.png"
                alt="calendar"
              />
            </div>
            <strong className="ml-3 ">Date of Registration:&nbsp;</strong>{" "}
            <span>{ngo.registrationDate}</span>
          </div>

          <div className="flex flex-row items-center text-xl mr-[3vh]  mb-[3vh]">
            <div className="w-7 ">
              <img
                width="96"
                height="96"
                src="https://img.icons8.com/pulsar-line/96/task.png"
                alt="task"
              />
            </div>
            <strong className="ml-3 ">FCRA Number:&nbsp;</strong>{" "}
            <span>{ngo.fcraNumber}</span>
          </div>

          <div className="flex flex-row items-center text-xl mr-[3vh]  mb-[3vh]">
            <div className="w-7 ">
              <img
                width="96"
                height="96"
                src="https://img.icons8.com/pulsar-line/96/internet.png"
                alt="internet"
              />
            </div>
            <strong className="ml-3 ">Website:&nbsp;</strong>{" "}
            <span>{ngo.websiteUrl}</span>
          </div>

          <div className="flex flex-row items-center text-xl mr-[3vh]  mb-[3vh]">
            <div className="w-7 ">
              <img
                width="96"
                height="96"
                src="https://img.icons8.com/pulsar-line/96/phone.png"
                alt="phone"
              />
            </div>
            <strong className="ml-3 ">Phone Number:&nbsp;</strong>{" "}
            <span>{ngo.ngo_ph_num}</span>
          </div>

          <div className="flex flex-row items-center text-xl mr-[3vh]  mb-[3vh]">
            <div className="w-7 ">
              <img
                width="96"
                height="96"
                src="https://img.icons8.com/pulsar-line/96/new-post.png"
                alt="new-post"
              />
            </div>
            <strong className="ml-3 ">Email:&nbsp;</strong>{" "}
            <span>{ngo.email}</span>
          </div>

          <div className="flex flex-row items-center text-xl mr-[3vh]  mb-[5vh]">
            <div className="w-7 ">
              <img
                width="96"
                height="96"
                src="https://img.icons8.com/pulsar-line/96/marker.png"
                alt="marker"
              />
            </div>
            <strong className="ml-3 ">Address:&nbsp;</strong>{" "}
            <span>{ngo.officeAddress}</span>
          </div>
        </div>

        {/* Requirements Section */}
        <section className=" w-[30%] mt-6">
          <h2 className="text-3xl font-bold mb-[4vh] text-cyan-700">
            Requirements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
            {ngo.requirement.map((item, index) => (
              <div
                key={index}
                className="p-4 bg-white rounded-md shadow-md text-center"
              >
                <h3 className="text-xl font-semibold text-teal-600">
                  {item.name}
                </h3>
                <p className="text-gray-700">{item.description}</p>
                <p className="mt-2 text-sm text-gray-500">
                  {item.additionalInfo}
                </p>

                <button
                  onClick={() => handleSelect(index)}
                  className={`mt-4 py-1  w-[60%] rounded-2xl ${
                    selectedItems.includes(index)
                      ? "bg-green-500 text-white"
                      : "bg-cyan-600 text-white"
                  }`}
                >
                  {selectedItems.includes(index) ? "Remove" : "Add"}
                </button>
              </div>
            ))}
          </div>
          <button className="bg-transparent border-2 text-xl font-bold border-cyan-700 w-full text-cyan-700 mt-5 py-4 rounded-xl hover:bg-cyan-100">
            Donate Now
          </button>
        </section>
      </div>
    </div>
  );
};

export default Ngodata;
