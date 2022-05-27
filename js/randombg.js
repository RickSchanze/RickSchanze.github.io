/*
 * @Author: zh(RickSchanze)(帝皇の惊)
 * @Description: 描述
 * @Date: 2022-05-25 16:39:54
 * @LastEditTime: 2022-05-27 17:07:57
 */
//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var bannerimg = [
    "url(https://tva3.sinaimg.cn/large/005BYqpgly1frn9b9zhpjj31hc0u0hdt.jpg)",
    "url(https://tva1.sinaimg.cn/large/0072Vf1pgy1foxlnf6ksdj31kw0w0dzb.jpg)",
    "url(https://tva3.sinaimg.cn/large/0075auPSly1fqb5mqkxg4j31hc11pe82.jpg)",
    "url(https://tva4.sinaimg.cn/large/005BYqpgly1frn9e5j0huj31hc0u0qv5.jpg)",
    "url(https://tva1.sinaimg.cn/large/005BYqpgly1frn9445odej31hc0u0kjl.jpg)",
    "url(https://tva2.sinaimg.cn/large/005BYqpgly1frn8v4fmphj31kw0w0b2b.jpg)",
    "url(https://tva4.sinaimg.cn/large/87c01ec7gy1frhlow7oucj21hc0u0183.jpg)",
    "url(https://tva4.sinaimg.cn/large/0072Vf1pgy1fodqo2pcz9j31kw0zkkjl.jpg)",
    "url(https://tva2.sinaimg.cn/large/87c01ec7gy1frmbmee7xuj21hc0u07wh.jpg)",
    "url(https://tva2.sinaimg.cn/large/005BYqpgly1frn9eg0kmtj31kw0o04qp.jpg)",
    "url(https://tva2.sinaimg.cn/large/0072Vf1pgy1foxlhcoxbbj31kw0w0tz3.jpg)",
    "url(https://tva4.sinaimg.cn/large/0075auPSly1fqb9bqdf81j31kw0xanpe.jpg)",
    "url(https://tva2.sinaimg.cn/large/87c01ec7gy1fri8svp33pj21kn0vv7wi.jpg)"
];
//获取banner图片总数，生成随机数
var bannerindex = Math.floor(Math.random() * bannerimg.length);
//重设banner图片
document.getElementById("page-header").style.backgroundImage = bannerimg[bannerindex];
console.log("加载成功")

document.getElementById("rightside_config").innerHTML = "设置";
document.getElementById("go-up").innerHTML = "顶部";
document.getElementById("darkmode").innerHTML = "深色";
document.getElementById("hide-aside-btn").innerHTML = "单栏";
document.getElementById("")