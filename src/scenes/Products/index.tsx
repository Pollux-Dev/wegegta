import React from 'react';
import s from './products.module.scss';
import { Card, Pagination, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Grass from './sub-icon.png';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import { TabContext } from '@mui/lab';

import Coffe from './coffee.png';
import Fish from './fish.png';
import Egg from './egg.png';

const products = [
  {
    name: 'Coffee Farm',
    img: Coffe,
  },
  {
    name: 'Fishery',
    img: Fish,
  },
  {
    name: 'Egg',
    img: Egg,
  },
  {
    name: 'Coffee Farm',
    img: Coffe,
  },
  {
    name: 'Fishery',
    img: Fish,
  },
  {
    name: 'Egg',
    img: Egg,
  },
];

const tabs = [
  { name: 'All', value: '1' },
  { name: 'Animal Feed', value: '2' },
  {
    name: 'Dairy',
    value: '3',
  },
  { name: 'Farm', value: '4' },
  { name: 'Poultry', value: '5' },
];

const Products = () => {
  const [tabIdx, setTabIdx] = React.useState('1');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabIdx(newValue);
  };

  return (
    <div className={s.container}>
      <div className={s.decorator} />

      <div className={s.wrapper}>
        <header className={s.header}>
          <Stack spacing={2} direction="row">
            <Image src={Grass} alt="grass" />
            <Typography variant="h3" noWrap>
              Products
            </Typography>
          </Stack>
        </header>

        <TabContext value={tabIdx}>
          <TabList
            onChange={handleChange}
            className={s.tab_header}
            // orientation="vertical"
          >
            {tabs.map((tab) => (
              <Tab
                key={tab.name}
                label={tab.name}
                value={tab.value}
                className={s.tab}
              />
            ))}
          </TabList>
        </TabContext>

        <Card className={s.products} elevation={5}>
          <div className={s.p_list}>
            {products.map((product, idx) => (
              <div className={s.product} key={idx}>
                <Image src={product.img} alt="product image" />
                <Typography noWrap>{product.name}</Typography>
              </div>
            ))}
          </div>
          <div className={s.pagination}>
            <Pagination count={4} />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Products;
