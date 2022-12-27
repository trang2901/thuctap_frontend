import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

import { OrganizationContext, defaultOrganization } from '@context/OrganizationContext';

export default function useOrganization() {
  const [organization] = useContext(OrganizationContext);
  const router = useRouter();

  useEffect(() => {
    console.log("===========ROUTER", router);
  }, []);
}
