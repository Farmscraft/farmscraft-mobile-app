export const HOME = 'Home';
export const CATEGORIES = 'Categories';
export const CART = 'Cart';
export const WISHLIST = 'Wishlist';
export const ACCOUNT = 'Account';

export const ORDERS = 'Orders';
export const ADDRESS = 'Address';
export const OFFERS = 'Offers';
export const ADMIN = 'Admin';
export const MAP_ADDRESS = 'AddressDetails';
export const EDIT_PROFILE = 'ProfileDetails';
export const MERCHANT_ORDERS = 'MerchantOrders';
import homeIcon from '../Images/home.png';
import shopIcon from '../Images/distribute.png';
import orderIcon from '../Images/product.png';
import fashionIcon from '../Images/fashion.png';
import lifestyleIcon from '../Images/lifestyle.png';
import groceryIcon from '../Images/grocery_outline.png';

export const ACTIVE_CITIES = {
  1: 'KHANDWA',
  2: 'DEVAS',
};

export const BOTTOM_TABS = [HOME, CATEGORIES, CART, WISHLIST, ACCOUNT];

export const API_STATUS = {
  FETCHING: 'FETCHING',
  IDEAL: 'IDEAL',
  ERROR: 'ERROR',
};

export const ADMIN_IDS = [
  'Lszmlz8xbZOgJtYSLywhMONBJtd2',
  'bsYkPceLOrPWdY3VUmPrBOBE5oF3',
];

export const STATUS = {
  0: 'Accepted',
  1: 'In Progress',
  2: 'Delivered',
};

export const MERCHANT_ORDER_STATUS = {
  0: 'Order Accept',
  1: 'Mark Enroute',
  2: 'Mark Delivered',
};

export const MERCHANT = 'ShopKeeper';

export const CONSUMER = 'consumer';

export const drawerItems = [
  {
    label: 'Home',
    icon: homeIcon,
    route: 'home',
    index: 0,
    contents: [],
  },
  {
    label: 'Fashion',
    icon: fashionIcon,
    route: 'shops',
    index: 1,
    contents: [],
  },

  {
    label: 'Lifestyle',
    icon: lifestyleIcon,
    route: 'shops',
    index: 1,
    contents: [],
  },
  {
    label: 'Grocery',
    icon: groceryIcon,
    route: 'shops',
    index: 1,
    contents: [],
  },
];

export const accountItems = [
  {
    id: 1,
    key: 'orders',
    title: 'My Orders',
    subTitle: 'Check your order status',
    icon: 'local_shipping',
  },
  {
    id: 2,
    key: 'address',
    title: 'My Delivery Address',
    subTitle: 'Save the address for easy checkout',
    icon: 'map',
  },
  {
    id: 3,
    key: 'cards',
    title: 'Saved Cards & Credit',
    subTitle: 'Save your cards for one click checkout',
    icon: 'credit_card',
  },
  {
    id: 4,
    key: 'settings',
    title: 'Settings',
    subTitle: 'Your notifications all in one place',
    icon: 'settings',
  },
  {
    id: 5,
    key: 'support',
    title: 'Help & Support',
    subTitle: 'Have a question? We are here to help',
    icon: 'help_outline',
  },
];

export const colors = {
  STATUS_BAR_COLOR: '#C8C8C8',
  TOOLBAR_COLOR: '#f4f4f4',
  APP_THEME: '#03DAC5',
  BORDER_COLOR: '#e4e3e3',
  APP_LOGO_COLOR: '#FF3366',
  WHITE: '#FFFFFF',
  BLACK: '#000',

  //TEAL
  TEAL: '#008080',
  LIGHT_TEAL: '#00a0a0',
  DARK_TEAL: '#006666',
  TEAL_500: '#009688',
  TEAL_600: '#00897B',
  TEAL_700: '#00796B',
  TEAL_800: '#00695C',
  TEAL_900: '#004D40',
  TEAL_400: '#009a9a',

  // grey shades
  MD_LIGHT_GREY: '#828282',

  MD_LIGHT_GREY_200: '#c8c8c8',
  MD_LIGHT_GREY_100: '#E0E0E0',
  MD_DARK_GREY_100: '#989898',
  BLUE_GREY: '#7D98B3',
};
