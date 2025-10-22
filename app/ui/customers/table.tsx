import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import {
  CustomersTableType,
  FormattedCustomersTable,
} from '@/app/lib/definitions';

export default async function CustomersTable({
  customers,
}: {
  customers: FormattedCustomersTable[];
}) {
  return (
    <div className="w-full">
      <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl text-halloween-orange-300`}>
        Customers
      </h1>
      <Search placeholder="Search customers..." />
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-halloween-black-800 p-2 md:pt-0 border border-halloween-orange-600">
              <div className="md:hidden">
                {customers?.map((customer) => (
                  <div
                    key={customer.id}
                    className="mb-2 w-full rounded-md bg-halloween-purple-900 p-4 border border-halloween-orange-600"
                  >
                    <div className="flex items-center justify-between border-b border-halloween-orange-600 pb-4">
                      <div>
                        <div className="mb-2 flex items-center">
                          <div className="flex items-center gap-3">
                            <Image
                              src={customer.image_url}
                              className="rounded-full border-2 border-halloween-orange-500"
                              alt={`${customer.name}'s profile picture`}
                              width={28}
                              height={28}
                            />
                            <p className="text-halloween-orange-200">{customer.name}</p>
                          </div>
                        </div>
                        <p className="text-sm text-halloween-orange-400">
                          {customer.email}
                        </p>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-between border-b border-halloween-orange-600 py-5">
                      <div className="flex w-1/2 flex-col">
                        <p className="text-xs text-halloween-orange-400">Pending</p>
                        <p className="font-medium text-halloween-orange-300">{customer.total_pending}</p>
                      </div>
                      <div className="flex w-1/2 flex-col">
                        <p className="text-xs text-halloween-orange-400">Paid</p>
                        <p className="font-medium text-halloween-green-400">{customer.total_paid}</p>
                      </div>
                    </div>
                    <div className="pt-4 text-sm text-halloween-orange-200">
                      <p>{customer.total_invoices} invoices</p>
                    </div>
                  </div>
                ))}
              </div>
              <table className="hidden min-w-full rounded-md text-halloween-orange-200 md:table">
                <thead className="rounded-md bg-halloween-black-800 text-left text-sm font-normal">
                  <tr>
                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6 text-halloween-orange-300">
                      Name
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium text-halloween-orange-300">
                      Email
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium text-halloween-orange-300">
                      Total Invoices
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium text-halloween-orange-300">
                      Total Pending
                    </th>
                    <th scope="col" className="px-4 py-5 font-medium text-halloween-orange-300">
                      Total Paid
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-halloween-orange-700 text-halloween-orange-200">
                  {customers.map((customer) => (
                    <tr key={customer.id} className="group">
                      <td className="whitespace-nowrap bg-halloween-purple-900 py-5 pl-4 pr-3 text-sm text-halloween-orange-200 group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                        <div className="flex items-center gap-3">
                          <Image
                            src={customer.image_url}
                            className="rounded-full border-2 border-halloween-orange-500"
                            alt={`${customer.name}'s profile picture`}
                            width={28}
                            height={28}
                          />
                          <p>{customer.name}</p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap bg-halloween-purple-900 px-4 py-5 text-sm">
                        {customer.email}
                      </td>
                      <td className="whitespace-nowrap bg-halloween-purple-900 px-4 py-5 text-sm">
                        {customer.total_invoices}
                      </td>
                      <td className="whitespace-nowrap bg-halloween-purple-900 px-4 py-5 text-sm">
                        {customer.total_pending}
                      </td>
                      <td className="whitespace-nowrap bg-halloween-purple-900 px-4 py-5 text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md text-halloween-green-400">
                        {customer.total_paid}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
