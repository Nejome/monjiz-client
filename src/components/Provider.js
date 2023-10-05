import {useState} from "react";
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function Provider({provider}) {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <>
            <div className="w-full sm:w-6/12 xl:w-4/12 mt-4 pl-4">
                <div className="card">
                    <div className="px-4 py-4">
                        <div className="flex justify-start">
                            <div className="ml-3">
                                <img className="inline-block w-16 h-16 rounded-full" src={provider.image} alt={provider.user.name}/>
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-green-550">{provider.user.name}</h1>
                                <p className="text-sm">{provider.category.title}</p>
                                <p className="text-xs">{provider.country}</p>
                            </div>
                        </div>
                        <div className="mt-5 pr-5">
                            <h1>{provider.title}</h1>
                        </div>
                        <div className="text-right mt-5">
                            <button onClick={() => setShowDetails(true)} className="btn1 py-1 px-4 text-sm">عرض المزيد</button>
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                isOpen={showDetails}
                shouldCloseOnOverlayClick={true}
                onRequestClose={() => setShowDetails(false)}
                style={{
                    overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(255, 255, 255, 0.75)',
                        display: 'flex',
                        justifyContent: 'center'
                    }
                }}
                className="card w-11/12 lg:w-4/12 absolute top-[10%] mx-auto"
            >
                <div className="px-4 py-4">
                    <div className="flex justify-between items-start">
                        <div className="flex justify-start">
                            <figure className="ml-3">
                                <img className="w-[70px] height-[70px] rounded-full" src={provider.image} alt={provider.user.name}/>
                            </figure>
                            <div className="flex flex-col">
                                <h1 className="text-green-550">{provider.user.name}</h1>
                                <p className="text-sm">{provider.category.title}</p>
                                <p className="text-xs">{provider.country}</p>
                            </div>
                        </div>
                        <button onClick={() => setShowDetails(false)} className="text-2xl"><FontAwesomeIcon icon={faXmark} /></button>
                    </div>
                    <div className="mt-5 pr-5">
                        <h1>{provider.title}</h1>
                        <p className="text-xs">{provider.user.email}</p>
                    </div>
                    <div className="pr-5 mt-3 mb-3">
                        <p className="text-sm">{provider.description}</p>
                    </div>
                </div>
            </Modal>
        </>
    );
}

Provider.prototype = {
    provider: PropTypes.object.isRequired
}