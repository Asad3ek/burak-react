export function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <div>
                        <img style={{ width: "100px" }} src="/icons/burak.svg" alt="" />
                    </div>
                    <div className="foot-desc-txt">
                        Focusing on the gourmet Turkish breakfast as well
                        as the youth society, ZEN Bumarak Gurme aims to bring
                        Turkish cuisine back. ZEN Bumarak Gurme creates an
                        illusion with its cuisine.
                    </div>
                    <div className="social-icons">
                        <a href="">
                            <img src="/icons/facebook.svg" alt="" />
                        </a>
                        <a href="">
                            <img src="/icons/twitter.svg" alt="" />
                        </a>
                        <a href="">
                            <img src="/icons/instagram.svg" alt="" />
                        </a>
                        <a href="">
                            <img src="/icons/youtube.svg" alt="" />
                        </a>
                    </div>
                </div>

                <div className="footer-right">
                    <div className="footer-inner-left">
                        <div className="footer-category-title">Pages</div>
                        <div className="foot-category-link">
                            <a href="">Home</a>
                        </div>
                        <div className="foot-category-link">
                            <a href="">Products</a>
                        </div>
                        <div className="foot-category-link">
                            <a href="">Help</a>
                        </div>
                    </div>

                    <div className="footer-inner-right">
                        <div className="footer-category-title">Find Us</div>

                        <div className="findUs-contain">
                            <div className="find-us">
                                <span>L.</span>
                                <div >Downtown, Dubai</div>
                            </div>

                            <div className="find-us">
                                <span>P.</span>
                                <div>+971 4 554 7777</div>
                            </div>

                            <div className="find-us">
                                <span>E.</span>
                                <div>devexuz@gmail.com</div>
                            </div>

                            <div className="find-us">
                                <span>H.</span>
                                <div>Visit 24 hours</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="line-contain">
                <div className="footer-line"></div>
            </div>
        </div>
    );


}