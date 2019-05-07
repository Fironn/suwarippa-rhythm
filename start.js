var can = document.getElementById("note");
var chr=document.getElementById("chair");
var ctx = can.getContext("2d");
var chx= chr.getContext("2d");
var width;
var height;
var timer=[];

var color=['rgb(51,77,92)','rgb(147,237,212)','rgb(243,245,196)','rgb(249,203,143)','rgb(241,145,129)'];
var colorSec=['rgb(44,135,145)','rgb(96,156,139)','rgb(180,181,145)','rgb(212,173,122)','rgb(186,112,100)'];

// var count = 0;//アニメーションカウンター
var countdata=0;
const BPM=200;

onload= function init(){
  // var count=0;
  getScreenHeight();
  getScreenWidth();
  chx.beginPath();
  chx.fillRect(width/2-60,height/2-60,120,120);
  chx.fillStyle = color[0];
  chx.fill();
  for(var i=1;i<5;i++)filltri(i);
  // time(0);
  // start();
  // console.log(height);
  // console.log(countdata);
  while(countdata<data.length){
    time(countdata);
    // console.log(countdata);
  }
}

function time(datanum){
  var count=0;
  timer[datanum]=setInterval(function(){
    if(data[datanum]==1){
      ctx.fillStyle="#fff";
      ctx.clearRect(width/3,(count-1)*5-datanum*height/5,120,10);
      if((count-1)*5-datanum*height/5>=height/2){
        // console.log(data[datanum]);
        ctx.fillStyle="#fff";
        ctx.clearRect(width/3,(count)*5-datanum*height/5,120,20);
        clearInterval(timer[datanum]);
      }
      ctx.fillStyle=color[1];
      ctx.fillRect(width/3,count*5-datanum*height/5,120,10);
    }else if(data[datanum]==2){
      ctx.fillStyle="#fff";
      ctx.clearRect(width/3,height-(count-1)*5+datanum*height/5,120,10);
      if(height-(count-1)*5+datanum*height/5<=height/2){        
        // console.log(data[datanum]);
        ctx.fillStyle="#fff";
        ctx.clearRect(width/3,height-(count-1)*5+datanum*height/5,120,20);
        clearInterval(timer[datanum]);
      }
      ctx.fillStyle=color[2];
      ctx.fillRect(width/3,height-count*5+datanum*height/5,120,10);
    }else if(data[datanum]==3){
      ctx.fillStyle="#fff";
      ctx.clearRect((count-1)*5-datanum*width/5,height/2-20,10,120);
      if((count-1)*5-datanum*width/5>=width/2){
        // console.log(data[datanum]);
        ctx.fillStyle="#fff";
        ctx.clearRect((count-1)*5-datanum*width/5,height/2-20,10,120);
        clearInterval(timer[datanum]);
      }
      ctx.fillStyle=color[3];
      ctx.fillRect(count*5-datanum*width/5,height/2-20,10,120);
    }else if(data[datanum]==4){
      ctx.fillStyle="#fff";
      ctx.clearRect(width-(count-1)*3+datanum*width/5,height/2-20,10,120);
      if(width-(count-1)*3+datanum*width/5<=width/2){
        // console.log(data[datanum]);
        ctx.fillStyle="#fff";
        ctx.clearRect(width-(count-1)*3+datanum*width/5,height/2-20,10,120);
        clearInterval(timer[datanum]);
      }
      ctx.fillStyle=color[4];
      ctx.fillRect(width-count*3+datanum*width/5,height/2-20,10,120);
    }else{
      if(width-(count-1)*3+datanum*width/5>=width/2){
        // console.log(data[datanum]);
        clearInterval(timer[datanum]);
      }
    }
    count++;
    // console.log(count);
    // if(count+height/10*j>=height/2)i++;
  },70);
  // console.log(datanum);
  countdata++;
}


function getScreenWidth() {
	width= window.parent.screen.width ;
  can.width=width;
  chr.width=width;
}
function getScreenHeight(){
  height= window.parent.screen.height;
  can.height=height;
  chr.height=height;
}

function filltriSec(num){
  if(num==3){
    chx.beginPath();
    chx.moveTo(width/2-60,height/2-60);
    chx.lineTo(width/2,height/2);
    chx.lineTo(width/2-60,height/2+60);
    chx.closePath();
    chx.fillStyle=colorSec[3];
    chx.fill();
  }else if(num==1){
    chx.beginPath();
    chx.moveTo(width/2-60,height/2-60);
    chx.lineTo(width/2,height/2);
    chx.lineTo(width/2+60,height/2-60);
    chx.closePath();
    chx.fillStyle=colorSec[1];
    chx.fill();
    chx.beginPath();
  }else if(num==4){
    chx.moveTo(width/2+60,height/2-60);
    chx.lineTo(width/2,height/2);
    chx.lineTo(width/2+60,height/2+60);
    chx.closePath();
    chx.fillStyle=colorSec[4];
    chx.fill();
  }else if(num==2){
    chx.beginPath();
    chx.moveTo(width/2+60,height/2+60);
    chx.lineTo(width/2,height/2);
    chx.lineTo(width/2-60,height/2+60);
    chx.closePath();
    chx.fillStyle=colorSec[2];
    chx.fill();
  }
}

function filltri(num){
  if(num==1){
    chx.beginPath();
    chx.moveTo(width/2-60,height/2-60);
    chx.lineTo(width/2,height/2);
    chx.lineTo(width/2-60,height/2+60);
    chx.closePath();
  }else if(num==2){
    chx.fillStyle=color[3];
    chx.fill();
    chx.beginPath();
    chx.moveTo(width/2-60,height/2-60);
    chx.lineTo(width/2,height/2);
    chx.lineTo(width/2+60,height/2-60);
    chx.closePath();
  }else if(num==3){
    chx.fillStyle=color[1];
    chx.fill();
    chx.beginPath();
    chx.moveTo(width/2+60,height/2-60);
    chx.lineTo(width/2,height/2);
    chx.lineTo(width/2+60,height/2+60);
    chx.closePath();
  }else if(num==4){
    chx.fillStyle=color[4];
    chx.fill();
    chx.beginPath();
    chx.moveTo(width/2+60,height/2+60);
    chx.lineTo(width/2,height/2);
    chx.lineTo(width/2-60,height/2+60);
    chx.closePath();
    chx.fillStyle=color[2];
    chx.fill();
  }
}