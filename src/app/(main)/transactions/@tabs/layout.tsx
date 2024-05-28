import { Tab, TabList, TabPanel } from '@/components/ui/tabs';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TabList>
        <Tab href="/transactions">All transactions</Tab>
        <Tab href="/transactions/income">Income</Tab>
        <Tab href="/transactions/expense">Expense</Tab>
      </TabList>
      <TabPanel>{children}</TabPanel>
    </>
  );
}
