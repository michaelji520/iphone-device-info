export interface IphoneDevice {
  /** unique id in device list */
  id: string;
  /** device names, eg. iPhone 16 */
  name: string;
  /** device names of same screen device info iphone */
  series: string[];
  /** viewport screen size in pixel */
  viewportSize: Size;
  /** physical screen size in pixel */
  screenSize: Size;
  /** screen size, unit: inch */
  display: number;
  devicePixelRatio: number;
  /** screen safe area */
  safeArea: SafeArea;
  /** screen safe area in landscape */
  safeAreaLandscape: SafeArea;
}

export interface SafeArea {
  top: number;
  bottom: number;
  left: number;
  right: number;
}

export interface Size {
  width: number;
  height: number;
}

const iphoneSeriesDeviceInfo: IphoneDevice[] = [
  {
    id: 'c6f613dd-1826-40cb-91d8-6ac634768eee',
    name: 'iPhone 16',
    series: ['iPhone 16', 'iPhone 15', 'iPhone 15 Pro', 'iPhone 14 Pro'],
    viewportSize: {
      width: 393,
      height: 852,
    },
    screenSize: {
      width: 1179,
      height: 2556,
    },
    display: 6.1,
    devicePixelRatio: 3,
    safeArea: {
      top: 59,
      bottom: 34,
      left: 0,
      right: 0,
    },
    safeAreaLandscape: {
      top: 0,
      bottom: 21,
      left: 59,
      right: 59,
    },
  },
  {
    id: '9ceb9b55-dcd9-4ff4-b4ca-e872a6abe5ea',
    name: 'iPhone 16 Pro',
    series: ['iPhone 16 Pro'],
    viewportSize: {
      width: 402,
      height: 874,
    },
    screenSize: {
      width: 1206,
      height: 2622,
    },
    display: 6.3,
    devicePixelRatio: 3,
    safeArea: {
      top: 62,
      bottom: 34,
      left: 0,
      right: 0,
    },
    safeAreaLandscape: {
      top: 0,
      bottom: 21,
      left: 62,
      right: 62,
    },
  },
  {
    id: '3fd1786a-4088-4a31-a281-c0b148231e2b',
    name: 'iPhone 16 Plus',
    series: ['iPhone 16 Plus', 'iPhone 15 Plus', 'iPhone 15 Pro Max', 'iPhone 14 Pro Max'],
    viewportSize: {
      width: 430,
      height: 932,
    },
    screenSize: {
      width: 1290,
      height: 2796,
    },
    display: 6.7,
    devicePixelRatio: 3,
    safeArea: {
      top: 59,
      bottom: 34,
      left: 0,
      right: 0,
    },
    safeAreaLandscape: {
      top: 0,
      bottom: 21,
      left: 59,
      right: 59,
    },
  },
  {
    id: 'e7ca4260-9c75-4063-96b1-54febf9d8435',
    name: 'iPhone 16 Pro Max',
    series: ['iPhone 16 Pro Max'],
    viewportSize: {
      width: 440,
      height: 956,
    },
    screenSize: {
      width: 1320,
      height: 2868,
    },
    display: 6.9,
    devicePixelRatio: 3,
    safeArea: {
      top: 62,
      bottom: 34,
      left: 0,
      right: 0,
    },
    safeAreaLandscape: {
      top: 0,
      bottom: 21,
      left: 62,
      right: 62,
    },
  },
  {
    id: '84c52ddb-ab29-4881-adaf-1038be8f8b6f',
    name: 'iPhone 14',
    series: ['iPhone 14', 'iPhone 13', 'iPhone 13 Pro', 'iPhone 12', 'iPhone 12 Pro'],
    viewportSize: {
      width: 390,
      height: 844,
    },
    screenSize: {
      width: 1170,
      height: 2532,
    },
    display: 6.1,
    devicePixelRatio: 3,
    safeArea: {
      top: 47,
      bottom: 34,
      left: 0,
      right: 0,
    },
    safeAreaLandscape: {
      top: 0,
      bottom: 21,
      left: 47,
      right: 47,
    },
  },
  {
    id: '8c7efaf0-7503-4d8b-a729-2e2b0c32ae36',
    name: 'iPhone 14 Plus',
    series: ['iPhone 14 Plus', 'iPhone 13 Pro Max', 'iPhone 12 Pro Max'],
    viewportSize: {
      width: 428,
      height: 926,
    },
    screenSize: {
      width: 1284,
      height: 2778,
    },
    display: 6.7,
    devicePixelRatio: 3,
    safeArea: {
      top: 47,
      bottom: 34,
      left: 0,
      right: 0,
    },
    safeAreaLandscape: {
      top: 0,
      bottom: 21,
      left: 47,
      right: 47,
    },
  },
  {
    id: 'bb11a313-79f1-4d32-8ff3-ca1e0f76f35a',
    name: 'iPhone 13 Mini',
    series: ['iPhone 13 Mini', 'iPhone 12 Mini'],
    viewportSize: {
      width: 375,
      height: 812,
    },
    // iPhone 13 mini: 375 * 3 = 1125 downsampling to 1080
    // iPhone 13 mini and equivalently sized devices have a logical scale factor of 3x but a native scale factor of 2.88x. The logical resolution of 375 × 812 is multiplied by 2.88 to reach the actual resolution of 1080 × 2340.
    screenSize: {
      width: 1080,
      height: 2340,
    },
    display: 5.4,
    devicePixelRatio: 3,
    safeArea: {
      top: 50,
      bottom: 0,
      left: 0,
      right: 0,
    },
    safeAreaLandscape: {
      top: 0,
      bottom: 21,
      left: 50,
      right: 50,
    },
  },
  {
    id: 'f9b1f473-85ea-4872-ab1b-af370e96befa',
    name: 'iPhone 11',
    series: ['iPhone 11', 'iPhone XR'],
    viewportSize: {
      width: 414,
      height: 896,
    },
    screenSize: {
      width: 828,
      height: 1792,
    },
    display: 6.1,
    devicePixelRatio: 2,
    safeArea: {
      top: 48,
      bottom: 34,
      left: 0,
      right: 0,
    },
    safeAreaLandscape: {
      top: 0,
      bottom: 21,
      left: 48,
      right: 48,
    },
  },
  {
    id: '4c113b27-2ef8-45b9-9a6b-bd24f7ebd81c',
    name: 'iPhone X',
    series: ['iPhone X', 'iPhone XS', 'iPhone 11 Pro'],
    viewportSize: {
      width: 375,
      height: 812,
    },
    screenSize: {
      width: 1125,
      height: 2436,
    },
    display: 5.8,
    devicePixelRatio: 3,
    safeArea: {
      top: 44,
      bottom: 34,
      left: 0,
      right: 0,
    },
    safeAreaLandscape: {
      top: 0,
      bottom: 21,
      left: 44,
      right: 44,
    },
  },
  {
    id: '97fe411c-5fd7-4df9-bab3-4a0fd64c2c13',
    name: 'iPhone 11 Pro Max',
    series: ['iPhone 11 Pro Max', 'iPhone XS Max'],
    viewportSize: {
      width: 414,
      height: 896,
    },
    screenSize: {
      width: 1242,
      height: 2688,
    },
    display: 6.5,
    devicePixelRatio: 3,
    safeArea: {
      top: 44,
      bottom: 34,
      left: 0,
      right: 0,
    },
    safeAreaLandscape: {
      top: 0,
      bottom: 21,
      left: 44,
      right: 44,
    },
  },
];

export default iphoneSeriesDeviceInfo;
