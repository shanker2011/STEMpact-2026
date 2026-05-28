const footerStyles = `
<style>
 .footer {
        position: relative;
        bottom: 0;
        width: 100%;
        text-align: center;
        padding: 50px; 
        background-color: rgba(0, 0, 0, 0.5); 
        color: #fff9f9;
        font-family: 'Bebas Neue', sans-serif;
        font-size: 15px;                 
        }
    .footer-links a {
        color: #fff9f9
        text-decoration: none;
        margin: 10px;
    }
</style>
`;
document.head.insertAdjacentHTML('beforeend', footerStyles);

const footerHTML = `
<footer class = "footer">
    <div class="club-name">
                <h6>STEMPACT</h6>
     </div>
     <div class="footer-links">
                <a href="vision.html">ABOUT</a>
                <a href="research.html">OUR WORK</a>
                <a href="contact.html">CONTACT US</a>
                <a href="pictures.html">PHOTOS</a>
            </div>
    <div class="copyright-club">
    <h8>&copy; STEMPACT — Frisco, TX</h8>
</footer>
`;
document.getElementById('footer-placeholder').innerHTML = footerHTML;



