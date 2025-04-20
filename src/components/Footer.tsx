const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">عن العائلة</h3>
          <p className="text-content ">
            أسرة محمد علي هي أسرة عريقة تمتد جذورها في التاريخ، وتحمل إرثاً عظيماً من القيم والأخلاق الحميدة.
          </p>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">روابط سريعة</h3>
          <ul className="footer-links">
            <li><a href="/">الرئيسية</a></li>
            <li><a href="/home">شجرة العائلة</a></li>
            <li><a href="/about">عن العائلة</a></li>
            <li><a href="/contact">اتصل بنا</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">تواصل معنا</h3>
          <ul className="footer-links">
            <li>البريد الإلكتروني: info@family.com</li>
            <li>الهاتف: +20 123 456 789</li>
            <li>العنوان: القاهرة، مصر</li>
          </ul>
          <div className="footer-social">
            <a href="#" className="social-icon">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>جميع الحقوق محفوظة © {new Date().getFullYear()} أسرة محمد علي</p>
      </div>
    </footer>
  );
};

export default Footer; 