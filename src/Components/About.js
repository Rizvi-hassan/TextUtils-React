import React, {useState} from  'react'

export default function About() {
    const [myStyle, setMyStyle] = useState({
        // border: '1px solid black',
        background: 'white',
        color: 'black'
        
    });

    const [btnTxt, setBtntxt] = useState('Dark')
    const [btncolor, setBtncolor] = useState('btn btn-dark my-1')

    const toggleDarkMode = () => {
        if (btnTxt === 'Dark'){
            setBtntxt('Light');
            setBtncolor('btn btn-light my-1');
            setMyStyle({
              // border: '1px solid #c3c3c3',
              background: '#1c1c1c',
              color: '#c3c3c3'
            })
        }
        else{
          setBtntxt('Dark');
          setBtncolor('btn btn-dark my-1');
          setMyStyle({
            // border: '1px solid black',
            background: 'white',
            color: 'black'
          })
        }

    };
  return (
    <div >
      <div className="container my-3" style={myStyle}>
            <h1 className="my-3 mx-2"><u>About Us</u></h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" >
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                    Accordion Item #1
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse " data-bs-parent="#accordionExample">
                  <div className="accordion-body" style={myStyle}>
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
                <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" style={myStyle}>
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                    Accordion Item #2
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body" style={myStyle}>
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
                <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                    Accordion Item #3
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body" style={myStyle}>
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
            <button type="button" onClick={toggleDarkMode} class={btncolor}>{btnTxt}</button>
          </div>
    </div>
  )
}
