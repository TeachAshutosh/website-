


<script>
<!DOCTYPE html>
<!-- === Coding by CodingLab | www.codinglabweb.com === -->
<html lang="en" dir="ltr">
<head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, use-scalable=no">

    <!-- ===== CSS ===== -->
    <link rel="stylesheet" href="style.css">
        
    <!-- ===== Boxicons CSS ===== -->
    <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet'>
    
    <!-botrom icon --->
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<script src="https://code.jquery.com/jquery-3.4.1.js"></script>
    <script src="pace.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/jquery-bez@1.0.11/src/jquery.bez.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/TweenMax.min.js"></script>

    <!--<title>Responsive Navigation Menu Bar</title>-->
</head>
  
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  
  
  
  
<style type="text/css" media="all">
  /* ===== Google Font Import - Poppins ===== */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');

{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    transition: all 0.4s ease;;
}


/* ===== Colours ===== */
:root{
  --body-color:white;
    --ody-color: #E4E9F7;
    --nav-color: #4070F4;

    --side-nav: #010718;
    --text-color: #FFF;
    --search-bar: #F2F2F2;
    --search-text: #010718;
}

bod{
    height: 100vh;
    min-zoom: 0.75;
    max-zoom: 1.5;
    background-color: var(--body-color);
}

body.dark{
    --body-color: #18191A;
    color: yellow;
    --nav-color: #242526;
    --side-nav: #242526;
    --text-color:#CCC;
    --search-bar: #242526;
}


nav{
    position: fixed;
    top: 0;
    left: 0;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    height: 55px;
    width: 100%;
    background-color: var(--nav-color);
    z-index: 100;
}

#heud{
 font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  
  
}
a{text-decoration:none}


body.dark #fugh{
    border: 1px solid #393838;

}

#fugh .nav-bar{
    position: relative;
    height: 100%;
    max-width: 1000px;
    width: 100%;
    background-color: var(--nav-color);
    margin: 0 auto;
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.nav-bar .sidebarOpen{
    color: var(--text-color);
    font-size: 25px;
    padding: 5px;
    cursor: pointer;
    display: none;
}

nav .nav-bar .logo a{
    font-size: 25px;
    font-weight: 500;
    color: var(--text-color);
    text-decoration: none;
}

.menu .logo-toggle{
    display: none;
}

.nav-bar .nav-links{
    display: flex;
    
    align-items: center;
}

.nav-bar .nav-links li{
    margin: 0 5px;
   
    list-style: none;
}

.nav-links li a{
    position: relative;
    font-size: 17px;
    font-weight: 400;
    color: var(--text-color);
    text-decoration: none;
    padding: 10px;
}

.nav-links li a::before{
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    height: 6px;
    width: 6px;
    border-radius: 50%;
    background-color: var(--text-color);
    opacity: 0;
    transition: all 0.3s ease;
}

.nav-links li:hover a::before{
    opacity: 1;
}

.nav-bar .darkLight-searchBox{
    display: flex;
    align-items: center;
}

.darkLight-searchBox .dark-light,
.darkLight-searchBox .searchToggle{
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
}

.dark-light i,
.searchToggle i{
    position: absolute;
    color: var(--text-color);
    font-size: 22px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.dark-light i.sun{
    opacity: 0;
    pointer-events: none;
}

.dark-light.active i.sun{
    opacity: 1;
    pointer-events: auto;
}

.dark-light.active i.moon{
    opacity: 0;
    pointer-events: none;
}

.searchToggle i.cancel{
    opacity: 0;
    pointer-events: none;
}

.searchToggle.active i.cancel{
    opacity: 1;
    pointer-events: auto;
}

.searchToggle.active i.search{
    opacity: 0;
    pointer-events: none;
}

.searchBox{
    position: relative;
}

.searchBox .search-field{
    position: absolute;
    bottom: -85px;
    right: 5px;
    height: 50px;
    width: 300px;
    display: flex;
    align-items: center;
    background-color: var(--nav-color);
    padding: 3px;
    border-radius: 6px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease;
}

.searchToggle.active ~ .search-field{
    bottom: -74px;
    opacity: 1;
    pointer-events: auto;
}

.search-field::before{
    content: '';
    position: absolute;
    right: 14px;
    top: -4px;
    height: 12px;
    width: 12px;
    background-color: var(--nav-color);
    transform: rotate(-45deg);
    z-index: -1;
}

.search-field input{
    height: 100%;
    width: 100%;
    padding: 0 45px 0 15px;
    outline: none;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 400;
    color: var(--search-text);
    background-color: var(--search-bar);
}

body.dark .search-field input{
    color: var(--text-color);
}

.search-field i{
    position: absolute;
    color: var(--nav-color);
    right: 15px;
    font-size: 22px;
    cursor: pointer;
}

body.dark .search-field i{
    color: var(--text-color);
}

@media (max-width: 790px) {
    nav .nav-bar .sidebarOpen{
        display: block;
    }

    .menu{
        position: fixed;
        height: 100%;
        width: 220px;
        left: -100%;
        top: 0;
        padding: 20px;
        background-color: var(--side-nav);
        z-index: 100;
        transition: all 0.4s ease;
    }

    nav.active .menu{
        left: -0%;
    }

    nav.active .nav-bar .navLogo a{
        opacity: 0;
        transition: all 0.3s ease;
    }

    .menu .logo-toggle{
        display: block;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .logo-toggle .siderbarClose{
        color: var(--text-color);
        font-size: 24px;
        cursor: pointer;
    }

    .nav-bar .nav-links{
        flex-direction: column;
        padding-top: 30px;
    }

    .nav-links li a{
        display: block;
        margin-top: 20px;
    }
}



  
  
  
  

#bottom{
  width: 100%;
 height:40px;
 padding-bottom:px;
 background-colo:#6666ff;
 background-color:  #4070F4;
  
  
}
#icon{
  margin-top: 0px;
  font-size: 30px;
  padding-bottom:20px;
  letter-spacing: ;
  width: 100%;
  display: inline;
  text-align: center;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  
  
}

