
PFont main_font;
void setup(){
  size(935,800);
  main_font = createFont("Meiryo", 50);
  textFont(main_font);
}
void draw(){
  background(255);
  PImage logo=loadImage("logo.png");
  image(logo, 0, 0);
  fill(114, 236, 252);
  //noStroke();
  rect(535,0,200,95);
  rect(735,0,200,95);
  fill(0);
  textSize(25);
  text("学 校 案 内", 565,60);
  text("コース・専攻科", 750,60);
  
  textSize(20);
  fill(0);
  text("お知らせ",30,150);
  text("ニュース",30,350);
  fill(255);
  rect(50,170,600,160);
  rect(50,370,600,160);
  
  rect(700,150,220,30);
  fill(114, 236, 252);
  rect(870, 150, 50, 30);
  fill(180);
  text("google検索", 705, 170);
  fill(0);
  text("検索", 875, 174);
  
  fill(255,255,0);
  rect(700, 190, 220, 70);
  fill(0);
  textSize(40);
  text("学生活動", 720, 240);
  
  fill(255,255,0);
  rect(700, 280, 220, 70);
  fill(0);
  textSize(40);
  text("進路情報", 720, 330);
  
  fill(255,255,0);
  rect(700, 370, 220, 70);
  fill(0);
  textSize(40);
  text("入試情報", 720, 420);
  
  fill(114, 236, 252);
  rect(0, 570, 935, 230);
 
}
