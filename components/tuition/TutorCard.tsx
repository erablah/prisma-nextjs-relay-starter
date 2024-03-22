import { TutorCardFragment$key } from "@/__generated__/TutorCardFragment.graphql";
import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import { Card, CardTitle, CardContent, CardHeader, CardDescription } from "../ui/card";
import { Button } from "../ui/button";

const TutorCardFragment = graphql`
    fragment TutorCardFragment on Tutor {
        name
        education
    }
`

export const TutorCard = ({ tutor }: { tutor: TutorCardFragment$key }) => {
    const data = useFragment(TutorCardFragment, tutor);

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
                <Button>
                    튜터 선택
                </Button>
            </CardContent>
        </Card>
    )
}