.fa{
 color: white;
  width: 20%;
  text-align: center;
  margin-left:5px;
}
.fa:hover{
 
  color:red;
  border:1px solid white;
  padding-top: 5px;
  padding-bottom: 6.9px;
  padding-right:5px;
  padding-left:5px;
  
  border-radius:10px;
  
  
  
  
}
  
   .VdoMp{
     margin-top:10px;
  padding-left: 7px;
  padding-right: 7px;
   top: 0px;
 
 background-color:#fff;

   display: flex;
 
   overflow-y:auto;
 }
 .VdoMp .IfVdo{
   width:100%;
height:auto;
  margin-bottom:0px;
 
   
 }
  
  
  
  
  
**// Top image slider *//
.images .content{
  display:flex;
  
  
}
#slid{
  border-radius: 10px;
 
  
  
}
  
  
  #fh,#gh{
  width: 42%;
  
 padding-top: 10px;
 padding-bottom:10px;
 padding-left:15px;
 padding-right:15px;
 
  
}
#fh{
  margin-left: 30px;
  
  
}
.mn,.mo,.mp,.mq,.mm,.ml{
  background-color:#FF0000;
  border: none;
  color: white;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-weight: bold;
  font-size: 18px;
  border-radius: 10px;
  
}
.mm{
  background-color: #3E1EFF;
}
.mn,.mq{
  background-color: #3E1EFF;
}
.mo{
 background-color:red;
  
}
button:hover{
  background-color: black;
  color: yellow;
  
}
  
  
  
 /** Demo_v */
  
  .wrapper{
 
   display: flex;
   overflow-y: auto;
   margin-bottom:2px;
   max-height:195px;
   min-height:195px;
 
   
 }
 .wrapper ::-webkit-scrollbar{
  display: none;
   
   
 }
 
 
 .item{
    height:180px;
    width: 100%;
   min-width: 320px;
    
    border-radius:8px;
  
    margin-left:10px;
    text-align: center;
    
    
   
  
    
  }
  .Demo_v{
    border: 1px solid blue;
    border-radius:8px;
    padding-top:2px;
    padding-bottom:2px;
    padding-left:1px;
    padding-right:1px;
   
    
    
  }
  
  
  
 
   
   
   
 
 
  
  #Img1{
   width:100%;

  border-radius:10px;
   padding-top:10px;
   margin-bottom:0px;
 } 
.course2, .Course1{
  width:320px;
  
  
   background-color:
     

   
   padding-bottom:20px;
   box-shadow: 0 5px 10px rgba(0,0, 0, .50);
   border-radius:12px;
  
}
#C1{
  
  
  
}
 .box1{
   height: 800px;
 }
 
 
 .box2{
  
   
   
 }
 
 #cbtn{
   color: #262626;
   background-co
