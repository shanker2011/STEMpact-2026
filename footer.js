const footerStyles = `
<style>

 .footer {
        position: fixed;
        bottom: 0;
        width: 100%;
        text-align: center;
        padding: 20px; 
        background-color: rgba(0, 0, 0, 0.5); 
        color: #fff9f9;
        font-family: 'Montserrat', sans-serif;
        font-size: 15px;                 
        }
</style>
`;
document.head.insertAdjacentHTML('beforeend', footerStyles);

const footerHTML = `
<footer>
    &copy; 2026 STEMPACT (ADD MORE INFO LATER!!)
</footer>
`;
document.getElementById('footer-placeholder').innerHTML = footerHTML;



