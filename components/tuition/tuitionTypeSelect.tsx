import { TuitionTypeSelectFragment$key } from "@/__generated__/TuitionTypeSelectFragment.graphql"
import { useFragment } from "react-relay"
import { graphql } from "relay-runtime"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { useRouter } from "next/router"
import { useTuitionContext } from "./TuitionContext"

const TuitionTypeSelectFragment = graphql`
    fragment TuitionTypeSelectFragment on User {
        coupons{
            id
            type
            status
        }
        twentyMinuteCouponCount
        fortyMinuteCouponCount
}`


export const TutionTypeSelect = ({ user }: { user: TuitionTypeSelectFragment$key }) => {
    const { setTuitionApplication } = useTuitionContext();
    const data = useFragment(TuitionTypeSelectFragment, user);
    const router = useRouter();

    const handleChange = (value: string) => {
        const coupon = data.coupons.find((coupon) => (coupon.type === value && coupon.status === "ACTIVE"));

        if (!coupon?.id) throw Error('no valid coupons')
        setTuitionApplication({ couponId: coupon.id });
    }

    return (
        <Select onValueChange={handleChange}>
            <SelectTrigger className="select-none">
                <SelectValue placeholder="수업권을 선택해주세요" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="TWENTY">20분 수업권 ({data?.twentyMinuteCouponCount}회 남음)</SelectItem>
                <SelectItem value="FORTY">40분 수업권 ({data?.fortyMinuteCouponCount}회 남음)</SelectItem>
            </SelectContent>
        </Select>
    )
}