or: #f2f2f2;
   border: none;
   padding-left: 8px;
   padding-right: 8px;
   border-radius:2px;
   text-align: center;
   font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
   text-transform: uppercase;

 }
 #cbtnd{
   padding-left: 20px;
   padding-top:8px;
   
 }
 
 .Ctittle{
   margin:0;
   padding-top: 5px;
   padding-left:20px;
   padding-right:20px;
   font-size:15px;
   font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
   line-height:20px;
 }
 .Point{
   font-size: 12px; 
   
   padding-left:40px;
   
   line-height:19px; font-weight: bold; font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
 }
  .CD{
   margin-top:px;
   
   
   
 }
 .DT{
   color: orangered;
   font-family: Georgia, 'Times New Roman', Times, serif;
   padding-left: 30px;
   padding-top: 15px;
   margin: 0;
   
   
 }
 .cross{
   text-decoration: line-through;
   color: #808080;
  
 }
.Off{
  color: orangered; padding-left:10px
  
}
   
   
 .Rate{
   margin-top: -50;
   
   
   
   
 }
 .price , .cross{
   margin:-15px;
   margin-top: -15px; margin-left: 15px
   
 }
 .Buybtn{
   width: 75%;
   height:40px;
   
   margin-bottom:40;
   background-color:#3366ff;
   border: 1px solid blueviolet;
   color: whitesmoke;
   border-radius: 10px;
   font-size: 17px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
   font-weight: bold;
   
 }
 .Buybtn:hover{
   
   background-color: red;
   
 }
 .sliderwar{
   height:580px;
   top: 0px;
 background-color:#fff;
   padding: 2px;
   display: flex;
 
   overflow-y:auto;
 }
 .sliderwar .box1{
   width:100%;
   height: 400px;
  margin-bottom:0px;
 
   
 }
.C1{
  padding-left: 10px;
   
   
 }
  
  
  #heud{
  text-algin:center;
  float:right;
  display:none;
  
  }
  
.patti{
 text-align: left;
padding-left: 18px;
padding-top: 10px;
padding-bottom:9px;
  background-color:#e6e6e6;
 font-family: Georgia, 'Times New Roman', Times, serif;
 font-size:15px;

 margin-top: 12px;
 margin-bottom: 12px;

 width: 100%;

  color: #2B3429;
  
  
  
  
}
  
</style>




<body oncontextmenu="return False">

<h1 class="title"></h2>






  <div class="loader">
    <div></div>
  </div>
  <div class="content">
  
   
   
        

      
        
        











































































<div class="Cont" style="display:">
  
  
    <nav id="fugh" class="mtl">
        <div class="nav-bar">
            <i class='bx bx-menu sidebarOpen' ></i>
            <span class="logo navLogo"><a href="#">Teach Ashutosh</a></span>

            <div class="menu">
                <div class="logo-toggle">
                    <span class="logo"><a href="#" id="heud">Menu</a></span>
                    <i  class='bx bx-x siderbarClose'></i>
                </div>

                <ul class="nav-links">
                    <li><a href="go:SSupport">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>

            <div class="darkLight-searchBox">
                <div class="dark-light" >
                    <i class='bx bx-moon moon'></i>
                    <i class='bx bx-sun sun'></i>
                </div>

                <div class="searchBox" style="display:none">
                   <div class="searchToggle">
                    <i class='bx bx-x cancel'></i>
                    <i class='bx bx-search search'></i>
                   </div>

                    <div class="search-field">
                        <input type="text" placeholder="Search...">
                        <i class='bx bx-search'></i>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    
  </div>


  
  <div class="all_aap_screen" style="">
    
  
  
  
  <!-top image slider>
   <div class="content" style="margin: 0px; display:">
    <div class="images" style="margin: 0px">
  
  <center>
    <br>
 <br />

      <h3 class="patti" style="display: none">FREE VIDEOS</h3>
      <br />
     
       






