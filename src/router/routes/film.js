
export default{
    
    path:'/film',
    component:()=>import('@/views/File/Film'),
    //还需要重定向  
    redirect:"/film/nowplaying",
    children:[
        {
           path:'nowplaying',
           component:()=>import('@/views/File/NowPlaying') 
        },
        {
            path:'comingsoon',
            component:()=>import('@/views/File/ComingSoon') 
         }
    ]
}