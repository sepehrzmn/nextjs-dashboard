import SideNav from '@/app/ui/dashboard/sidenav';

type Props = React.PropsWithChildren;

const Page: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow overflow-y-auto p-6 md:p-12">{children}</div>
    </div>
  );
};

export default Page;
