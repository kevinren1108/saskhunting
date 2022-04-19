import React, { Component } from 'react';

class Home extends Component {
    
    render() { 
        return (
            <div>
                买枪
                <ul>
                    <li>
                        <a href={"https://www.rangeviewsports.ca/"}>华威枪店</a>
                    </li>
                    <li>
                        <a href={"https://www.gotenda.com/"}>腾达枪店</a>
                    </li>
                    <li>
                        <a href={"https://g4cgunstore.com/"}>G4C枪店</a>
                    </li>
                    <li>
                        <a href={"https://www.cabelas.ca/"}>坎贝拉</a>
                    </li>
                    <li>
                        <a href={"https://www.prairieguntraders.ca/"}>小镇枪店(里贾纳往南50km)</a>
                    </li>
                    <li>
                        <a href={"https://tntgunworks.com/"}>Tnt枪店(里贾纳市内)</a>
                    </li>
                    <li>
                        <a href={"https://bit.ly/3qSwSgM"}>私人之间枪支转让收据范本</a>
                    </li>   
                </ul>
                靶场
                <ul>
                    <li>
                        <a href={"https://rfgl.net/"}>北靶场</a>
                    </li>
                    <li>
                        <a href={"https://reginawildlifefederation.com/"}>东靶场</a>
                    </li>
                    <li>
                        <a href={"http://www.reginatrapandskeet.com/"}>飞碟靶场</a>
                    </li>
                </ul>         
                跟射击有关的
                <ul>
                    <li>
                        <a href={"/ftr"}>第一次去靶场</a>
                    </li>
                    <li>
                        <a href={"https://www.nssf.org/shooting/targets/"}>可打印靶纸PDF下载</a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/watch?v=g7ZA7oiN3E0">如何安装瞄准镜（视频)</a>
                    </li>
                    <li>
                        <a href="https://zh.wikihow.com/%E6%A0%A1%E5%87%86%E6%AD%A5%E6%9E%AA">如何校准瞄准镜（图文版)</a>
                    </li>
                    <li>
                        <a href="https://www.bilibili.com/read/cv11567223"> 如何校准瞄准镜（理论硬核版）</a>                  
                    </li>
                </ul>
                买猎票
                <ul>
                    <li>
                        <a href={"https://www.permis-permits.ec.gc.ca/en/PurchaseHuntingPermit"}>购买联邦鸟票</a>
                    </li>
                    <li>
                        <a href={"https://www.saskatchewanhal.ca/licensing.page"}>购买萨省猎票</a>
                    </li>
                    <li>
                        <a href={"http://environment.gov.sk.ca/adx/aspx/adxGetMedia.aspx?DocID=3365f7b7-c444-4170-be39-4ef629d041c4"}>萨省猎票购买及使用指南</a>
                    </li>
                </ul>
                狩猎指南
                <ul>
                    <li>
                        <a href={"https://publications.saskatchewan.ca/api/v1/products/68827/formats/93283/download"}>2022年萨省狩猎指南</a>
                    </li>
                </ul>
                法律相关
                <ul>
                    <li>
                        <a href={"https://pubsaskdev.blob.core.windows.net/pubsask-prod/2841/W13-1r1.pdf"}>野生动物管理法</a>
                    </li>
                    <li>
                    <a href={"https://pubsaskdev.blob.core.windows.net/pubsask-prod/archived/37041/1930-CH-208.pdf"}>猎物法</a>
                    </li>
                </ul>
            </div>
        );
    }
}
 
export default Home;