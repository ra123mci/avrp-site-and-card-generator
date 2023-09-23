import { useEffect, useState } from 'react'
import { useForm, usePage } from '@inertiajs/react'
import { PageProps } from '@/types';
import AppLayout from '@/Layouts/AppLayout';
import { ToastContainer, toast } from 'react-toastify';
import DataPaginator from '@/Components/DataPaginator';

interface cardKey {
    state:'used'|'free'|'all',
    key:string
}

export default function Welcome({ keys, auth }: PageProps<{ keys:cardKey[] }>) {

    const { csrf_token } = usePage().props;
    const [wiewCardKey, setWiewCardKey] = useState('all');
    const [filter, setFilter] = useState('');

    const [allPageData, setAllPageData] = useState<any[]>(keys);
    const [currentPageData, setCurrentPageData] = useState<any[]>(allPageData.slice(0, 20));

    const handlePaginate = (paginatedData: any[]) => {
        setCurrentPageData(paginatedData);
    };

    const { data, setData, errors, post, reset, processing, recentlySuccessful } = useForm({
        key_encrypt: '', key_number: 1, _token: csrf_token,
    })
    
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post(route('admin.keys.store'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => { let i=1
                for (const [key, error] of Object.entries(errors)) {
                    i++; setTimeout(() => toast.error(error), 300 * i); // Delay = 500ms * index (key)
                }
            },
        });
    }
    
    const copying = (text:string) => {
        const tempInput = document.createElement('input');
        tempInput.value = text;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        toast.success('Copy Success...');
    }

    useEffect(() => {
        const data = keys.filter(Key => !filter || Key.key.toLowerCase().includes(filter.toLowerCase()));
        setAllPageData(data); setCurrentPageData(data.slice(0, 20))
    }, [filter, keys])

    return (
        <AppLayout user={auth.user}>
            <ToastContainer />
            {/* ============================ Main Section Start ================================== */}
			<section className="gray-bg">
				<div className="container">
					<div className="row">
						
						<div className="col-lg-4 col-md-12 col-sm-12">
							<div className="simple-sidebar sm-sidebar">							
							
								<div className="search-sidebar_header">
									<h4 className="ssh_heading">Generate a new Keys</h4>
									<a href="javascript:void(0);" className="clear_all">Clear All</a>
                                    <a href="#search_open" data-toggle="collapse" aria-expanded="false" role="button" className="collapsed _filter-ico"><i className="fa fa-sliders"></i></a>
								</div>
								
								<form className="sidebar-widgets miz_show" id="search_open" data-parent="#search_open" onSubmit={handleSubmit}>
									
									<div className="search-inner p-0">
										
										<div className="filter-search-box pb-0 d-flex justify-content-between">
											<div className="form-group">
												<input type="text" className="form-control" onChange={e => setData('key_encrypt', e.target.value.length <= 6 ? e.target.value : data.key_encrypt)} value={data.key_encrypt} placeholder="Encrypted Key" min={3} max={12} />
											</div>
											<div className="form-group">
												<input type="number" className="form-control" onChange={e => {
                                                    const value = parseInt(e.target.value);
                                                    setData('key_number', value > 1_000_000_000 ? 1_000_000_000 : value)
                                                }} value={data.key_number} placeholder="Generation number" min={1} max={1_000_000_000} />
											</div>
										</div>
										
										<div className="form-group filter_button pt-2">
											<button type="submit" className="btn btn btn-theme-2 rounded full-width">Generate</button>
										</div>
									</div>							
								</form>
							</div>
						</div>
						
						<div className="col-lg-8 col-md-12 col-sm-12">
							<div className="row">
								<div className="col-lg-12 col-md-12 col-sm-12">
									<div className="_filt_tag786">
										<div className="_tag782">
											<div className="_tag780">{keys.length} Keys</div>
										</div>
										<div className="_tag785">
                                            <div className="_g78juy mx-3 d-flex w-100">
                                                <input aria-label='filter data' type="search" value={filter} onChange={e => setFilter(e.target.value)} className='form-control w-100' />
                                            </div>									
                                            <div className="_g78juy">
												<select value={wiewCardKey} onChange={e => setWiewCardKey(e.target.value)} className="w-auto form-control" aria-label='wiewCardKey'>
													<option value={'free'} >Free Keys</option>
													<option value={'used'} >Used Keys</option>
													<option value={'all'} >All Keys</option>
												</select>
											</div>									
										</div>
									</div>
								</div>
							</div>
							
							<div className="row">
                                {currentPageData.map((cardKey, index) => {return (wiewCardKey == cardKey.state || wiewCardKey == 'all') &&
                                    <div key={index} className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="job_grid_02 shadow_0">
                                            { cardKey.state == 'free' 
                                                ?  <div className="jb_types fulltime">Free Key</div>
                                                : <div className="jb_types internship">Used Key</div>
                                            }
                                            <div className="jb_grid_01_caption p-5">
                                                <h1 className="_jb_title"><a onClick={e => copying(cardKey.key)} href="#">{cardKey.key}</a></h1>
                                            </div>
                                        </div>
                                    </div>
                                })}
						    </div>
                            <div className="row">
                                <DataPaginator data={allPageData} onPaginate={handlePaginate} />
							</div>
						</div>
						
					</div>
				</div>
			</section>
			{/* ============================ Main Section End ================================== */}
        </AppLayout>
    );
}
