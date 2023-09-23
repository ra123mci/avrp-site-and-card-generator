import { PageProps } from '@/types';
import AppLayout from '@/Layouts/AppLayout';
import { ToastContainer, toast } from 'react-toastify';

export default function Welcome({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {

    return (
        <AppLayout user={auth.user}>
            <ToastContainer />
            <div className="hero-banner full jumbo-banner" style={{background:"#ffffff url(assets/img/bg2.png)"}}>
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-xl-7 col-lg-6 col-md-12">
                            <div className="small_head_clics">
                                <h1>Find and hire <span className="text-info">freelancers</span> that perfectly fits your
                                    projects needs.</h1>
                                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore.</p>
                            </div>
                            <form className="search-big-form">
                                <div className="row m-0">
                                    <div className="col-lg-9 col-md-4 col-sm-12 p-0">
                                        <div className="form-group">
                                            <i className="ti-location-pin"></i>
                                            <input type="text" className="form-control l-radius solidbr" placeholder="San Francisco, CA" />
                                        </div>
                                    </div>

                                    <div className="col-lg-2 col-md-4 col-sm-12 p-0">
                                        <button type="button" className="btn dark-3 r-radius full-width">Search</button>
                                    </div>
                                </div>
                            </form>
                            <div className="featured_showing_list">
                                <ul>
                                    <li>Perfect for every budget</li>
                                    <li>Quality work done fastly</li>
                                    <li>Secure payments</li>
                                    <li>24/7 full support</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-xl-5 col-lg-6 col-md-12">
                            <div className="_fade_freelancer_teams">
                                <div className="freelancer_teams_wraps owl-carousel owl-theme" id="freelancer-slide">

                                    <div className="_frc_box_14ui">
                                        <div className="_frc_box_14ui_thumb">
                                            <span className="_frc_rate_0iu"><i className="fa fa-star"></i>4.8</span>
                                            <img src="/assets/img/team-1.jpg" className="img-fluid circle" alt="" />
                                        </div>
                                        <div className="_frc_box_14ui_caption">
                                            <h5 className="_frc_title"><a href="freelancer-detail.html">Eula J. Eckstein</a>
                                            </h5>
                                        </div>
                                    </div>

                                    <div className="_frc_box_14ui">
                                        <div className="_frc_box_14ui_thumb">
                                            <span className="_frc_rate_0iu"><i className="fa fa-star"></i>4.7</span>
                                            <img src="/assets/img/team-2.jpg" className="img-fluid circle" alt="" />
                                        </div>
                                        <div className="_frc_box_14ui_caption">
                                            <h5 className="_frc_title"><a href="freelancer-detail.html">Janie M. Miller</a>
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="_frc_box_14ui">
                                        <div className="_frc_box_14ui_thumb">
                                            <span className="_frc_rate_0iu"><i className="fa fa-star"></i>4.6</span>
                                            <img src="/assets/img/team-3.jpg" className="img-fluid circle" alt="" />
                                        </div>
                                        <div className="_frc_box_14ui_caption">
                                            <h5 className="_frc_title"><a href="freelancer-detail.html">Eula J. Eckstein</a>
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="_frc_box_14ui">
                                        <div className="_frc_box_14ui_thumb">
                                            <span className="_frc_rate_0iu"><i className="fa fa-star"></i>4.7</span>
                                            <img src="/assets/img/team-4.jpg" className="img-fluid circle" alt="" />
                                        </div>
                                        <div className="_frc_box_14ui_caption">
                                            <h5 className="_frc_title"><a href="freelancer-detail.html">Dann L. Beach</a></h5>
                                        </div>
                                    </div>
                                    <div className="_frc_box_14ui">
                                        <div className="_frc_box_14ui_thumb">
                                            <span className="_frc_rate_0iu"><i className="fa fa-star"></i>4.9</span>
                                            <img src="/assets/img/team-5.jpg" className="img-fluid circle" alt="" />
                                        </div>
                                        <div className="_frc_box_14ui_caption">
                                            <h5 className="_frc_title"><a href="freelancer-detail.html">Audrey R. Migues</a>
                                            </h5>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <section className="featured-employers-wrap dark">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-lg-3 col-md-4 col-sm-5">
                            <h5 className="mb-0">Featured Employers:</h5>
                        </div>

                        <div className="col-lg-9 col-md-8 col-sm-7">
                            <div className="owl-carousel employer-brans" id="brands">
                                <div className="single-employers">
                                    <img src="/assets/img/airbnb.png" className="img-fluid" alt="" />
                                </div>
                                <div className="single-employers">
                                    <img src="/assets/img/amazon.png" className="img-fluid" alt="" />
                                </div>
                                <div className="single-employers">
                                    <img src="/assets/img/googl.png" className="img-fluid" alt="" />
                                </div>
                                <div className="single-employers">
                                    <img src="/assets/img/lenovo.png" className="img-fluid" alt="" />
                                </div>
                                <div className="single-employers">
                                    <img src="/assets/img/pp.png" className="img-fluid" alt="" />
                                </div>
                                <div className="single-employers">
                                    <img src="/assets/img/samsung.png" className="img-fluid" alt="" />
                                </div>
                                <div className="single-employers">
                                    <img src="/assets/img/slack.png" className="img-fluid" alt="" />
                                </div>
                                <div className="single-employers">
                                    <img src="/assets/img/spotify.png" className="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="min-sec">
                <div className="container">

                    <div className="row justify-content-center">
                        <div className="col-lg-7 col-md-9">
                            <div className="sec-heading">
                                <h2>Top Featured <span className="theme-cl-2">Jobs</span></h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="single_job_box style_4">

                                <div className="side_flex_inline mb-3">
                                    <div className="side_flex_first">
                                        <div className="employer_thumb">
                                            <img src="/assets/img/c-1.png" className="img-fluid" alt="" />
                                        </div>
                                    </div>
                                </div>

                                <div className="single_job_title">
                                    <h4><a href="job-detail.html">Junior Web Developer In Google Crunchapps New York,
                                            NY</a></h4>
                                </div>
                                <div className="side_flex mb-5">
                                    <div className="side_flex_first">
                                        <span className="single_job_location">Paypal Inc</span>
                                    </div>
                                </div>

                                <div className="jobs_info">
                                    <ul>
                                        <li><i className="ti-location-pin"></i>Liverpool, UK</li>
                                        <li className="job_type internship"><i className="ti-briefcase"></i>Internship</li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="single_job_box style_4">

                                <div className="side_flex_inline mb-3">
                                    <div className="side_flex_first">
                                        <div className="employer_thumb">
                                            <img src="/assets/img/c-2.png" className="img-fluid" alt="" />
                                        </div>
                                    </div>
                                </div>

                                <div className="single_job_title">
                                    <h4><a href="job-detail.html">Software Developer At WIPRO MGM Studios Inc New York</a>
                                    </h4>
                                </div>
                                <div className="side_flex mb-5">
                                    <div className="side_flex_first">
                                        <span className="single_job_location">Megrio Tech</span>
                                    </div>
                                </div>

                                <div className="jobs_info">
                                    <ul>
                                        <li><i className="ti-location-pin"></i>Dhaka, BD</li>
                                        <li className="job_type part_time"><i className="ti-briefcase"></i>Part Time</li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="single_job_box style_4">

                                <div className="side_flex_inline mb-3">
                                    <div className="side_flex_first">
                                        <div className="employer_thumb">
                                            <img src="/assets/img/c-3.png" className="img-fluid" alt="" />
                                        </div>
                                    </div>
                                </div>

                                <div className="single_job_title">
                                    <h4><a href="job-detail.html">Quality Assurance Manager AIRTEL Chandigarh, INDIA,
                                            160003</a></h4>
                                </div>
                                <div className="side_flex mb-5">
                                    <div className="side_flex_first">
                                        <span className="single_job_location">Highpole Tech</span>
                                    </div>
                                </div>

                                <div className="jobs_info">
                                    <ul>
                                        <li><i className="ti-location-pin"></i>Delhi, India</li>
                                        <li className="job_type full_time"><i className="ti-briefcase"></i>Full Time</li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="single_job_box style_4">

                                <div className="side_flex_inline mb-3">
                                    <div className="side_flex_first">
                                        <div className="employer_thumb">
                                            <img src="/assets/img/c-4.png" className="img-fluid" alt="" />
                                        </div>
                                    </div>
                                </div>

                                <div className="single_job_title">
                                    <h4><a href="job-detail.html">Software Developer Protective Corporation, Birmingham</a>
                                    </h4>
                                </div>
                                <div className="side_flex mb-5">
                                    <div className="side_flex_first">
                                        <span className="single_job_location">Bingolia</span>
                                    </div>
                                </div>

                                <div className="jobs_info">
                                    <ul>
                                        <li><i className="ti-location-pin"></i>Paris, France</li>
                                        <li className="job_type contract"><i className="ti-briefcase"></i>Contract</li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="single_job_box style_4">

                                <div className="side_flex_inline mb-3">
                                    <div className="side_flex_first">
                                        <div className="employer_thumb">
                                            <img src="/assets/img/c-5.png" className="img-fluid" alt="" />
                                        </div>
                                    </div>
                                </div>

                                <div className="single_job_title">
                                    <h4><a href="job-detail.html">Full Stack Software Developer Kemper Pvt Ltd,
                                            Birmingham</a></h4>
                                </div>
                                <div className="side_flex mb-5">
                                    <div className="side_flex_first">
                                        <span className="single_job_location">Doodle Drive</span>
                                    </div>
                                </div>

                                <div className="jobs_info">
                                    <ul>
                                        <li><i className="ti-location-pin"></i>Dhaka, BD</li>
                                        <li className="job_type part_time"><i className="ti-briefcase"></i>Full Time</li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="single_job_box style_4">

                                <div className="side_flex_inline mb-3">
                                    <div className="side_flex_first">
                                        <div className="employer_thumb">
                                            <img src="/assets/img/c-6.png" className="img-fluid" alt="" />
                                        </div>
                                    </div>
                                </div>

                                <div className="single_job_title">
                                    <h4><a href="job-detail.html">Senior Software Developer Hcl Pvt Ltd Hazelwood, MO
                                            63042</a></h4>
                                </div>
                                <div className="side_flex mb-5">
                                    <div className="side_flex_first">
                                        <span className="single_job_location">Teclo Soft</span>
                                    </div>
                                </div>

                                <div className="jobs_info">
                                    <ul>
                                        <li><i className="ti-location-pin"></i>Canada, USA</li>
                                        <li className="job_type internship"><i className="ti-briefcase"></i>Internship</li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </section>

            <section className="gray-light">
                <div className="container">

                    <div className="row justify-content-center">
                        <div className="col-lg-7 col-md-9">
                            <div className="sec-heading">
                                <h2>Popular Jobs <span className="theme-cl-2">Category</span></h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">

                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="small-category-2">

                                <div className="small-category-2-thumb themes-light">
                                    <a href="search.html"><i className="ti-hummer"></i></a>
                                </div>
                                <div className="sc-2-detail">
                                    <h5 className="sc-jb-title"><a href="search.html">Construction / Facilities</a></h5>
                                    <span>6 new job</span>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="small-category-2">

                                <div className="small-category-2-thumb themes-light">
                                    <a href="search.html"><i className="ti-money"></i></a>
                                </div>
                                <div className="sc-2-detail">
                                    <h5 className="sc-jb-title"><a href="search.html">Account / Finance</a></h5>
                                    <span>10 new job</span>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="small-category-2">

                                <div className="small-category-2-thumb themes-light">
                                    <a href="search.html"><i className="ti-headphone"></i></a>
                                </div>
                                <div className="sc-2-detail">
                                    <h5 className="sc-jb-title"><a href="search.html">Telecommunications</a></h5>
                                    <span>12 new job</span>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="small-category-2">

                                <div className="small-category-2-thumb themes-light">
                                    <a href="search.html"><i className="ti-heart-broken"></i></a>
                                </div>
                                <div className="sc-2-detail">
                                    <h5 className="sc-jb-title"><a href="search.html">Healthcare</a></h5>
                                    <span>6 new job</span>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="small-category-2">

                                <div className="small-category-2-thumb themes-light">
                                    <a href="search.html"><i className="ti-desktop"></i></a>
                                </div>
                                <div className="sc-2-detail">
                                    <h5 className="sc-jb-title"><a href="search.html">Designing &amp; Multimedia</a></h5>
                                    <span>08 new job</span>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="small-category-2">

                                <div className="small-category-2-thumb themes-light">
                                    <a href="search.html"><i className="ti-brush-alt"></i></a>
                                </div>
                                <div className="sc-2-detail">
                                    <h5 className="sc-jb-title"><a href="search.html">Education Training</a></h5>
                                    <span>6 new job</span>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="small-category-2">

                                <div className="small-category-2-thumb themes-light">
                                    <a href="search.html"><i className="ti-car"></i></a>
                                </div>
                                <div className="sc-2-detail">
                                    <h5 className="sc-jb-title"><a href="search.html">Automotive Jobs</a></h5>
                                    <span>07 new job</span>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="small-category-2">

                                <div className="small-category-2-thumb themes-light">
                                    <a href="search.html"><i className="ti-bar-chart-alt"></i></a>
                                </div>
                                <div className="sc-2-detail">
                                    <h5 className="sc-jb-title"><a href="search.html">Banking Jobs</a></h5>
                                    <span>12 new job</span>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="mt-3 text-center">
                                <a href="#" className="_browse_more-2 light">Browse More Categories</a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="pb-0">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-lg-5 col-md-6">
                            <img src="/assets/img/edu_2.png" className="img-fluid" alt="" />
                        </div>

                        <div className="col-lg-7 col-md-6">
                            <div className="_setup_process">
                                <h2>Pecozo Installation <span className="theme-cl-2">Process</span></h2>
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                    voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                                    occaecati cupiditate non provident, similique sunt in culpa qui officia</p>
                            </div>
                            <div className="row">

                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="yel098_7uw">
                                        <div className="ye_lk23">
                                            <i className="ti-package"></i>
                                        </div>
                                        <div className="yel_7bcx">
                                            <h4>Block-Based Theme</h4>
                                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                                praesentium.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="yel098_7uw">
                                        <div className="ye_lk23">
                                            <i className="ti-mouse-alt"></i>
                                        </div>
                                        <div className="yel_7bcx">
                                            <h4>One-click Data Import</h4>
                                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                                praesentium.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="yel098_7uw">
                                        <div className="ye_lk23">
                                            <i className="ti-layers"></i>
                                        </div>
                                        <div className="yel_7bcx">
                                            <h4>Clean Performance</h4>
                                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                                praesentium.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="yel098_7uw">
                                        <div className="ye_lk23">
                                            <i className="ti-mobile"></i>
                                        </div>
                                        <div className="yel_7bcx">
                                            <h4>Mobile & AMP Friendly</h4>
                                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                                praesentium.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-lg-6 col-md-6">
                            <div className="_setup_process">
                                <h2>Download App Free App For <span className="theme-cl-2">Android And IPhone</span></h2>
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                    voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                                    occaecati cupiditate non provident, similique sunt in culpa qui officia</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                            </div>
                            <div className="btn-box clearfix mt-5">
                                <a href="index.html" className="download-btn play-store">
                                    <i className="fa fa-android"></i>
                                    <span>Download on</span>
                                    <h3>Google Play</h3>
                                </a>

                                <a href="index.html" className="download-btn app-store">
                                    <i className="fa fa-apple"></i>
                                    <span>Download on</span>
                                    <h3>App Store</h3>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <img src="/assets/img/app.png" className="img-fluid" alt="" />
                        </div>

                    </div>
                </div>
            </section>

            <section className="image-bg text-center" style={{background:'#353535 url(assets/img/banner-tag.jpg)'}} data-overlay="7">
                <div className="container">

                    <div className="row justify-content-center">
                        <div className="col-lg-7 col-md-10 text-center">
                            <div className="sec-heading center">
                                <h2 className="text-light">Best In Canada</h2>
                                <h3 className="text-light">Visit The Best Job Portal in New York</h3>
                                <p className="text-light">At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                    blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                                    excepturi sint occaecati cupiditate non provident</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="counter-link">
                                <a href="#" className="btn btn-counter-light">Browse Listings</a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="min-sec">
                <div className="container">

                    <div className="row justify-content-center">
                        <div className="col-lg-7 col-md-9">
                            <div className="sec-heading">
                                <h2>Featured & Top <span className="theme-cl-2">Services</span></h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="ser_110">
                                <div className="ser_110_thumb">
                                    <a href="service-detail.html" className="ser_100_link">
                                        <img src="/assets/img/co-2.jpg" className="img-fluid" alt="" />
                                    </a>
                                </div>
                                <div className="ser_110_footer bott">
                                    <div className="_110_foot_left">
                                        <div className="_autho098">
                                            <img src="/assets/img/team-1.jpg" className="img-fluid circle" alt="" />
                                            <img src="/assets/img/verify.svg" className="verified" width="12" alt="" />
                                        </div>
                                        <div className="_autho097">
                                            <h5><a href="author-detail.html">Admin User</a></h5>
                                            <span>0 Order in Queue<span></span></span>
                                        </div>
                                    </div>
                                    <div className="_110_foot_right">
                                        <div className="_oi0po_like">
                                            <a href="javascript:void(0);"><i className="fa fa-heart mr-1"></i>Save</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="ser_110_caption">
                                    <div className="ser_rev098">
                                        <i className="fa fa-star filled"></i>
                                        <i className="fa fa-star filled"></i>
                                        <i className="fa fa-star filled"></i>
                                        <i className="fa fa-star filled"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="ser_title098">
                                        <h4 className="_ser_title"><a href="service-detail.html">Looking To Hire Graphic
                                                Designer For UI Component </a></h4>
                                    </div>
                                    <div className="_oi0po"><i className="fa fa-bolt"></i>From<strong
                                            className="theme-cl">$140.00</strong></div>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="ser_110">
                                <div className="ser_110_thumb">
                                    <a href="service-detail.html" className="ser_100_link">
                                        <img src="/assets/img/co-3.jpg" className="img-fluid" alt="" />
                                    </a>
                                </div>
                                <div className="ser_110_footer bott">
                                    <div className="_110_foot_left">
                                        <div className="_autho098">
                                            <img src="/assets/img/team-5.jpg" className="img-fluid circle" alt="" />
                                            <img src="/assets/img/verify.svg" className="verified" width="12" alt="" />
                                        </div>
                                        <div className="_autho097">
                                            <h5><a href="author-detail.html">Admin User</a></h5><span>0 Order in
                                                Queue<span></span></span>
                                        </div>
                                    </div>
                                    <div className="_110_foot_right">
                                        <div className="_oi0po_like"><a href="javascript:void(0);"><i
                                                    className="fa fa-heart mr-1"></i>Save</a></div>
                                    </div>
                                </div>
                                <div className="ser_110_caption">
                                    <div className="ser_rev098">
                                        <i className="fa fa-star filled"></i>
                                        <i className="fa fa-star filled"></i>
                                        <i className="fa fa-star filled"></i>
                                        <i className="fa fa-star filled"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="ser_title098">
                                        <h4 className="_ser_title"><a href="service-detail.html">Need UI/UX Developer for My
                                                Company</a></h4>
                                    </div>
                                    <div className="_oi0po"><i className="fa fa-bolt"></i>From<strong
                                            className="theme-cl">$160.00</strong></div>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="ser_110">
                                <div className="ser_110_thumb">
                                    <a href="service-detail.html" className="ser_100_link">
                                        <img src="/assets/img/co-4.jpg" className="img-fluid" alt="" />
                                    </a>
                                </div>
                                <div className="ser_110_footer bott">
                                    <div className="_110_foot_left">
                                        <div className="_autho098">
                                            <img src="/assets/img/team-4.jpg" className="img-fluid circle" alt="" />
                                            <img src="/assets/img/verify.svg" className="verified" width="12" alt="" />
                                        </div>
                                        <div className="_autho097">
                                            <h5><a href="author-detail.html">Admin User</a></h5><span>0 Order in
                                                Queue<span></span></span>
                                        </div>
                                    </div>
                                    <div className="_110_foot_right">
                                        <div className="_oi0po_like"><a href="javascript:void(0);"><i
                                                    className="fa fa-heart mr-1"></i>Save</a></div>
                                    </div>
                                </div>
                                <div className="ser_110_caption">
                                    <div className="ser_rev098">
                                        <i className="fa fa-star filled"></i>
                                        <i className="fa fa-star filled"></i>
                                        <i className="fa fa-star filled"></i>
                                        <i className="fa fa-star filled"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="ser_title098">
                                        <h4 className="_ser_title"><a href="service-detail.html">HTMl To Drupal Integration
                                                with Latest Version</a></h4>
                                    </div>
                                    <div className="_oi0po"><i className="fa fa-bolt"></i>From<strong
                                            className="theme-cl">$165.00</strong></div>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="ser_110">
                                <div className="ser_110_thumb">
                                    <a href="service-detail.html" className="ser_100_link">
                                        <img src="/assets/img/co-5.jpg" className="img-fluid" alt="" />
                                    </a>
                                </div>
                                <div className="ser_110_footer bott">
                                    <div className="_110_foot_left">
                                        <div className="_autho098">
                                            <img src="/assets/img/team-3.jpg" className="img-fluid circle" alt="" />
                                            <img src="/assets/img/verify.svg" className="verified" width="12" alt="" />
                                        </div>
                                        <div className="_autho097">
                                            <h5><a href="author-detail.html">Admin User</a></h5><span>0 Order in
                                                Queue<span></span></span>
                                        </div>
                                    </div>
                                    <div className="_110_foot_right">
                                        <div className="_oi0po_like"><a href="javascript:void(0);"><i
                                                    className="fa fa-heart mr-1"></i>Save</a></div>
                                    </div>
                                </div>
                                <div className="ser_110_caption">
                                    <div className="ser_rev098">
                                        <i className="fa fa-star filled"></i>
                                        <i className="fa fa-star filled"></i>
                                        <i className="fa fa-star filled"></i>
                                        <i className="fa fa-star filled"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="ser_title098">
                                        <h4 className="_ser_title"><a href="service-detail.html">Magento02 Instalation with
                                                composer live Mega.</a></h4>
                                    </div>
                                    <div className="_oi0po"><i className="fa fa-bolt"></i>From<strong
                                            className="theme-cl">$170.00</strong></div>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="ser_110">
                                <div className="ser_110_thumb">
                                    <a href="service-detail.html" className="ser_100_link">
                                        <img src="/assets/img/co-6.jpg" className="img-fluid" alt="" />
                                    </a>
                                </div>
                                <div className="ser_110_footer bott">
                                    <div className="_110_foot_left">
                                        <div className="_autho098">
                                            <img src="/assets/img/team-2.jpg" className="img-fluid circle" alt="" />
                                            <img src="/assets/img/verify.svg" className="verified" width="12" alt="" />
                                        </div>
                                        <div className="_autho097">
                                            <h5><a href="author-detail.html">Admin User</a></h5><span>0 Order in
                                                Queue<span></span></span>
                                        </div>
                                    </div>
                                    <div className="_110_foot_right">
                                        <div className="_oi0po_like"><a href="javascript:void(0);"><i
                                                    className="fa fa-heart mr-1"></i>Save</a></div>
                                    </div>
                                </div>
                                <div className="ser_110_caption">
                                    <div className="ser_rev098">
                                        <i className="fa fa-star filled"></i>
                                        <i className="fa fa-star filled"></i>
                                        <i className="fa fa-star filled"></i>
                                        <i className="fa fa-star filled"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="ser_title098">
                                        <h4 className="_ser_title"><a href="service-detail.html">Looking To Hire HTML Into
                                                WordPress Convertor Valuem</a></h4>
                                    </div>
                                    <div className="_oi0po"><i className="fa fa-bolt"></i>From<strong
                                            className="theme-cl">$160.00</strong></div>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="ser_110">
                                <div className="ser_110_thumb">
                                    <a href="service-detail.html" className="ser_100_link">
                                        <img src="/assets/img/co-7.jpg" className="img-fluid" alt="" />
                                    </a>
                                </div>
                                <div className="ser_110_footer bott">
                                    <div className="_110_foot_left">
                                        <div className="_autho098">
                                            <img src="/assets/img/team-1.jpg" className="img-fluid circle" alt="" />
                                            <img src="/assets/img/verify.svg" className="verified" width="12" alt="" />
                                        </div>
                                        <div className="_autho097">
                                            <h5><a href="author-detail.html">Admin User</a></h5><span>0 Order in
                                                Queue<span></span></span>
                                        </div>
                                    </div>
                                    <div className="_110_foot_right">
                                        <div className="_oi0po_like"><a href="javascript:void(0);"><i
                                                    className="fa fa-heart mr-1"></i>Save</a></div>
                                    </div>
                                </div>
                                <div className="ser_110_caption">
                                    <div className="ser_rev098">
                                        <i className="fa fa-star filled"></i>
                                        <i className="fa fa-star filled"></i>
                                        <i className="fa fa-star filled"></i>
                                        <i className="fa fa-star filled"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="ser_title098">
                                        <h4 className="_ser_title"><a href="service-detail.html">Looking To Hire HTML Into
                                                Joomla Convertor Level</a></h4>
                                    </div>
                                    <div className="_oi0po"><i className="fa fa-bolt"></i>From<strong
                                            className="theme-cl">$172.00</strong></div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="light-w">
                <div className="container">

                    <div className="row justify-content-center">
                        <div className="col-lg-7 col-md-9">
                            <div className="sec-heading">
                                <h2>What People <span className="theme-cl-2">Saying</span></h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="owl-carousel owl-theme middle-arrow-hover" id="theme-slide">

                                <div className="item">
                                    <div className="smart-testimonials">
                                        <div className="smart-testi-thumb">
                                            <img src="/assets/img/r-1.jpg" className="img-fluid" alt="" />
                                            <span className="cipt bg-success"><i className="fa fa-quote-left"></i></span>
                                        </div>
                                        <div className="smart-testimonials-content">
                                            <div className="smart-tes-content">
                                                <p>At vero eos et accusamus et iusto odiopri dignissimos ducimus qui
                                                    expedita distinctio praesentium voluptatum.</p>
                                            </div>
                                            <div className="st-author-info">
                                                <h4 className="st-author-title">Adam Gilkrist</h4>
                                                <span className="st-author-subtitle theme-cl">CEO & Founder</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="smart-testimonials">
                                        <div className="smart-testi-thumb">
                                            <img src="/assets/img/r-2.jpg" className="img-fluid" alt="" />
                                            <span className="cipt bg-purple"><i className="fa fa-quote-left"></i></span>
                                        </div>
                                        <div className="smart-testimonials-content">
                                            <div className="smart-tes-content">
                                                <p>At vero eos et accusamus et iusto odiopri dignissimos ducimus qui
                                                    expedita distinctio praesentium voluptatum.</p>
                                            </div>
                                            <div className="st-author-info">
                                                <h4 className="st-author-title">Lilly Wikdoner</h4>
                                                <span className="st-author-subtitle theme-cl">Content Writer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="smart-testimonials">
                                        <div className="smart-testi-thumb">
                                            <img src="/assets/img/r-3.jpg" className="img-fluid" alt="" />
                                            <span className="cipt bg-danger"><i className="fa fa-quote-left"></i></span>
                                        </div>
                                        <div className="smart-testimonials-content">
                                            <div className="smart-tes-content">
                                                <p>At vero eos et accusamus et iusto odiopri dignissimos ducimus qui
                                                    expedita distinctio praesentium voluptatum.</p>
                                            </div>
                                            <div className="st-author-info">
                                                <h4 className="st-author-title">Subhas Rajpoot</h4>
                                                <span className="st-author-subtitle theme-cl">Team Leader</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="smart-testimonials">
                                        <div className="smart-testi-thumb">
                                            <img src="/assets/img/r-4.jpg" className="img-fluid" alt="" />
                                            <span className="cipt bg-primary"><i className="fa fa-quote-left"></i></span>
                                        </div>
                                        <div className="smart-testimonials-content">
                                            <div className="smart-tes-content">
                                                <p>At vero eos et accusamus et iusto odiopri dignissimos ducimus qui
                                                    expedita distinctio praesentium voluptatum.</p>
                                            </div>
                                            <div className="st-author-info">
                                                <h4 className="st-author-title">Pooja Mithali</h4>
                                                <span className="st-author-subtitle theme-cl">Graphic Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="min-sec">
                <div className="container">

                    <div className="row justify-content-center">
                        <div className="col-lg-7 col-md-9">
                            <div className="sec-heading">
                                <h2>Latest Updates & News</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="blog-wrap-grid">

                                <div className="blog-thumb">
                                    <a href="blog-detail.html">
                                        <img src="/assets/img/b-1.jpg" className="img-fluid" alt="" />
                                    </a>
                                </div>

                                <div className="blog-info">
                                    <span className="post-date">By Shilpa Sheri</span>
                                </div>

                                <div className="blog-body">
                                    <h4 className="bl-title"><a href="blog-detail.html">Why people choose listio for own
                                            properties</a></h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore. </p>
                                </div>

                                <div className="blog-cates">
                                    <ul>
                                        <li><a href="#" className="blog-cates-list style-4">Health</a></li>
                                        <li><a href="#" className="blog-cates-list style-3">Business</a></li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="blog-wrap-grid">

                                <div className="blog-thumb">
                                    <a href="blog-detail.html">
                                        <img src="/assets/img/b-2.jpg" className="img-fluid" alt="" />
                                    </a>
                                </div>

                                <div className="blog-info">
                                    <span className="post-date">By Shaurya</span>
                                </div>

                                <div className="blog-body">
                                    <h4 className="bl-title"><a href="blog-detail.html">List of benifits and impressive listeo
                                            services</a></h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore. </p>
                                </div>

                                <div className="blog-cates">
                                    <ul>
                                        <li><a href="#" className="blog-cates-list style-1">Banking</a></li>
                                        <li><a href="#" className="blog-cates-list style-5">Stylish</a></li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="blog-wrap-grid">

                                <div className="blog-thumb">
                                    <a href="blog-detail.html">
                                        <img src="/assets/img/b-3.jpg" className="img-fluid" alt="" />
                                    </a>
                                </div>

                                <div className="blog-info">
                                    <span className="post-date">By Admin K.</span>
                                </div>

                                <div className="blog-body">
                                    <h4 className="bl-title"><a href="blog-detail.html">What people says about listio
                                            properties</a></h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore. </p>
                                </div>

                                <div className="blog-cates">
                                    <ul>
                                        <li><a href="#" className="blog-cates-list style-1">Fashion</a></li>
                                        <li><a href="#" className="blog-cates-list style-2">Wedding</a></li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </section>

            <section className="call-to-act" style={{background:'#0b85ec url(assets/img/landing-bg.png) no-repeat'}}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 col-md-8">
                            <div className="clt-caption text-center mb-4">
                                <h2 className="text-light">Subscribe Now!</h2>
                                <p className="text-light">Simple pricing plans. Unlimited web maintenance service</p>
                            </div>
                            <div className="inner-flexible-box subscribe-box">
                                <div className="input-group">
                                    <input type="text" className="form-control large" placeholder="Enter your mail here" />
                                    <button aria-label='MCISME' className="btn btn-subscribe bg-dark" type="button">
                                        <i className="fa fa-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}
