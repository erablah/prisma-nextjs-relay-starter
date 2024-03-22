import Image from "next/image";
import { Layout } from "@/components/common/Layout";
import { fetchQuery, graphql } from "relay-runtime";
import { GetRelayServerSideProps } from "@/lib/relay/relay-types";
import { pagesIndexQuery, pagesIndexQuery$data } from "@/__generated__/pagesIndexQuery.graphql";
import { initRelayEnvironment } from "@/lib/relay/RelayEnvironment";
import { TutionTypeSelect } from "@/components/tuition/TuitionTypeSelect";
import WeeklyEventCalendar from "@/components/tuition/WeeklyEventCalendar";

const indexQuery = graphql`
  query pagesIndexQuery {
    users {
      ...TuitionTypeSelectFragment
    }
  }
`

type Props = {
  data: pagesIndexQuery$data;
};

export default function Home({ data }: Props) {

  const user = data.users[0];

  const week = new Date();

  return (
    <Layout>
      <div className="hidden flex-col md:flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight">수강신청</h2>
            <div className="grid">
              <TutionTypeSelect user={user}></TutionTypeSelect>
            </div>
          </div>
          <WeeklyEventCalendar week={week} />
        </div>
      </div>
    </Layout >
  );
}

export const getServerSideProps: GetRelayServerSideProps<Props> = async () => {
  const environment = initRelayEnvironment();

  const observable = fetchQuery<pagesIndexQuery>(environment, indexQuery, {});
  const data = await observable.toPromise();

  const initialRecords = environment.getStore().getSource().toJSON();

  return {
    props: {
      data: data!,
      initialRecords
    }
  }
}
