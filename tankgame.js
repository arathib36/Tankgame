var canvas = document.querySelector("canvas");
var i=1;
var raf;var p=0;
var ang;
var p1=0;var p2=0;
var vel;var height;var rweight;var lweight;
var m1=5;
var m2=5;
var miss;var token=0;
canvas.width=window.innerWidth;
canvas.height=450;
var Starttime;var pausetime=0;var resumetime=0;var getdate=0;
var c =canvas.getContext('2d');
c.fillStyle = "#B27B0D";
c.fill();
c.fillRect(0,420,window.innerWidth,30);
height = Math.floor((Math.random() * 100) + 100);
rweight =Math.floor((Math.random() * 100) );
lweight=Math.floor((Math.random() * 100) );
function tank(){
c.fillStyle = "black";
c.fill();
c.fillRect(80,380,70,40);
c.fillRect(800,380,70,40);
c.fillStyle = "#B27B0D";
c.fill();
c.fillRect(0,420,window.innerWidth,30);

}

function mount(){
c.beginPath();
c.moveTo(350, 420);
c.lineTo((350+lweight), height);
c.lineTo((550-rweight), height);
c.lineTo((550), 420);
c.closePath();
c.lineWidth = 10;
c.strokeStyle = '#666666';
c.stroke();
c.fillStyle = "#A52A2A";
c.fill();}

var ball = {
  x: 150,
  y: 377,
  
  
  draw: function() {
    miss=document.getElementById("missile").value;
    if(miss==1){ball.radius=1;ball.color='red';token=1;}
    else if (miss==2){ball.radius=2;ball.color='blue';token=3;}
    else if (miss==3){ball.radius=3;ball.color='green';token=5;}

    c.beginPath();
    c.arc(this.x, this.y, ball.radius, 0, Math.PI * 2, true);
    c.closePath();
    c.fillStyle = this.color;
    c.fill();
    c.lineWidth = 1;
    c.strokeStyle = 'black';
    c.stroke(); 

    vel=document.getElementById("power").value;
    if(vel==1){ball.v=4*Math.sqrt(5);}
    else if(vel==2){ball.v=5*Math.sqrt(5);}
    else if(vel==3){ball.v=5.5*Math.sqrt(5);} 
       
    ball.vx= (ball.v*Math.cos(ang/180*Math.PI));
    ball.vy= (ball.v*Math.sin(ang/180*Math.PI));
  }
};

function draw() {
  
  p=1;
  var mtime= (new Date());
  
  time=(mtime-Starttime-(resumetime-pausetime))/1000;
 
  c.clearRect(0,0, canvas.width, canvas.height);
  tank();
  mount();
  
if(i%2==1)
  {ball.draw();
    if(m1<=0)
    {window.cancelAnimationFrame(raf);p=0;i++;alert("Sorry!You are out of coins");
      if(i<=6)
           {play();}
     } 
   else if(m1-miss<0){ window.cancelAnimationFrame(raf);p=0;alert("Sorry!You don't have enough coins");play();}
    

  else{

 

   if((( (-ball.y)+height<=(420-height /lweight)*((ball.x)-(350+lweight))) && (ball.x)<=350+lweight &&    (ball.x)>=350)  || (((-ball.y)+height<=(-(420-height) /rweight)*((ball.x)-(550-rweight))) && (ball.x)<=550 &&    (ball.x)>=(550-rweight)|| (ball.x>=(350+lweight) && ball.x<=(550-rweight) && ball.y>=height)))
    {
    window.cancelAnimationFrame(raf);p=0;
           i++;m1-=miss;document.getElementById("coin1").innerHTML="0"+m1;
            if(i<=6)
           {play();}
    }
    else if(ball.x<=870  && ball.x>=800 && ball.y>=380 )
   {window.cancelAnimationFrame(raf);
      p1+=token;
      p=0;
    document.getElementById("p1").innerHTML="0"+p1;
    
           i++;m1-=miss;document.getElementById("coin1").innerHTML="0"+m1;
            if(i<=6)
           {play();}
  }



    else
      {ball.x += ball.vx*time;
       ball.y -= (time*ball.vy-0.5*10*time*time);
         if(ball.x>window.innerWidth ||ball.y>=420||ball.x<0)
        {window.cancelAnimationFrame(raf);p=0;
           i++; m1-=miss;document.getElementById("coin1").innerHTML="0"+m1;
          if(i<=6)
           {play();}
         }
        else{
        raf = window.requestAnimationFrame(draw);
           }
      }

}   
  if(i>6)
{if(p1>p2)
{
alert("Player 1 wins!!");rest();}
else if(p1<p2)
alert("Player 2 wins!!");
else 
alert("Match Draw");
}


}

else
  {ball2.draw();
    if(m2<=0)
    {window.cancelAnimationFrame(raf);p=0;i++;alert("Sorry!You are out of coins");
      if(i<=6)
           {play();}
     }  
    else if(m2-miss<0){ window.cancelAnimationFrame(raf);p=0;alert("Sorry!You don't have enough coins");play();} 
  

   else
   {
    if((( (-ball2.y)+height<=(420-height /lweight)*((ball2.x)-(350+lweight))) && (ball2.x)<=350+lweight &&    (ball2.x)>=350)  || (((-ball2.y)+height<=(-(420-height) /rweight)*((ball2.x)-(550-rweight))) && (ball2.x)<=550 &&    (ball2.x)>=(550-rweight)|| (ball2.x>=(350+lweight) && ball2.x<=(550-rweight) && ball2.y>=height)))
    {
     window.cancelAnimationFrame(raf);p=0;
          i++;m2-=miss;document.getElementById("coin2").innerHTML="0"+m2;
          if(i<=6)
           {play();}
  }
   else if(ball2.x<=150  && ball2.x>=80 && ball2.y>=380 )
   {window.cancelAnimationFrame(raf);p2+=token;
    p=0;
    document.getElementById("p2").innerHTML="0"+p2;
           i++;m2-=miss;document.getElementById("coin2").innerHTML="0"+m2;
            if(i<=6)
           {play();}
  }
  else
  {ball2.x += ball2.vx*time;
  ball2.y -= (time*ball2.vy-0.5*10*time*time);
  if(ball2.x>window.innerWidth ||  ball2.y>420 || ball2.x<0)
        {window.cancelAnimationFrame(raf);p=0;
          i++;m2-=miss;document.getElementById("coin2").innerHTML="0"+m2;
          if(i<=6)
           {play();}

        }
  else{
  raf = window.requestAnimationFrame(draw);}
 }
}

if(i>6)
{if(p1>p2)
{alert("Player 1 wins!!Click Restart to play again");}
else if(p1<p2)
alert("Player 2 wins!!Click Restart to play again ");
else 
alert("Match Draw");
}


}}

