interface IMoodleFnParamSignature {
  type: string;
  optional?: boolean;
}

interface IMoodleFnResSignature {
  type: string;
}
export default interface IMoodleWSFnSignature {
  name: string;
  body?: IMoodleFnParamSignature | '';
  result?: IMoodleFnResSignature | '';
}
