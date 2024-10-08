import {MarketType} from '@/types/Market';

const dummyMarketList: MarketType[] = [
  {
    id: 1,
    name: '반찬가게1',
    pickupStartAt: 1609718400000,
    pickupEndAt: 1609728400000,
    address: '서울특별시 동대문구 휘경동',
    products: [
      {
        id: 1,
        name: '김치',
        image: 'https://legacy.reactjs.org/logo-og.png',
        originalPrice: 10000,
        discountPrice: 7000,
        tags: ['추천메뉴', '김치류'],
      },
      {
        id: 2,
        name: '깻잎',
        image: 'https://legacy.reactjs.org/logo-og.png',
        originalPrice: 5000,
        discountPrice: 3000,
        tags: ['깻잎류'],
      },
      {
        id: 3,
        name: '간장게장',
        image: 'https://legacy.reactjs.org/logo-og.png',
        originalPrice: 20000,
        discountPrice: 17000,
        tags: ['추천메뉴', '게장류'],
      },
    ],
    images: ['https://legacy.reactjs.org/logo-og.png'],
  },
  {
    id: 2,
    name: '반찬가게2',
    pickupStartAt: 1609718400000,
    pickupEndAt: 1609728400000,
    address: '서울특별시 동대문구 전농동',
    products: [
      {
        id: 4,
        name: '겉절이',
        image: 'https://legacy.reactjs.org/logo-og.png',
        originalPrice: 80000,
        discountPrice: 6000,
        tags: ['추천메뉴', '겉절이류'],
      },
      {
        id: 2,
        name: '깻잎',
        image: 'https://legacy.reactjs.org/logo-og.png',
        originalPrice: 5000,
        discountPrice: 3000,
        tags: ['깻잎류'],
      },
      {
        id: 5,
        name: '된장',
        image: 'https://legacy.reactjs.org/logo-og.png',
        originalPrice: 10000,
        discountPrice: 7000,
        tags: ['추천메뉴', '장류'],
      },
    ],
    images: ['https://legacy.reactjs.org/logo-og.png'],
  },

  {
    id: 3,
    name: '반찬가게3',
    pickupStartAt: 1609718400000,
    pickupEndAt: 1609728400000,
    address: '서울특별시 동대문구 휘경동',
    products: [
      {
        id: 1,
        name: '김치',
        image: 'https://legacy.reactjs.org/logo-og.png',
        originalPrice: 10000,
        discountPrice: 7000,
        tags: ['추천메뉴', '김치류'],
      },
      {
        id: 2,
        name: '깻잎',
        image: 'https://legacy.reactjs.org/logo-og.png',
        originalPrice: 5000,
        discountPrice: 3000,
        tags: ['깻잎류'],
      },
      {
        id: 3,
        name: '간장게장',
        image: 'https://legacy.reactjs.org/logo-og.png',
        originalPrice: 20000,
        discountPrice: 17000,
        tags: ['추천메뉴', '게장류'],
      },
    ],
    images: ['https://legacy.reactjs.org/logo-og.png'],
  },
  {
    id: 4,
    name: '반찬가게4',
    pickupStartAt: 1609718400000,
    pickupEndAt: 1609728400000,
    address: '서울특별시 동대문구 전농동',
    products: [
      {
        id: 1,
        name: '김치',
        image: 'https://legacy.reactjs.org/logo-og.png',
        originalPrice: 10000,
        discountPrice: 7000,
        tags: ['추천메뉴', '김치류'],
      },
      {
        id: 2,
        name: '깻잎',
        image: 'https://legacy.reactjs.org/logo-og.png',
        originalPrice: 5000,
        discountPrice: 3000,
        tags: ['깻잎류'],
      },
      {
        id: 3,
        name: '간장게장',
        image: 'https://legacy.reactjs.org/logo-og.png',
        originalPrice: 20000,
        discountPrice: 17000,
        tags: ['추천메뉴', '게장류'],
      },
    ],
    images: ['https://legacy.reactjs.org/logo-og.png'],
  },
];

// TODO: fetch store lists
export const getMarketList = async (): Promise<MarketType[] | null> => {
  try {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(dummyMarketList);
        console.log('fetch market lists');
      }, 500);
    });
  } catch (error) {
    console.error('Error fetching market list:', error);
    return null;
  }
};
