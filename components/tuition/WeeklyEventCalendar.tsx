import React from 'react';
import { format, addDays, addMinutes, startOfWeek, endOfWeek } from 'date-fns';
import GridCell from './TuitionCalendarCell'; // Import the GridCell component

type Week = Date;
type DaysOfWeek = Date[];

const timeSlots = {
    '12:00 AM': 0, '1:00 AM': 1, '2:00 AM': 2, '3:00 AM ~ 5:00 AM': 3, '6:00 AM': 6,
    '7:00 AM': 7, '8:00 AM': 8, '9:00 AM': 9, '10:00 AM': 10, '11:00 AM': 11, '12:00 PM': 12, '1:00 PM': 13, '2:00 PM': 14, '3:00 PM ~ 6:00 PM': 15,
    '7:00 PM': 19, '8:00 PM': 20, '9:00 PM': 21, '10:00 PM': 22, '11:00 PM': 23
};

const WeeklyEventCalendar: React.FC<{ week: Week }> = ({ week }) => {
    // Generate array of dates for the week starting from Sunday and ending with Saturday
    const startDate = startOfWeek(week, { weekStartsOn: 0 }); // 0 means Sunday
    const endDate = endOfWeek(week, { weekStartsOn: 0 });
    const daysOfWeek: DaysOfWeek = [];
    let currentDate = startDate;
    while (currentDate <= endDate) {
        daysOfWeek.push(currentDate);
        currentDate = addDays(currentDate, 1);
    }


    return (
        <div className="max-w-7xl mx-auto select-none">
            <div className="grid grid-cols-8">
                {/* Empty cell for the corner */}
                <div className="px-4 py-2"></div>

                {/* Days of the week on the first row */}
                {daysOfWeek.map((day, index) => (
                    <div key={day.toISOString()} className={`px-4 py-4 text-center ${index === 0 ? 'rounded-tl-lg' : index === 6 ? 'rounded-tr-lg' : ''}`}>
                        {format(day, 'EEEE')}
                        <br />
                        {format(day, 'd')}
                    </div>
                ))}

                {/* Time slots on the first column */}
                {Object.entries(timeSlots).map(([timeSlot, hours]) => (
                    <React.Fragment key={timeSlot}>
                        <div className="px-4 py-4 border border-gray-300 max-w-xs min-h-16 flex items-center justify-center">{timeSlot}</div>
                        {/* Grid cells for each day and time slot */}
                        {daysOfWeek.map((day) => {
                            return (
                                <GridCell key={`${day}-${timeSlot}`} startTime={addMinutes(day, 60 * hours)} />
                            );
                        })}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default WeeklyEventCalendar;