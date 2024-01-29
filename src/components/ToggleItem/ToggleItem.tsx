import React, {useState, MouseEvent} from "react";
import {publicUrl} from "../../util";
import './style.scss'

type Props = {
    clickElement: React.ReactNode;
    toggleElement: React.ReactNode;
};

export default function ToggleItem(props: Props) {
    const { clickElement, toggleElement } = props;

    const [open, setOpen] = useState(false);

    const handleClick = (e: MouseEvent<HTMLDivElement>) => {
        e?.stopPropagation();
        setOpen(!open);
    }

    return (
        <div className={`toggleItem ${open && 'on'}`}>
            <div className='clickElement' onClick={handleClick}>
                <div>
                    {clickElement}
                </div>
                <img className='arrow' src={publicUrl('/image/arrow02.png')} alt='toggle' />
            </div>

            {open && (
                <div className='toggleElement'>
                    {toggleElement}
                </div>
            )}
        </div>
    )
}
