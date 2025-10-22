'use client';

import { CustomerField, InvoiceForm } from '@/app/lib/definitions';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import CustomSelect from '@/app/ui/custom-select';
import { useState } from 'react';

export default function EditInvoiceForm({
  invoice,
  customers,
}: {
  invoice: InvoiceForm;
  customers: CustomerField[];
}) {
  const [customerId, setCustomerId] = useState(invoice.customer_id);
  return (
    <form>
      <div className="rounded-md bg-halloween-black-800 p-4 md:p-6 border border-halloween-orange-600">
        {/* Customer Name */}
        <div className="mb-4">
          <label htmlFor="customer" className="mb-2 block text-sm font-medium text-halloween-orange-300">
            Choose customer
          </label>
          <CustomSelect
            options={customers}
            value={customerId}
            onChange={setCustomerId}
            placeholder="Select a customer"
            name="customerId"
            icon={UserCircleIcon}
          />
        </div>

        {/* Invoice Amount */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium text-halloween-orange-300">
            Choose an amount
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="amount"
                name="amount"
                type="number"
                step="0.01"
                defaultValue={invoice.amount}
                placeholder="Enter USD amount"
                className="peer block w-full rounded-md border border-halloween-purple-600 bg-halloween-black-700 text-halloween-orange-200 py-2 pl-10 text-sm outline-2 placeholder:text-halloween-orange-400"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-halloween-orange-500 peer-focus:text-halloween-orange-300" />
            </div>
          </div>
        </div>

        {/* Invoice Status */}
        <fieldset>
          <legend className="mb-2 block text-sm font-medium text-halloween-orange-300">
            Set the invoice status
          </legend>
          <div className="rounded-md border border-halloween-purple-600 bg-halloween-black-700 px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="pending"
                  name="status"
                  type="radio"
                  value="pending"
                  defaultChecked={invoice.status === 'pending'}
                  className="h-4 w-4 cursor-pointer border-halloween-orange-600 bg-halloween-black-600 text-halloween-orange-600 focus:ring-2"
                />
                <label
                  htmlFor="pending"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-halloween-purple-700 px-3 py-1.5 text-xs font-medium text-halloween-orange-200"
                >
                  Pending <ClockIcon className="h-4 w-4" />
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="paid"
                  name="status"
                  type="radio"
                  value="paid"
                  defaultChecked={invoice.status === 'paid'}
                  className="h-4 w-4 cursor-pointer border-halloween-orange-600 bg-halloween-black-600 text-halloween-green-600 focus:ring-2"
                />
                <label
                  htmlFor="paid"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-halloween-green-700 px-3 py-1.5 text-xs font-medium text-white"
                >
                  Paid <CheckIcon className="h-4 w-4" />
                </label>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/invoices"
          className="flex h-10 items-center rounded-lg bg-halloween-purple-700 px-4 text-sm font-medium text-halloween-orange-200 transition-colors hover:bg-halloween-purple-600"
        >
          Cancel
        </Link>
        <Button type="submit">Edit Invoice</Button>
      </div>
    </form>
  );
}
