function Footer() {
    return (
    <footer className="footer" id="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <p><i className="fas fa-envelope"></i> support@sims.edu</p>
        <p><i className="fas fa-phone"></i> +123 456 7890</p>
        <p><i className="fas fa-map-marker-alt"></i> 123 University Road</p>
        <hr />
        <p className="copyright">&copy; {new Date().getFullYear()} SIMS. All rights reserved.</p>
      </div>
    </footer>

    );
}

export default Footer;