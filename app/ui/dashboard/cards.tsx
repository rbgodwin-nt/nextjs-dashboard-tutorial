import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { fetchCardData } from '@/app/lib/data';

const {
  numberOfInvoices,
  numberOfCustomers,
  totalPaidInvoices,
  totalPendingInvoices,
} = await fetchCardData();

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

export default async function CardWrapper() {
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();
  
  return (
    <>
      <Card title="Collected" value={totalPaidInvoices} type="collected" />
      <Card title="Pending" value={totalPendingInvoices} type="pending" />
      <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
      <Card
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
      /> 
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'invoices' | 'customers' | 'pending' | 'collected';
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-halloween-black-800 p-2 shadow-lg border border-halloween-orange-600">
      <div className="flex items-center p-4">
        {Icon ? <Icon className="h-5 w-5 flex-shrink-0 text-halloween-orange-400" /> : null}
        <h3 className="ml-2 text-sm font-medium text-halloween-orange-200 whitespace-nowrap">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-halloween-purple-900 px-4 py-8 text-center text-2xl text-halloween-orange-300`}
      >
        {value}
      </p>
    </div>
  );
}
