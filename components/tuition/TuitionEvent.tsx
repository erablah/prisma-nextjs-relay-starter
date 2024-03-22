import { TuitionEventFragment$key } from "@/__generated__/TuitionEventFragment.graphql";
import { isAfter, isEqual } from "date-fns";
import { useFragment } from "react-relay";
import { graphql } from "relay-runtime"

const TuitionEventFragment = graphql`
    fragment TuitionEventFragment on User {
        tuitions {
            startTime
            endTime
            type
        }
    }
`

export const TuitionEvent = ({ user, startTime }: { user: TuitionEventFragment$key, startTime: Date }) => {
    const data = useFragment(TuitionEventFragment, user);

    const tuitionEvents = data?.tuitions?.map((tuition) => {
        return { ...tuition, startTime: new Date(tuition.startTime) }
    }).filter((tuition) => isAfter(tuition.startTime, startTime) || isEqual(tuition.startTime, startTime)).sort((t1, t2) => t1.startTime.getDate() - t2.startTime.getDate());


    return (
        <div className="grid grid-cols-3 gap-1 z-20 absolute">
            {tuitionEvents?.length ? tuitionEvents.map((tuition) => (
                <div className={`${tuition.type === "FORTY" ? 'col-span-2' : 'col-span-1'} bg-blue-200`}></div>
            )) : null}
        </div>
    )
}