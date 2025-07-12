const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="footer-title">عن العائلة</h3>
          <p>
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
            <li>البريد الإلكتروني: hazemsaad231@gmail.com</li>
            <li>الهاتف : 01062588052</li>
            <li>العنوان: القاهرة، مصر</li>
          </ul>
          <div className="footer-social">
            <a href="#" >
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <hr  className="my-8 border-gray-300"/>

      <div className="text-center mt-8">
        <p>جميع الحقوق محفوظة © {new Date().getFullYear()} أسرة محمد علي</p>
      </div>
    </footer>
  );
};

export default Footer; 