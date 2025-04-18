"use client"
import React, {useState} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { IoLogoUsd } from 'react-icons/io5';
import Announcements from './Announcements';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    titles: "Lorem Ipsum dollor",
    time: "12:00 PM - 2:00PM",
    description: "Lorem10 Ipsum Lorem10 Ipsum Lorem10 Ipsum Lorem10 Ipsum"
  },
  {
    id: 2,
    titles: "Lorem Ipsum dollor",
    time: "12:00 PM - 2:00PM",
    description: "Lorem10 Ipsum Lorem10 Ipsum Lorem10 Ipsum Lorem10 Ipsum"
  },
  {
    id: 3,
    titles: "Lorem Ipsum dollor",
    time: "12:00 PM - 2:00PM",
    description: "Lorem10 Ipsum Lorem10 Ipsum Lorem10 Ipsum Lorem10 Ipsum"
  },
]

const EventCalendar = () => {

    const [value, onChange] = useState<Value>(new Date());
    
  return (
    <div className='bg-white rounded-md p-4'>
        <Calendar onChange={onChange} value={value} />
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold my-4">Events</h1>
          <IoLogoUsd />
        </div>
        <div className="flex flex-col gap-4">
          {events.map((event) =>(
            <div className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-teal-400 even:border-t-purple" key={event.id}>
                <div className="flex items-center justify-between">
                  <h1 className="font-semibold text-gray-600">{event.titles}</h1>
                  <span className="text-gray-300 text-xs">{event.time}</span>
                </div>
                <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
            </div>
          ))}
        </div>



            <div className="bg-white w-full rounded-xl p-2">
                <Announcements />
              </div>
    </div>
  )
}

export default EventCalendar
