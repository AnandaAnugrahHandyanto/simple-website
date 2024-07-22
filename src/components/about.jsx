import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img src="img/about.jpg" className="img-responsive" alt="" />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p>Tentang Kami PT AZHA GLOBAL SOLUTIONS adalah perusahaan general contractor yang berpengalaman dan terpercaya di Indonesia. Kami telah berdedikasi selama bertahun-tahun untuk menyediakan layanan konstruksi berkualitas tinggi kepada klien kami di berbagai sektor, termasuk: Perumahan Komersial Industri Pemerintahan Kami berkomitmen untuk memberikan solusi konstruksi yang inovatif dan hemat biaya yang memenuhi kebutuhan spesifik setiap klien. Tim profesional kami yang berpengalaman dan berdedikasi memiliki keahlian dan pengetahuan yang diperlukan untuk menyelesaikan proyek tepat waktu, sesuai anggaran, dan dengan kualitas terbaik</p>
              <h3>Vision & Mission</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    <li>
                      Best Service<br />
                      Menjadi perusahaan general contractor terdepan di Indonesia yang diakui atas keunggulan dalam kualitas, inovasi, dan komitmen kepada pelanggan.
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    <li>
                      High Quality<br />
                      Mencapai standar tertinggi dalam setiap proyek dengan menggunakan bahan berkualitas dan teknik inovatif.
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    <li>
                      Customer Satisfaction<br />
                      Memberikan kepuasan pelanggan melalui layanan yang luar biasa dan hubungan yang kuat.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

