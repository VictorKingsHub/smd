import React from 'react'

const Announcements = () => {
  return (
    <div className=" bg-white p-4 rounded-md ">
      <div className="flex justify-between items-center p-2">
        <span className="text-lg font-semibold"> Announcement </span>
        <div>
          <span> b Icon </span>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-teal-100 rounded-md p-4">
            <div className="flex flex-center justify-between">
                <h2 className="font-medium">Lorem, ipsum dolor.</h2>
                <span className="text-xs text-gray-400bg-white rounded-md px-1 py-1">2025-10-10</span>
            </div>
            <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur delectus qui nam temporibus eum similique!</p>
        </div>
        <div className="bg-purple-100 rounded-md p-4">
            <div className="flex flex-center justify-between">
                <h2 className="font-medium">Lorem, ipsum dolor.</h2>
                <span className="text-xs text-gray-400bg-white rounded-md px-1 py-1">2025-10-10</span>
            </div>
            <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur delectus qui nam temporibus eum similique!</p>
        </div>
        <div className="bg-yellow-100 rounded-md p-4">
            <div className="flex flex-center justify-between">
                <h2 className="font-medium">Lorem, ipsum dolor.</h2>
                <span className="text-xs text-gray-400bg-white rounded-md px-1 py-1">2025-10-10</span>
            </div>
            <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur delectus qui nam temporibus eum similique!</p>
        </div>
      </div>
    </div>
  )
}

export default Announcements
