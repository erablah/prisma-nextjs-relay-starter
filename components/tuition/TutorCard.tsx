import { TutorCardFragment$key } from "@/__generated__/TutorCardFragment.graphql";
import { useFragment, useMutation } from "react-relay";
import { graphql } from "relay-runtime";
import { Card, CardTitle, CardContent, CardHeader, CardDescription } from "../ui/card";
import { Button } from "../ui/button";
import { useTuitionContext } from "./TuitionContext";
import { TutorCardCreateTuitionMutation } from "@/__generated__/TutorCardCreateTuitionMutation.graphql";
import { addMinutes } from "date-fns";

const TutorCardFragment = graphql`
    fragment TutorCardFragment on Tutor {
        id
        name
        education
    }
`

const TutorCardCreateTuitionMutation = graphql`
    mutation TutorCardCreateTuitionMutation($couponId: String!, $tutorId: String!, $userId: String!, $startTime: String!, $endTime: String!, $type: TuitionType!) {
        createTuition(input: {couponId: $couponId, userId: $userId, tutorId: $tutorId, startTime: $startTime, endTime: $endTime, type: $type}) {
            tutor {
                id
                tuitions {
                    id
                }
            }
            user {
                id
                tuitions {
                    id
                }
            }
        }
    }
`

export const TutorCard = ({ tutor }: { tutor: TutorCardFragment$key }) => {
    const data = useFragment(TutorCardFragment, tutor);
    const { TuitionApplication } = useTuitionContext();
    const [commitMutation, isMutationInFlight] = useMutation<TutorCardCreateTuitionMutation>(TutorCardCreateTuitionMutation);

    const handleClick = () => {
        if (!TuitionApplication?.couponId || !TuitionApplication?.startTime || !TuitionApplication.userId || !TuitionApplication.type) {
            console.log('failed to have stuff');
            return;
        }
        commitMutation({
            variables: {
                couponId: TuitionApplication?.couponId,
                tutorId: data.id,
                endTime: TuitionApplication.startTime.toISOString(),
                startTime: addMinutes(TuitionApplication.startTime, TuitionApplication.type === "FORTY" ? 40 : 20).toISOString(),
                userId: TuitionApplication.userId,
                type: TuitionApplication.type
            }
        })
    }

    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>
                    {data.name}
                </CardTitle>
                <CardDescription>
                    {data.education}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Button onClick={handleClick}>
                    튜터 선택
                </Button>
            </CardContent>
        </Card>
    )
}

