const url = "https://api.github.com/users/";
const searchbtn=document.querySelector(".searchbox button")
const inputval=document.querySelector("input")
const modename=document.querySelector(".nav button").firstElementChild
const modesymbo=modename.nextElementSibling;
const modesymbol=modesymbo.firstElementChild
// console.log(modesymbol)
searchbtn.addEventListener("click",()=>{
    if(inputval.value!==""){
    getUserData(url+inputval.value)}
})
inputval.addEventListener("keydown",(e)=>{
    if(e.key==="Enter"){
        if(inputval.value!==""){
            getUserData(url+inputval.value)}   
    }
},false)
async function getUserData(giturl){
    const res=await fetch(giturl)
    const data=await res.json();
    if(!data){
        throw data
    }
    updateProfile(data);
}
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const noresult=document.querySelector(".err")
function updateProfile(data){
    noresult.style.scale=0
    if(data?.message!=="Not Found"){
    function checknull(apiItem,domItem){
    if(apiItem===null || apiItem===""){
        domItem.style.opacity=0.5
        domItem.previousElementSibling.style.opacity=0.5
        return false
    }
    else return true;
    }
    const userimg=document.querySelector("[data-profilepic]")
    const name=document.querySelector("[data-name]")
    const userid=document.querySelector("[data-id]")
    const date=document.querySelector("[data-joindate]")
    const bio=document.querySelector("[data-bio]")
    const repos=document.querySelector("[data-posts]")
    const followers=document.querySelector("[data-followers]")
    const followings=document.querySelector("[data-followings]")
    const location=document.querySelector("[data-location]")
    const link=document.querySelector("[data-link]")
    const twitter=document.querySelector("[data-twitter]")
    const work=document.querySelector("[data-work]")
    userimg.src=`${data.avatar_url}`;
    name.innerText=data?.name;
    userid.innerText=`@${data?.login}`;
    let dateseg=data?.created_at.split("T").shift().split("-");
    date.innerText=`Joined ${dateseg[2]} ${month[dateseg[1]-1]} ${dateseg[0]}`
if(data?.bio!=null){
    bio.innerText=data?.bio;
}
else{
    bio.innerText="This Profile has no Bio"
}
repos.innerText=data?.public_repos;
repos.href=data?.repos_url;
followers.innerText = data?.followers;
followers.href = data?.followers_url;
followings.innerText = data?.following;
followings.href = data?.following_url;
if(checknull(data?.location,location))
{location.innerText=data?.location}
else{
    location.innerText="NOT AVAILABLE"
}
if(checknull(data?.blog,link))
    {link.innerText=data?.blog}
else{
   link.innerText="NOT AVAILABLE"
    }
link.href=checknull(data?.blog,link) ? data?.blog : "#";
if(checknull(data?.twitter_username,twitter))
    {twitter.innerText=data?.twitter_username}
else{
     twitter.innerText="NOT AVAILABLE"
    }
    twitter.href= checknull(data?.twitter_username, twitter) ? `https://twitter.com/${data?.twitter_username}` : "#";
    if(checknull(data?.company,work))
        {work.innerText=data?.company}
        else{
        work.innerText="NOT AVAILABLE"
        }
    }
    else{
        noresult.style.scale = 1;
        setTimeout(() => {
            noresult.style.scale = 0;
        }, 2500);
    }
}
const namee=document.querySelector("[data-name]")
const rootstyle=document.documentElement.style
getUserData(url+"loveBabbar");
function enablelightmode(){
 rootstyle.setProperty("--bgcolor","#F6F8FF")
 rootstyle.setProperty("--fontcolor","#4B6A9B")
 rootstyle.setProperty("--buttonhovercolor","#60ABFF")
 rootstyle.setProperty("--buttoncolor","#0079ff")
 rootstyle.setProperty("--containercolor","#FFFFFF")
 namee.style.color="Black"
 namee.style.fontWeight="600"
 searchbtn.style.color="White"
modename.innerText="Dark"
console.log(modesymbol)
modesymbol.innerHTML=`<path
        d="M19.513 11.397a.701.701 0 00-.588.128 7.496 7.496 0 01-2.276 1.336 7.101 7.101 0 01-2.583.462 7.505 7.505 0 01-5.32-2.209 7.568 7.568 0 01-2.199-5.342c0-.873.154-1.72.41-2.49a6.904 6.904 0 011.227-2.21.657.657 0 00-.102-.924.701.701 0 00-.589-.128C5.32.61 3.427 1.92 2.072 3.666A10.158 10.158 0 000 9.83c0 2.8 1.125 5.342 2.967 7.19a10.025 10.025 0 007.16 2.98c2.353 0 4.527-.822 6.266-2.183a10.13 10.13 0 003.58-5.624.623.623 0 00-.46-.796z"
        fill="#697C9A" fill-rule="nonzero" />`
        console.log(modesymbol)
localStorage.setItem("mode","lightmode")

}
function enabledarkmode(){
    rootstyle.setProperty("--bgcolor","#141D2F")
    rootstyle.setProperty("--fontcolor","#FFFFFF")
    rootstyle.setProperty("--buttonhovercolor","#60ABFF")
    rootstyle.setProperty("--buttoncolor","#0079ff")
    rootstyle.setProperty("--containercolor","#1E2A47")
    modesymbol.innerHTML=`<g fill="#FFF" fill-rule="nonzero">
                    <path
                        d="M13.545 6.455c-.9-.9-2.17-1.481-3.545-1.481a4.934 4.934 0 00-3.545 1.481c-.9.9-1.481 2.17-1.481 3.545 0 1.376.582 2.646 1.481 3.545.9.9 2.17 1.481 3.545 1.481a4.934 4.934 0 003.545-1.481c.9-.9 1.481-2.17 1.481-3.545a4.934 4.934 0 00-1.481-3.545zM10 3.413a.7.7 0 00.688-.688V.688A.7.7 0 0010 0a.7.7 0 00-.688.688v2.037a.7.7 0 00.688.688zM15.635 5.344l1.455-1.455a.67.67 0 000-.952.67.67 0 00-.952 0l-1.455 1.455a.67.67 0 000 .952c.238.264.66.264.952 0zM19.312 9.312h-2.037a.7.7 0 00-.688.688.7.7 0 00.688.688h2.037A.7.7 0 0020 10a.7.7 0 00-.688-.688zM15.608 14.656a.67.67 0 00-.952 0 .67.67 0 000 .952l1.455 1.455a.67.67 0 00.952 0 .67.67 0 000-.952l-1.455-1.455zM10 16.587a.7.7 0 00-.688.688v2.037A.7.7 0 0010 20a.7.7 0 00.688-.688v-2.037a.7.7 0 00-.688-.688zM4.365 14.656L2.91 16.111a.67.67 0 000 .952.67.67 0 00.952 0l1.455-1.455a.67.67 0 000-.952c-.238-.264-.66-.264-.952 0zM3.413 10a.7.7 0 00-.688-.688H.688A.7.7 0 000 10a.7.7 0 00.688.688h2.037A.7.7 0 003.413 10zM4.365 5.344a.67.67 0 00.952 0 .67.67 0 000-.952L3.862 2.937a.67.67 0 00-.952 0 .67.67 0 000 .952l1.455 1.455z" />
                </g>`
 localStorage.setItem("mode","darkmode")
modename.innerText="Light"
namee.style.color="White"
}
let currmode=localStorage.getItem("mode");
const modebtn=document.querySelector(".nav button")
modebtn.addEventListener("click",()=>{
    if(currmode==="darkmode") 
        {
           currmode="lightmode";
            enablelightmode();}
    else {currmode="darkmode";
        enabledarkmode();}
})