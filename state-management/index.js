function isObject (obj) {
    return typeof obj === 'object';
  }
  
export function initializeState (obj , hook) {
    const mapStore = {};
  
    return new Proxy(obj, {
      get (target, property) {
        const value = target[property];
        // if this property has been proxied, just return
        if(mapStore[property] === true) return value;
        // if it's an non-proxied object, we return its proxy
        if(isObject(value)) {
          const proxyValue = mapStore[property] || initializeState(value, hook);
          mapStore[property] = proxyValue;
          return proxyValue;
        }
        // else we just take a mark
        mapStore[property] = true;
        return value;
      },
      set (target, property, value) {
        const newVal = isObject(value)
          ? initializeState(value, hook)
          : value;
        target[property] = newVal;
        mapStore[property] = true;
        hook();
        return true;
      },
      deleteProperty (target, propertty) {
        delete target[property];
        delete mapStore[property];
        hook();
        return true;
      }
    });
  }