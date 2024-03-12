


export const detectSystem = () => {
    const userAgent = navigator.userAgent || navigator.vendor;
    return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
  }
