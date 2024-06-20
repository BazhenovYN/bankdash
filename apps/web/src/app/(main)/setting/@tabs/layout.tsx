import { Tab, TabList, TabPanel } from '@web/components/ui/tabs';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TabList>
        <Tab href="/setting">Edit profile</Tab>
        <Tab href="/setting/preferences">Preferences</Tab>
        <Tab href="/setting/security">Security</Tab>
      </TabList>
      <TabPanel>{children}</TabPanel>
    </>
  );
}
