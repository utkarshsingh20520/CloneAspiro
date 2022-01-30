
import "./css/Services.css"
import rectangle from '../Images/block1.png'
import satellite from '../Images/satellite-dish.png'
import mike from '../Images/mike.png'
import ring from '../Images/ring.png'
import Service from './Servicesc/Service'
import rect2 from '../Images/rect2.png'
import Service2 from './Servicesc/Service2'

function Services() {
    return (
        <div className="container services11">
            <div className="boxservice">
                <div><i class="fa fa-plus plus" style={{color:"#FF7152"}}></i><i class="fa fa-plus plus"></i><i class="fa fa-plus plus"></i><i class="fa fa-plus plus"></i><i class="fa fa-plus plus"></i></div>
                <div><i class="fa fa-plus plus"></i><i class="fa fa-plus plus"></i><i style={{color:"#6246E5"}} class="fa fa-plus plus"></i><i class="fa fa-plus plus"></i><i class="fa fa-plus plus"></i></div>
                <div><i class="fa fa-plus plus"></i><i class="fa fa-plus plus"></i><i class="fa fa-plus plus"></i><i class="fa fa-plus plus"></i><i class="fa fa-plus plus"></i></div>
                <div><i class="fa fa-plus plus"></i><i class="fa fa-plus plus"></i><i class="fa fa-plus plus"></i><i class="fa fa-plus plus"></i></div>
                <div><i class="fa fa-plus plus"></i><i class="fa fa-plus plus"></i><i class="fa fa-plus plus"></i></div>
            </div>
             <div className="services1">
                 <p>CATEGORY</p>
                 <h2>We Offer Best Services</h2>

                 <div className="Servicebox">
                    <div className="row">
                        <div className="col-lg-3 col-sm-12 col-xs-12 blocksse">
                            <Service 
                             img1={rectangle}
                             img2={satellite} 
                             text1={"Calculated Weather"} 
                             text2={"Built wicket longer admire do barton vanity itself do in it."}/>
                        </div>

                        <div className="col-lg-3 col-sm-12 col-xs-12 blocksse">
                             <Service2 />
                        </div>

                        <div className="col-lg-3 col-sm-12 col-xs-12 blocksse">
                        <Service 
                             img1={rectangle}
                             img2={mike} 
                             text1={"Local Events"} 
                             text2={"Barton vanity itself do in it. Preferd to men it engrossed listening."}/>
                        </div>

                        <div className="col-lg-3 col-sm-12 col-xs-12 blocksse">
                        <Service 
                             img1={rect2}
                             img2={ring} 
                             text1={"Customization"} 
                             text2={"We deliver outsourced aviation services for military customers."}/>
                        </div>

                    </div>
                 </div>
             </div>           
        </div>
    );
}

export default Services;
