import React from 'react';
import PageLayout from '@/components/page-layout';
import MenuTabs from '@/components/menu-tabs';

const MusicHall: React.FC = () => {
  const Tabs: React.FC = () => {
    return <MenuTabs tabs={[]}>11111</MenuTabs>;
  };

  return (
    <PageLayout title="音乐馆" tabs={<Tabs />}>
      <div>音乐馆</div>
    </PageLayout>
  );
};

export default MusicHall;
