import Parser from "rss-parser";
import "aws-sdk";
import { from } from "linq-to-typescript";
( async () => {
let parser = new Parser();
let feed = await parser.parseURL('');
feed.items?.forEach((item)=>(console.log(item.link)))

})()