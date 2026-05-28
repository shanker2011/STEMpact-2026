
      const navStyles = `
      <style>
      nav {
             position:absolute;
             top: 0;
             right: 0;
             width: 100%; /*play around with this value to adjust the width to your liking*/
             display: flex;  /*aligns everything in nav area in a row*/
             align-items: center; /*vertically centers the items in the nav area*/
             justify-content: space-between; /*adds space between the items in the nav area*/
             padding: 20px 40px; 
             z-index: 10; /*ensures the nav bar stays on the top of other content*/
           }
             .nav-links a {
                  color: #fff9f9; 
                  text-decoration: none; 
                  margin-left: 20px; 
                  font-size: 13px; 
                  transition: color 0.3s ease; 
              }

              .nav-links a:hover {
                  color: #6e83eb; 
              }
              .logo {
                 display: flex;
                 align-items: center;
            }

            .logo img {
               height: 30px; 
               width: auto;
               display: block; 
            }

            .logo span {
               font-family: 'Montserrat', sans-serif;
               font-weight: 400;         
               font-size: 20px; 
               color: #fff9f9;           
               margin-left: 15px;        
               line-height: 1;          
            }
            </style>
        
       `;
        document.head.insertAdjacentHTML('beforeend', navStyles);
       
      const navHTML = `
      <nav>
            <div class="logo">
                <a href="index.html" class="logo-link">
                    <img src="https://shanker2011.github.io/STEMpact-2026/Images/logo.png" alt="STEMpact Logo">
                    <span>STEMPACT</span>
                </a>
            </div>
            <div class="nav-links">
                <a href="vision.html">OUR VISION</a>
                <a href="research.html">RESEARCH</a>
                <a href="contact.html">CONTACT</a>
                <a href="pictures.html">PHOTOS</a>
            </div>



        </nav>
        `;
        document.getElementById('navbar-placeholder').innerHTML = navHTML;


