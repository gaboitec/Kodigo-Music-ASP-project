import {useContext} from 'react';
import {ContextoUsuario} from '../../context/ContextoUsuario';
import {Link} from 'react-router-dom';
import { auth } from "../../credentials/Firebase"
import { signOut } from "firebase/auth"

export const Home = () => {
    const {data, setData} = useContext(ContextoUsuario);

    const logout = () => {
        //Deslogeamos el usuario de Firebase
        signOut(auth).then(() => {
          // Sign-out successful.
          alert("La sesion se ha cerrado con exito. Vuelva pronto")
        }).catch((error) => {
          // An error happened.
        });
    
        //Limpiamos los datos del usuario de nuestro CONTEXTO
        setData(null);
    }

    return (
        <>
            <div className="row">
                <section className="col-2 container sidebar p-3 mx-2">
                    <h6>🎶 Kodigo Music</h6>
                    <section className="botones-sidebar">
                        <a href="#sec1" className="btn btn-sidebar">Inicio</a>
                        <a href="#sec2" className="btn btn-sidebar">Éxitos</a>                    
                        <a href="#sec4" className="btn btn-sidebar text-center">Nuevo</a>
                        <a href="#" className="btn btn-sidebar">Idioma</a>
                    </section>
                    <section className="card p-2 mt-2">
                        <p>Crea listas reproduccion.</p>
                        <button className="btn btn-sidebar">Agregar lista</button>
                    </section>
                    {data?
                        <section className="card p-2 mt-3 mb-3">
                            <button className="btn btn-sidebar" onClick={logout}>Cerrar sesion</button>
                        </section>:
                        <section className="card p-2 mt-3 mb-3">
                            <p>Disfruta de beneficios.</p>
                            <Link to={'/session'} ><button className="btn btn-sidebar text-dark">Ingresar</button></Link>
                        </section>
                    }
                </section>
                <div className="col-10 contenido text-light">
                    <header className="header row p-2">
                        <section className="col-9">
                            <form className="d-flex browser" role="search">
                                <input className="form-control me-2" type="search" placeholder="Buscar..." aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </section>
                        {data?
                            <section className="col-3 text-end">
                                <h4>{data.email}</h4>
                            </section>:
                            <section className="col-3 text-end">
                                <Link to={'/session'}><button className="btn btn-dark">Iniciar sesion</button></Link>
                            </section>
                        }
                    </header>

                    <main className="main">
                        <div className="container">
                            <section className="fast-selection mt-4" id="sec1">
                                <h3>Seleccion rápida</h3>
                                <div className="row justify-content-between mb-3">
                                    <div className="col-3">
                                        <a  className="row" href="#">
                                            <div className="col-2">
                                                <img src="https://plus.unsplash.com/premium_photo-1682125291930-1427e5d80e5b?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Álbum 1 " />
                                            </div>
                                            <div className="col-7 mx-4">
                                                <h6>Canción</h6>
                                                <span>Artista</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-3">
                                        <a  className="row" href="#">
                                            <div className="col-2">
                                                <img src="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Álbum 1 " />
                                            </div>
                                            <div className="col-7 mx-4">
                                                <h6>Canción</h6>
                                                <span>Artista</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-3">
                                        <a  className="row" href="#">
                                            <div className="col-2">
                                                <img src="https://plus.unsplash.com/premium_photo-1682125291930-1427e5d80e5b?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Álbum 1 " />
                                            </div>
                                            <div className="col-7 mx-4">
                                                <h6>Canción</h6>
                                                <span>Artista</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="row justify-content-between mb-3">
                                    <div className="col-3">
                                        <a  className="row" href="#">
                                            <div className="col-2">
                                                <img src="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Álbum 1 " />
                                            </div>
                                            <div className="col-7 mx-4">
                                                <h6>Canción</h6>
                                                <span>Artista</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-3">
                                        <a  className="row" href="#">
                                            <div className="col-2">
                                                <img src="https://plus.unsplash.com/premium_photo-1682125291930-1427e5d80e5b?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Álbum 1 " />
                                            </div>
                                            <div className="col-7 mx-4">
                                                <h6>Canción</h6>
                                                <span>Artista</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-3">
                                        <a  className="row" href="#">
                                            <div className="col-2">
                                                <img src="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Álbum 1 " />
                                            </div>
                                            <div className="col-7 mx-4">
                                                <h6>Canción</h6>
                                                <span>Artista</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="row justify-content-between mb-3">
                                    <div className="col-3">
                                        <a  className="row" href="#">
                                            <div className="col-2">
                                                <img src="https://plus.unsplash.com/premium_photo-1682125291930-1427e5d80e5b?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Álbum 1 " />
                                            </div>
                                            <div className="col-7 mx-4">
                                                <h6>Canción</h6>
                                                <span>Artista</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-3">
                                        <a  className="row" href="#">
                                            <div className="col-2">
                                                <img src="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Álbum 1 " />
                                            </div>
                                            <div className="col-7 mx-4">
                                                <h6>Canción</h6>
                                                <span>Artista</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-3">
                                        <a  className="row" href="#">
                                            <div className="col-2">
                                                <img src="https://plus.unsplash.com/premium_photo-1682125291930-1427e5d80e5b?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Álbum 1 " />
                                            </div>
                                            <div className="col-7 mx-4">
                                                <h6>Canción</h6>
                                                <span>Artista</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </section>

                            <section className="featured-artists mt-4" id="sec2">
                                <h3>Artistas destacados</h3>
                                <div className="row justify-content-center mb-2">
                                    <article className="album col">
                                        <img src="https://randomuser.me/api/portraits/men/36.jpg" alt="Álbum 1" />
                                        <p className="text-light">Viento del Norte</p>
                                    </article>
                                    <article className="album col">
                                        <img src="https://randomuser.me/api/portraits/men/51.jpg" alt="Álbum 2" />
                                        <p className="text-light">Sobra Azul</p>
                                    </article>
                                    <article className="album col">
                                        <img src="https://randomuser.me/api/portraits/women/3.jpg" alt="Álbum 3" />
                                        <p className="text-light">Luna y los Astros</p>
                                    </article>
                                    <article className="album col">
                                        <img src="https://randomuser.me/api/portraits/men/40.jpg" alt="Álbum 2" />
                                        <p className="text-light">Corazón de fuego</p>
                                    </article>
                                    <article className="album col">
                                        <img src="https://randomuser.me/api/portraits/men/28.jpg" alt="Álbum 3" />
                                        <p className="text-light">Ecos del Alma</p>
                                    </article>
                                </div>
                                <div className="row">
                                    <div className="album col">
                                        <img src="https://randomuser.me/api/portraits/women/51.jpg" alt="Álbum 1" />
                                        <p className="text-light">Marina y las Olas</p>
                                    </div>
                                    <div className="album col">
                                        <img src="https://randomuser.me/api/portraits/women/73.jpg" alt="Álbum 2" />
                                        <p className="text-light">Noche Estrellada</p>
                                    </div>
                                    <div className="album col">
                                        <img src="https://randomuser.me/api/portraits/men/97.jpg" alt="Álbum 3" />
                                        <p className="text-light">Rayo de Sol</p>
                                    </div>
                                    <div className="album col">
                                        <img src="https://randomuser.me/api/portraits/women/43.jpg" alt="Álbum 2" />
                                        <p className="text-light">Aurora Boreal</p>
                                    </div>
                                    <div className="album col">
                                        <img src="https://randomuser.me/api/portraits/men/22.jpg" alt="Álbum 3" />
                                        <p className="text-light">Fénix Renacido</p>
                                    </div>
                                </div>
                            </section>
                                
                            <section className="featured-albums mt-3" id="sec3">
                                <h3>Álbumes destacados</h3>
                                <div className="row mb-2">
                                    <article className="album col">
                                        <img src="https://images.unsplash.com/photo-1711054824441-064a99073a0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFBvcnRhZGElMjBkZSUyMCVDMyVBMWxidW18ZW58MHx8MHx8fDA%3D" alt="Álbum 1" />
                                        <p className="text-light">Artista 1 - Canción 1</p>
                                    </article>
                                    <article className="album col">
                                        <img src="https://plus.unsplash.com/premium_photo-1682125291930-1427e5d80e5b?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Álbum 2" />
                                        <p className="text-light">Artista 2 - Canción 2</p>
                                    </article>
                                    <article className="album col">
                                        <img src="https://images.unsplash.com/photo-1711054824441-064a99073a0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFBvcnRhZGElMjBkZSUyMCVDMyVBMWxidW18ZW58MHx8MHx8fDA%3D" alt="Álbum 3" />
                                        <p className="text-light">Artista 3 - Canción 3</p>
                                    </article>
                                    <article className="album col">
                                        <img src="https://plus.unsplash.com/premium_photo-1682125291930-1427e5d80e5b?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Álbum 2" />
                                        <p className="text-light">Artista 2 - Canción 2</p>
                                    </article>
                                    <article className="album col">
                                        <img src="https://images.unsplash.com/photo-1711054824441-064a99073a0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFBvcnRhZGElMjBkZSUyMCVDMyVBMWxidW18ZW58MHx8MHx8fDA%3D" alt="Álbum 3" />
                                        <p className="text-light">Artista 3 - Canción 3</p>
                                    </article>
                                </div>
                                <div className="row">
                                    <div className="album col">
                                        <img src="https://plus.unsplash.com/premium_photo-1682125291930-1427e5d80e5b?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dg" alt="Álbum 1" />
                                        <p className="text-light">Artista 1 - Canción 1</p>
                                    </div>
                                    <div className="album col">
                                        <img src="https://images.unsplash.com/photo-1711054824441-064a99073a0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFBvcnRhZGElMjBkZSUyMCVDMyVBMWxidW18ZW58MHx8MHx8fDA%3D" alt="Álbum 2" />
                                        <p className="text-light">Artista 2 - Canción 2</p>
                                    </div>
                                    <div className="album col">
                                        <img src="https://plus.unsplash.com/premium_photo-1682125291930-1427e5d80e5b?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Álbum 3" />
                                        <p className="text-light">Artista 3 - Canción 3</p>
                                    </div>
                                    <div className="album col">
                                        <img src="https://images.unsplash.com/photo-1711054824441-064a99073a0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFBvcnRhZGElMjBkZSUyMCVDMyVBMWxidW18ZW58MHx8MHx8fDA%3D" alt="Álbum 2" />
                                        <p className="text-light">Artista 2 - Canción 2</p>
                                    </div>
                                    <div className="album col">
                                        <img src="https://plus.unsplash.com/premium_photo-1682125291930-1427e5d80e5b?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Álbum 3" />
                                        <p className="text-light">Artista 3 - Canción 3</p>
                                    </div>
                                </div>
                            </section>

                            <section className="new-releases mt-3" id="sec4">
                                <h3>Nuevos lanzamientos</h3>
                                <div className="row justify-content-between mb-3">
                                    <div className="col-3">
                                        <a  className="row" href="#">
                                            <div className="col-2">
                                                <img src="https://images.unsplash.com/photo-1711054824441-064a99073a0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFBvcnRhZGElMjBkZSUyMCVDMyVBMWxidW18ZW58MHx8MHx8fDA%3D" alt="Álbum 1 " />
                                            </div>
                                            <div className="col-7 mx-4">
                                                <h6>Canción</h6>
                                                <span>Artista</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-3">
                                        <a  className="row" href="#">
                                            <div className="col-2">
                                                <img src="https://images.unsplash.com/photo-1640533389873-ee8b68984ae4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fFBvcnRhZGElMjBkZSUyMCVDMyVBMWxidW18ZW58MHx8MHx8fDA%3D" alt="Álbum 1 " />
                                            </div>
                                            <div className="col-7 mx-4">
                                                <h6>Canción</h6>
                                                <span>Artista</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-3">
                                        <a  className="row" href="#">
                                            <div className="col-2">
                                                <img src="https://plus.unsplash.com/premium_photo-1682125291930-1427e5d80e5b?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Álbum 1 " />
                                            </div>
                                            <div className="col-7 mx-4">
                                                <h6>Canción</h6>
                                                <span>Artista</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="row justify-content-between mb-3">
                                    <div className="col-3">
                                        <a  className="row" href="#">
                                            <div className="col-2">
                                                <img src="https://plus.unsplash.com/premium_photo-1681426298260-d0326427d7e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fFBvcnRhZGElMjBkZSUyMCVDMyVBMWxidW18ZW58MHx8MHx8fDA%3D" alt="Álbum 1 " />
                                            </div>
                                            <div className="col-7 mx-4">
                                                <h6>Canción</h6>
                                                <span>Artista</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-3">
                                        <a  className="row" href="#">
                                            <div className="col-2">
                                                <img src="https://images.unsplash.com/photo-1640533389873-ee8b68984ae4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fFBvcnRhZGElMjBkZSUyMCVDMyVBMWxidW18ZW58MHx8MHx8fDA%3D" alt="Álbum 1 " />
                                            </div>
                                            <div className="col-7 mx-4">
                                                <h6>Canción</h6>
                                                <span>Artista</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-3">
                                        <a  className="row" href="#">
                                            <div className="col-2">
                                                <img src="https://plus.unsplash.com/premium_photo-1682125291930-1427e5d80e5b?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Álbum 1 " />
                                            </div>
                                            <div className="col-7 mx-4">
                                                <h6>Canción</h6>
                                                <span>Artista</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="row justify-content-between mb-3">
                                    <div className="col-3">
                                        <a  className="row" href="#">
                                            <div className="col-2">
                                                <img src="https://plus.unsplash.com/premium_photo-1682125291930-1427e5d80e5b?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Álbum 1 " />
                                            </div>
                                            <div className="col-7 mx-4">
                                                <h6>Canción</h6>
                                                <span>Artista</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-3">
                                        <a  className="row" href="#">
                                            <div className="col-2">
                                                <img src="https://images.unsplash.com/photo-1640533389873-ee8b68984ae4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fFBvcnRhZGElMjBkZSUyMCVDMyVBMWxidW18ZW58MHx8MHx8fDA%3D" alt="Álbum 1 " />
                                            </div>
                                            <div className="col-7 mx-4">
                                                <h6>Canción</h6>
                                                <span>Artista</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-3">
                                        <a  className="row" href="#">
                                            <div className="col-2">
                                                <img src="https://plus.unsplash.com/premium_photo-1681426298260-d0326427d7e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fFBvcnRhZGElMjBkZSUyMCVDMyVBMWxidW18ZW58MHx8MHx8fDA%3D" alt="Álbum 1 " />
                                            </div>
                                            <div className="col-7 mx-4">
                                                <h6>Canción</h6>
                                                <span>Artista</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </main>
                
                    <footer className="footer p-2">
                        <div className="container">
                            <p>Copyright @ 2024 Kodigo Music. Todos los derechos reservados.</p>
                            <ul className="row">
                                <li className="col-4"><a href="#">Terminos de privacidad</a></li>
                                <li className="col-4"><a href="#">Terminos del servicio</a></li>
                                <li className="col-4"><a href="#">Terminos de anuncios</a></li>
                                <li className="col-4"><a href="#">Soporte</a></li>
                                <li className="col-4"><a href="#">Comentarios</a></li>
                                <li className="col-4"><a href="#">Cokies</a></li>
                            </ul>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}