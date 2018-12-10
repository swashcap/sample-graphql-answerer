import { Product } from '../../schema/types/ProductType';

const products: Map<string, Product> = new Map([
  [
    '1',
    {
      description:
        'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem',
      id: '1',
      image: '//placekitten.com/100/100?image=1',
      isInStock: false,
      isOnSale: false,
      name: 'Lorem Ipsum',
      price: '$3.55',
    },
  ],
  [
    '2',
    {
      id: '2',
      image: '//placekitten.com/100/100?image=2',
      isInStock: true,
      isOnSale: false,
      name: 'dolor sit amet, consectetuer ',
      price: '$9.99',
    },
  ],
  [
    '3',
    {
      id: '3',
      image: '//placekitten.com/100/100?image=3',
      isInStock: true,
      isOnSale: true,
      name: 'adipiscing elit, sed diam nonummy nibh',
      price: '$54.55',
      salePrice: '$48.55',
    },
  ],
  [
    '4',
    {
      id: '4',
      image: '//placekitten.com/100/100?image=4',
      isInStock: true,
      isOnSale: false,
      name: 'euismod tincidunt',
      price: '$739.99',
    },
  ],
  [
    '5',
    {
      description:
        'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.',
      id: '5',
      image: '//placekitten.com/100/100?image=5',
      isInStock: false,
      isOnSale: false,
      name: 'ut laoreet dolore magna',
      price: '$4.99',
    },
  ],
  [
    '6',
    {
      id: '6',
      image: '//placekitten.com/100/100?image=6',
      isInStock: true,
      isOnSale: false,
      name: 'aliquam erat volutpat',
      price: '$47.15',
    },
  ],
  [
    '7',
    {
      description:
        'veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat',
      id: '7',
      image: '//placekitten.com/100/100?image=7',
      isInStock: true,
      isOnSale: false,
      name: 'Ut wisi enim ad minim',
      price: '$3.12',
    },
  ],
]);

export default ({ id }: { id: string }): Product | null => {
  if (products.has(id)) {
    // @ts-ignore
    return products.get(id);
  }

  return null;
};
