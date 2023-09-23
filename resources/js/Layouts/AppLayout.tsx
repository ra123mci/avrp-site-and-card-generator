import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, PropsWithChildren, ReactNode, useEffect, FormEventHandler } from 'react';
import { Link, router, useForm, usePage } from '@inertiajs/react';
import { PageProps, User } from '@/types';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import Checkbox from '@/Components/Checkbox';
import PrimaryButton from '@/Components/PrimaryButton';
import { Mcisme } from '@/constamts';

export default function AppLayout({ user, header, canResetPassword = false, children }: PropsWithChildren<{ user?: User, header?: ReactNode, canResetPassword?:boolean }>) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
	const [modal, setModal] = useState<boolean>(false);
	const [modalDisplay, setModalDisplay] = useState<'none'|'block'>('none');

	const { flash } = usePage<PageProps>().props

	const toggleModal = (state:boolean) => {
		if (!state) setTimeout(() => setModalDisplay('none'), 500);
		else setModalDisplay('block'); setModal(state);
	}

	useEffect(() => {
	  if (flash.message) {
		toast(flash.message)
	  }
	}, [flash])

	const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('login'), {
            preserveScroll: true,
            onSuccess: (success) => {
                router.visit('')
            },
            onError: (errors) => { let i=1
                for (const [key, error] of Object.entries(errors)) {
                    i++; setTimeout(() => toast.error(error), 300 * i) // Delay = 500ms * index (key)
                }
            },
        });
    };
  
    return (
		<>
			<div id="main-wrapper">
				<div className="header header-light">
					<div className="container">
						<div className="row">
							<div className="col-lg-12 col-md-12 col-sm-12">
								<nav id="navigation" className="navigation navigation-landscape">
									{ route().has('welcome') && 
										<div className="nav-header">
											<a href={route('welcome')} className={`nav-brand ${route().current('welcome')?'active':''}`} >
												<img src="/assets/img/logo/avrp-logo.jpg" className="logo" alt="" />
											</a> <div className="nav-toggle"></div>
										</div>
									} <div className="nav-menus-wrapper">
										<ul className="nav-menu">
											{ route().has('home') && 
												<li>
													<Link href={route('home')} className={route().current('home')?'active':''} >
														Formulaire
													</Link>
												</li>
											}
										</ul> <ul className="nav-menu nav-menu-social align-to-right">
											{ user ? ( 
												<>
													{ route().has('admin') && <>
														<li>
															<Link href={route('admin.keys')} className={route().current('admin.keys')?'active':''} >
																<i className="fa fa-upload mr-1"></i>Clé d'enregistrement
															</Link>
														</li>
														<li>
															<Link href={route('admin.registrations')} className={route().current('admin.registrations')?'active':''} >
																<i className="ti-user mr-1"></i> Les inscriptions
															</Link>
														</li>
														<li>
															<Link href={route('register')} className={route().current('register')?'active':''} >
																<i className="ti-user mr-1"></i> Ajouter un administrateur
															</Link>
														</li>
													</> } <li className='add-listing nav-submenu-open'>
														<Link href={route('logout')} data-toggle="modal" data-target="#login" method='post'>
															<i className="ti-user mr-1"></i> Se déconnecter
														</Link>
													</li>
												</>
											) : (
												<li className='add-listing nav-submenu-open'>
													<a onClick={e => toggleModal(true)} href="javascript:void(0)" data-toggle="modal" data-target="#login">
														Se connecter
													</a>
												</li>
											)}
										</ul>
									</div>
								</nav>
							</div>
						</div>
					</div>
				</div>
				{/* End Navigation */}
				<div className="clearfix"></div>
				{/* Top header  */}
				
				{/* ============================ Page Title Start================================== */}
				<div className="page-title inner-page pb-0">
					<div className="container">
						<div className="row">
							<div className="col-lg-12 col-md-12">
								
								<h2 className="ipt-title"> ACTION DES VOLONTAIRES POUR LA RELEVE PATRIOTIQUE</h2>
								<span className="ipn-subtitle">L'adhesion au Parti est un acte individual, libre et volontaire qui se materialise par l'achat de sa carte de member. </span>
								
							</div>
						</div>
					</div>
					<div className="ht-80"></div>
				</div>
				{/* ============================ Page Title End ================================== */}
				
				{children}

				{/* ============================ Call To Action Start ================================== */}
				{/* <section className="call-to-act" style={{background: "#0b85ec url(assets/img/landing-bg.png) no-repeat"}}>
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
										<button aria-label='Submit' className="btn btn-subscribe bg-dark" type="button"><i className="fa fa-arrow-right"></i></button>
									</div>
								</div>
							</div>				
						</div>
					</div>
				</section> */}
				{/* ============================ Call To Action End ================================== */}
				
				{/* =========================== Footer Start ========================================= */}
				<footer className="dark-footer skin-dark-footer">
					<Mcisme />
				</footer>
				{/* =========================== Footer End ========================================= */}
				
				{/* Log In Modal */}
				<div className={`modal ${modal?'show':'fade'}`} id="login" tabIndex={-1} role="dialog" aria-hidden={!modal||undefined}
					style={{display: modalDisplay, paddingRight: modal?'15px':'', background:"#333A"}} aria-modal={modal||undefined}
					onClick={e => toggleModal(false)}
				> 	<div className="modal-dialog modal-dialog-centered login-pop-form" role="document">
						<div className="modal-content" id="registermodal" onClick={e => e.stopPropagation()}>
							<div className="modal-header">
								<h4>Sign In</h4>
								<button onClick={e => toggleModal(false)} type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i className="ti-close"></i></span></button>
							</div>
							<div className="modal-body">
								<div className="login-form">
									<form onSubmit={submit}>
										<div className="form-group">
											<InputLabel htmlFor="email" value="Email" />
											<TextInput
												id="email"
												type="email"
												name="email"
												value={data.email}
												className={`form-control ${errors.email ? 'is-invalid' : ''}`}
												autoComplete="username"
												isFocused={true}
												onChange={(e) => setData('email', e.target.value)}
											/> <InputError message={errors.email} className="invalid-feedback mt-2" />
										</div>
										<div className="form-group">
											<InputLabel htmlFor="password" value="Password" />
											<TextInput
												id="password"
												type="password"
												name="password"
												value={data.password}
												className={`form-control ${errors.password ? 'is-invalid' : ''}`}
												autoComplete="current-password"
												onChange={(e) => setData('password', e.target.value)}
											/> <InputError message={errors.password} className="invalid-feedback mt-2" />
										</div>
										<div className="mt-4 flex justify-content-between">
											<label className="flex items-center">
												<Checkbox
													name="remember"
													checked={data.remember}
													onChange={(e) => setData('remember', e.target.checked)}
												/>
												<span className="ml-2 text-sm text-gray-600">Remember me</span>
											</label>
											{canResetPassword && (
												<Link
													href={route('password.request')}
													className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
												> Forgot your password?
												</Link>
											)}
										</div>
										<div className="form-group" >
											<PrimaryButton className="btn dark-2 btn-md full-width pop-login" disabled={processing}>
												Log in
											</PrimaryButton>
										</div>
									</form>
								</div>
							</div>
							<div className="modal-footer">
								<div className="mf-link">
									<a href="#"><i className="ti-user"></i> WabTech</a>
								</div>
								<div className="mf-link text-right">
									<a href="#"><i className="ti-user"></i> Mcisme</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* End Modal */}

				{/* Upload Resume */}
				<div className="modal fade" id="upload-resume" tabIndex={-1} role="dialog" aria-labelledby="resumeupload" aria-hidden="true">
					<div className="modal-dialog modal-dialog-centered login-pop-form" role="document">
						<div className="modal-content" id="resumeupload">
							<div className="modal-header">
								<h4>Upload Resume</h4>
								<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i className="ti-close"></i></span></button>
							</div>
							<div className="modal-body">
								
								<div className="login-form">
									<form>
									
										<div className="form-row">
											<div className="col-lg-6 col-md-12">
												<div className="form-group">
													<label>Full Name</label>
													<input type="text" className="form-control" placeholder="Username"/>
												</div>
											</div>
											
											<div className="col-lg-6 col-md-12">
												<div className="form-group">
													<label>E-Mail ID</label>
													<input type="email" className="form-control" placeholder="ucicl@gmail.com"/>
												</div>
											</div>
										</div>
										
										<div className="form-group">
											<label>Paste Your Resume</label>
											<textarea className="form-control ht-150" placeholder="Copy & Paste Resume"></textarea>
										</div>
										
										<div className="form-group">
											<label className="light">doc, docx,pdf,txt,png</label>
											<div className="custom-file">
												<input type="file" className="custom-file-input" id="uploadResume"/>
												<label className="custom-file-label" htmlFor="uploadResume"><i className="ti-link mr-1"></i>Upload Resume</label>
											</div>
										</div>
										
										<div className="form-group">
											<button type="submit" className="btn dark-2 btn-md full-width pop-login">Upload Resume</button>
										</div>
									
									</form>
								</div>
								
							</div>
						</div>
					</div>
				</div>
				{/* Upload Resume		 */}

			</div> <ToastContainer />
		</>
    );
}
