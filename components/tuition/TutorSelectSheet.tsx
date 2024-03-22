import { TutorSelectSheetQuery as QueryType } from "@/__generated__/TutorSelectSheetQuery.graphql"
import { PreloadedQuery, usePreloadedQuery } from "react-relay"
import { graphql } from "relay-runtime"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"
import { format } from "date-fns"
import { TutorCard } from "./TutorCard"

export const TutorSelectSheetQuery = graphql`
    query TutorSelectSheetQuery($startTime: String, $endTime: String) {
        tutors(startTime: $startTime, endTime: $endTime) {
            ...TutorCardFragment
        }
    }
`

const TutorSelectSheet = ({ queryRef, startTime }: { queryRef: PreloadedQuery<QueryType>, startTime: Date }) => {
    const data = usePreloadedQuery(TutorSelectSheetQuery, queryRef);

    console.log(data);

    return (
        <SheetContent>
            <SheetHeader>
                <SheetTitle>
                    {format(startTime, "MM'월' dd'일' p")}
                </SheetTitle>
            </SheetHeader>
            <SheetDescription className="mb-8 mt-4">
                튜터 직접 선택
            </SheetDescription>
            <div className="grid grid-rows-4 items-center gap-4">
                {data.tutors.length ? data.tutors.map((tutor) => (
                    <TutorCard tutor={tutor}></TutorCard>
                )) : <>선택가능한 튜터가 없습니다.</>}
            </div>
        </SheetContent>
    )
}

export default TutorSelectSheet