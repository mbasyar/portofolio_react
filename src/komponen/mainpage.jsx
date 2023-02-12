

function MainPage () {
  return (
   
          <div>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {/*bootstrap*/}
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossOrigin="anonymous" />
            {/*my style*/}
            <link rel="stylesheet" href="style.css" />
            {/*font awesome*/}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />
            {/*google font*/}
            <style dangerouslySetInnerHTML={{__html: "\n      @import url('https://fonts.googleapis.com/css2?family=Carter+One&family=Poppins:ital,wght@0,400;0,500;1,400;1,600&display=swap');\n    " }} />
            {/* <title>Portfolio Basyar</title> */}
            {/*navbar*/}
            <nav className="navbar navbar-expand-lg navbar-light"  style={{backgroundColor: '#a4b7c0'}}>
              <div className="container p-2">
                <a className="navbar-brand mx-2" href="https://github.com/mbasyar"><i class="fa-brands fa-github mx-1"></i>M BASYAR</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav mx-auto">
                    <li className="nav-item mx-2">
                      <a className="nav-link active" aria-current="page" href="#home"><i className="fa-solid fa-house mx-1" />HOME</a>
                    </li>
                    <li className="nav-item mx-2">
                      <a className="nav-link" href="#about">ABOUT</a>
                    </li>
                    <li className="nav-item mx-2">
                      <a className="nav-link" href="#project">PROJECT</a>
                    </li>
                    <li className="nav-item mx-2">
                      <a className="nav-link" href="#contact">CONTACT</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            {/*jumbotron*/}
            <div className="container-fluid py-5" style={{backgroundColor: '#a4b7c0'}} id="home">
              <div className="container">
                <div className="jumbotron m-0">
                  <div className="text-center">
                    <img src="img/irul.png" height="160px" width="160px" className="img-thumbnail rounded-circle" alt="gambar basyar" />
                    <h1 className="my-1">M KHOIRUL BASYAR</h1>
                    <h5>Frontend developer <i class="fa-solid fa-code"></i></h5>
                  </div>
                </div>
              </div>
            </div>
            {/*content*/}
            <div className="container-fluid pt-3" style={{backgroundColor: '#a4b7c0'}} id="about">
              <div className="container">
                <div className="row">
                  <div className="col text-center my-5">
                    <h2>ABOUT ME</h2>
                  </div>
                </div>
                <div className="row text-center">
                  <div className="col-md-4 col-sm-12 ">
                    <div className="card p-2">
                      <i className="fa-solid fa-user-graduate fa-5x mb-2" />
                      <h3>Student</h3>
                      <p>Saya adalah Mahasiswa Perguruan Tinggi Swasta DiJakarta, Prodi Teknik Informatika.</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="card p-2">
                      <i className="fa-solid fa-award fa-5x mb-2" />
                      <h3>DiCoding Academy</h3>
                      <p>Saya telah mengikuti DiCoding selama 4 bulan dan telah mendapatkan 4 sertifikat.</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="card p-2">
                      <i className="fa-solid fa-laptop-code fa-5x mb-2" />
                      <h3>Eduwork Bootcamp</h3>
                      <p>Saya sedang belajar Kelas MERN (Fullstack javascript) di Eduwork Academy selama 3 bulan.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container pt-md-4">
                <div className="row text-center pt-md-5">
                  <div className="col-md-3 col-sm-6">
                    <img src="./img/html-1.svg"  alt="gambar basyar"  style={{width: '75px'}} />
                    <h4 className="my-2">HTML5</h4>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <img src="./img/css-3.svg"  alt="gambar basyar"  style={{width: '75px'}} />
                    <h4 className="my-2">CSS3</h4>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <img src="./img/javascript-1.svg"  alt="gambar basyar"  style={{width: '75px'}} />
                    <h4 className="my-2">JAVASCRIPT</h4>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <img src="./img/react-2.svg"  alt="gambar basyar"  style={{width: '75px'}} />
                    <h4 className="my-2">REACTJS</h4>
                  </div>
                </div>
                <div className="row text-center py-5">
                  <div className="col-md-3 col-sm-6">
                    <img src="./img/git-bash.svg"  alt="gambar basyar"  style={{width: '75px'}} />
                    <h4 className="my-2">GIT BASH</h4>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <img src="./img/git-icon.svg"  alt="gambar basyar"  style={{width: '75px'}} />
                    <h4 className="my-2">GIT</h4>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <img src="./img/github-icon-1.svg"  alt="gambar basyar"  style={{width: '75px'}} />
                    <h4 className="my-2">GITHUB</h4>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <img src="./img/nodejs-icon.svg"  alt="gambar basyar"  style={{width: '75px'}} />
                    <h4 className="my-2">NODE JS</h4>
                  </div>
                </div>
              </div>
            </div>
            {/*content*/}
            <div className="container-fluid py-4" style={{backgroundColor: '#a4b7c0'}} id="project">
              <div className="container my-5 pb-5">
                <div className="row">
                  <div className="col text-center my-5">
                    <h2>MY PROJECT</h2>
                  </div>
                </div>
                <div className="row text-center">
                  <div className="col-md-4 col-sm-12">
                    <div className="card p-2">
                      <img src="img/background3.jpg"  alt="gambar basyar" />
                      <h3 className="my-2">Anime Movies</h3>
                      <ul className="list-group py-2 text-justify">
                        <li>Github: <a href="https://google.com">Lihat SourceCode</a></li>
                        <li>Netlify: <a href="https://google.com">Lihat Demo</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="card p-2">
                      <img src="img/background2.jpg"  alt="gambar basyar" />
                      <h3 className="my-2">Rumah Kopi</h3>
                      <ul className="list-group py-2 text-justify">
                      <li>Github: <a href="https://google.com">Lihat SourceCode</a></li>
                        <li>Netlify: <a href="https://google.com">Lihat Demo</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="card p-2">
                      <img src="img/background1.jpg"  alt="gambar basyar" />
                      <h3 className="my-2">Portofolio</h3>
                      <ul className="list-group py-2 text-justify">
                      <li>Github: <a href="https://google.com">Lihat SourceCode</a></li>
                        <li>Netlify: <a href="https://google.com">Lihat Demo</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/*contact*/}
              <div className="container py-5 my-md-5" id="contact">
                <div className="row text-center mb-3">
                  <div className="col">
                    <h2>CONTACT ME</h2>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="nama" className="form-label">NAMA</label>
                        <input type="text" className="form-control" placeholder="ex: puan mahalani" />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">ALAMAT EMAIL</label>
                        <input type="email" className="form-control" placeholder="cieGembul@gmail.com" />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="telp" className="form-label">NO TELEPON</label>
                        <input type="tel" className="form-control" placeholder="0987654321" />
                      </div>
                      <select className="form-control">
                        <option>--pilih kategori--</option>
                        <option>Mau Ngajak Main</option>
                        <option>Mau Traktir kopi</option>
                      </select>
                      <div className="form-group mt-2">
                        <label htmlFor="pesan" className="form-label">PESAN</label>
                        <textarea className="form-control" rows={5} placeholder="masukan pesan" defaultValue={" "} />
                      </div>
                      <button type="submit" className="btn btn-primary mb-3">KIRIM PESAN</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/*akhir contact*/}
            {/*footer*/}
            <footer className="text-center text-white p-3 bg-light">
              <a href="#home"><h5>COPYRIGHT 2023 | DICODING</h5></a>
            </footer>
          </div>
        );
}

export default MainPage;