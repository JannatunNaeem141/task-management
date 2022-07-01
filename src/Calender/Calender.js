import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calender = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div className='h-screen'>
            <div className='max-w-7xl mx-auto flex justify-center'>
                <div>
                    <h2 className='text-center lg:text-4xl md:text-3xl text-2xl font-bold lg:my-12 md:my-8 my-5' style={{ color: "#F2E7FE" }}>Calender</h2>
                    <DayPicker className='bg-slate-300 py-8 px-5 mb-5'
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                    <p className='text-xl text-white'>Picked Date: <span className='font-bold' style={{ color: "#F2E7FE" }}>{format(date, 'PP')}</span></p>
                </div>
            </div>
        </div>
    );
};

export default Calender;