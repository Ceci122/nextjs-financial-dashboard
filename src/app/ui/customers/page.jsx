import { fetchCustomers} from "@/app/lib/data"
import CustomersTable from "@/app/ui/customers/table"
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';

export default async function Page({ searchParams }) {
    const query = searchParams?.query || '';
    const customers = await fetchCustomers(query);

    return (
        <div>
            <Suspense fallback={<InvoicesTableSkeleton />}>
                <CustomersTable customers={customers} />
            </Suspense>

        </div>
    )
}