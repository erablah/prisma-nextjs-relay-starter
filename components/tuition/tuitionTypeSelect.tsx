import { TuitionTypeSelectFragment$key } from "@/__generated__/TuitionTypeSelectFragment.graphql"
import { useFragment } from "react-relay"
import { graphql } from "relay-runtime"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { useRouter } from "next/router"

const TuitionTypeSelectFragment = graphql`
    fragment TuitionTypeSelectFragment on User {
        twentyMinuteCouponCount
        fortyMinuteCouponCount
}`


export const TutionTypeSelect = ({ user }: { user: TuitionTypeSelectFragment$key }) => {
    const data = useFragment(TuitionTypeSelectFragment, user);
    const router = useRouter();

    const handleChange = (value: string) => {
        router.replace({ query: { ...router.query, couponType: value } })
    }



    return (
        <Select onValueChange={handleChange}>
            <SelectTrigger>
                <SelectValue placeholder="수업권을 선택해주세요" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="TWENTY">20분 수업권 ({data?.twentyMinuteCouponCount}회 남음)</SelectItem>
                <SelectItem value="FORTY">40분 수업권 ({data?.fortyMinuteCouponCount}회 남음)</SelectItem>
            </SelectContent>
        </Select>
    )
}