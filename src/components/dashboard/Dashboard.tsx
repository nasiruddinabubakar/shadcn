import { Activity, CreditCard, DollarSign, Loader, Users } from 'lucide-react';
import PageTitle from '../ui/PageTitle';
import Card, { CardContent, CardProps } from './Card';
import BarChart from '../BarChart';
import SalesCard, { SalesProps } from './SalesCard';
import { useGetBookings, useGetSalesData } from '@/lib/react-query/queriesAndMutations';
import { Orders } from '../orders/Orders';



const   Dashboard =  () => {
  // const { data: cardDataApi, isPending } = useQuery({
  //   queryKey: [QueryKeys.SALES_DATA],
  //   queryFn: getSalesData,
  //   staleTime: Infinity,
  // });
  const { data: cardDataApi, isPending } = useGetSalesData(); 
  console.log(cardDataApi);


  const cardData: CardProps[] = [
    {
      label: 'Total Revenue',
      amount: `$${Math.round(cardDataApi?.data.totalSales * 0.15)}  `,
      discription: '+20.1% from last month',
      icon: DollarSign,
    },
    {
      label: 'Sales',
      amount: `${Math.round(cardDataApi?.data.totalOrders)}`,
      discription: '+180.1% from last month',
      icon: CreditCard,
    },
    {
      label: 'Customers',
      amount: `${cardDataApi?.data.totalCustomers}`,
      discription: '+19% from last month',

      icon: Users,
    },
    {
      label: 'Companies',
      amount: `${cardDataApi?.data.totalCompanies}`,
      discription: '+1 since last hour',
      icon: Activity,
    },
  ];

  const uesrSalesData: SalesProps[] = [
    {
      name: 'Olivia Martin',
      email: 'olivia.martin@email.com',
      saleAmount: '+$1,999.00',
    },
    {
      name: 'Jackson Lee',
      email: 'isabella.nguyen@email.com',
      saleAmount: '+$1,999.00',
    },
    {
      name: 'Isabella Nguyen',
      email: 'isabella.nguyen@email.com',
      saleAmount: '+$39.00',
    },
    {
      name: 'William Kim',
      email: 'will@email.com',
      saleAmount: '+$299.00',
    },
    {
      name: 'Sofia Davis',
      email: 'sofia.davis@email.com',
      saleAmount: '+$39.00',
    },
  ];

  return (
    <div className="w-full flex flex-col gap-4 p-3 h-[100vh] overflow-y-scroll ">
      <PageTitle title="Dashboard" />

      <section className="grid mt-1   w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {isPending ? (
          <div className="animate-pulse flex flex-col gap-4">
            <Loader />
          </div>
        ) : (
          cardData.map((d, i) => (
            <Card
              key={i}
              amount={d.amount}
              discription={d.discription}
              icon={d.icon}
              label={d.label}
            />
          ))
        )}
      </section>

      <section className="grid grid-cols-1  gap-6 transition-all lg:grid-cols-2">
        <CardContent>
          <p className="p-4 font-semibold">Overview</p>

          <BarChart />
        </CardContent>
        <CardContent className="flex justify-between gap-4">
          <section>
            <p>Recent Sales</p>
            <p className="text-sm text-gray-400">
              You made 265 sales this month.
            </p>
          </section>
          {uesrSalesData.map((d, i) => (
            <SalesCard
              key={i}
              email={d.email}
              name={d.name}
              saleAmount={d.saleAmount}
            />
          ))}
        </CardContent>
       
       
          {/* < */}
         
          
      </section>
      <Orders/>
      {/* <OrderInfo/> */}
     
    </div>
  );
};

export default Dashboard;
