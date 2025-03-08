export interface IphoneDevice {
  /** unique id in device list */
  id: number
  /** device name, eg. iPhone 16 */
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
    id: 1,
    name: "iPhone 16",
    series: ["iPhone 16"],
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
    id: 2,
    name: "iPhone 16 Pro",
    series: ["iPhone 16 Pro"],
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
    id: 3,
    name: "iPhone 16 Plus",
    series: ["iPhone 16 Plus"],
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
    id: 4,
    name: "iPhone 16 Pro Max",
    series: ["iPhone 16 Pro Max"],
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
    id: 5,
    name: "iPhone 15/15 Pro",
    series: ["iPhone 15", "iPhone 15 Pro"],
    // screen viewport size
    viewportSize: {
      width: 393,
      height: 852,
    },
    screenSize: {
      width: 1179,
      height: 2556,
    },
    // device screen size, unit: inches
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
];

export default iphoneSeriesDeviceInfo;