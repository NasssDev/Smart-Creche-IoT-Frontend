import React, { useState } from 'react';
import { format, isSameDay, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isToday, isSameMonth, addMonths } from 'date-fns';

const Calendar: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [currentMonth, setCurrentMonth] = useState<Date>(new Date());

    const handleDateClick = (date: Date) => {
        setSelectedDate(date);
    };

    const prevMonth = () => {
        setCurrentMonth(addMonths(currentMonth, -1));
    };

    const nextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1));
    };

    const renderHeader = (date: Date) => {
        const dateFormat = 'MMMM yyyy';
        return (
            <div className="flex items-center justify-between mb-4">
                <button className="p-2 rounded-full hover:bg-gray-200" onClick={prevMonth}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <h2 className="text-xl font-bold">{format(date, dateFormat)}</h2>
                <button className="p-2 rounded-full hover:bg-gray-200" onClick={nextMonth}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        );
    };

    const renderDays = () => {
        const dateFormat = 'eee';
        const days = [];
        let startDate = startOfWeek(currentMonth);

        for (let i = 0; i < 7; i++) {
            days.push(
                <div key={i} className="text-center font-medium text-gray-600">
                    {format(addDays(startDate, i), dateFormat)}
                </div>
            );
        }

        return <div className="grid grid-cols-7 gap-2">{days}</div>;
    };

    const renderCells = (date: Date) => {
        const monthStart = startOfMonth(date);
        const monthEnd = endOfMonth(monthStart);
        const startDate = startOfWeek(monthStart);
        const endDate = endOfWeek(monthEnd);

        const dateFormat = 'd';
        const rows = [];
        let days = [];
        let day = startDate;
        let formattedDate = '';

        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                formattedDate = format(day, dateFormat);
                const cloneDay = day;
                days.push(
                    <div
                        key={day.toISOString()}
                        className={`p-2 text-center ${
                            !isSameMonth(day, monthStart) ? 'text-gray-400' : isToday(day) ? 'bg-blue-500 text-white rounded-full' : ''
                        } ${selectedDate && isSameDay(day, selectedDate) ? 'bg-blue-300 rounded-full' : ''}`}
                        onClick={() => handleDateClick(cloneDay)}
                    >
                        {formattedDate}
                    </div>
                );
                day = addDays(day, 1);
            }

            rows.push(
                <div key={day.toISOString()} className="grid grid-cols-7 gap-2">
                    {days}
                </div>
            );
            days = [];
        }

        return <div>{rows}</div>;
    };

    return (
        <div className="bg-gray-800 flex rounded-lg shadow-lg">
            <div className="max-w-md mx-auto mt-8 bg-white">
                <div className="px-4 py-2">{renderHeader(currentMonth)}</div>
                <div className="px-4 py-2">{renderDays()}</div>
                <div className="px-4 py-2">{renderCells(currentMonth)}</div>
            </div>
            <div className="max-w-md mx-auto mt-8 bg-white">
                <div className="px-4 py-2">{renderHeader(addMonths(currentMonth, 1))}</div>
                <div className="px-4 py-2">{renderDays()}</div>
                <div className="px-4 py-2">{renderCells(addMonths(currentMonth, 1))}</div>
            </div>
        </div>
    );
};

export default Calendar;
