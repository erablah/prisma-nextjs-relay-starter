import { addHours, isBefore } from 'date-fns';
import React from 'react';

interface IGridCellProps {
    startTime: Date;
}

const GridCell: React.FC<IGridCellProps> = ({ startTime }) => {
    const isDisabled = isBefore(startTime, addHours(new Date(), 2));

    const handleClick = () => {
        if (isDisabled) return;

        console.log(startTime, isDisabled)
    }

    return (
        <div className={`px-4 min-h-24 border select-none border-gray-300 ${isDisabled ? 'bg-gray-200' : 'cursor-pointer'}`} onClick={handleClick}>
            {/* Render the content of the cell */}
        </div>
    );
};

export default GridCell;