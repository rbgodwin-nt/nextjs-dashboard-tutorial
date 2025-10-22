import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import { fetchLatestInvoices } from '@/app/lib/data';

export default async function LatestInvoices()
{
  const latestInvoices = await fetchLatestInvoices();
  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl text-halloween-orange-300`}>
        Latest Invoices
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-halloween-black-800 p-4 border border-halloween-orange-600 shadow-lg">
 
        {latestInvoices && <div className="bg-halloween-purple-900 px-6 rounded-lg">
          {latestInvoices.map((invoice, i) => {
            return (
              <div
                key={invoice.id}
                className={clsx(
                  'flex flex-row items-center justify-between py-4',
                  {
                    'border-t border-halloween-orange-700': i !== 0,
                  },
                )}
              >
                <div className="flex items-center">
                  <Image
                    src={invoice.image_url}
                    alt={`${invoice.name}'s profile picture`}
                    className="mr-4 rounded-full border-2 border-halloween-orange-500"
                    width={32}
                    height={32}
                  />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold md:text-base text-halloween-orange-200">
                      {invoice.name}
                    </p>
                    <p className="hidden text-sm text-halloween-orange-400 sm:block">
                      {invoice.email}
                    </p>
                  </div>
                </div>
                <p
                  className={`${lusitana.className} truncate text-sm font-medium md:text-base text-halloween-orange-300`}
                >
                  {invoice.amount}
                </p>
              </div>
            );
          })}
        </div> }
        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-halloween-orange-500" />
          <h3 className="ml-2 text-sm text-halloween-orange-400">Updated just now</h3>
        </div>
      </div>
    </div>
  );
}