<a href="#" onclick='window.open("https://youtu.be/Lt5Ln-jcsB8");return false;'>
   
      <img id="slid" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiMs41zY-xFRUjgPu0HKNeUzj4VMQhCtTFwKYXYyEC0sYgW9zNNZuF4Wv3dqNxNPgAadjB7WZtsWC6qMKtnebTCIMV-vRq1ZHbzi-o_cu726GbjKZD6Zs7eJhTFx0Fed_sOb_ntcr4qu7UElUslJoUoEhtvF2bgoL5KBnulBoANvgV4yFjNIoTlWxqm/s1280/20220504_125620_0000.png" width="95%">
       

  1
  
      
      </img>
    
    


    </a>
     
      
      <a href="#" onclick='window.open("https://youtu.be/Lt5Ln-jcsB8");return false;'>
      
      <img id="slid" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjNPftuaNq443-hl_f9mYUMbUoQXRbzZxnlyGnKOCpb3szmqfpfl-mO2Xm8YcTpddwsKJw353wc7pZ4USCL5C5MGm5g0pB10Lu1KHLPGPa1lFa0Qyz71Si5TnjS0B0HgOjU4udw4z_qROzWPni6pjXGkGGjPQAPKs5B0tdv7t1-L2fib7znceMJGqxe/s3264/20220429_172925.jpg" width="95%">
      2
      
      </img>
      </a>
      <img id="slid" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxHAzfeNBdMqy7kUPHX3mUw7ZxydDyHS8P_ndJ6vqMUBfaRnwF0jPzXgi7Lv9hkDGbuS_qehiV6AT2c_4ZaF3ULEuCAmDSiKbh-rHOFWCxWhNNo0UZBeKa0s1GZav-8gQphnII5QR7WfwjuiAseGqjBEX8rNiq4BskBACZtkzjYdoUSbxgJc6FJp3Q/s1280/png_20220426_185206_0000.png" width="95%">
      3
      
      </img>
      <img id="slid" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjo__NLyv6tP9bWebC-yhTZSC4cAfkAhU--SvWXhTJnQgx1SYMyZOvMbPLCth589AA_bJBlDqRk9zBk-EKGv0wIxB3weAlhB9scIw3C-JL_q_yYAHmFaSvpsw5qaN29H2v5k5tbitiRb_zFgsHchyMNnPdbI9S1ePmZ3S-c2V3XwpQ1YlqW7caz1vpQ/s1280/png_20220501_054913_0000.png" width="95%">4</img>
      
       
      
      
      
    </div>
    
    </div>
    </center>
   
  <hr />
    
    
    
    <div  style="display:none;border-radius: 8px; background-color: blueviolet; padding: 10px; margin-left: 10px;margin-right: 10px" class="vadoo_player" vid="sUjDDpoddabKc3knl0NZTdpx4dYaEfGv"  etype="responsive"></div><script src="https://api.vadoo.tv/static/vadoo_player.min.js" id="player_script" vid="sUjDDpoddabKc3knl0NZTdpx4dYaEfGv" ></script>    
        
        
        
            
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  <!-App all contain here written --->
  <!-Scroll down contains--- >


<style>
  
  .watchbtn{
    width: 80%;
    height: 30px;
    background-color: red;
    color: whitesmoke;
    border: none;
    font-weight: bold;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
   letter-spacing: 1px;
   border-radius: 3px;
   margin-top: 0px;
   
    
  }
  .watchbtn:hover{
    background-color: blue;
    
    
  }
 #mainbox {
   display: flex;
   overflow-x: auto;
  
   
background-color: deepskyblue;
padding: 12px;




 }


 .mainbox,
 #item {

  min-width:80%;
   
   margin-left: px;
   background-color: skyblue;

  



 }

 #item {
   max-width: 170px;
   margin-right: 15px; 
   background-color: seagreen;
   padding: 8px;

  border-radius: 6px;
  border: 2px solid red;
  background-color: skyblue;
  background-image: url(picture/nvs.png)
  
 }
 .imagcours{
   border-radius:6px;
   margin-bottom: 0px;
   
 }
  
  .titulo{
    font-family: 'Times New Roman', Times, serif;
   color: mediumblue;
   font-size: 18px;
   margin-top:0px;
   margin-bottom: 0px;
    line-height: 24px;
  }
  .ctitb{
    text-decoration: none;
    color: red;
    font-size: 15px;
    background: none;
    
  }
  .ctitb:hover{
    color: blue;
    
    
  }
</style>
  
<h3 class="patti" style=""> WATCH NOW </h3>
  <div id="mainbox">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  
  
  <div id="item">
    
    <img class="imagcours" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhCwdWVmFxJ9jE3jCnLVqa6hOtTtcMK4R1Hz4gl3KquRqlDLCVFYXWfjZhFboGn5qEXNkCh-87G9Xtal422I4SpBSH2Yo2n_umxucPaayfI1sxsmKn-ulu0BRgoPtySTLwRQJkqJdQ7V8VxKvr33X_CMok_yo0ZKPd_wT5AuhX5KBDc_Npg61_1HwAk/s1280/20220926_135227_0000.png
" width="100%">
  
  <h3 class="titulo">??????????????????????????????? ???????????????????????????????????????????????? ???????????????????????????????? - 6 ????????????  2022-23 ???????????? ????????????????????????????????????? ???????????????????????????????????? ????????????  
  
  <span><a class="ctitb" href="">Go to Course ?????????</a></span>
  
  </h3>
  
  <div>
  
 <center>
  <a href="https://pageonet.blogspot.com/2022/10/blog-post_23.html" target="">
<button class="watchbtn" type="submit"><i class="fa fa-youtube-play"></i> &nbsp;Watch Now</button>
  </a>
 </center>
