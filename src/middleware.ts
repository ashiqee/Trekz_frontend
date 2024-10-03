import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./services/AuthService";



const authRoutes = ["/login",'/register'];

type Role = keyof typeof roleBasedRoutes;

const roleBasedRoutes={
    ADMIN:[/^\/admin/,/profile/],
    USER:[/^\/user/,/profile/],
   
}

export async function middleware(request:NextRequest){
    const {pathname}= request.nextUrl;

    const user = await getCurrentUser();
  


    if(!user){
        if(authRoutes.includes(pathname)){
            return NextResponse.next();
        }else{
            return NextResponse.redirect(
                new URL(
                    pathname ? `/login?redirect=${pathname}`:"/login",
                    request.url
                )
            );
        }
    }
    
    // Role Base Authorization 

    if(user?.role && roleBasedRoutes[user?.role as Role]){
        const routes = roleBasedRoutes[user?.role as Role];

        if(routes.some((route)=>pathname.match(route))){
            return NextResponse.next();
        }
    }

    return NextResponse.redirect(new URL('/',request.url));


}





export const config ={

    matcher :[
        '/login',
        '/register',
        "/profile/:page",
        '/admin/:page',
        '/user/:page',
        
    ]
}