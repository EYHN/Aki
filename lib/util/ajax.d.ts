export interface IAjaxOption {
    method: string;
}
export default function Ajax(href: string, option?: IAjaxOption): XMLHttpRequest;
