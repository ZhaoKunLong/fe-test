import Cookies from 'js-cookie';

export const cookieOpt = {
  get: function (key: string) {
    console.log(Cookies.get(key));
    return Cookies.get(key);
  },
  set: function (key: string, value: string, opt: object) {
    Cookies.set(key, value, opt);
  },
  setJSON: function (key: string, value: string = '', opt: object) {
    Cookies.set(key, JSON.stringify(value), opt);
  },
  getJSON: function (key: string) {
    let result = {};
    try {
      const temp = Cookies.get(key);
      result = temp ? JSON.parse(temp) : {};
    } catch (error) {}
    return result;
  },
  remove: function (key: string) {
    Cookies.remove(key);
  },
};
