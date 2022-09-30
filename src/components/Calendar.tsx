import './Calendar.css'
import { useEffect, useState } from 'react';

export const Calendar = () => {
    const [days, setDays] = useState([0]);

    useEffect(() => {
        setDays((prev) => {
            const result: number[] = [];

            for (let i = 1; i <= 30; i++) {
                result.push(i);
            }
            prev = result;
            return prev;
        });
    }, []);

    return (
        <div className='container calendar-container'>
            <h2 className='calendar-title'>NOVIEMBRE 2022</h2>
            <div className='calendar'>
                <div className='week-day'>Sab</div>
                <div className='week-day'>Dom</div>
                <div className='week-day'>Lun</div>
                <div className='week-day'>Mar</div>
                <div className='week-day'>Mie</div>
                <div className='week-day'>Jue</div>
                <div className='week-day'>Vie</div>
                {
                    days.map((day) => (
                        <div key={day} className={`day day-${day} ${day == 20 ? ' date' : ''}`}>
                            {day == 20 && <div className='heartbeat'></div>}
                            <span>
                                {day}
                            </span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}