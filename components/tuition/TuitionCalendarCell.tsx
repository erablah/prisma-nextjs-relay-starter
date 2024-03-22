import { TuitionCalendarCellFragment$key } from '@/__generated__/TuitionCalendarCellFragment.graphql';
import { addHours, isAfter, isBefore, isEqual } from 'date-fns';
import React, { Suspense } from 'react';
import { useFragment, useQueryLoader } from 'react-relay';
import { graphql } from 'relay-runtime';
import { TuitionEvent } from './TuitionEvent';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import TutorSelectSheet, { TutorSelectSheetQuery } from './TutorSelectSheet';
import type { TutorSelectSheetQuery as SelectSheetQueryType } from '@/__generated__/TutorSelectSheetQuery.graphql';
import { useTuitionContext } from './TuitionContext';

interface IGridCellProps {
    startTime: Date;
    user: TuitionCalendarCellFragment$key
}

const TuitionCalendarCellFragment = graphql`
    fragment TuitionCalendarCellFragment on User {
        ...TuitionEventFragment
    }
`


const TuitionCalendarCell: React.FC<IGridCellProps> = ({ startTime, user }) => {
    const data = useFragment(TuitionCalendarCellFragment, user);
    const { TuitionApplication, setTuitionApplication } = useTuitionContext();
    const [tutorSelectSheetQueryRef, loadTutorSelectSheetQuery] = useQueryLoader<SelectSheetQueryType>(TutorSelectSheetQuery)

    const isDisabled = isBefore(startTime, addHours(new Date(), 2));

    const handleClick = () => {
        if (isDisabled) return;
        setTuitionApplication((application) => { return { startTime: startTime, ...application } })
        loadTutorSelectSheetQuery({ startTime: startTime.toISOString(), endTime: addHours(startTime, 1).toISOString() })

        console.log(startTime, isDisabled)
    }

    const handleHover = () => {
        if (isDisabled) return;

        console.log(startTime);
    }

    return (
        <Sheet>
            <SheetTrigger className="z-10">
                <div className={`px-4 min-h-24 border select-none border-gray-300  ${isDisabled ? 'bg-gray-200' : 'cursor-pointer'}`} onClick={handleClick} onMouseOver={handleHover} />
            </SheetTrigger>
            {!isDisabled && <TuitionEvent user={data} startTime={startTime} />}
            <Suspense>
                {tutorSelectSheetQueryRef ? <TutorSelectSheet queryRef={tutorSelectSheetQueryRef} startTime={startTime} /> : null}
            </Suspense>
        </Sheet>

    );
};

export default TuitionCalendarCell;