</div>
  </div>
  
  
  
  
  
  
  
   <div id="item">
    
    <img class="imagcours" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjkcT5cYF_tM6jwLXX-XWQpOnnnXTQybZ8hCEibxH1B1RdTXZfvS9W3aZa9DSK8Vl-kc894l_OfXTbMDQR01ue1IPO6hSilMg3MSVPd_8lLIeeaaBQuZ8C0qifdEs1Z_BP4kKFXD8X7AQ3O7MGy1eHFi9zUc4NdqfvywQm5Pl4p0sTdqzjJMjgweAx1/s1280/1_20221023_042213_0000.png" width="100%">
  
  <h3 class="titulo">??????????????????????????????? ???????????????????????????????????????????????? ???????????????????????????????? - 6 ????????????  2022-23 ???????????? ????????????????????????????????????? ???????????????????????????????????? ????????????  
  
  <span><a class="ctitb" href="">Go to Course ?????????</a></span>
  
  </h3>
  
  <div>
  
 <center>
  <a href="https://pageonet.blogspot.com/2022/11/id1234.html">
<button class="watchbtn" type="submit"><i class="fa fa-youtube-play"></i> &nbsp;Watch Now</button>
  </a>
 </center>
</div>
  </div>
  
  
  
  
   <div id="item">
    
    <img class="imagcours" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgZMENEyeYRYyqvLXGpRXkv-5SMHXEmZQ6IQ-nHjIeUMZaj0rvc6DvWtcL30TueVQRjfh8y42t0F4txG0yl953va47v7ZCD2ShEhGvfUHsXueoDNxS3qsW4IvvzHsaK-Nfpl0qdn1u-r-GzpWJQA2up55mQ6M3Xjkm65W9obZU1zNeEACxdXf6gg_rV/s1280/png_20220921_030439_0000.png" width="100%">
  
  <h3 class="titulo">??????????????????????????????? ???????????????????????????????????????????????? ???????????????????????????????? - 6 ????????????  2022-23 ???????????? ????????????????????????????????????? ???????????????????????????????????? ????????????  
  
  <span><a class="ctitb" href="https://pageonet.blogspot.com/2022/10/blog-post.html?m=1">Go to Course ?????????</a></span>
  
  </h3>
  
  <div>
  
 <center>
  <a href="https://www.youtube.com" target="_blank">
<button class="watchbtn" type="submit"><i class="fa fa-youtube-play"></i> &nbsp;Watch Now</button>
  </a>
 </center>
</div>
  </div>
  
  
  
  
  </div>




  <h3 class="patti" style="">FREE VIDEOS</h3>
  
  
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
 
 <div id="btnc" style=" padding-left:10px; padding-right:10px; margin: 0px;">
 
 
 <center>
   <a href="https://pageonet.blogspot.com/2022/10/blog-post_32.html?m=1">
 <button id="gh" class="ml">All Batches</button></a>
   <a herf="https://www.google.com">
  <button id="fh"class="mm" type="submit">Live Class</button></a>
  <br>
  <br>
   
   <script>
   
    document.getElementById("fh").onclick = function() {
      location.href = "https://pageonet.blogspot.com/2022/10/blog-post_32.html?m=1";
    };
     
     
     
   
 




     
  </script>
   
   
   <script>
  function gh() {
    location.replace("https://pageonet.blogspot.com/2022/10/blog-post_32.html?m=1")
  }
</script>
  
   


   
   <a herf="">
  <button onclick="gh()" id="gh" class="mn" type="submit">NCRT Books</button>
  </a>
 <button onclick="tu()" id="fh" class="mo" type="submit">Demo Class</button>
  <br />
  <br>
   
<script>
  function tu() {
    location.replace("https://pageonet.blogspot.com/2022/10/blog-post_32.html?m=1")
  }
</script>
  
  
   
   
   
   
  <button id="gh"class="mp"  type="submit">Test series</button>
  <button id="fh" class="mq" type="submit">All Details</button>
 <br>
 </center>
 
</div>
  
  
  
  
  
  
  
  
  
  


<h3 class="patti" style="">RECOMMENDATION COURSE</h3>

<style>
  .cout{
    display: flex;
    overflow-x: auto;
    width: 100%;
   max-height:300px;
  

   box-shadow: 0852;
   
    
   
    
    
  }
  ::-webkit-scrollbar{
    width: 0px;
   
  
    
    
  }
  
  .cout,.fgy{
   min-width: 340px;
    height: 300px;
    margin-left: 0px;
   
    
    
    
    
  }
  {
    max-width: 150px;
    margin-right: 35px;
    
    
  }
  
  
  
  
  



  .fgy{
    width:100%;
    height: 230px;
   
   background-color: red;
    
   
    
    
  }
  .cout,.fgy{
    display: flex;
    
    
  }
  .cgah{
   font-size: 16px; 
    font-weight: bold;
    font-family: 'Times New Roman', Times, serif;
    margin-left: 10px;
    margin-right:10px;
    
    
    
  }
  .netlink{
    margin-left: 15px;
    
    color:red;
    font-weight: bold;
    margin-top: 0px;
    margin-bottom: 0px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    text-decoration: none;
    font-size: 17px;
    
    
  }
  .netbut,.netlink{
    display: inline;
    
    
    
  }
  .netbut{
    font-size:px;
    
    
  }