var ball2 = {
  x: 800,
  y: 377,
  
  
  
  draw: function() {
    miss=document.getElementById("missile").value;
    if(miss==1){ball2.radius=1;ball2.color='red';token=1;}
    else if (miss==2){ball2.radius=2;ball2.color='blue';token=3;}
    else if (miss==3){ball2.radius=3;ball2.color='green';token=5;}

    c.beginPath();
    c.arc(this.x, this.y, ball2.radius, 0, Math.PI * 2, true);
    c.closePath();
    c.fillStyle = this.color;
    c.fill();
    c.lineWidth = 1;
    c.strokeStyle = 'black';
    c.stroke(); 
    
    vel=document.getElementById("power").value;
    if(vel==1){ball2.v=4*Math.sqrt(5);}
    else if(vel==2){ball2.v=5*Math.sqrt(5);}
    else if(vel==3){ball2.v=5.5*Math.sqrt(5);} 
    ball2.vx= -(ball2.v*Math.cos(ang/180*Math.PI));
    ball2.vy= (ball2.v*Math.sin(ang/180*Math.PI));
  }
};



function play(){
c.clearRect(0,0, canvas.width, canvas.height);
  tank();
  mount();



if(i%2==1)
{ball.x=150;
  ball.y=377;
ball.draw();
}

else
{ ball2.x= 800;
  ball2.y= 377;
ball2.draw();

}
console.log(i);
pausetime=0;
resumetime=0;

}

button.addEventListener('click', function(e) {
  ang=document.getElementById("angle").value;
  if(ang==""){ang=70;}
  
  Starttime= (new Date());p=1;
  raf = window.requestAnimationFrame(draw);
});

pause.addEventListener('click', function(e) 
{
if(p==1)
{window.cancelAnimationFrame(raf);
getdate=(Number(new Date()));
pausetime=pausetime+getdate;}
canvas.style.background="#eee";

document.getElementById("button").disabled = true;
document.getElementById("power").disabled = true;
document.getElementById("missile").disabled = true;
document.getElementById("resume").disabled = false;
document.getElementById("pause").disabled = true;
});

resume.addEventListener('click', function(e) {
if(p==1)
{raf = window.requestAnimationFrame(draw);
getdate=(Number(new Date()));
resumetime=resumetime+getdate;
}
else
{play();}
canvas.style.background="yellow";
document.getElementById("button").disabled = false;
document.getElementById("power").disabled = false;
document.getElementById("resume").disabled = true;
document.getElementById("missile").disabled = false;
document.getElementById("pause").disabled = false;
});

restart.addEventListener('click', function(e) {
rest();
});

function rest()
{if(p==1)
{window.cancelAnimationFrame(raf);}
alert("New game will begin");
i=1;p1=0;p2=0;p=0;m1=5;m2=5;
document.getElementById("p1").innerHTML="0"+p1;
document.getElementById("p2").innerHTML="0"+p2;
document.getElementById("coin1").innerHTML="0"+m1;
document.getElementById("coin2").innerHTML="0"+m2;
document.getElementById("button").disabled = false;
document.getElementById("power").disabled = false;
document.getElementById("resume").disabled = true;
document.getElementById("missile").disabled = false;
height = Math.floor((Math.random() * 100) + 100);
rweight =Math.floor((Math.random() * 100) );
lweight=Math.floor((Math.random() * 100) );
play();

}



play();

