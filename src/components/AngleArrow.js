import React, {useState}  from 'react'

const styles={
    transition: '0.3s ease-out'
}

export default function AngleArrow({img, children, click,color}) {
    const [anim, setAnim] = useState(0);
    return (
        <div className='d-flex align-items-center sidebar_button' 
            onClick={()=> {
                click(); 
                setAnim(anim <= 0 ? 90: 0);
            }}
            style={{backgroundColor:color}}
        >
                <img src={img} alt="Dashboard Icon"/>
                <span className="sidebar_txt">{children}</span>
                <div style={{alignItems: 'flex-end', width:'100%', justifyContent: 'flex-end', display:'flex' }}>
                    <img 
                        src='/Images/angle_right.png' 
                        alt='angle_right'
                        style={{...styles, transform: `rotate(${anim}deg)`, 
                            height: 15,
                            width: 15,
                        }}/>
                </div>
        </div>
    )
    
}
