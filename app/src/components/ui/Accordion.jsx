import { ChevronLeft } from 'lucide-react';
import { useState } from 'react';

const Accordion = (props) => {
    const [closed, setClosed] = useState(true);

    return <div className="w-full h-fit border-b border-b-1 border-[#1c1c2c]/25">
        <button className="w-full py-4" onClick={() => setClosed(!closed)}>
            <div className="flex justify-between w-full items-center gap-4">
                <h1 className='text-left text-lg w-full'>{props.title}</h1>
                <ChevronLeft color='gray' className={`w-4 transition-all ${!closed && "rotate-[-90deg]"}`}/>
            </div>
        </button>
        <div className={`grid overflow-hidden ease-in-out transition-all ${closed ? " grid-rows-[0fr] opacity-0" : `opacity-100 grid-rows-[1fr] pb-4`}`}>
            <div className="overflow-hidden"><div className='p-2'/>{props.body}</div>
        </div>
    </div>
}

export default Accordion;