import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MoreHorizontal } from 'lucide-react';

const requests = [
  {
    name: 'Ese Jerry',
    course: 'Research Technologies and Innovation',
    requestDate: '05/09/2025',
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-800',
  },
  {
    name: 'Grace Bura',
    course: 'Research Technologies and Innovation',
    requestDate: '02/09/2025',
    status: 'Pending',
    statusColor: 'bg-yellow-100 text-yellow-800',
  },
  {
    name: 'Amaka Okechukwu',
    course: 'Research Technologies and Innovation',
    requestDate: '15/09/2025',
    status: 'Rejected',
    statusColor: 'bg-red-100 text-red-800',
  },
  {
    name: 'Ese Jerry',
    course: 'Research Technologies and Innovation',
    requestDate: '05/09/2025',
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-800',
  },
];

function CertificateRequests() {
  return (
    <div className='border-[0.5px] rounded-[10px] p-1 md:p-6 flex flex-col bg-white border-[#D9D9D9] gap-2 md:gap-6 mt-8'>
      <div className='flex gap-2 flex-row sm:items-center sm:justify-between'>
        <div className='text-lg font-semibold text-gray-900'>
          Certificate Requests
        </div>
        <Button
          variant='link'
          className='text-[#800080] p-0 self-start sm:self-auto'
        >
          View All
        </Button>
      </div>
      <div>
        <table className='w-full'>
          <thead>
            <tr className='p-[12px] bg-[#FBEFFF80]'>
              <th className='text-left p-3 text-[14px] font-medium'>
                Name
              </th>
              <th className='text-left p-3 text-[14px] font-medium'>
                Course
              </th>
              <th className='text-left p-3 text-[14px] font-medium'>
                Date
              </th>
              <th className='text-left p-3 text-[14px] font-medium'>
                Status
              </th>
              <th className='text-left p-3 text-[14px] font-medium'>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request, index) => (
              <tr key={index} className='border-b border-gray-150'>
                <td className='p-3 text-[14px]'>
                  <div className='flex items-center gap-2 sm:gap-3'>
                    <div className='h-8 w-8 rounded-full bg-[#FBEFFF80] flex items-center justify-center text-[#800080] text-xs font-bold'>
                      {request.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </div>
                    <div className='text-sm'>{request.name}</div>
                  </div>
                </td>
                <td className='p-3 text-sm'>{request.course}</td>
                <td className='p-3 text-sm'>{request.requestDate}</td>
                <td className='py-3 px-2 sm:py-4 sm:px-4'>
                  <Badge
                    variant='secondary'
                    className={`${request.statusColor} text-[12px]`}
                  >
                    {request.status}
                  </Badge>
                </td>
                <td className='py-3 px-2 sm:py-4 sm:px-4'>
                  <Button
                    variant='ghost'
                    size='icon'
                    className='h-6 w-6 sm:h-8 sm:w-8'
                  >
                    <MoreHorizontal className='h-3 w-3 sm:h-4 sm:w-4' />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CertificateRequests;