</style>
<div class="cout" style="display">
  <div class="fgy">
    <div class="gu" style="">
    <img src=https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgZMENEyeYRYyqvLXGpRXkv-5SMHXEmZQ6IQ-nHjIeUMZaj0rvc6DvWtcL30TueVQRjfh8y42t0F4txG0yl953va47v7ZCD2ShEhGvfUHsXueoDNxS3qsW4IvvzHsaK-Nfpl0qdn1u-r-GzpWJQA2up55mQ6M3Xjkm65W9obZU1zNeEACxdXf6gg_rV/s1280/png_20220921_030439_0000.png"" width="100%" style="border-top:px solid red; border-left:px solid red;border-right:px solid red"></img>
    <h3 class="cgah">
      ??????????????????????????????? ???????????????????????????????????????????????? ???????????????????????????????? 6 ???????????? Complete Course  ???????????? Full details ???????????? ???????????????????????? 2022-23 ????????????
    </h3>
     <center>
  <a href="https://www.google.com">
<button class="watchbtn" type="submit"><i class="fa fa-youtube-play"></i> &nbsp;Watch Now</button>
  </a>
 </center>
    
    
<a href="#" class="netlink">??????? Go to Course <span class="netbut">></span></a>
    </div>
  
  </div>
  
  
  
  
  <div class="fgy">
    <div class="gu" style="">
    <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgZMENEyeYRYyqvLXGpRXkv-5SMHXEmZQ6IQ-nHjIeUMZaj0rvc6DvWtcL30TueVQRjfh8y42t0F4txG0yl953va47v7ZCD2ShEhGvfUHsXueoDNxS3qsW4IvvzHsaK-Nfpl0qdn1u-r-GzpWJQA2up55mQ6M3Xjkm65W9obZU1zNeEACxdXf6gg_rV/s1280/png_20220921_030439_0000.png" width="100%" style="border-top:px solid red; border-left:px solid red;border-right:px solid red"></img>
    <h3 class="cgah">
      ??????????????????????????????? ???????????????????????????????????????????????? ???????????????????????????????? 6 ???????????? Complete Course  ???????????? Full details ???????????? ???????????????????????? 2022-23 ????????????
    </h3>
<a href="#" class="netlink">??????? Go to Course <span class="netbut">></span></a>
    </div>
  </div>
   
  
  
   <div class="fgy">
    <div class="gu" style="">
    <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgZMENEyeYRYyqvLXGpRXkv-5SMHXEmZQ6IQ-nHjIeUMZaj0rvc6DvWtcL30TueVQRjfh8y42t0F4txG0yl953va47v7ZCD2ShEhGvfUHsXueoDNxS3qsW4IvvzHsaK-Nfpl0qdn1u-r-GzpWJQA2up55mQ6M3Xjkm65W9obZU1zNeEACxdXf6gg_rV/s1280/png_20220921_030439_0000.png" width="100%" style="border-top:px solid red; border-left:px solid red;border-right:px solid red"></img>
    <h3 class="cgah">
      ??????????????????????????????? ???????????????????????????????????????????????? ???????????????????????????????? 6 ???????????? Complete Course  ???????????? Full details ???????????? ???????????????????????? 2022-23 ????????????
    </h3>
<a href="#" class="netlink">??????? Go to Course <span class="netbut">></span></a>
    </div>
  </div>
  
  
    <div class="fgy">
    <div class="gu" style="">
    <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgZMENEyeYRYyqvLXGpRXkv-5SMHXEmZQ6IQ-nHjIeUMZaj0rvc6DvWtcL30TueVQRjfh8y42t0F4txG0yl953va47v7ZCD2ShEhGvfUHsXueoDNxS3qsW4IvvzHsaK-Nfpl0qdn1u-r-GzpWJQA2up55mQ6M3Xjkm65W9obZU1zNeEACxdXf6gg_rV/s1280/png_20220921_030439_0000.png" width="100%" style="border-top:px solid red; border-left:px solid red;border-right:px solid red"></img>
    <h3 class="cgah">
      ??????????????????????????????? ???????????????????????????????????????????????? ???????????????????????????????? 6 ???????????? Complete Course  ???????????? Full details ???????????? ???????????????????????? 2022-23 ????????????
    </h3>
