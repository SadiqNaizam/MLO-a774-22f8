import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import FunnelStatsCard from '../components/Dashboard/FunnelStatsCard';
import SourcesPieChartCard from '../components/Dashboard/SourcesPieChartCard';
import LeadsTrackingChart from '../components/Dashboard/LeadsTrackingChart';
import ReasonsLostCard from '../components/Dashboard/ReasonsLostCard';
import OtherDataCard from '../components/Dashboard/OtherDataCard';

const DashboardPage: React.FC = () => {
  return (
    <MainAppLayout pageTitle="Dashboard">
      {/* Row 1: Funnel Stats and Sources Pie Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
        <div className="lg:col-span-2">
          <FunnelStatsCard />
        </div>
        <div className="lg:col-span-3">
          <SourcesPieChartCard />
        </div>
      </div>

      {/* Row 2: Leads Tracking Chart */}
      {/* This component is a direct child of MainAppLayout's flex-col container and will take available width */}
      <LeadsTrackingChart />

      {/* Row 3: Reasons Lost and Other Data */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        <div className="md:col-span-1">
          <ReasonsLostCard />
        </div>
        <div className="md:col-span-2">
          <OtherDataCard />
        </div>
      </div>
    </MainAppLayout>
  );
};

export default DashboardPage;
