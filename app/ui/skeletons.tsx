// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-halloween-orange-500/20 before:to-transparent';

export function CardSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl bg-halloween-black-800 p-2 shadow-lg border border-halloween-orange-600`}
    >
      <div className="flex p-4">
        <div className="h-5 w-5 rounded-md bg-halloween-black-700" />
        <div className="ml-2 h-6 w-16 rounded-md bg-halloween-black-700 text-sm font-medium" />
      </div>
      <div className="flex items-center justify-center truncate rounded-xl bg-halloween-purple-900 px-4 py-8">
        <div className="h-7 w-20 rounded-md bg-halloween-black-700" />
      </div>
    </div>
  );
}

export function CardsSkeleton() {
  return (
    <>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </>
  );
}

export function RevenueChartSkeleton() {
  return (
    <div className={`${shimmer} relative w-full overflow-hidden md:col-span-4`}>
      <div className="mb-4 h-8 w-36 rounded-md bg-halloween-black-800" />
      <div className="rounded-xl bg-halloween-black-800 p-4 border border-halloween-orange-600 shadow-lg">
        <div className="sm:grid-cols-13 mt-0 grid h-[410px] grid-cols-12 items-end gap-2 rounded-md bg-halloween-purple-900 p-4 md:gap-4" />
        <div className="flex items-center pb-2 pt-6">
          <div className="h-5 w-5 rounded-full bg-halloween-black-700" />
          <div className="ml-2 h-4 w-20 rounded-md bg-halloween-black-700" />
        </div>
      </div>
    </div>
  );
}

export function InvoiceSkeleton() {
  return (
    <div className="flex flex-row items-center justify-between border-b border-halloween-orange-700 py-4">
      <div className="flex items-center">
        <div className="mr-2 h-8 w-8 rounded-full bg-halloween-black-700 border-2 border-halloween-orange-500" />
        <div className="min-w-0">
          <div className="h-5 w-40 rounded-md bg-halloween-black-700" />
          <div className="mt-2 h-4 w-12 rounded-md bg-halloween-black-700" />
        </div>
      </div>
      <div className="mt-2 h-4 w-12 rounded-md bg-halloween-black-700" />
    </div>
  );
}

export function LatestInvoicesSkeleton() {
  return (
    <div
      className={`${shimmer} relative flex w-full flex-col overflow-hidden md:col-span-4`}
    >
      <div className="mb-4 h-8 w-36 rounded-md bg-halloween-black-800" />
      <div className="flex grow flex-col justify-between rounded-xl bg-halloween-black-800 p-4 border border-halloween-orange-600 shadow-lg">
        <div className="bg-halloween-purple-900 px-6 rounded-lg">
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
        </div>
        <div className="flex items-center pb-2 pt-6">
          <div className="h-5 w-5 rounded-full bg-halloween-black-700" />
          <div className="ml-2 h-4 w-20 rounded-md bg-halloween-black-700" />
        </div>
      </div>
    </div>
  );
}

export default function DashboardSkeleton() {
  return (
    <>
      <div
        className={`${shimmer} relative mb-4 h-8 w-36 overflow-hidden rounded-md bg-halloween-black-800`}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChartSkeleton />
        <LatestInvoicesSkeleton />
      </div>
    </>
  );
}

export function TableRowSkeleton() {
  return (
    <tr className="w-full border-b border-halloween-orange-700 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
      {/* Customer Name and Image */}
      <td className="relative overflow-hidden whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-halloween-black-700 border-2 border-halloween-orange-500"></div>
          <div className="h-6 w-24 rounded bg-halloween-black-700"></div>
        </div>
      </td>
      {/* Email */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-32 rounded bg-halloween-black-700"></div>
      </td>
      {/* Amount */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded bg-halloween-black-700"></div>
      </td>
      {/* Date */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded bg-halloween-black-700"></div>
      </td>
      {/* Status */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded bg-halloween-black-700"></div>
      </td>
      {/* Actions */}
      <td className="whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex justify-end gap-3">
          <div className="h-[38px] w-[38px] rounded bg-halloween-black-700"></div>
          <div className="h-[38px] w-[38px] rounded bg-halloween-black-700"></div>
        </div>
      </td>
    </tr>
  );
}

export function InvoicesMobileSkeleton() {
  return (
    <div className="mb-2 w-full rounded-md bg-halloween-purple-900 p-4 border border-halloween-orange-600">
      <div className="flex items-center justify-between border-b border-halloween-orange-600 pb-8">
        <div className="flex items-center">
          <div className="mr-2 h-8 w-8 rounded-full bg-halloween-black-700 border-2 border-halloween-orange-500"></div>
          <div className="h-6 w-16 rounded bg-halloween-black-700"></div>
        </div>
        <div className="h-6 w-16 rounded bg-halloween-black-700"></div>
      </div>
      <div className="flex w-full items-center justify-between pt-4">
        <div>
          <div className="h-6 w-16 rounded bg-halloween-black-700"></div>
          <div className="mt-2 h-6 w-24 rounded bg-halloween-black-700"></div>
        </div>
        <div className="flex justify-end gap-2">
          <div className="h-10 w-10 rounded bg-halloween-black-700"></div>
          <div className="h-10 w-10 rounded bg-halloween-black-700"></div>
        </div>
      </div>
    </div>
  );
}

export function InvoicesTableSkeleton() {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-halloween-black-800 p-2 md:pt-0 border border-halloween-orange-600">
          <div className="md:hidden">
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
          </div>
          <table className="hidden min-w-full text-halloween-orange-200 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6 text-halloween-orange-300">
                  Customer
                </th>
                <th scope="col" className="px-3 py-5 font-medium text-halloween-orange-300">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium text-halloween-orange-300">
                  Amount
                </th>
                <th scope="col" className="px-3 py-5 font-medium text-halloween-orange-300">
                  Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium text-halloween-orange-300">
                  Status
                </th>
                <th
                  scope="col"
                  className="relative pb-4 pl-3 pr-6 pt-2 sm:pr-6"
                >
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-halloween-purple-900">
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
