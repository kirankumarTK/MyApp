declare global {
  function DLog(text: string, ...optionalParams: any[]): void;
  function ILog(text: string, ...optionalParams: any[]): void;
  function WLog(text: string, ...optionalParams: any[]): void;
  function ELog(text: string, ...optionalParams: any[]): void;
}

global.DLog = function DLog(text: string, ...optionalParams: any[]) {
  // if (__DEV__) {
    console.log(text, optionalParams);
  // }
};

global.ILog = function ILog(text: string, ...optionalParams: any[]) {
  if (__DEV__) {
    console.log(text, optionalParams);
  }
};

global.WLog = function WLog(text: string, ...optionalParams: any[]) {
  if (__DEV__) {
    console.log(text, optionalParams);
  }
};

global.ELog = function ELog(text: string, ...optionalParams: any[]) {
  if (__DEV__) {
    console.log(text, optionalParams);
  }
};
export default null;
