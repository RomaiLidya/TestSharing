export const dummyProduct: ProductModel = {
  id: 0,
  productName: '',
  productCode: '',
  sellingPrice: 0,
  purchasePrice: 0,
  typeUnit: '',
  totalStock: 0,
  description: '',
  isReminder: false,
  minimumStock: 0,
  image: '' 
};

export const dummyCategory: CategoryModel = {
  id: 0,
  name: '',
  code: '',
  description: ''
};

export const dummyProductImage: ProductImageModel = {
  id: 0,
  path: '',
  url: ''
};

export const dummyZone: ZoneModel = {
  id: 0,
  name: '',
  description: ''
};

export const dummyProductSales: ProductSalesModel = {
  id: 0,
  outDate: new Date(),
  salesNumber: '',
  totalPrice: 0,
  description: ''
};

export const dummyProductItem: ProductItemModel = {
  id: 0,
  ProductId: 0,
  minimumItem: 0,
  promoPrice: 0,
  bonusItem: 0
};

export const dummyProductPrice: ProductPriceModel = {
  id: 0,
  price: 0,
  ProductId: 0,
  ZoneId: 0
};

export const dummyStockItem = {
  id: 0,
  typeUnit: '',
  purchasePrice: 0,
  totalPrice: 0,
  totalItem: 0,
  logisticPrice: 0,
  unitNetPrice: 0,
  ProductId: 0
};

export const dummyPartnerMinim = {
  id: 0,
  name: ''
};



export const dummyAccess: AccessModel = {
  id: 0,
  accessId: '',
  level: '',
  access: ''
};

export const dummyCart: CartModel = {
  UserId: 0,
  ZoneId: 0
};

export const dummyCartList: CartListModel = {
  id: 0,
  SalesOrderId: 0,
  ProductId: 0,
  typeUnit: '',
  totalItem: 0,
  price: 0,
  subTotalPrice: 0,
  totalPrice: 0,
  discount: 0,
  status: 'PENDING'
};


