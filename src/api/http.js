//封装axios  天界拦截器(两个奇怪的请求头)

//先导入axios
import axios from 'axios'


//设置基础的域名
axios.defaults.baseURL = 'https://m.maizuo.com/'

axios.interceptors.request.use(
    function (config) {
        //请求的时候x-host 是不同的  请求电影列表的时候是film  影院的时候是cinema   电影详情是info
        let host = 'mall.film-ticket.film.list'
        //这里的info是后期传输过来的
        let info = config.headers.info
        if (info == 'film') {
            host = 'mall.film-ticket.film.list'
        }
        if (info == 'cinema') {
            host = 'mall.film-ticket.cinema.list'
        }
        if (info == 'info') {
            host = 'mall.film-ticket.film.info'
        }

        config.headers = {
            "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.0.4","e":"16022374572884620295077894","bc":"440300"}',
            "X-Host": host,
        }
        return config
    },
    function (err) {

    }
)
//导出封装好的axios
export default axios

