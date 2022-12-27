import { useRouter } from 'next/router';

const DashboardIndex = () => {
  const router = useRouter();
  const { organization_slug } = router.query;

  return <p>Org slug: {organization_slug}</p>;
};

export default DashboardIndex;