<a href="#" class="netlink">??????? Go to Course <span class="netbut">></span></a>
    </div>
  </div>
 
 
 
   <div class="fgy">
    <div class="gu" style="">
    <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgZMENEyeYRYyqvLXGpRXkv-5SMHXEmZQ6IQ-nHjIeUMZaj0rvc6DvWtcL30TueVQRjfh8y42t0F4txG0yl953va47v7ZCD2ShEhGvfUHsXueoDNxS3qsW4IvvzHsaK-Nfpl0qdn1u-r-GzpWJQA2up55mQ6M3Xjkm65W9obZU1zNeEACxdXf6gg_rV/s1280/png_20220921_030439_0000.png" width="100%" style="border-top:px solid red; border-left:px solid red;border-right:px solid red"></img>
    <h3 class="cgah">
      ??????????????????????????????? ???????????????????????????????????????????????? ???????????????????????????????? 6 ???????????? Complete Course  ???????????? Full details ???????????? ???????????????????????? 2022-23 ????????????
    </h3>
<a href="#" class="netlink">??????? Go to Course <span class="netbut">></span></a>
    </div>
  </div>
 
 
 
   <div class="fgy">
    <div class="gu" style="">
    <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgZMENEyeYRYyqvLXGpRXkv-5SMHXEmZQ6IQ-nHjIeUMZaj0rvc6DvWtcL30TueVQRjfh8y42t0F4txG0yl953va47v7ZCD2ShEhGvfUHsXueoDNxS3qsW4IvvzHsaK-Nfpl0qdn1u-r-GzpWJQA2up55mQ6M3Xjkm65W9obZU1zNeEACxdXf6gg_rV/s1280/png_20220921_030439_0000.png" width="100%" style="border-top:px solid red; border-left:px solid red;border-right:px solid red"></img>
    <h3 class="cgah">
      ??????????????????????????????? ???????????????????????????????????????????????? ???????????????????????????????? 6 ???????????? Complete Course  ???????????? Full details ???????????? ???????????????????????? 2022-23 ????????????
    </h3>
<a href="" class="netlink">??????? Go to Course <span class="netbut">></span></a>
    </div>
  </div>
 
 
 

 
 
</div>







 <h3 class="patti" style="">FREE VIDEOS</h3>
 





  <h5 class="Cti" style="display: none; font-family: Georgia, 'Times New Roman', Times, serif; padding-left:30px; margin-bottom:10px; margin-top:8px">Demo Videos</h5>


  <!---------Demo video----->

  <div class="wrapper" style="">
    
   <div class="item">
  <img class="Demo_v" style="border:1px solid blue" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWHTWSIOGgedO4X_WLsqYyWU9_vcUgt29TZSFXxvP_kvGc045PFoHC5-IMl1V7NthXWNiFF3voIJ1ncqtaPdcT9cS1u5znO0FMQtvzj3jrreshPbuvUfnt6jGYI1j0x4YqMJwG2ZWbXQHgZn4nuI3_luIT1IGca0o8K4spfHHmB1_0FBmvmAwZY1Eb/s650/Screenshot_2022-09-26-07-10-30-82_c0d35d5c8ea536686f7fb1c9f2f8f274.jpg" width="100%">
    </div>
  
  
  
  
  
  
  
<div  class="item">
  <img class="Demo_v" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhCwdWVmFxJ9jE3jCnLVqa6hOtTtcMK4R1Hz4gl3KquRqlDLCVFYXWfjZhFboGn5qEXNkCh-87G9Xtal422I4SpBSH2Yo2n_umxucPaayfI1sxsmKn-ulu0BRgoPtySTLwRQJkqJdQ7V8VxKvr33X_CMok_yo0ZKPd_wT5AuhX5KBDc_Npg61_1HwAk/s1280/20220926_135227_0000.png" width="100%"></img>
  
</div>
<div class="item">
  <img class="Demo_v" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg1wY44fy9VN9orRVQ24eaznvSuLJ3yiR4Buol7AWXOqp6CNPTYIGy1TfybKzpPMtI5Sy7UBxWlvSrJmxvppFkB6zC-NYvJAwj96aq6LfsHK8UM6JgB39cNnbg_F0ZuXUsqYpHnpCrjcV0bJOb21tsKfQOJ4PzxMn9ELY0RTJ6TxqneotVRsKdJbFQ9/s1280/png_20220529_220051_0000.png" width="100%"></img>
  
  
  
