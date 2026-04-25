import type { ReactNode } from "react";

export interface NavItem {
    icon?:ReactNode;
    content:string;
    path:string;
}
export interface NavBarProps{
    logo:string;
    items:Array<NavItem>;
    btn:NavItem;     /* كلن ما عدا الايقونة*/
}

export interface HeroProps{
    backgroud:string;
    title:string;
    description?:string;
    btn?:string;
}



// عملنا ال انتيرفيز بملف لانه راح نستخدمه في اكثر من مكان في المشروع