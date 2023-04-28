export function Set(key, value) {
  localStorage.setItem(key,value)
}

export function Get(key){
  return localStorage.getItem(key);
}

export function Remove(key){
  return localStorage.removeItem(key);
}