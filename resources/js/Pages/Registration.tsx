import { useState } from 'react'
import { useForm, usePage } from '@inertiajs/react'
import { PageProps } from '@/types';
import AppLayout from '@/Layouts/AppLayout';
import { FormInput, FormMethod, FormSelector, FormTextArea } from '@/Components/Form';
import { ToastContainer, toast } from 'react-toastify';

export default function Registration({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {

    const { csrf_token } = usePage().props
    const [avatar, setAvatar] = useState('')

    let defaultAvatar:File|null = null;

    const { data, setData, errors, post, reset, processing, recentlySuccessful } = useForm({
        first_name:'',
        last_name:'',
        home_name:'',

        gender:'male',
        email:'',
        celphone:'',


        date_of_birth:'',
        place_of_birth:'',

        occupation:'',
        quality:'',

        country:'',
        province:'',
        city:'',
        district:'',
        township:'',
        neighborhood:'',
        address:'',

        bio:'',
        
        avatar:defaultAvatar,
        key:'',

        _method: 'put',
        _token: csrf_token,
    })
    
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post(route('rgistration.set'), {
            preserveScroll: true,
            onSuccess: (success) => {
                toast.success("Enregistrer avec success !")
                setAvatar(''); return reset()
            },
            onError: (errors) => { let i=1
                for (const [key, error] of Object.entries(errors)) {
                    i++; setTimeout(() => toast.error(error), 300 * i) // Delay = 500ms * index (key)
                }
            },
        });
    }

    const HandleChoosedProfile = (e:React.ChangeEvent<HTMLInputElement>) => {
        const pseudoFile = e.target.files;
        if(pseudoFile){
            setData('avatar', pseudoFile[0]); 
            setAvatar(URL.createObjectURL(pseudoFile[0]));
        }
    }

    return (
        <AppLayout user={auth.user}>
            <ToastContainer />

            {/* ============================ Main Section Start ================================== */}
			<section className="pt-0">
				<div className="container overlio-top">
					<div className="row">
						
						
						
						{/* Item Wrap Start */}
						<div className="col-lg-12 col-md-10 col-sm-12">
							<form className="contact_row" onSubmit={handleSubmit}>

								<div className="form_row_box">
									<div className="form_row_header">
										<div className="form_row_header_flex"><img src="/assets/img/email.svg" className="img-fluid" width="45" alt="" /></div>
										<div className="form_row_header_right">
                                            <p>Une fois inscrit, vous reservrez un e-mail pour un message dans <strong>24</strong> heures et pour une modification d'ereur et la confirmation.</p>
										</div>
									</div>
									<div className="form_row_box_body">
                                        <div className="form-row">

                                            <FormMethod method={data._method} />

                                            <FormInput onChange={e => setData('first_name', e.target.value)} label='NOM' value={data.first_name} name='first_name'/>
                                            <FormInput onChange={e => setData('last_name', e.target.value)} label= 'POSTNOM' value={data.last_name} name='last_name'/>
                                            <FormInput onChange={e => setData('home_name', e.target.value)} label='PRENOM' value={data.home_name} name='home_name'/>

                                            <FormSelector onChange={e => setData('gender', e.target.value)} label='GENRE' value={data.gender} name='gender' options={[
                                                {data:'male', text:'Masculin'}, {data:'female', text:'Féminin'}, {data:'other'}
                                            ]}/> <FormInput onChange={e => setData('email', e.target.value)} label='E-mail' value={data.email} name='email'/>
                                            <FormInput onChange={e => setData('celphone', e.target.value)} label='Telephone' value={data.celphone} name='celphone' placeholder='+243 987 654 321'/>

                                            <FormInput onChange={e => setData('date_of_birth', e.target.value)} label='date de naissance' value={data.date_of_birth} name='date_of_birth' type='date'/>
                                            <FormInput onChange={e => setData('place_of_birth', e.target.value)} label='lieu de naissance' value={data.place_of_birth} className='col-lg-8 col-md-12' name='place_of_birth'/>

                                            <FormInput onChange={e => setData('occupation', e.target.value)} value={data.occupation} className='col-lg-8 col-md-12' name='occupation'/>
                                            <FormInput onChange={e => setData('quality', e.target.value)} label='qualite' value={data.quality} className='col-lg-4 col-md-12' name='quality'/>

                                            <FormInput onChange={e => setData('country', e.target.value)} label='pays' value={data.country} name='country'/>
                                            <FormInput onChange={e => setData('province', e.target.value)} label='Province' value={data.province} name='province'/>
                                            <FormInput onChange={e => setData('city', e.target.value)} label='ville' value={data.city} name='city'/>
                                            <FormInput onChange={e => setData('district', e.target.value)} label='Federation' value={data.district} name='district'/>
                                            <FormInput onChange={e => setData('township', e.target.value)} label='section' value={data.township} name='township'/>
                                            <FormInput onChange={e => setData('neighborhood', e.target.value)} label='Cellule' value={data.neighborhood} name='neighborhood'/>
                                            <FormInput onChange={e => setData('address', e.target.value)} label='adresse' value={data.address} className='col-lg-12 col-md-12' name='address'/>
                                            
                                            <div className="col-lg-8 col-md-12">
                                                <FormInput onChange={e => setData('key', e.target.value)} label='code' value={data.key} className='col-lg-12 col-md-12' name='key'/>
                                                <FormTextArea onChange={e => setData('bio', e.target.value)} label='biographie' value={data.bio} className='col-lg-12 col-md-12' name='bio'/>
                                            </div>

                                            <div className="col-lg-4">
                                                <div className="col-lg-12 col-md-12">
                                                    <div className="form-group">
                                                        <label>&nbsp;</label>
                                                        <div className="custom-file">
                                                            <input type="file" name='avatar' required className='d-none' id='avatar' onChange={HandleChoosedProfile} />
                                                            {processing 
                                                                ? <span className="fa fa-spinner fa-spin"></span>
                                                                : <label className="custom-file-label" htmlFor="avatar">Ajouter une photo de profil</label>
                                                            } 
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12 p-3 rounded" style={{height:'200px', 
                                                    backgroundSize: 'contain',
                                                    backgroundColor: '#e6eaf1',
                                                    backgroundRepeat:'no-repeat',
                                                    backgroundPosition:'center',
                                                    backgroundImage: `url("${avatar}")`,
                                                }}></div>
                                            </div>
                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <input type="hidden" required name="specificate_status" value="signin" />
                                                    <button disabled={processing} type="submit" className="btn dark-3">
                                                        {processing ? <><span className="fa fa-spinner fa-spin"></span><span>Traitement en cours...</span></> : <span>Enregistrer</span>}
                                                    </button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
			{/* ============================ Main Section End ================================== */}
        </AppLayout>
    );
}
