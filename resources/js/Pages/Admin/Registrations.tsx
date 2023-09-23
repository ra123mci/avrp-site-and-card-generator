import { useEffect, useState } from 'react'
import { PageProps } from '@/types';
import AppLayout from '@/Layouts/AppLayout';
import { ToastContainer, toast } from 'react-toastify';
import DataPaginator from '@/Components/DataPaginator';

interface cardKey {
    state:'used'|'free'|'all',
    key:string,
    first_name: string,
    last_name: string,
    district: string|null,
    township: string|null,
    neighborhood: string|null,
}

export default function Welcome({ keys, auth }: PageProps<{ keys:cardKey[] }>) {
    
    const [filter, setFilter] = useState('');
    const [allPageData, setAllPageData] = useState<any[]>(keys);
    const [currentPageData, setCurrentPageData] = useState<any[]>(allPageData.slice(0, 20));

    const handlePaginate = (paginatedData: any[]) => {
        setCurrentPageData(paginatedData);
    }

    useEffect(() => {
        console.log(keys, filter)
        const data = keys.filter(
            Key => !filter 
            || Key.key.toLowerCase().includes(filter.toLowerCase())
            || Key.first_name.toLowerCase().includes(filter.toLowerCase())
            || Key.last_name.toLowerCase().includes(filter.toLowerCase())
            || Key.district?.toLowerCase().includes(filter.toLowerCase())
            || Key.township?.toLowerCase().includes(filter.toLowerCase())
            || Key.neighborhood?.toLowerCase().includes(filter.toLowerCase())
        ) || [];
        setAllPageData(data); setCurrentPageData(data.slice(0, 20))
    }, [filter, keys])

    return (
        <AppLayout user={auth.user}>
            <ToastContainer />
            {/* ============================ Main Section Start ================================== */}
			<section className="gray-bg">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 col-md-12 col-sm-12">
							<div className="row">
								<div className="col-lg-12 col-md-12 col-sm-12">
									<div className="_filt_tag786">
                                            								
										<div className="_tag782">
											<div className="_tag780">{keys.length} Keys</div>
										</div>
										<div className="_tag785">
                                            <div className="_g78juy">
                                                <a aria-label="grid viewer" href="#" className="_ujh_tyr active"><i className="ti-layout-grid2"></i></a>
                                                <a aria-label="list viewer" href="?page=register&_reg_type=LIST" className="_ujh_tyr"><i className="ti-view-list"></i></a>
                                            </div>
                                            <div className="_g78juy mx-3 d-flex w-100">
                                                <input aria-label='filter data' type="search" value={filter} onChange={e => setFilter(e.target.value)} className='form-control w-100' />
                                            </div>									
										</div>
									</div>
								</div>
							</div>
							
							<div className="row">
                                {currentPageData.map((cardKey, index) => (
                                    <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="_freelacers_120 large shadow_0">
                                            <div className="jobs-like">
                                                <label className="toggler toggler-danger">
                                                    <input aria-label='checkbox' type="checkbox" name='checkbox' /><i className="fa fa-heart"></i>
                                                </label>
                                            </div>
                                            <div className="_freelacers_120_thumb">
                                                <img src="/assets/img/verify.svg" className="verified" width="15" alt="" />
                                                <a aria-label='show profile' href="?profile=1">
                                                    <img src={`/storage/${cardKey.avatar}`} className="img-fluid circle" alt="" />
                                                </a>
                                            </div>
                                            <div className="_freelacers_120_caption">
                                                <div className="_freelan_laft"><i className="ti-location-pin mr-1"></i>{cardKey.key}</div>
                                                <h4><a href="?profile=1">{cardKey.first_name} {cardKey.first_name}</a></h4>
                                                <span className="_freel_spec">{cardKey.district||'-'} | {cardKey.township||'-'} | {cardKey.neighborhood||'-'}</span>
                                            </div>
                                            <div className="_freelacers_120_body">
                                                <div className="_freelacers_121_foot">
                                                    <a target="_BLANK" href={route('card', cardKey.key)} className="btn btn-theme light">Carte</a>	
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
						    </div>
                            <div className="row">
                                <DataPaginator data={allPageData} onPaginate={handlePaginate} itemsPerPage={24} />
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* ============================ Main Section End ================================== */}
        </AppLayout>
    );
}
