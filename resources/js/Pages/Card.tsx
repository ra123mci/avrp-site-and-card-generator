import QRCode from "qrcode.react"

type cardDataType = {
    id: number
    avatar: string
    first_name: string
    last_name: string
    name?:string
    home_name: string
    district: string
    township: string
    neighborhood: string
    quality: string
    address: string
    phone: string
    key: string
}

export default function Card({cardData, cardDate, cardExpire}:{cardData:cardDataType, cardDate:string, cardExpire:string}) {
    const data = {name : cardData.first_name+' '+cardData.last_name, ...cardData}
    const cardSize = 'min-w-[86mm] max-w-[86mm] min-h-[54mm] max-h-[54mm]'

    return (
        <>
            <style>
                {`
                    @page {
                        size: landscape
                    }
                `}
            </style>
            <div className="sans-serif font-[arial] card-zone">
                <div className={`flex bg-cover bg-center ${cardSize} bg-[url(/assets/img/card-front-image.jpg)]`}>   
                    <div className="ml-2 h-auto w-full flex flex-col relative justify-center items-center gap-3">
                        <img className="bg-gray-600 min-w-[2.4cm] max-w-[2.4cm] min-h-[3.2cm] max-h-[3.2cm]" src={`/storage/${data.avatar}`} alt={`Avatar ${data.name}`} />
                        <QRCode value={route('profile', data.key)} />
                    </div>
                    <div className="w-full ml-2 flex flex-col text-[8px] text-xs relative top-2 left-2 leading-none">
                        <span className="data-text-title">Nom</span>
                        <span className="data-text-content">{data.first_name}&nbsp;</span>
                        <span className="data-text-title">Post-nom</span>
                        <span className="data-text-content">{data.last_name}&nbsp;</span>
                        <span className="data-text-title">Prénom</span>
                        <span className="data-text-content">{data.home_name}&nbsp;</span>
                        <span className="data-text-title">Fédération</span>
                        <span className="data-text-content">{data.district}&nbsp;</span>
                        <span className="data-text-title">Section</span>
                        <span className="data-text-content">{data.township}&nbsp;</span>
                        <span className="data-text-title">Cellule</span>
                        <span className="data-text-content">{data.neighborhood}&nbsp;</span>
                        <span className="data-text-title">Qualité</span>
                        <span className="data-text-content">{data.quality}&nbsp;</span>
                        <span className="data-text-title">Matriule</span>
                        <span className="text-[9px] font-bold uppercase text-black sans-serif">{data.key}&nbsp;</span>
                        <span className="text-[9px] pt-1 font-bold sans-serif text-red-500">Expire le {cardExpire}&nbsp;</span>
                    </div>
                    <div className="h-auto w-full flex flex-col relative justify-between items-center gap-3">
                        <img className="bg-gray-600 min-w-[1.7cm] max-w-[1.7cm] min-h-[2cm] max-h-[2cm] mt-[.25cm] small-img-filter rounded" src={`/storage/${data.avatar}`} alt={`Avatar ${data.name}`} />
                        <span className="relative -top-[2.25cm] text-[8px] inlile font-bold text-center text-black sans-serif">Délivré à Kinshasa <br /> le {cardDate}&nbsp;</span>
                    </div>
                </div>
                <div className={`flex bg-cover bg-center ${cardSize} bg-[url(/assets/img/card-back-image.jpg)]`}>   
                    <div className="rounded-xl bg-gray-50 text-bold font-arial-black sans-serif text-black rounded-tr-none h-fit left-5 px-3 relative bottom-0 top-[4.65cm]">
                        N° {String(data.id).padStart(8, '0')}
                    </div>
                </div>
            </div>
        </>
    );
  }
