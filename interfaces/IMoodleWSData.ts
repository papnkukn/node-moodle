interface NameValuePair<K, V> {
  name: K;
  value: V;
}

export interface IMoodleWSData {
  data: [NameValuePair<any, any>];
}
