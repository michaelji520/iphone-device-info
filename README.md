# @heihei2thesky/iphone-device-info

This repo provides multiple iphone screen info for frontend developers, including screen size, safe area parameters, dpr... 

The data structure is as follows

```typescript
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
  /** unit: px */
  top: number;
  bottom: number;
  left: number;
  right: number;
}

export interface Size {
  /** unit: px */
  width: number;
  height: number;
}
```

if you have any suggestions, feel free to submit an issue or send an email.
