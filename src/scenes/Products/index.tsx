// // import React from 'react';
// // import s from './products.module.scss';
// // import { Card, Pagination, Stack, Typography } from '@mui/material';
// // import Image from 'next/image';
// // import Grass from './sub-icon.png';
// // import TabList from '@mui/lab/TabList';
// // import Tab from '@mui/material/Tab';
// // import { TabContext } from '@mui/lab';

// // import Coffe from './coffee.png';
// // import Fish from './fish.png';
// // import Egg from './egg.png';

// // const products = [
// //   {
// //     name: 'Coffee Farm',
// //     img: Coffe,
// //   },
// //   {
// //     name: 'Fishery',
// //     img: Fish,
// //   },
// //   {
// //     name: 'Egg',
// //     img: Egg,
// //   },
// //   {
// //     name: 'Coffee Farm',
// //     img: Coffe,
// //   },
// //   {
// //     name: 'Fishery',
// //     img: Fish,
// //   },
// //   {
// //     name: 'Egg',
// //     img: Egg,
// //   },
// // ];

// // const tabs = [
// //   { name: 'All', value: '1' },
// //   { name: 'Animal Feed', value: '2' },
// //   { name: 'Dairy', value: '3',},
// //   { name: 'Farm', value: '4' },
// //   { name: 'Poultry', value: '5' },
// // ];

// // const Products = () => {
// //   const [tabIdx, setTabIdx] = React.useState('1');
// //   const handleChange = (event: React.SyntheticEvent, newValue: string) => {
// //     setTabIdx(newValue);
// //   };

// //   return (
// //     <div className={s.container}>
// //       <div className={s.decorator} />

// //       <div className={s.wrapper}>
// //         <header className={s.header}>
// //           <Stack spacing={2} direction="row">
// //             <Image src={Grass} alt="grass" />
// //             <Typography variant="h3" noWrap>
// //               Products
// //             </Typography>
// //           </Stack>
// //         </header>
// //         <div className={s.sub_header}>
// //         <div className={s.decorator} />
// //           <div className={s.wrapper}>
// //             <header className={s.header}>
// //                 <Typography variant="body1" noWrap>
// //                 Wogegta engages in a diverse range of activities to achieve its objectives
// //                 </Typography>      
// //               </header>
// //           </div>
// //         </div>  

// //         <TabContext value={tabIdx}>
// //           <TabList
// //             component="header"
// //             onChange={handleChange}
// //             className={s.tab_header}
// //             // orientation="vertical"
// //           >
// //             {tabs.map((tab) => (
// //               <Tab
// //                 key={tab.name}
// //                 label={tab.name}
// //                 value={tab.value}
// //                 className={s.tab}
// //               />
// //             ))}
// //           </TabList>
// //         </TabContext>

// //         <Card className={s.products} elevation={5}>
// //           <div className={s.p_list}>
// //             {products.map((product, idx) => (
// //               <div className={s.product} key={idx}>
// //                 <Image src={product.img} alt="product image" />
// //                 <Typography noWrap>{product.name}</Typography>
// //               </div>
// //             ))}
// //           </div>
// //           <div className={s.pagination}>
// //             <Pagination count={4} />
// //           </div>
// //         </Card>
// //       </div>
// //     </div>
// //   );
// // };

import React from 'react';
import s from './products.module.scss';
import { Card, Pagination, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Grass from './sub-icon.png';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import { TabContext } from '@mui/lab';


// Import images for products if available or use placeholders
import AnimalFeed from './animal_feed.png';
import Livestock from './livestock.png';
import Collaboration from './collaboration.png';
import AgriculturalDevelopment from './agricultural_development.png';
import Technology from './technology.png';
import Sustainable from './sustainable.png';
import MarketExpansion from './market_expansion.png';
import FinancialServices from './financial_services.png';
import BusinessOperations from './business_operations.png';
import CommunityDevelopment from './community_development.png';

const products = [
  {
    name: 'Animal Feed Development',
    description: 'Processing and marketing of animal feed.',
    img: AnimalFeed,
  },
  {
    name: 'Livestock Development',
    description: 'Development and processing of animal resources and products.',
    img: Livestock,
  },
  {
    name: 'Collaboration with Small Organizations',
    description: 'Establishing working relationships with small organizations in livestock development.',
    img: Collaboration,
  },
  {
    name: 'Diversified Agricultural Development',
    description: 'Including beekeeping, fisheries, coffee, fruit and vegetable, and forestry development and marketing.',
    img: AgriculturalDevelopment,
  },
  {
    name: 'Technological Advancements',
    description: 'Embracing agricultural production growth, processing technology, and supply/services.',
    img: Technology,
  },
  {
    name: 'Sustainable Practices',
    description: 'Recycling agricultural by-products and urban waste using appropriate technology.',
    img: Sustainable,
  },
  {
    name: 'Market Expansion',
    description: 'Supplying domestic and foreign markets, including precious stones.',
    img: MarketExpansion,
  },
  {
    name: 'Financial Services',
    description: 'Engaging in small financial services in agriculture, tourism, tour guiding, and housing development.',
    img: FinancialServices,
  },
  {
    name: 'General Business Operations',
    description: 'Export and import business, wholesale and retail business, shareholding in trade associations, and trade association establishment.',
    img: BusinessOperations,
  },
  {
    name: 'Community Development',
    description: 'Creating job opportunities and contributing to common development through income generation and support for social services.',
    img: CommunityDevelopment,
  },
];

const tabs = [
  { name: 'All', value: '1' },
  { name: 'Animal Feed', value: '2' },
  { name: 'Dairy', value: '3' },
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
        <div className={s.sub_header}>
          <div className={s.decorator} />
          <div className={s.wrapper}>
            <header className={s.header}>
              <Typography variant="body1" noWrap>
                Wogegta engages in a diverse range of activities to achieve its objectives
              </Typography>
            </header>
          </div>
        </div>

        <TabContext value={tabIdx}>
          <TabList
            component="header"
            onChange={handleChange}
            className={s.tab_header}
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
                <Typography variant="h6" className={s.product_name}>
                  {product.name}
                </Typography>
                <Typography variant="body2" className={s.product_description}>
                  {product.description}
                </Typography>
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