</div>
<div class="item">
  
  <img class="Demo_v" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiDo4F7s5MM3pf2vaAQBzyO3lSjRNbV7SFL-IUWWOl2IDSJQUPOCIuULT161ifxCS0HuiCVbEJWlUBDh555xe4GTGhphkjgAdhBBM3LABm2xbLtOkhLcZczqY9bvwLie8_m4IBn0ay1n7fVtwMk-wZkELWM6FbJd1Q4i80Vd48HawPfp6AbEhdW1VjM/s1280/20220529_222423_0000.png" width="100%">
  
  
  
</div>



</div>



<style type="text/css" media="all">
  .bestbatches{
    display: flex;
    overflow-x: auto;
    width: 100%;
   max-height:300px;
  

   box-shadow: 0852;
   
    
   
    
    
  }
  ::-webkit-scrollbar{
    width: 0px;
   
  
    
    
  }
  
  .bestbatches,.twocourse{
   min-width: 340px;
    height: 300px;
    margin-left: 3px;
   
    
    
    
    
  }
  {
    max-width: 150px;
    margin-right: 35px;
    
    
  }
  
  
  
  
  



  .twocourse{
    width:100%;
    height: 180px;
    
   
  
    
   
    
    
  }
  .bestbatches,.twocourse{
    display: flex;
    
    
  }
</style>


<div class="bestbatches" style="display: none">
  <div class="twocourse">
    <img src="Pictures/IMG.jpg" ></img>
    
  </div>
  
  
  
  
  
  
  <div class="twocourse">
    <img src="Pictures/IMG.jpg" ></img>
    
  </div>
  
  
    <div class="twocourse">
    <img src="Pictures/IMG.jpg" ></img>
    
  </div>
  
  
  
  
    <div class="twocourse">
    <img src="Pictures/IMG.jpg" ></img>
  <div>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
 <center>
  <a href="https://www.youtube.com" target="_blank">
<button class="watchbtn" type="submit"><i class="fa fa-youtube-play"></i> &nbsp;Watch Now</button>
  </a>
 </center>
</div>

    
  </div>
  
  
  
</div>






<br />
<br />
<br />
<br />
<br />
  </div>





   

 
 
 
 
 
 
 
 
 
 
 
            
   
    
  
  
     

    
  
  
      
      
















<!-bottom menu bar-/>
<div id="bottom" style="position: fixed; bottom: 0">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <div id="icon">
    
 <a href="https://www.Google.com">
  <i class="fa fa-home" style="font-size: px"></i></a>
 <a href="">
 <i class="fa fa-graduation-cap"></i></a>
 <a href="">
  <i class="fa fa-bell-o"></i></a>
  <a href="https://navodayagov.blogspot.com/p/login.html?m=1">
  <i class="fa fa-user-circle-o"></i>
  </a>
  </div>
  
</div>

</div>


 </div>
  <script>
    $(window).on('load', function() {
      $(".loader").fadeOut(1000);
      $(".content").fadeIn(1000);
    });
  </script>
  
  



        <script>

        paceOptions = {
        ajax: true,
        document: true,
        eventLag: false
        };

        Pace.on('done', function() {
        $('.p').delay(500).animate({top: '30%', opacity: '0'}, 3000, $.bez([0.19,1,0.22,1]));


        $('#preloader').delay(2000).animate({top: '-100%'}, 2000, $.bez([0.19,1,0.22,1]));

        TweenMax.from("title", 2, {
             delay: 2.8,
                  y: 10,
                  opacity: 0,
                  ease: Expo.easeInOut
            })
       });

      </script>
      <script>
      
      
      </script>

<script>

const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");

      let getMode = localStorage.getItem("mode");
          if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
          }

// js code to toggle dark and light mode
      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");

        // js code to keep user selected mode even page refresh or file reopen
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "dark-mode");
        }
      });

// js code to toggle search box
        searchToggle.addEventListener("click" , () =>{
        searchToggle.classList.toggle("active");
      });
 
      
//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});


// scroll down contains ///
window.onscroll = function() { myFunction() };

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}



</script>
<script>
      // top images slider //
         var indexValue = 0;
         function slideShow(){
           setTimeout(slideShow, 3300);
           var x;
           const img = document.querySelectorAll("#slid");
           for(x = 0; x < img.length; x++){
             img[x].style.display = "none";
           }
           indexValue++;
           if(indexValue > img.length){indexValue = 1}
           img[indexValue -1].style.display = "block";
         }
         slideShow();
      </script>


<---ms boat---!>


<scrit src="//code.tidio.co/4uimvsoswezztarefeyj8vxbpl7kafti.js" async></script>



</body>
</html>
</script>
