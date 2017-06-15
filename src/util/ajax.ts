export interface IAjaxOption {
  method: string;
}

export default function Ajax(href: string, option?: IAjaxOption) {
  const httpRequest = new XMLHttpRequest();
  const finalOption = {
    method: 'GET',
    ...option
  };
  httpRequest.open(finalOption.method, href, true);
  return httpRequest;
}
