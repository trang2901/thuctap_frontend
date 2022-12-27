import { createContext, useState } from 'react';

export const defaultOrganization = 'cusc';
export const organizations = ['cusc', 'nentang'];
export const OrganizationContext = createContext([]);

export const OrganizationProvider = ({ children }) => {
  const [organization, setOrganization] = useState('cusc');

  return (
    <OrganizationContext.Provider value={[organization, setOrganization]}>
      {children}
    </OrganizationContext.Provider>
  );
};
